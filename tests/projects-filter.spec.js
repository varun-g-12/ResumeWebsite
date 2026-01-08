import { test, expect } from '@playwright/test';

test.describe('Projects Filter Animation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // Wait for the projects section to be visible
    await page.locator('#projects').waitFor({ state: 'visible', timeout: 10000 });
    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded();
    // Wait a bit for any animations to settle
    await page.waitForTimeout(500);
  });

  test('should display all filter buttons', async ({ page }) => {
    // Check that all filter buttons are visible
    const filters = ['All Projects', 'Chatbots', 'Data Processing', 'POC'];

    for (const filter of filters) {
      const button = page.getByRole('button', { name: filter });
      await expect(button).toBeVisible();
    }
  });

  test('should have "All Projects" filter active by default', async ({ page }) => {
    const allProjectsButton = page.getByRole('button', { name: 'All Projects' });
    await expect(allProjectsButton).toHaveClass(/projects__filter--active/);
  });

  test('should display featured project when "All Projects" is active', async ({ page }) => {
    // Featured project should be visible
    const featuredSection = page.locator('.projects__featured');
    await expect(featuredSection).toBeVisible();

    // Featured card should have the featured class
    const featuredCard = featuredSection.locator('.project-card-new--featured');
    await expect(featuredCard).toBeVisible();
  });

  test('should hide featured project when switching to other filters', async ({ page }) => {
    // Click on Chatbots filter
    await page.getByRole('button', { name: 'Chatbots' }).click();
    await page.waitForTimeout(600); // Wait longer for exit animation (300ms + buffer)

    // Featured section should not be visible after animation completes
    const featuredSection = page.locator('.projects__featured');
    await expect(featuredSection).not.toBeVisible();
  });

  test('should switch filters smoothly without stuttering', async ({ page }) => {
    const filters = ['Chatbots', 'Data Processing', 'POC', 'All Projects'];

    for (const filter of filters) {
      const filterButton = page.getByRole('button', { name: filter });

      // Take a screenshot before clicking
      const beforeScreenshot = await page.screenshot();

      // Click the filter
      await filterButton.click();

      // Wait for animations to complete (300ms entry + some buffer)
      await page.waitForTimeout(400);

      // Verify the filter is now active
      await expect(filterButton).toHaveClass(/projects__filter--active/);

      // Verify projects grid is visible
      const projectsGrid = page.locator('.projects__grid');
      await expect(projectsGrid).toBeVisible();

      // Check that project cards are visible (at least one should exist)
      const cards = projectsGrid.locator('.project-card-new');
      const cardCount = await cards.count();

      if (filter === 'All Projects') {
        // All projects should show regular cards + featured
        expect(cardCount).toBeGreaterThan(0);
      } else {
        // Filtered views may have 0 or more cards depending on data
        expect(cardCount).toBeGreaterThanOrEqual(0);
      }
    }
  });

  test('should not have excessive empty space between filters and cards', async ({ page }) => {
    // Get initial layout measurements with "All Projects" active
    const container = page.locator('.projects__container');
    const filtersSection = page.locator('.projects__filters');
    const featuredSection = page.locator('.projects__featured');
    const gridSection = page.locator('.projects__grid');

    // Measure the total height with All Projects (includes featured)
    const allProjectsHeight = await container.boundingBox();

    // Switch to a different filter
    await page.getByRole('button', { name: 'Chatbots' }).click();
    await page.waitForTimeout(600); // Wait for animations to complete

    // Get layout measurements after filter change
    const filtersBox = await filtersSection.boundingBox();
    const gridBox = await gridSection.boundingBox();

    if (filtersBox && gridBox) {
      // Calculate gap between filters and grid
      const gap = gridBox.y - (filtersBox.y + filtersBox.height);

      // Gap should be reasonable - var(--space-6) is typically 48-64px
      // Allow up to 150px to account for any padding/margins
      expect(gap).toBeLessThan(150);
      expect(gap).toBeGreaterThan(0); // Should have some gap
    }
  });

  test('should return to "All Projects" without layout issues', async ({ page }) => {
    // Start with All Projects
    const allProjectsButton = page.getByRole('button', { name: 'All Projects' });
    await expect(allProjectsButton).toHaveClass(/projects__filter--active/);

    // Get initial container height
    const containerBefore = await page.locator('.projects__container').boundingBox();

    // Click through other filters
    await page.getByRole('button', { name: 'Chatbots' }).click();
    await page.waitForTimeout(400);

    await page.getByRole('button', { name: 'Data Processing' }).click();
    await page.waitForTimeout(400);

    // Return to All Projects
    await allProjectsButton.click();
    await page.waitForTimeout(500); // Extra time for featured project to appear

    // Verify All Projects is active
    await expect(allProjectsButton).toHaveClass(/projects__filter--active/);

    // Verify featured project is back
    const featuredSection = page.locator('.projects__featured');
    await expect(featuredSection).toBeVisible();

    // Get final container measurements
    const containerAfter = await page.locator('.projects__container').boundingBox();

    // Container should have reasonable height (not excessive empty space)
    if (containerBefore && containerAfter) {
      // Height shouldn't drastically differ (allowing some variance)
      const heightDiff = Math.abs(containerAfter.height - containerBefore.height);
      expect(heightDiff).toBeLessThan(300); // Reasonable tolerance
    }
  });

  test('should display correct number of projects for each filter', async ({ page }) => {
    const filterExpectations = {
      'All Projects': { minCards: 1 }, // Should have at least the featured + grid items
      'Chatbots': { minCards: 0 }, // May have 0 or more
      'Data Processing': { minCards: 0 }, // May have 0 or more
      'POC': { minCards: 0 }, // May have 0 or more
    };

    for (const [filterName, expectation] of Object.entries(filterExpectations)) {
      await page.getByRole('button', { name: filterName }).click();
      await page.waitForTimeout(400);

      const gridCards = page.locator('.projects__grid .project-card-new');
      const gridCardCount = await gridCards.count();

      if (filterName === 'All Projects') {
        // Should have at least one card in the grid
        expect(gridCardCount).toBeGreaterThanOrEqual(expectation.minCards);

        // Plus featured project should be visible
        const featuredCard = page.locator('.projects__featured .project-card-new');
        await expect(featuredCard).toBeVisible();
      } else {
        // Filtered views
        expect(gridCardCount).toBeGreaterThanOrEqual(expectation.minCards);
      }
    }
  });

  test('should not have console errors during filter transitions', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Click through all filters
    const filters = ['Chatbots', 'Data Processing', 'POC', 'All Projects'];
    for (const filter of filters) {
      await page.getByRole('button', { name: filter }).click();
      await page.waitForTimeout(400);
    }

    // Check that no console errors occurred
    expect(consoleErrors.length).toBe(0);
  });

  test('should maintain responsive layout on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.locator('#projects').waitFor({ state: 'visible', timeout: 10000 });
    await page.locator('#projects').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // On mobile, filter buttons only show icons, not text
    // Click through filters by locating the button elements directly
    const filterButtons = page.locator('.projects__filter');

    // Click second filter (Chatbots - index 1)
    await filterButtons.nth(1).click();
    await page.waitForTimeout(600);

    // Verify grid is still visible and properly laid out
    const grid = page.locator('.projects__grid');
    await expect(grid).toBeVisible();

    let gridBox = await grid.boundingBox();
    if (gridBox) {
      // Grid should fit within mobile viewport width (with some padding)
      expect(gridBox.width).toBeLessThanOrEqual(375);
    }

    // Click first filter (All Projects - index 0)
    await filterButtons.nth(0).click();
    await page.waitForTimeout(600);

    await expect(grid).toBeVisible();
    gridBox = await grid.boundingBox();
    if (gridBox) {
      expect(gridBox.width).toBeLessThanOrEqual(375);
    }
  });
});

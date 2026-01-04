# Resume Website Implementation Plan

## Overview
Create a modern, Apple-style resume website for Varun G (GenAI Developer) with smooth scroll effects, minimal design, and easy deployment.

## Technology Stack: Vanilla HTML/CSS/JavaScript

**Why this choice:**
- No build tools or complex setup (beginner-friendly)
- Direct code-to-visual relationship (easy to understand)
- Works perfectly with GitHub Pages (one-click deployment)
- Modern CSS capabilities handle all design needs
- Lightweight and fast-loading

**Libraries (via CDN):**
- AOS.js (Animate On Scroll) - for fade-in animations
- Font Awesome - for social media icons
- Google Fonts - for Apple-like typography

## File Structure

```
/root/ResumeWebsite/
├── index.html              # Main HTML structure with all content
├── css/
│   ├── styles.css         # Core design system, typography, colors
│   ├── animations.css     # Scroll effects & transitions
│   └── responsive.css     # Mobile-first responsive design
├── js/
│   ├── scroll-effects.js  # Custom parallax & scroll interactions
│   └── main.js           # General functionality
├── assets/
│   ├── images/
│   │   └── profile.jpg   # Optional profile photo
│   └── icons/
│       └── favicon.ico   # Browser tab icon
├── docs/
│   └── varun-g.pdf       # Resume PDF (already exists)
└── README.md
```

## Website Sections (in scroll order)

1. **Hero Section** - Full-screen opening
   - Name: "Varun G"
   - Title: "GenAI Developer"
   - Animated tagline from professional summary
   - Parallax background effect
   - Scroll indicator

2. **About/Summary** - Sticky effect
   - Professional summary highlighting 4+ years experience
   - Key achievement: 95% time reduction (GRD project)
   - Location: Bengaluru

3. **Experience** - Timeline with parallax cards
   - Merck Group - GenAI developer (2024-Present)
   - Merck Group - Python developer (2021-2024)
   - Merck Group - Application support engineer (2019-2021)
   - Staggered fade-in animations

4. **Projects Showcase** - Grid layout with sticky headers
   - 6 projects displayed as cards:
     1. GRD (Global Response Document) - highlight 95% efficiency gain
     2. MiNE (Report generation tool)
     3. BrAIn (Breeze AI Navigator)
     4. PACO (Protocol Analysis)
     5. Text to SQL Conversational App
     6. MiNE MCP
   - Each card: name, description, tech stack tags
   - Parallax depth effect on scroll

5. **Skills** - Categorized tags with animations
   - Programming: Python
   - Generative AI: LLM, Prompt engineering, Langchain, Langgraph
   - Cloud & DevOps: AWS, Git, Docker
   - Web Development: Streamlit
   - Project Management: Agile methodologies

6. **Awards** - Highlight cards
   - Be Curious and Innovate Boldly Award - Runner-up (2024)
   - MITC Hackathon - Runner-up (2024)

7. **Education** - Clean timeline
   - M.Sc. Agriculture Statistics, G.K.V.K Bengaluru (2016-2018) - 8.2 CGPA
   - B.Sc. Agriculture, UAS Dharwad (2014-2016) - 7.25 CGPA

8. **Contact/Footer** - Sticky on scroll
   - Email: varungangu1@gmail.com
   - Phone: +91-9731416185
   - Social links: LinkedIn, Medium
   - Download Resume button (links to PDF)

## Apple-Style Scroll Effects

### 1. Parallax Scrolling
- Background elements move slower than foreground (depth effect)
- Custom JavaScript using scroll event listeners
- Applied to hero section and project cards

### 2. Fade-in Animations
- AOS.js library with data attributes: `data-aos="fade-up"`
- Intersection Observer API for performance
- Staggered delays for sequential reveals
- Trigger when 20% of element is visible

### 3. Sticky Sections
- CSS `position: sticky` on section headers
- Sections pin while scrolling, then release
- Combined with scroll-snap for smooth transitions

### 4. Smooth Scrolling
- CSS: `scroll-behavior: smooth`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Animation duration: 0.6-0.8s

## Design System (Apple-inspired)

**Colors:**
- Background: #ffffff (pure white)
- Text primary: #1d1d1f (near-black)
- Text secondary: #6e6e73 (gray)
- Accent: #0071e3 (Apple blue)
- Card backgrounds: #f5f5f7 (subtle gray)
- Borders: #d2d2d7 (ultra-light)

**Typography:**
- Font family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI"
- Heading sizes: 48px+ for h1, generous whitespace
- Line height: 1.6 for readability

**Spacing:**
- Max content width: 1200px (centered)
- Section padding: 100px vertical
- Element margins: 40-80px
- Grid gaps: 40px

**Animation Principles:**
- Subtle movements (20-50px)
- Smooth acceleration curves
- Not overwhelming or distracting

## Hosting: GitHub Pages

**Why GitHub Pages:**
- Free and simple (zero configuration)
- Push code → enable in Settings → live site
- URL: `https://[username].github.io/ResumeWebsite`
- Supports custom domains
- Perfect for static HTML sites

**Deployment Steps:**
1. Push all files to main branch
2. Go to Settings → Pages
3. Select Source: main branch
4. Site goes live automatically

## Implementation Steps

### Phase 1: Foundation
1. Create `index.html` with semantic HTML5 structure
   - All sections with content from resume
   - Meta tags, viewport settings, SEO tags
2. Set up CSS architecture (`styles.css`)
   - Design system CSS variables
   - Base typography and colors
3. Test basic layout in browser

### Phase 2: Styling & Layout
4. Implement section layouts
   - Hero with centered content
   - Experience timeline/cards using CSS Grid
   - Projects grid (2 columns desktop, 1 mobile)
   - Skills tag layout with Flexbox
5. Create `responsive.css`
   - Mobile-first approach
   - Breakpoints: 768px (tablet), 1024px (desktop)
6. Add visual polish
   - Card shadows and borders
   - Hover effects on interactive elements

### Phase 3: Scroll Animations
7. Integrate AOS library via CDN
   - Add `data-aos` attributes to elements
   - Configure animation types and durations
8. Implement custom parallax in `scroll-effects.js`
   - Parallax on hero background
   - Subtle parallax on project cards
9. Add sticky sections with CSS
   - `position: sticky` on headers
   - Scroll-snap for smooth section transitions

### Phase 4: Interactivity
10. Add JavaScript enhancements in `main.js`
    - Intersection Observer for view-based animations
    - Smooth scroll behavior
11. Add contact links and social icons
    - Font Awesome icons via CDN
    - Clickable email, phone, LinkedIn, Medium
    - Download Resume button
12. Optimize performance
    - Compress images
    - Lazy load images below fold

### Phase 5: Testing & Deployment
13. Cross-browser testing
    - Chrome, Firefox, Safari, Edge
    - Mobile Safari (iOS)
14. Accessibility audit
    - Alt text, ARIA labels
    - Keyboard navigation
    - Proper heading hierarchy
15. Deploy to GitHub Pages
    - Push to main branch
    - Enable Pages
    - Verify live site

### Phase 6: Polish
16. Final touches
    - Create favicon
    - Open Graph meta tags for social sharing
    - Update README
17. Gather feedback and iterate

## Critical Files to Create

1. **/root/ResumeWebsite/index.html** - Main structure with all resume content
2. **/root/ResumeWebsite/css/styles.css** - Core design system and layout
3. **/root/ResumeWebsite/css/animations.css** - All scroll effects and transitions
4. **/root/ResumeWebsite/js/scroll-effects.js** - Custom parallax logic
5. **/root/ResumeWebsite/css/responsive.css** - Mobile responsiveness

## Key Features

- Single-page design with smooth scroll navigation
- Light & minimal aesthetic (clean white background)
- Professional presentation of 6 major projects
- Highlight key achievements (95% time reduction, awards)
- Mobile-responsive (mobile-first approach)
- Fast loading and performant
- Easy to maintain and update content
- SEO optimized for discoverability

## Success Criteria

- Beautiful, modern UI matching Apple's aesthetic
- Smooth scroll effects (parallax, fade-in, sticky)
- All resume content displayed professionally
- Mobile responsive and accessible
- Deployed publicly on GitHub Pages
- Easy for Varun to update in the future

## Timeline Estimate

- Phase 1-2: 8-10 hours (HTML structure + CSS styling)
- Phase 3-4: 8-10 hours (Animations + interactivity)
- Phase 5-6: 4-6 hours (Testing + deployment + polish)
- **Total: 20-26 hours** over 5-7 days

Quick MVP possible in 2-3 focused days.

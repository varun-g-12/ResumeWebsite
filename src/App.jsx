import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Varun G</h1>
        <p className="subtitle">GenAI Developer</p>
      </header>

      <main className="main">
        <section className="intro">
          <h2>Welcome</h2>
          <p>
            Deployment test successful! This is a work-in-progress resume website.
          </p>
          <p>
            This site is automatically deployed via GitHub Actions to GitHub Pages.
          </p>
        </section>

        <section className="status">
          <h3>Phase 1: Complete</h3>
          <ul>
            <li>✅ Vite + React project initialized</li>
            <li>✅ GitHub Pages configuration ready</li>
            <li>✅ Basic structure implemented</li>
            <li>🚀 Deployment pipeline operational</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>Bengaluru, India</p>
        <p>
          <a href="https://www.linkedin.com/in/varun-g-1b6757343" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' | '}
          <a href="https://medium.com/@varungangu1" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

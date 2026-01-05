import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Awards from './components/Awards'
import Languages from './components/Languages'

function App() {
  return (
    <div className="app">
      {/* Phase 2: Testing data integration */}
      <div className="phase-banner">
        <p>Phase 2: Data Integration Testing - All components now load data from resume.js</p>
      </div>

      <Hero />

      <main className="main">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Awards />
        <Languages />
      </main>
    </div>
  )
}

export default App

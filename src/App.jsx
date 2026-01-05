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

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import EducationAwards from './components/EducationAwards'
import Languages from './components/Languages'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <div className="navbar-spacer" />
        <Hero />

        <main className="main">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <EducationAwards />
          <Languages />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App

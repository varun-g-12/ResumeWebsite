import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaMediumM, FaGithub } from 'react-icons/fa';
import { HiMail, HiDownload, HiChevronDown } from 'react-icons/hi';
import { basics } from '../data/resume';

function Hero() {
  const roles = [
    'GenAI Developer',
    1500,
    'LLM Specialist',
    1500,
    'AI Solutions Architect',
    1500,
    'Python Developer',
    1500,
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero hero--full">
      {/* Particle Background */}
      <div className="hero__particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${15 + Math.random() * 20}s`,
              '--x-start': `${Math.random() * 100}%`,
              '--y-start': `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid Lines Background */}
      <div className="hero__grid" />

      {/* Content */}
      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Avatar */}
          <motion.div
            className="hero__avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hero__avatar-glow" />
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-placeholder">
              {basics.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>

          {/* Terminal-style Name */}
          <motion.div
            className="hero__name-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="hero__terminal-prompt">&gt;</span>
            <h1 className="hero__name">{basics.name}</h1>
            <span className="hero__cursor" />
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            className="hero__role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero__role-text"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Building AI solutions that transform enterprises
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="hero__cta hero__cta--primary" onClick={scrollToProjects}>
              <span>View Projects</span>
            </button>
            <a
              href="/resume.pdf"
              download="Varun-G-Resume.pdf"
              className="hero__cta hero__cta--secondary"
            >
              <HiDownload />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero__socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href={basics.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={basics.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Medium"
            >
              <FaMediumM />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${basics.email}`}
              className="hero__social-link"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            className="hero__location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="hero__location-dot" />
            <span>{basics.location}, India</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span>Scroll to explore</span>
          <HiChevronDown className="hero__scroll-icon" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

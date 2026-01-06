import { motion } from 'framer-motion';
import {
  FaLinkedinIn,
  FaMediumM,
  FaEnvelope,
  FaChevronUp,
  FaReact
} from 'react-icons/fa';
import { SiVite, SiFramer } from 'react-icons/si';
import { basics } from '../data/resume';

// Navigation links
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

// Social links
const socialLinks = [
  { label: 'LinkedIn', href: basics.linkedin, icon: FaLinkedinIn },
  { label: 'Medium', href: basics.medium, icon: FaMediumM },
  { label: 'Email', href: `mailto:${basics.email}`, icon: FaEnvelope }
];

// Built with technologies
const techStack = [
  { name: 'React', icon: FaReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Framer Motion', icon: SiFramer }
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Section */}
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="footer__name">{basics.name}</h3>
          <p className="footer__tagline">{basics.headline}</p>
        </motion.div>

        <div className="footer__divider" />

        {/* Links Grid */}
        <div className="footer__grid">
          {/* Navigation Column */}
          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="footer__column-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="footer__column-title">Connect</h4>
            <ul className="footer__nav-list">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__nav-link footer__nav-link--social"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="footer__nav-icon" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Built With Column */}
          <motion.div
            className="footer__column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="footer__column-title">Built With</h4>
            <ul className="footer__tech-list">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <li key={tech.name} className="footer__tech-item">
                    <Icon className="footer__tech-icon" />
                    <span>{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="footer__divider" />

        {/* Bottom Section */}
        <div className="footer__bottom">
          <motion.p
            className="footer__copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} {basics.name}. All rights reserved.
          </motion.p>

          <motion.button
            className="footer__back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FaChevronUp />
            <span>Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython,
  SiOpenai,
  SiAmazon,
  SiDocker,
  SiStreamlit,
  SiGit
} from 'react-icons/si';
import { FaLink } from 'react-icons/fa';
import { summary } from '../data/resume';

// Animated counter component
function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'AI Projects' },
  { value: 95, suffix: '%', label: 'Time Saved (GRD)' },
  { value: 2, suffix: '', label: 'Awards Won' },
];

const techStack = [
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiOpenai, name: 'OpenAI', color: '#00D4FF' },
  { icon: FaLink, name: 'Langchain', color: '#00FF88' },
  { icon: SiAmazon, name: 'AWS', color: '#FF9900' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiStreamlit, name: 'Streamlit', color: '#FF4B4B' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
];

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="about__header" variants={itemVariants}>
          <span className="about__label">About Me</span>
          <h2 className="about__title">
            Transforming Ideas into
            <span className="about__title-highlight"> AI Solutions</span>
          </h2>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="about__content">
          {/* Left Column - Avatar/Visual */}
          <motion.div className="about__visual" variants={itemVariants}>
            <div className="about__avatar-wrapper">
              <div className="about__avatar-bg" />
              <div className="about__avatar">
                <span>VG</span>
              </div>
              {/* Floating tech badges around avatar */}
              <div className="about__floating-badge about__floating-badge--1">
                <SiPython />
              </div>
              <div className="about__floating-badge about__floating-badge--2">
                <SiOpenai />
              </div>
              <div className="about__floating-badge about__floating-badge--3">
                <FaLink />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div className="about__text" variants={itemVariants}>
            <p className="about__description">{summary}</p>

            {/* Quick highlights */}
            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">🚀</span>
                <span>Building production-ready AI applications</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">💡</span>
                <span>Expert in RAG pipelines & document processing</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🏆</span>
                <span>Award-winning solutions at enterprise scale</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div className="about__stats" variants={itemVariants}>
          {stats.map((stat, index) => (
            <div key={index} className="about__stat">
              <span className="about__stat-value">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="about__tech" variants={itemVariants}>
          <span className="about__tech-label">Tech I Work With</span>
          <div className="about__tech-grid">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="about__tech-item"
                whileHover={{ scale: 1.1, color: tech.color }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <tech.icon className="about__tech-icon" />
                <span className="about__tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;

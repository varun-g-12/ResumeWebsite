import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { experience } from '../data/resume';

function ExperienceCard({ job, index, isExpanded, onToggle }) {
  const isLeft = index % 2 === 0;
  const maxHighlights = 2;
  const hasMore = job.highlights.length > maxHighlights;
  const visibleHighlights = isExpanded ? job.highlights : job.highlights.slice(0, maxHighlights);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className={`timeline__item timeline__item--${isLeft ? 'left' : 'right'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={cardVariants}
    >
      {/* Timeline marker */}
      <div className="timeline__marker">
        <div className="timeline__marker-dot">
          <FaBriefcase />
        </div>
      </div>

      {/* Card */}
      <div className="timeline__card">
        <div className="timeline__card-header">
          <span className="timeline__date">{job.date}</span>
          <h3 className="timeline__position">{job.position}</h3>
          <div className="timeline__meta">
            <span className="timeline__company">{job.company}</span>
            <span className="timeline__location">
              <HiLocationMarker />
              {job.location}
            </span>
          </div>
        </div>

        <div className="timeline__card-body">
          <ul className="timeline__highlights">
            {visibleHighlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {highlight}
              </motion.li>
            ))}
          </ul>

          {hasMore && (
            <button
              className="timeline__toggle"
              onClick={onToggle}
              aria-expanded={isExpanded}
            >
              {isExpanded ? (
                <>Show less <FaChevronUp /></>
              ) : (
                <>Show more <FaChevronDown /></>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  // Career progression data
  const progression = [
    { role: 'Support Engineer', year: '2019' },
    { role: 'Python Developer', year: '2021' },
    { role: 'GenAI Developer', year: '2024' }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="experience__header" variants={headerVariants}>
          <span className="experience__label">Career Journey</span>
          <h2 className="experience__title">
            Professional
            <span className="experience__title-highlight"> Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline__line" />

          {experience.map((job, index) => (
            <ExperienceCard
              key={index}
              job={job}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleExpand(index)}
            />
          ))}
        </div>

        {/* Career Progression Bar */}
        <motion.div
          className="career-progression"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="career-progression__label">Career Progression</span>
          <div className="career-progression__track">
            <div className="career-progression__line" />
            {progression.map((item, index) => (
              <div
                key={index}
                className="career-progression__point"
                style={{ left: `${(index / (progression.length - 1)) * 100}%` }}
              >
                <div className="career-progression__dot" />
                <div className="career-progression__info">
                  <span className="career-progression__role">{item.role}</span>
                  <span className="career-progression__year">{item.year}</span>
                </div>
              </div>
            ))}
            <div className="career-progression__arrow">→</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;

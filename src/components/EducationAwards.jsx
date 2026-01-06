import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaMedal } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { education, awards } from '../data/resume';

// Education Card Component
function EducationCard({ edu, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      className="education-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
    >
      {/* Icon */}
      <div className="education-card__icon">
        <FaGraduationCap />
      </div>

      {/* Content */}
      <div className="education-card__content">
        <h3 className="education-card__degree">
          {edu.degree} - {edu.field}
        </h3>
        <p className="education-card__institution">{edu.institution}</p>
      </div>

      {/* Badges */}
      <div className="education-card__badges">
        <div className="education-card__badge education-card__badge--cgpa">
          <span className="education-card__badge-value">{edu.score}</span>
          <span className="education-card__badge-label">CGPA</span>
        </div>
        <div className="education-card__badge education-card__badge--date">
          <span className="education-card__badge-value">{edu.date}</span>
        </div>
      </div>

      {/* Glow line */}
      <div className="education-card__glow-line" />
    </motion.div>
  );
}

// Award Card Component
function AwardCard({ award, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      className="award-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8 }}
    >
      {/* Icon */}
      <div className="award-card__icon">
        <FaTrophy />
      </div>

      {/* Content */}
      <div className="award-card__content">
        <h3 className="award-card__title">{award.title}</h3>
        <div className="award-card__meta">
          <span className="award-card__awarder">
            <FaMedal /> {award.awarder}
          </span>
          <span className="award-card__date">{award.date}</span>
        </div>
      </div>

      {/* Glow line */}
      <div className="award-card__glow-line" />
    </motion.div>
  );
}

function EducationAwards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="education-awards-section">
      <motion.div
        className="education-awards__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="education-awards__header" variants={headerVariants}>
          <span className="education-awards__label">Background</span>
          <h2 className="education-awards__title">
            Education &
            <span className="education-awards__title-highlight"> Recognition</span>
          </h2>
        </motion.div>

        {/* Education Subsection */}
        <motion.div className="education-awards__subsection" variants={headerVariants}>
          <div className="education-awards__subsection-header">
            <HiSparkles className="education-awards__sparkle" />
            <span>Education</span>
            <HiSparkles className="education-awards__sparkle" />
          </div>
          <div className="education-awards__grid">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Awards Subsection */}
        <motion.div className="education-awards__subsection" variants={headerVariants}>
          <div className="education-awards__subsection-header">
            <HiSparkles className="education-awards__sparkle" />
            <span>Awards & Achievements</span>
            <HiSparkles className="education-awards__sparkle" />
          </div>
          <div className="education-awards__grid">
            {awards.map((award, index) => (
              <AwardCard key={index} award={award} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default EducationAwards;

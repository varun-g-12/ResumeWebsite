import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython,
  SiOpenai,
  SiAmazon,
  SiDocker,
  SiGit,
  SiStreamlit
} from 'react-icons/si';
import { FaLink, FaCode, FaRobot, FaCloud, FaGlobe, FaTasks } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

// Core stack - signature technologies
const coreStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Langchain', icon: FaLink, color: '#00FF88' },
  { name: 'GPT-4o', icon: SiOpenai, color: '#00D4FF' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' }
];

// Skills with proficiency levels
const skillCategories = [
  {
    category: 'Programming',
    icon: FaCode,
    color: '#3776AB',
    skills: [
      { name: 'Python', level: 95 }
    ]
  },
  {
    category: 'Generative AI',
    icon: FaRobot,
    color: '#00D4FF',
    skills: [
      { name: 'Large Language Models', level: 90 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Langchain / Langgraph', level: 90 },
      { name: 'RAG Pipelines', level: 85 }
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: FaCloud,
    color: '#FF9900',
    skills: [
      { name: 'AWS (Lambda, S3, Textract)', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'Git', level: 85 }
    ]
  },
  {
    category: 'Web Development',
    icon: FaGlobe,
    color: '#FF4B4B',
    skills: [
      { name: 'Streamlit', level: 90 },
      { name: 'React', level: 60 }
    ]
  },
  {
    category: 'Project Management',
    icon: FaTasks,
    color: '#7B61FF',
    skills: [
      { name: 'Agile Methodologies', level: 75 }
    ]
  }
];

// Animated Progress Bar Component
function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{width}%</span>
      </div>
      <div className="skill-bar__track">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: delay / 1000 }}
        />
      </div>
    </div>
  );
}

// Core Stack Item Component
function CoreStackItem({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      className="core-stack__item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div
        className="core-stack__icon-wrapper"
        style={{ '--glow-color': item.color }}
      >
        <Icon className="core-stack__icon" style={{ color: item.color }} />
      </div>
      <span className="core-stack__name">{item.name}</span>
    </motion.div>
  );
}

// Skill Category Card Component
function SkillCategoryCard({ category, index }) {
  const Icon = category.icon;

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
      className="skill-category"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="skill-category__header">
        <div
          className="skill-category__icon"
          style={{ '--category-color': category.color }}
        >
          <Icon />
        </div>
        <h3 className="skill-category__title">{category.category}</h3>
      </div>

      <div className="skill-category__content">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={i * 100}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
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
    <section id="skills" className="skills-section">
      <motion.div
        className="skills__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="skills__header" variants={headerVariants}>
          <span className="skills__label">Expertise</span>
          <h2 className="skills__title">
            Technical
            <span className="skills__title-highlight"> Skills</span>
          </h2>
          <p className="skills__subtitle">
            Technologies and tools I use to build AI-powered solutions
          </p>
        </motion.div>

        {/* Core Stack Section */}
        <motion.div className="core-stack" variants={headerVariants}>
          <div className="core-stack__header">
            <HiSparkles className="core-stack__sparkle" />
            <span>Core Stack</span>
            <HiSparkles className="core-stack__sparkle" />
          </div>
          <div className="core-stack__grid">
            {coreStack.map((item, index) => (
              <CoreStackItem key={item.name} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;

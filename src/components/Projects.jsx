import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRobot,
  FaDatabase,
  FaFlask,
  FaTimes,
  FaArrowRight,
  FaCode,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { projects } from '../data/resume';

// Category configuration
const categories = [
  { id: 'all', label: 'All Projects', icon: HiSparkles },
  { id: 'chatbot', label: 'Chatbots', icon: FaRobot },
  { id: 'data', label: 'Data Processing', icon: FaDatabase },
  { id: 'poc', label: 'POC', icon: FaFlask }
];

// Map projects to categories and add metadata
const getProjectCategory = (project) => {
  const desc = project.description.toLowerCase();
  if (desc.includes('chatbot')) return 'chatbot';
  if (desc.includes('data') || desc.includes('summarisation') || desc.includes('report')) return 'data';
  if (desc.includes('poc') || desc.includes('exploration')) return 'poc';
  return 'data';
};

// Identify featured project (GRD - has highest impact)
const getFeaturedProject = () => {
  return projects.find(p => p.name.includes('GRD'));
};

// Project Card Component
function ProjectCard({ project, onClick, isFeatured = false }) {
  const category = getProjectCategory(project);
  const CategoryIcon = categories.find(c => c.id === category)?.icon || FaCode;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className={`project-card-new ${isFeatured ? 'project-card-new--featured' : ''}`}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      {/* Visual Placeholder */}
      <div className="project-card-new__visual">
        <div className="project-card-new__placeholder">
          <CategoryIcon className="project-card-new__placeholder-icon" />
          <span>{project.description}</span>
        </div>
        {isFeatured && (
          <div className="project-card-new__featured-badge">
            <HiSparkles /> Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="project-card-new__content">
        {/* Category Badge */}
        <div className="project-card-new__category">
          <CategoryIcon />
          <span>{project.description}</span>
        </div>

        {/* Title */}
        <h3 className="project-card-new__title">{project.name}</h3>

        {/* Date */}
        <span className="project-card-new__date">{project.date}</span>

        {/* Summary - truncated for cards */}
        <p className="project-card-new__summary">
          {project.summary.length > 150
            ? `${project.summary.substring(0, 150)}...`
            : project.summary}
        </p>

        {/* Impact Metric for GRD */}
        {project.name.includes('GRD') && (
          <div className="project-card-new__impact">
            <span className="project-card-new__impact-value">95%</span>
            <span className="project-card-new__impact-label">Time Saved</span>
          </div>
        )}

        {/* Tech Stack */}
        <div className="project-card-new__tech">
          {project.keywords.slice(0, isFeatured ? 6 : 4).map((keyword, i) => (
            <span key={i} className="project-card-new__tech-tag">{keyword}</span>
          ))}
          {project.keywords.length > (isFeatured ? 6 : 4) && (
            <span className="project-card-new__tech-more">
              +{project.keywords.length - (isFeatured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="project-card-new__cta">
          View Details <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

// Project Modal Component
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const category = getProjectCategory(project);
  const CategoryIcon = categories.find(c => c.id === category)?.icon || FaCode;

  return (
    <motion.div
      className="project-modal__backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="project-modal__close" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Visual Header */}
        <div className="project-modal__visual">
          <CategoryIcon className="project-modal__icon" />
          <span className="project-modal__type">{project.description}</span>
        </div>

        {/* Content */}
        <div className="project-modal__content">
          <h2 className="project-modal__title">{project.name}</h2>
          <span className="project-modal__date">{project.date}</span>

          <div className="project-modal__divider" />

          {/* Impact for GRD */}
          {project.name.includes('GRD') && (
            <div className="project-modal__impact-section">
              <h4>Impact</h4>
              <div className="project-modal__impact">
                <div className="project-modal__impact-item">
                  <span className="project-modal__impact-value">95%</span>
                  <span className="project-modal__impact-label">Time Reduction</span>
                </div>
                <div className="project-modal__impact-item">
                  <span className="project-modal__impact-value">3-4hrs → 10-20min</span>
                  <span className="project-modal__impact-label">Document Creation</span>
                </div>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="project-modal__section">
            <h4>About the Project</h4>
            <p>{project.summary}</p>
          </div>

          {/* Tech Stack */}
          <div className="project-modal__section">
            <h4>Tech Stack</h4>
            <div className="project-modal__tech">
              {project.keywords.map((keyword, i) => (
                <span key={i} className="project-modal__tech-tag">{keyword}</span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="project-modal__actions">
            <button className="project-modal__action project-modal__action--primary">
              <FaExternalLinkAlt /> Read More
            </button>
            <button className="project-modal__action project-modal__action--secondary">
              <FaCode /> View Architecture
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = getFeaturedProject();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return getProjectCategory(project) === activeFilter;
  });

  // Separate featured from others
  const otherProjects = filteredProjects.filter(p => p !== featuredProject);

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
    <section id="projects" className="projects-section">
      <motion.div
        className="projects__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="projects__header" variants={headerVariants}>
          <span className="projects__label">Portfolio</span>
          <h2 className="projects__title">
            Featured
            <span className="projects__title-highlight"> Projects</span>
          </h2>
          <p className="projects__subtitle">
            AI-powered solutions that drive real business impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div className="projects__filters" variants={headerVariants}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`projects__filter ${activeFilter === cat.id ? 'projects__filter--active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                <Icon />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured Project */}
        {activeFilter === 'all' && featuredProject && (
          <motion.div
            className="projects__featured"
            variants={headerVariants}
          >
            <ProjectCard
              project={featuredProject}
              onClick={() => setSelectedProject(featuredProject)}
              isFeatured={true}
            />
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          className="projects__grid"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {(activeFilter === 'all' ? otherProjects : filteredProjects).map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="projects__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaFlask className="projects__empty-icon" />
            <p>No projects in this category yet.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

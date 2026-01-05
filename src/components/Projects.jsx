import { projects } from '../data/resume';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-date">{project.date}</p>
            <p className="project-summary">{project.summary}</p>
            <div className="project-keywords">
              {project.keywords.map((keyword, i) => (
                <span key={i} className="keyword-tag">{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

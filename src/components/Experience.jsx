import { experience } from '../data/resume';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <h3>{job.position}</h3>
            <div className="experience-meta">
              <span className="company">{job.company}</span>
              <span className="date">{job.date}</span>
              <span className="location">{job.location}</span>
            </div>
            <ul className="highlights">
              {job.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

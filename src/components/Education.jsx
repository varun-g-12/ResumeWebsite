import { education } from '../data/resume';

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree} - {edu.field}</h3>
            <p className="institution">{edu.institution}</p>
            <div className="education-meta">
              <span className="date">{edu.date}</span>
              <span className="score">CGPA: {edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import { skills } from '../data/resume';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.keywords.map((keyword, i) => (
                <span key={i} className="skill-tag">{keyword}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

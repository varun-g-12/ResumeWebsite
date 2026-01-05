import { awards } from '../data/resume';

function Awards() {
  return (
    <section className="awards">
      <h2>Awards & Recognition</h2>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div key={index} className="award-item">
            <h3>{award.title}</h3>
            <p className="awarder">{award.awarder}</p>
            <p className="award-date">{award.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;

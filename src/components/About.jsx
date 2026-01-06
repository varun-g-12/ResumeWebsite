import { summary } from '../data/resume';

function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <p>{summary}</p>
    </section>
  );
}

export default About;

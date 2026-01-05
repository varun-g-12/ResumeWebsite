import { basics } from '../data/resume';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Placeholder for profile photo */}
        <div className="hero-avatar">
          <div className="avatar-placeholder">
            {basics.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <h1>{basics.name}</h1>
        <p className="headline">{basics.headline}</p>

        <div className="hero-links">
          <a href={basics.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={basics.medium} target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          <a href={`mailto:${basics.email}`}>
            Email
          </a>
        </div>

        <p className="location">{basics.location}</p>
      </div>
    </section>
  );
}

export default Hero;

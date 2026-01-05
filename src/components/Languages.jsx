import { languages, getLanguageLevel } from '../data/resume';

function Languages() {
  return (
    <section className="languages">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{language.name}</span>
            <span className="language-level">{getLanguageLevel(language.level)}</span>
            <div className="language-bar">
              <div
                className="language-bar-fill"
                style={{ width: `${(language.level / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;

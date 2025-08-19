import React, { useEffect, useRef, useState } from "react";
import { resumeData } from "../resumeData";

function Education() {
  const [animate, setAnimate] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (langRef.current) {
      observer.observe(langRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="education">
      <h3>Education & Training</h3>
      {resumeData.education.map((edu) => (
        <div key={edu.id} className="education-card">
          <h4>{edu.degree}</h4>
          <p>{edu.institution}</p>
          {edu.website && (
            <p>
              <a href={edu.website} target="_blank" rel="noreferrer">
                {edu.website}
              </a>
            </p>
          )}
          <p>
            {edu.period} | {edu.location}
          </p>
          <p><strong>{edu.eqf}</strong></p>
        </div>
      ))}

      <h3>Language Skills</h3>
      <div ref={langRef}>
        <p><strong>Mother Tongue(s):</strong> {resumeData.languages.motherTongue}</p>

        {resumeData.languages.other.map((lang, idx) => (
          <div key={idx} className="language-card">
            <h4>{lang.name}</h4>

            {["listening", "reading", "writing", "spokenProduction", "spokenInteraction"].map((skill) => (
              <div key={skill} className="skill">
                <span>
                  {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, " $1")} (
                  {lang[skill]})
                </span>
                <div className="progress">
                  <div
                    className={`progress-bar ${animate ? "fill" : ""}`}
                    data-level={lang[skill]}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p><em>{resumeData.languages.levelsNote}</em></p>
    </section>
  );
}

export default Education;

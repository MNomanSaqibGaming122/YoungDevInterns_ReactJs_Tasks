import React from "react";
import { resumeData } from "../resumeData";

function Experience() {
  return (
    <section className="experience">
      <h3>Experience</h3>
      {resumeData.experience.map((exp) => (
        <div key={exp.id}>
          <h4>{exp.title} – {exp.company}</h4>
          <p>{exp.period}</p>
          <ul>
            {exp.duties.map((duty, idx) => (
              <li key={idx}>{duty}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;

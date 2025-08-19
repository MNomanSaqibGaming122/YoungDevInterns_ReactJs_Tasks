import React, { useEffect, useRef, useState } from "react";
import { resumeData } from "../resumeData";

function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" ref={sectionRef}>
      <h3>Skills</h3>
      <ul>
        {resumeData.skills.map((skill, idx) => (
          <li key={idx}>
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div
                className={`skill-progress ${visible ? "active" : ""}`}
                style={{ "--progress": `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

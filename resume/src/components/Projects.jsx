import React from "react";
import { resumeData } from "../resumeData";

function Projects() {
  return (
    <section className="projects">
      <h3>Projects</h3>
      {resumeData.projects.map((project) => (
        <div key={project.id}>
          <h4>{project.name}</h4>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer">Live Project</a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Projects;

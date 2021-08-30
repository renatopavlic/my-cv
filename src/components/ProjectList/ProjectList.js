import React from "react";

import PROJECTS from "./consts";
import Project from "../Project/Project";

const ProjectList = () => {
  return (
    <section id="projects" className="project-list">
      <h2>Projects</h2>
      {PROJECTS.map((project, i) => (
        <Project
          key={i}
          title={project.title}
          link={project.link}
          description={project.description}
          img={project.img}
        />
      ))}
    </section>
  );
};

export default ProjectList;

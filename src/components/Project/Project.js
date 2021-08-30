import React from "react";

const Project = ({ title, img, description, link }) => {
  return (
    <div className="project">
      <img className="project-img" src={img} alt="project-img" />
      <a className="project-title" href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default Project;

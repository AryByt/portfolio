import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project: { name, image, deployed_url, github_url, description } }) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-4">
      <figure className="projectCard__wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} className="projectCard__image" />
        </a>

        <div className="projectCard__title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <FaGithub className="projectCard__icon" />
          </a>
          <div className="description">{description}</div>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;

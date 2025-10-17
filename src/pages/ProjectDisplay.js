import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePortfolioData } from "../hooks/usePortfolioData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import atm from "../assets/atm.png";
import Ascii from "../assets/Ascii.png";
import groupie from "../assets/groupie.png";
import portfolio from "../assets/portfolio.png";
import "../styles/ProjectDisplay.css";

const imageMap = {
  "../assets/atm.png": atm,
  "../assets/Ascii.png": Ascii,
  "../assets/groupie.png": groupie,
  "../assets/portfolio.png": portfolio
};

function ProjectDisplay() {
  const { id } = useParams();
  const { data, loading } = usePortfolioData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const project = data.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project">
      <Link to="/projects" className="back-link">
        <ArrowBackIcon /> Back to Projects
      </Link>
      
      <div className="project-header">
        <h1>{project.name}</h1>
        <span className={`status-badge ${project.status}`}>
          {project.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <div className="project-content">
        <div className="project-image-container">
          <img src={imageMap[project.image] || project.image} alt={project.name} />
        </div>
        
        <div className="project-details">
          <div className="project-description">
            <h3>About This Project</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-technologies">
            <h3>Technologies Used</h3>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>

          {project.features && (
            <div className="project-features">
              <h3>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                <GitHubIcon /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                <LaunchIcon /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;

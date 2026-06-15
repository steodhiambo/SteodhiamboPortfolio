import React from "react";
import { useParams, Link } from "react-router-dom";
import { usePortfolioData } from "../hooks/usePortfolioData";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SEO from "../components/SEO";
import { resolveImage } from "../utils/imageMap";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const { data } = usePortfolioData();

  const project = data.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="project-not-found" aria-label="Project not found">
        <SEO title="404 — Project Not Found" />
        <h2>Project not found</h2>
        <Link to="/projects" className="back-link">
          <ArrowBackIcon /> Back to Projects
        </Link>
      </section>
    );
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Stephen Odhiambo Oginga" },
  };

  return (
    <section className="project" aria-label={project.name}>
      <SEO
        title={project.name}
        description={project.description}
        ogImage={resolveImage(project.image)}
        ogUrl={`https://steodhiambo.com/project/${project.id}`}
        jsonLd={projectSchema}
      />
      <Link to="/projects" className="back-link">
        <ArrowBackIcon /> Back to Projects
      </Link>

      <div className="project-header">
        <h1>{project.name}</h1>
        <span className={`status-badge ${project.status}`}>
          {project.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <div className="project-showcase">
        <div className="project-image-container">
          <img src={resolveImage(project.image)} alt={project.name} />
        </div>

        <div className="project-stack">
          <h3>Technologies</h3>
          <div className="tech-list">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>

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

      <div className="project-narrative">

        {project.problem && (
          <div className="narrative-section problem-section">
            <span className="section-label">Context</span>
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>
        )}

        {project.architecture && (
          <div className="narrative-section architecture-section">
            <span className="section-label">Approach</span>
            <h3>Architecture & Decisions</h3>
            <p>{project.architecture}</p>
          </div>
        )}

        {project.myRole && (
          <div className="narrative-section role-section">
            <span className="section-label">My Role</span>
            <p>{project.myRole}</p>
          </div>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <div className="narrative-section challenges-section">
            <span className="section-label">Process</span>
            <h3>Challenges & Solutions</h3>
            <div className="challenges-timeline">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="challenge-step">
                  <div className="step-marker">{index + 1}</div>
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.impact && (
          <div className="narrative-section impact-section">
            <span className="section-label">Results</span>
            <h3>Impact & Results</h3>
            <p>{project.impact}</p>
          </div>
        )}

        {project.features && (
          <div className="narrative-section features-section">
            <span className="section-label">Highlights</span>
            <h3>Key Features</h3>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-card">{feature}</div>
              ))}
            </div>
          </div>
        )}

        {project.lessons && (
          <div className="narrative-section lessons-section">
            <span className="section-label">Reflection</span>
            <h3>What I'd Do Differently</h3>
            <p>{project.lessons}</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProjectDisplay;

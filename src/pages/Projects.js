import React from "react";
import ProjectItem from "../components/ProjectItem";
import { usePortfolioData } from "../hooks/usePortfolioData";
import "../styles/Projects.css";

function Projects() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { projects } = data;

  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projects.map((project) => (
          <ProjectItem 
            key={project.id}
            id={project.id} 
            name={project.name} 
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

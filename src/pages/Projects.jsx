import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectItem from "../components/ProjectItem";
import SEO from "../components/SEO";
import { usePortfolioData } from "../hooks/usePortfolioData";
import "../styles/Projects.css";

function Projects() {
  const { data } = usePortfolioData();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const { projects } = data;

  return (
    <section className="projects" aria-label="Portfolio projects">
      <SEO
        title="Projects"
        description="Explore my portfolio of projects built with React, Go, Python, Django, and more. Full-stack development, civic tech, and AI-powered applications."
        ogUrl="https://steodhiambo.com/projects"
      />
      <h1 data-aos="fade-down">Completed Projects</h1>
      <div className="projectList">
        {projects.map((project, index) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProjectItem
              id={project.id}
              name={project.name}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import profile from "../assets/profile.JPG";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Home() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { personal, skills } = data;

  return (
    <div className="home">
      <div className="about">
        <div className="about-content">
          <img src={profile} alt={personal.name} className="profile-image" />
          <div className="text-content">
            <h2>Hello, My Name is {personal.name}</h2>
            <p>{personal.bio}</p>
            <div className="prompt">
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${personal.email}`}>
                <EmailIcon />
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>{skills.frontend.join(", ")}</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>{skills.backend.join(", ")}</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>{skills.languages.join(", ")}</span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>{skills.tools.join(", ")}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

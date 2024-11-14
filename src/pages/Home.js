import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profile from "../assets/profile.JPG";  // Import your image here

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="about-content">
          <img src={profile} alt="Stephen Odhiambo" className="profile-image" />
          <div className="text-content">
            <h2>Hello, My Name is Stephen Odhiambo</h2>
            <p>
            I am a passionate software developer, always eager to learn and evolve, consistently exploring cutting-edge technologies and embracing best practices to drive innovation
            </p>
            <div className="prompt">
              <a href="https://www.linkedin.com/in/stephen-odhiambo-411912278" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              <a href="mailto:stephenoginga6@gmail.com">
                <EmailIcon />
              </a>
              <a href="https://github.com/steodhiambo" target="_blank" rel="noopener noreferrer">
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
            <span>ReactJS, HTML, CSS, NPM, Bootstrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

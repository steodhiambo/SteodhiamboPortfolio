import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Footer() {
  const { data } = usePortfolioData();
  const { personal } = data;

  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${personal.email}`} aria-label="Send email">
          <EmailIcon />
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; {new Date().getFullYear()} steodhiambo.com</p>
    </footer>
  );
}

export default Footer;

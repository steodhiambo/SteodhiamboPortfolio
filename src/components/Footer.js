import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Footer() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const { personal } = data;

  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2024 steodhiambo.com</p>
    </div>
  );
}

export default Footer;

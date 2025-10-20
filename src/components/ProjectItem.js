import React from "react";
import { useNavigate } from "react-router-dom";
import atm from "../assets/atm.png";
import Ascii from "../assets/Ascii.png";
import groupie from "../assets/groupie.png";
import portfolio from "../assets/portfolio.png";
import netfixProject from "../assets/netfix-project.png";
import movieDiscoveryApp from "../assets/movie-discovery-app.png";
import umojaVoicesProject from "../assets/umoja-voices-project.png";

const imageMap = {
  "../assets/atm.png": atm,
  "../assets/Ascii.png": Ascii,
  "../assets/groupie.png": groupie,
  "../assets/portfolio.png": portfolio,
  "../assets/netfix-project.png": netfixProject,
  "../assets/movie-discovery-app.png": movieDiscoveryApp,
  "../assets/umoja-voices-project.png": umojaVoicesProject
};

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  const actualImage = imageMap[image] || image;
  
  return (
    <div className="projectItem" onClick={() => navigate("/project/" + id)}>
      <div className="bgImage" style={{ backgroundImage: `url(${actualImage})` }} />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;

import React from "react";
import { useNavigate } from "react-router-dom";
import atm from "../assets/atm.png";
import Ascii from "../assets/Ascii.png";
import groupie from "../assets/groupie.png";
import portfolio from "../assets/portfolio.png";
import screenshot1 from "../assets/screenshot_project_1.png";
import screenshot2 from "../assets/screenshot_project_2.png";
import screenshot3 from "../assets/screenshot_project_3.png";

const imageMap = {
  "../assets/atm.png": atm,
  "../assets/Ascii.png": Ascii,
  "../assets/groupie.png": groupie,
  "../assets/portfolio.png": portfolio,
  "../assets/screenshot_project_1.png": screenshot1,
  "../assets/screenshot_project_2.png": screenshot2,
  "../assets/screenshot_project_3.png": screenshot3
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

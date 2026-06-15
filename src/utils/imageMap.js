import portfolio from "../assets/portfolio.png";
import netfixProject from "../assets/netfix-project.png";
import movieDiscoveryApp from "../assets/movie-discovery-app.png";
import umojaVoicesProject from "../assets/umoja-voices-project.png";
import housingSafety from "../assets/housing-safety.png";
import fanikio from "../assets/fanikio.png";

const imageMap = {
  "../assets/portfolio.png": portfolio,
  "../assets/netfix-project.png": netfixProject,
  "../assets/movie-discovery-app.png": movieDiscoveryApp,
  "../assets/umoja-voices-project.png": umojaVoicesProject,
  "../assets/housing-safety.png": housingSafety,
  "../assets/fanikio.png": fanikio
};

export const resolveImage = (imagePath) => imageMap[imagePath] || imagePath;

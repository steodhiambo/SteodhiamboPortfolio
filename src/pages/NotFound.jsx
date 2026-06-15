import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SEO from "../components/SEO";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <section className="not-found" aria-label="Page not found">
      <SEO title="404 — Page Not Found" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="home-link">
        <HomeIcon /> Back to Home
      </Link>
    </section>
  );
}

export default NotFound;

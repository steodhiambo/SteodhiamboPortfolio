import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"} role="navigation" aria-label="Main navigation">
      <div className="toggleButton">
        <button
          onClick={() => setExpandNavbar((prev) => !prev)}
          aria-expanded={expandNavbar}
          aria-controls="nav-links"
          aria-label={expandNavbar ? "Close menu" : "Open menu"}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links" id="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            aria-current={location.pathname === link.to ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

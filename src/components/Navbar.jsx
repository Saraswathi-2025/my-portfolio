import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Toggle Theme */
  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-logo">Saraswathi</div>

      {/* DESKTOP LINKS */}
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* THEME TOGGLE */}
      <div className="theme-toggle" onClick={toggleTheme}>
        <div className="toggle-circle"></div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>

    </nav>
  );
}
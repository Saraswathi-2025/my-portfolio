import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-logo">Saraswathi</div>

      {/* Desktop Links */}
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </div>
      <nav className="navbar">
  <div className="nav-logo">Saraswathi</div>

  <div className="nav-links">
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </div>

  {/* Neon Theme Toggle */}
  <div className="theme-toggle" onClick={() => document.body.classList.toggle("light-mode")}>
    <div className="toggle-circle"></div>
  </div>
</nav>

      {/* Mobile Menu Button */}
      <button
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink onClick={() => setMenuOpen(false)} to="/" end>Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/projects">Projects</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/skills">Skills</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/resume">Resume</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink>
      </div>

    </nav>
  );
}
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Saraswathi</div>

      <ul className="nav-links">
        <li><a href="#/">Home</a></li>
        <li><a href="#/projects">Projects</a></li>
        <li><a href="#/skills">Skills</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
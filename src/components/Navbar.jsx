import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const loc = useLocation().pathname;
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">Saraswathi</Link>
        <div className="nav-links">
          <Link className={loc === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={loc === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={loc === "/skills" ? "active" : ""} to="/skills">Skills</Link>
          <Link className={loc === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
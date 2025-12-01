import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">A few selected works I've built recently.</p>

      <div className="projects-list">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h2>Project Alpha</h2>
          <p>
            A clean and responsive React web application with smooth UI and API
            integration.
          </p>
          <a href="#" className="project-link">View →</a>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h2>Project Beta</h2>
          <p>
            A performance-focused SPA using optimized assets and lazy loading for
            speed.
          </p>
          <a href="#" className="project-link">View →</a>
        </div>

      </div>

    </div>
  );
}

export default Projects;
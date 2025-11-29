import React from "react";
import "./styles/Projects.css";

const Projects = () => {
  return (
    <main className="page-wrap">
      <div className="page-inner">
        <h1>Projects</h1>
        <p className="muted">Selected projects — short summary & links.</p>

        <div className="grid">
          <article className="card">
            <h3>Project Alpha</h3>
            <p>Responsive React app with clean UI & simple CMS integration.</p>
            <a className="link" href="#">View</a>
          </article>

          <article className="card">
            <h3>Project Beta</h3>
            <p>Performance-focused SPA using optimized assets and lazy loading.</p>
            <a className="link" href="#">View</a>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Projects;
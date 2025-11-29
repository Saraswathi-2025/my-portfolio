import React from "react";
import "./Projects.css";

function Projects() {
  const list = [
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built using React.",
      link: "https://saraswathi-2025.github.io/MyPortfolio/"
    },
    {
      title: "Music Player",
      desc: "A simple web-based music player using JavaScript.",
      link: "https://saraswathi-2025.github.io/Music-Player/"
    },
    {
      title: "Student Registration System",
      desc: "A form-based student entry system using HTML/CSS/JS.",
      link: "https://saraswathi-2025.github.io/SMCEC/"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {list.map((p, i) => (
          <div key={i} className="project-card">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
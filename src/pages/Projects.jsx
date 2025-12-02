import React, { useState, useEffect } from "react";
import "./styles/Projects.css";

export default function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Load from localStorage OR fallback JSON
  useEffect(() => {
    const stored = localStorage.getItem("projects");

    if (stored) {
      const parsed = JSON.parse(stored);
      setProjectsData(parsed);
      setActiveProject(parsed[0]);
    } else {
      fetch("/project.json")
        .then((res) => res.json())
        .then((data) => {
          setProjectsData(data.projects);
          setActiveProject(data.projects[0]);
        });
    }
  }, []);

  function openProject(id) {
    const p = projectsData.find((x) => x.id === id);
    setActiveProject(p);
    setLightboxIndex(0);
  }

  function openLightbox(i) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-sub">
          Select a project to view screenshots and details.
        </p>
      </header>

      <section className="projects-shell">
        <nav className="projects-list">
          {projectsData.map((p) => (
            <button
              key={p.id}
              className={`project-list-item ${
                activeProject?.id === p.id ? "active" : ""
              }`}
              onClick={() => openProject(p.id)}
            >
              <div className="project-list-title">{p.title}</div>
              <div className="project-list-tech">{p.subtitle}</div>
            </button>
          ))}
        </nav>

        {activeProject && (
          <article className="project-detail">
            <div className="project-left">
              <div className="project-preview" onClick={() => openLightbox(0)}>
                <img src={activeProject.screenshots[0]} alt="" />
              </div>

              <div className="project-thumbs">
                {activeProject.screenshots.map((src, idx) => (
                  <button
                    key={idx}
                    className="thumb-btn"
                    onClick={() => openLightbox(idx)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="project-right">
              <h2 className="project-title">{activeProject.title}</h2>
              <p className="project-tech">{activeProject.subtitle}</p>
              <p className="project-desc">{activeProject.description}</p>

              <div className="project-actions">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  View on GitHub →
                </a>

                <button className="btn outline" onClick={() => openLightbox(0)}>
                  View Screenshots
                </button>
              </div>
            </div>
          </article>
        )}
      </section>

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightboxOpen(false)}>
              ✕
            </button>
            <button
              className="lb-prev"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + activeProject.screenshots.length) %
                    activeProject.screenshots.length
                )
              }
            >
              ‹
            </button>

            <div className="lb-image-wrap">
              <img src={activeProject.screenshots[lightboxIndex]} alt="" />
            </div>

            <button
              className="lb-next"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex + 1) % activeProject.screenshots.length
                )
              }
            >
              ›
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

/* Thumbnail Component */
function Thumb({ src, alt, onClick }) {
  return (
    <button className="thumb" onClick={onClick} aria-label={`Open ${alt}`}>
      <img src={process.env.PUBLIC_URL + src} alt={alt} loading="lazy" />
    </button>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  /* Available Categories */
  const categories = ["All", "React", "JavaScript", "HTML/CSS"];

  /* Load Project Data */
  useEffect(() => {
    async function load() {
      const res = await fetch(process.env.PUBLIC_URL + "/projects.json");
      const base = await res.json();

      const extra = JSON.parse(localStorage.getItem("extraProjects")) || [];
      const all = [...base.projects, ...extra];

      setProjects(all);
    }

    load();
  }, []);

  /* Filter Projects */
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  const active = filteredProjects[activeIdx];

  /* If loading */
  if (!projects.length)
    return (
      <div className="projects container">
        <p className="loading-text">Loading projects…</p>
      </div>
    );

  return (
    <motion.main
      className="projects container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      {/* HEADER */}
      <header className="projects-head">
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          Select a project to view details and screenshots.
        </p>
      </header>

      {/* ⭐ FILTER BAR ⭐ */}
      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? "active" : ""}`}
            onClick={() => {
              setFilter(c);
              setActiveIdx(0); // reset to first project of category
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {/* LEFT LIST */}
        <motion.aside
          key={filter}
          className="projects-list card"
          aria-label="Project list"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((p, i) => (
            <button
              key={p.id}
              className={`proj-item ${i === activeIdx ? "is-active" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              <div className="proj-title">{p.title}</div>
              <div className="proj-sub">{p.subtitle}</div>
            </button>
          ))}
        </motion.aside>

        {/* RIGHT DETAILS */}
        <section className="proj-detail card">
          {/* Main Image Preview */}
          <div
            className="proj-preview"
            onClick={() => setLightbox({ open: true, idx: 0 })}
          >
            <img
              src={process.env.PUBLIC_URL + active.screenshots[0]}
              alt={`${active.title} preview`}
              loading="lazy"
            />
          </div>

          {/* META DETAILS */}
          <div className="proj-meta">
            <h3 className="proj-name">{active.title}</h3>
            <p className="proj-sub-title">{active.subtitle}</p>
            <p className="proj-desc">{active.description}</p>

            {/* ACTION BUTTONS */}
            <div className="proj-actions">
              <a
                className="btn btn-primary"
                href={active.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>

              <button
                className="btn btn-outline"
                onClick={() => setLightbox({ open: true, idx: 0 })}
              >
                View Screenshots
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="thumbs-row">
              {active.screenshots.map((s, idx) => (
                <Thumb
                  key={idx}
                  src={s}
                  alt={`${active.title} screenshot ${idx + 1}`}
                  onClick={() => setLightbox({ open: true, idx })}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ⭐ LIGHTBOX MODAL ⭐ */}
      {lightbox.open && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, idx: 0 })}
        >
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lb-close"
              onClick={() => setLightbox({ open: false, idx: 0 })}
            >
              ✕
            </button>

            {/* Back */}
            <button
              className="lb-nav left"
              onClick={() =>
                setLightbox((s) => ({
                  ...s,
                  idx:
                    (s.idx - 1 + active.screenshots.length) %
                    active.screenshots.length,
                }))
              }
            >
              ‹
            </button>

            {/* Image */}
            <img
              className="lb-image"
              src={process.env.PUBLIC_URL + active.screenshots[lightbox.idx]}
              alt=""
            />

            {/* Forward */}
            <button
              className="lb-nav right"
              onClick={() =>
                setLightbox((s) => ({
                  ...s,
                  idx: (s.idx + 1) % active.screenshots.length,
                }))
              }
            >
              ›
            </button>

            <div className="lb-count">
              {lightbox.idx + 1} / {active.screenshots.length}
            </div>
          </div>
        </div>
      )}
    </motion.main>
  );
}
// Projects.jsx
import React, { useEffect, useState, useCallback } from "react";
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

  /* Available Categories — adjust to match your projects.json categories */
  const categories = ["All", "React", "JavaScript", "HTML/CSS"];

  /* Load Project Data */
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch(process.env.PUBLIC_URL + "public/data/projects.json");
        const base = await res.json();
        const extra = JSON.parse(localStorage.getItem("extraProjects")) || [];
        const all = [...(base.projects || []), ...extra];

        if (mounted) setProjects(all);
      } catch (err) {
        console.error("Failed to load projects", err);
        if (mounted) setProjects([]);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  /* Filter Projects */
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => (p.category || "").toLowerCase() === filter.toLowerCase());

  /* Keep activeIdx valid when filter or projects change */
  useEffect(() => {
    if (activeIdx >= filteredProjects.length) {
      setActiveIdx(0);
    }
    // if there are no filtered projects, ensure activeIdx is 0
    if (filteredProjects.length === 0 && activeIdx !== 0) {
      setActiveIdx(0);
    }
    // keep activeIdx at 0 whenever filter changes (useful UX)
    // note: this is already set in filter button click, but this makes sure it's consistent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, projects.length, filteredProjects.length]);

  /* Safe active project object to avoid runtime errors */
  const active = filteredProjects[activeIdx] || filteredProjects[0] || {
    id: "--",
    title: "No projects",
    subtitle: "",
    description: "No projects found for this category.",
    github: "#",
    screenshots: [],
  };

  /* Lightbox keyboard navigation (Esc, left, right) */
  const onKey = useCallback(
    (e) => {
      if (!lightbox.open) return;
      if (e.key === "Escape") {
        setLightbox({ open: false, idx: 0 });
      } else if (e.key === "ArrowLeft") {
        setLightbox((s) => ({
          ...s,
          idx:
            (s.idx - 1 + Math.max(1, active.screenshots.length)) %
            Math.max(1, active.screenshots.length),
        }));
      } else if (e.key === "ArrowRight") {
        setLightbox((s) => ({
          ...s,
          idx: (s.idx + 1) % Math.max(1, active.screenshots.length),
        }));
      }
    },
    [lightbox.open, active.screenshots.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

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
        <p className="section-sub">Select a project to view details and screenshots.</p>
      </header>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {categories.map((c) => (
          <button
            key={c}
            className={`filter-btn ${filter === c ? "active" : ""}`}
            onClick={() => {
              setFilter(c);
              setActiveIdx(0); // reset index for new category
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
          transition={{ duration: 0.28 }}
        >
          {filteredProjects.length ? (
            filteredProjects.map((p, i) => (
              <button
                key={p.id || `${p.title}-${i}`}
                className={`proj-item ${i === activeIdx ? "is-active" : ""}`}
                onClick={() => setActiveIdx(i)}
                aria-current={i === activeIdx}
              >
                <div className="proj-title">{p.title}</div>
                <div className="proj-sub">{p.subtitle}</div>
              </button>
            ))
          ) : (
            <div className="empty-list">No projects found in this category.</div>
          )}
        </motion.aside>

        {/* RIGHT DETAILS */}
        <section className="proj-detail card">
          {/* Main Preview */}
          <div
            className="proj-preview"
            role="button"
            tabIndex={0}
            onClick={() => (active.screenshots.length ? setLightbox({ open: true, idx: 0 }) : null)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && active.screenshots.length) setLightbox({ open: true, idx: 0 });
            }}
            aria-label={active.screenshots.length ? "Open gallery" : "No screenshots available"}
          >
            {active.screenshots.length ? (
              <img
                src={process.env.PUBLIC_URL + active.screenshots[0]}
                alt={`${active.title} preview`}
                loading="lazy"
              />
            ) : (
              <div className="preview-empty">No preview available</div>
            )}
          </div>

          {/* META */}
          <div className="proj-meta">
            <h3 className="proj-name">{active.title}</h3>
            <p className="proj-sub-title">{active.subtitle}</p>
            <p className="proj-desc">{active.description}</p>

            {/* ACTIONS */}
            <div className="proj-actions">
              <a className="btn btn-primary" href={active.github || "#"} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>

              <button
                className="btn btn-outline"
                onClick={() => active.screenshots.length && setLightbox({ open: true, idx: 0 })}
                disabled={!active.screenshots.length}
                aria-disabled={!active.screenshots.length}
              >
                View Screenshots
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="thumbs-row">
              {active.screenshots.length ? (
                active.screenshots.map((s, idx) => (
                  <Thumb
                    key={idx}
                    src={s}
                    alt={`${active.title} screenshot ${idx + 1}`}
                    onClick={() => setLightbox({ open: true, idx })}
                  />
                ))
              ) : (
                <div className="thumb-empty">No screenshots</div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, idx: 0 })}
        >
          <div className="lb-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightbox({ open: false, idx: 0 })} aria-label="Close gallery">
              ✕
            </button>

            <button
              className="lb-nav left"
              onClick={() =>
                setLightbox((s) => ({
                  ...s,
                  idx: (s.idx - 1 + active.screenshots.length) % active.screenshots.length,
                }))
              }
              aria-label="Previous image"
            >
              ‹
            </button>

            <img className="lb-image" src={process.env.PUBLIC_URL + active.screenshots[lightbox.idx]} alt="" />

            <button
              className="lb-nav right"
              onClick={() =>
                setLightbox((s) => ({ ...s, idx: (s.idx + 1) % active.screenshots.length }))
              }
              aria-label="Next image"
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

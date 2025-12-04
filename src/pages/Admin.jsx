import React, { useEffect, useState, useCallback } from "react";
import "./Admin.css";

/**
 * Admin page (demo-only CMS)
 * - Uses REACT_APP_ADMIN_PASS if available (prompt login).
 * - If env var is NOT set, offers Demo Mode (no password) so you can showcase/admin on GH pages.
 * - Local edits are saved to localStorage (key: "extraProjects").
 * - Base projects are read from /projects.json (read-only).
 */

const LS_KEY = "extraProjects";

function previewImage(url) {
  // returns a promise resolving { url, ok: true/false }
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ url, ok: true });
    img.onerror = () => resolve({ url, ok: false });
    img.src = url;
  });
}

function splitPaths(text) {
  return text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [baseProjects, setBaseProjects] = useState([]); // read-only from projects.json
  const [extras, setExtras] = useState([]); // editable local projects in localStorage
  const [filterQ, setFilterQ] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [selectedIdx, setSelectedIdx] = useState(null); // index in merged list
  const [showDetails, setShowDetails] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  const [adminLight, setAdminLight] = useState(false); // admin-only theme
  const ADMIN_PASS = process.env.REACT_APP_ADMIN_PASS || "";

  // Form state (for add / edit)
  const emptyForm = {
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    category: "JavaScript",
    screenshotsText: "",
    screenshotsValidated: [] // [{url, ok}]
  };
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false); // true when editing an extra project
  const [baseCount, setBaseCount] = useState(0);

  // Load base projects.json + extras from localStorage
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(process.env.PUBLIC_URL + "/projects.json");
        const json = await res.json();
        const base = (json && json.projects) || [];
        if (!cancelled) {
          setBaseProjects(base);
          setBaseCount(base.length);
        }
      } catch (err) {
        console.warn("Could not load projects.json", err);
        if (!cancelled) {
          setBaseProjects([]);
          setBaseCount(0);
        }
      }
    }
    load();
    const ls = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    setExtras(ls);
    return () => {
      cancelled = true;
    };
  }, []);

  // Save extras to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(extras));
  }, [extras]);

  // Combined list for display (base first then extras)
  const combined = [...baseProjects, ...extras];

  // Derived: filtered by search & category
  const visibleProjects = combined.filter((p) => {
    if (categoryFilter !== "All") {
      const cat = (p.category || "").toLowerCase();
      if (cat !== categoryFilter.toLowerCase()) return false;
    }
    const q = filterQ.trim().toLowerCase();
    if (!q) return true;
    return (
      (p.title || "").toLowerCase().includes(q) ||
      (p.subtitle || "").toLowerCase().includes(q) ||
      (p.id || "").toLowerCase().includes(q)
    );
  });

  // Login handler
  const handleLogin = () => {
    if (!ADMIN_PASS) {
      // Demo mode button: allow quick access
      if (!window.confirm("No admin password set (REACT_APP_ADMIN_PASS). Enter Demo Mode? (This is local-only).")) return;
      setAuth(true);
      return;
    }
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASS) setAuth(true);
    else alert("Incorrect password");
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditing(false);
    setSelectedIdx(null);
  };

  // Validate screenshots text and produce validated thumbnail results
  const validateScreenshots = useCallback(async (text) => {
    const paths = splitPaths(text);
    const checks = await Promise.all(
      paths.map((p) => previewImage(process.env.PUBLIC_URL + p))
    );
    return checks;
  }, []);

  // When screenshotsText changes, validate and store previews
  useEffect(() => {
    let mounted = true;
    if (!form.screenshotsText.trim()) {
      setForm((f) => ({ ...f, screenshotsValidated: [] }));
      return;
    }
    (async () => {
      const res = await validateScreenshots(form.screenshotsText);
      if (!mounted) return;
      setForm((f) => ({ ...f, screenshotsValidated: res }));
    })();
    return () => { mounted = false; };
  }, [form.screenshotsText, validateScreenshots]);

  // Add new project (local)
  const handleAdd = async () => {
    if (!form.id || !form.title) {
      alert("Please provide at least an ID and Title.");
      return;
    }
    const screenshotsArr = splitPaths(form.screenshotsText);
    const newProject = {
      id: form.id,
      title: form.title,
      subtitle: form.subtitle,
      description: form.description,
      github: form.github,
      category: form.category || "JavaScript",
      screenshots: screenshotsArr
    };
    setExtras((s) => [...s, newProject]);
    alert("Project added locally ✔");
    resetForm();
  };

  // Start editing a project (only extras editable)
  const handleStartEdit = (globalIndex) => {
    const extraIndex = globalIndex - baseCount;
    if (extraIndex < 0) {
      alert("This project is from your base projects (projects.json) and cannot be edited here. Edit the file in your repo to change it.");
      return;
    }
    const p = extras[extraIndex];
    if (!p) return;
    setForm({
      id: p.id || "",
      title: p.title || "",
      subtitle: p.subtitle || "",
      description: p.description || "",
      github: p.github || "",
      category: p.category || "JavaScript",
      screenshotsText: (p.screenshots || []).join(", "),
      screenshotsValidated: (p.screenshots || []).map((s) => ({ url: process.env.PUBLIC_URL + s, ok: true }))
    });
    setEditing(true);
    setSelectedIdx(globalIndex);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save edits (update extras)
  const handleUpdate = () => {
    if (selectedIdx === null) return;
    const extraIndex = selectedIdx - baseCount;
    if (extraIndex < 0) {
      alert("Cannot update base project.");
      return;
    }
    const screenshotsArr = splitPaths(form.screenshotsText);
    setExtras((curr) => {
      const copy = [...curr];
      copy[extraIndex] = {
        id: form.id,
        title: form.title,
        subtitle: form.subtitle,
        description: form.description,
        github: form.github,
        category: form.category,
        screenshots: screenshotsArr
      };
      return copy;
    });
    alert("Project updated ✔");
    resetForm();
  };

  // Delete local project
  const handleDelete = (globalIndex) => {
    const extraIndex = globalIndex - baseCount;
    if (extraIndex < 0) {
      alert("Cannot delete base project (edit projects.json in your repo instead).");
      return;
    }
    if (!window.confirm("Delete this local project? This removes it from localStorage only.")) return;
    setExtras((curr) => {
      const copy = [...curr];
      copy.splice(extraIndex, 1);
      return copy;
    });
    // If the deleted one was selected for edit, clear form
    if (selectedIdx === globalIndex) resetForm();
  };

  // View details (open modal)
  const openDetails = (globalIndex) => {
    setSelectedIdx(globalIndex);
    setShowDetails(true);
    setLbIdx(0);
  };

  // keyboard nav for lightbox
  useEffect(() => {
    function onKey(e) {
      if (!showDetails) return;
      if (e.key === "Escape") setShowDetails(false);
      if (e.key === "ArrowLeft") setLbIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setLbIdx((i) => i + 1); // bounds handled in render
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showDetails]);

  // render helpers
  const mergedCount = baseProjects.length + extras.length;

  return (
    <div className={`admin-root ${adminLight ? "admin-light" : ""}`}>
      {!auth ? (
        <div className="admin-login container">
          <div className="admin-card">
            <h2 className="admin-title">Admin Panel</h2>
            <p className="admin-sub">
              This demo admin lets you add local projects (saved in your browser).
              <strong> Base projects</strong> come from <code>/public/projects.json</code> and are read-only here.
            </p>

            <div className="admin-login-actions">
              <button className="admin-btn primary-btn" onClick={handleLogin}>Open Admin</button>
              {!ADMIN_PASS && (
                <button className="admin-btn outline-btn" onClick={() => { navigator.clipboard?.writeText("REACT_APP_ADMIN_PASS=SuperSecret123"); alert("Example env copied to clipboard: REACT_APP_ADMIN_PASS=SuperSecret123"); }}>
                  Copy example .env entry
                </button>
              )}
            </div>

            {ADMIN_PASS ? null : (
              <p className="admin-note">Tip: no REACT_APP_ADMIN_PASS found — you entered Demo Mode. Local changes are saved only in this browser.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="admin-page container">
          {/* LEFT: Form */}
          <aside className="admin-left card">
            <div className="admin-left-inner">
              <div className="admin-top-row">
                <h3>{editing ? "Edit Project (local)" : "Add New Project (local)"}</h3>

                <div className="admin-theme-toggle">
                  <label>Admin Theme</label>
                  <button
                    className={`small-toggle ${adminLight ? "on" : ""}`}
                    onClick={() => setAdminLight((s) => !s)}
                    aria-pressed={adminLight}
                  >
                    {adminLight ? "Light" : "Dark"}
                  </button>
                </div>
              </div>

              <div className="field">
                <label>Project ID</label>
                <input value={form.id} onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))} />
              </div>

              <div className="field">
                <label>Title</label>
                <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>

              <div className="field">
                <label>Subtitle</label>
                <input value={form.subtitle} onChange={(e) => setForm((f) => ({ ...f, subtitle: e.target.value }))} />
              </div>

              <div className="field">
                <label>Category</label>
                <select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}>
                  <option>JavaScript</option>
                  <option>React</option>
                  <option>HTML/CSS</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="field">
                <label>Description</label>
                <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              </div>

              <div className="field">
                <label>GitHub URL</label>
                <input value={form.github} onChange={(e) => setForm((f) => ({ ...f, github: e.target.value }))} />
              </div>

              <div className="field">
                <label>Screenshots (comma separated paths, e.g. /screenshots/proj-1.png)</label>
                <textarea value={form.screenshotsText} onChange={(e) => setForm((f) => ({ ...f, screenshotsText: e.target.value }))} />
                <div className="preview-strip">
                  {form.screenshotsValidated && form.screenshotsValidated.length ? (
                    form.screenshotsValidated.map((s, idx) => (
                      <div key={idx} className={`preview-thumb ${s.ok ? "" : "broken"}`}>
                        <img src={s.url} alt={`preview-${idx}`} />
                        {!s.ok && <span className="broken-tag">Not found</span>}
                      </div>
                    ))
                  ) : (
                    <div className="preview-empty">No screenshots specified</div>
                  )}
                </div>
              </div>

              <div className="admin-form-actions">
                {editing ? (
                  <>
                    <button className="admin-btn primary-btn" onClick={handleUpdate}>Save Changes</button>
                    <button className="admin-btn outline-btn" onClick={resetForm}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="admin-btn primary-btn" onClick={handleAdd}>Add Project</button>
                    <button className="admin-btn" onClick={() => setForm(emptyForm)}>Clear</button>
                  </>
                )}
              </div>

              <div className="admin-hint">
                Note: Projects added/edited/deleted here are stored in your browser's <code>localStorage</code>.
              </div>
            </div>
          </aside>

          {/* RIGHT: Projects list & details */}
          <main className="admin-right">
            <div className="admin-controls">
              <input
                className="search-input"
                placeholder="Search projects by title, subtitle, or id…"
                value={filterQ}
                onChange={(e) => setFilterQ(e.target.value)}
                aria-label="Search projects"
              />

              <select className="category-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option>All</option>
                <option>React</option>
                <option>JavaScript</option>
                <option>HTML/CSS</option>
                <option>Other</option>
              </select>
            </div>

            <div className="admin-list card">
              <div className="list-head">
                <h4>Projects ({visibleProjects.length})</h4>
              </div>

              <div className="list-items">
                {visibleProjects.map((p, idx) => {
                  // compute global index (in combined array)
                  const globalIdx = combined.indexOf(p);
                  const isLocal = globalIdx >= baseCount;
                  return (
                    <div key={(p.id || "") + "-" + idx} className="list-item">
                      <div className="item-left">
                        <div className="item-thumb">
                          {p.screenshots && p.screenshots[0] ? (
                            <img src={process.env.PUBLIC_URL + p.screenshots[0]} alt={p.title} />
                          ) : (
                            <div className="thumb-placeholder">No image</div>
                          )}
                        </div>
                        <div className="item-meta">
                          <div className="item-title">{p.title}</div>
                          <div className="item-sub">{p.subtitle}</div>
                          <div className="item-cat">{p.category || "—"}</div>
                        </div>
                      </div>

                      <div className="item-actions">
                        <button className="small-btn" onClick={() => openDetails(globalIdx)}>View</button>
                        <button className="small-btn" onClick={() => handleStartEdit(globalIdx)} title={isLocal ? "Edit" : "Cannot edit base project"}>
                          Edit
                        </button>
                        <button className="small-btn danger" onClick={() => handleDelete(globalIdx)} title={isLocal ? "Delete local project" : "Cannot delete base project"}>
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
                {visibleProjects.length === 0 && <div className="empty-list">No projects match your search</div>}
              </div>
            </div>
          </main>

          {/* DETAILS LIGHTBOX MODAL */}
          {showDetails && selectedIdx !== null && (() => {
            const proj = combined[selectedIdx] || null;
            if (!proj) return null;
            const shots = proj.screenshots || [];
            const safeIdx = Math.min(lbIdx, Math.max(0, shots.length - 1));
            return (
              <div className="admin-modal" role="dialog" aria-modal="true" onClick={() => setShowDetails(false)}>
                <div className="admin-modal-inner" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={() => setShowDetails(false)}>✕</button>

                  <div className="modal-top">
                    <h3>{proj.title}</h3>
                    <p className="modal-sub">{proj.subtitle}</p>
                  </div>

                  <div className="modal-body">
                    <div className="modal-preview">
                      {shots.length ? (
                        <img src={process.env.PUBLIC_URL + shots[safeIdx]} alt={`shot-${safeIdx}`} />
                      ) : (
                        <div className="preview-empty">No screenshots</div>
                      )}
                    </div>

                    <div className="modal-side">
                      <p className="modal-desc">{proj.description}</p>
                      <div className="modal-actions">
                        <a className="admin-btn primary-btn" href={proj.github || "#"} target="_blank" rel="noreferrer">Open GitHub</a>
                        <div className="thumb-list">
                          {shots.map((s, i) => (
                            <button key={i} className={`thumb-small ${i === safeIdx ? "active" : ""}`} onClick={() => setLbIdx(i)}>
                              <img src={process.env.PUBLIC_URL + s} alt={`t-${i}`} />
                            </button>
                          ))}
                          {shots.length === 0 && <div className="thumb-empty">No screenshots</div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-nav">
                    <button onClick={() => setLbIdx((i) => Math.max(0, i - 1))} className="nav-btn">‹</button>
                    <span className="nav-count">{safeIdx + 1} / {shots.length || 1}</span>
                    <button onClick={() => setLbIdx((i) => Math.min((shots.length || 1) - 1, i + 1))} className="nav-btn">›</button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
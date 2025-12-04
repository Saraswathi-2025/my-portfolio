import React, { useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    screenshots: ""
  });

  const ADMIN_PASS = process.env.REACT_APP_ADMIN_PASS || "";

  const handleLogin = () => {
    if (!ADMIN_PASS) {
      alert("Admin password is not set. Add REACT_APP_ADMIN_PASS in .env");
      return;
    }

    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASS) setAuth(true);
    else alert("Incorrect password");
  };

  const handleAdd = () => {
    const arr = form.screenshots
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const newProject = {
      id: form.id,
      title: form.title,
      subtitle: form.subtitle,
      description: form.description,
      github: form.github,
      screenshots: arr
    };

    const existing = JSON.parse(localStorage.getItem("extraProjects")) || [];
    existing.push(newProject);

    localStorage.setItem("extraProjects", JSON.stringify(existing));
    alert("Project Added ✔");

    setForm({
      id: "",
      title: "",
      subtitle: "",
      description: "",
      github: "",
      screenshots: ""
    });
  };

  /* ---------------------- LOGIN UI ---------------------- */
  if (!auth) {
    return (
      <div className="admin-page">
        <div className="admin-card">
          <h2 className="admin-title">Admin Login</h2>
          <p className="admin-sub">
            Protected panel — requires environment password.
          </p>

          <button className="admin-btn primary-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------- ADMIN DASHBOARD ---------------------- */
  return (
    <div className="admin-page">
      <div className="admin-card">
        <h2 className="admin-title">Add New Project</h2>

        <div className="admin-form">

          <input
            className="admin-input"
            placeholder="Project ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            className="admin-input"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            className="admin-input"
            placeholder="Subtitle"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          />

          <textarea
            className="admin-textarea"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            className="admin-input"
            placeholder="GitHub URL"
            value={form.github}
            onChange={(e) =>
              setForm({ ...form, github: e.target.value })
            }
          />

          <textarea
            className="admin-textarea"
            placeholder="Screenshots (comma separated)"
            value={form.screenshots}
            onChange={(e) =>
              setForm({ ...form, screenshots: e.target.value })
            }
          />

          <button className="admin-btn primary-btn" onClick={handleAdd}>
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
}
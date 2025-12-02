import React, { useState } from "react";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const [form, setForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    screenshots: ""
  });

  const handleLogin = () => {
    if (passwordInput === "12345678") {
      setLoggedIn(true);
    } else {
      alert("Incorrect Password!");
    }
  };

  const handleAdd = () => {
    const screenshotsArray = form.screenshots.split(",").map(s => s.trim());

    const newProject = {
      id: form.id,
      title: form.title,
      subtitle: form.subtitle,
      description: form.description,
      github: form.github,
      screenshots: screenshotsArray
    };

    const existing = JSON.parse(localStorage.getItem("extraProjects")) || [];
    existing.push(newProject);

    localStorage.setItem("extraProjects", JSON.stringify(existing));

    alert("Project Added Successfully!");
  };

  if (!loggedIn) {
    return (
      <div style={{ padding: 40, textAlign: "center", color: "white" }}>
        <h2>Admin Login</h2>

        <input
          type="password"
          placeholder="Enter Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ padding: 10, width: 240, borderRadius: 8 }}
        />
        <br /><br />
        <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Add New Project</h1>

      <input
        type="text"
        placeholder="Project ID"
        value={form.id}
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="Project Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="Subtitle"
        value={form.subtitle}
        onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
      /><br /><br />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      ></textarea><br /><br />

      <input
        type="text"
        placeholder="GitHub Link"
        value={form.github}
        onChange={(e) => setForm({ ...form, github: e.target.value })}
      /><br /><br />

      <textarea
        placeholder="Screenshots (comma separated)"
        value={form.screenshots}
        onChange={(e) => setForm({ ...form, screenshots: e.target.value })}
      ></textarea><br /><br />

      <button onClick={handleAdd} style={{ padding: "10px 20px" }}>
        Add Project
      </button>
    </div>
  );
}
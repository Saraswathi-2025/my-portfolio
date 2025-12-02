import React, { useState, useEffect } from "react";

export default function Admin() {
  const PASSWORD = "12345678";

  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    screenshots: ""
  });

  // Load existing from localStorage OR fallback from project.json
  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      setProjects(JSON.parse(stored));
    } else {
      fetch("/project.json")
        .then(res => res.json())
        .then(data => {
          setProjects(data.projects);
          localStorage.setItem("projects", JSON.stringify(data.projects));
        });
    }
  }, []);

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      setLoggedIn(true);
    } else {
      alert("Wrong password!");
    }
  };

  const handleAddProject = () => {
    if (
      !newProject.id ||
      !newProject.title ||
      !newProject.github
    ) {
      alert("ID, Title, and GitHub link are required.");
      return;
    }

    const screenshotsArray = newProject.screenshots
      .split(",")
      .map(s => s.trim());

    const updated = [
      ...projects,
      { ...newProject, screenshots: screenshotsArray }
    ];

    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));

    alert("Project added!");

    setNewProject({
      id: "",
      title: "",
      subtitle: "",
      description: "",
      github: "",
      screenshots: ""
    });
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      {!loggedIn ? (
        <>
          <h1>Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
          <br /><br />
          <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
            Login
          </button>
        </>
      ) : (
        <>
          <h1>Admin Panel</h1>

          <h2>Add New Project</h2>
          <input
            placeholder="Project ID"
            value={newProject.id}
            onChange={(e) => setNewProject({ ...newProject, id: e.target.value })}
          /><br /><br />
          <input
            placeholder="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          /><br /><br />
          <input
            placeholder="Subtitle"
            value={newProject.subtitle}
            onChange={(e) =>
              setNewProject({ ...newProject, subtitle: e.target.value })
            }
          /><br /><br />
          <textarea
            placeholder="Description"
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          /><br /><br />
          <input
            placeholder="GitHub link"
            value={newProject.github}
            onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
          /><br /><br />
          <textarea
            placeholder="Screenshots (comma separated)"
            value={newProject.screenshots}
            onChange={(e) =>
              setNewProject({ ...newProject, screenshots: e.target.value })
            }
          /><br /><br />

          <button onClick={handleAddProject} style={{ padding: "10px 20px" }}>
            Add Project
          </button>

          <h2 style={{ marginTop: "40px" }}>Existing Projects</h2>
          <ul>
            {projects.map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
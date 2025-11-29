import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React", "Git", "GitHub",
    "Responsive Design", "UI/UX Basics"
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-box">{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
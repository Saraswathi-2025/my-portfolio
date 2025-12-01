import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-list">
        <div className="skill-category">
          <h2>Frontend</h2>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Tools & Libraries</h2>
          <ul>
            <li>Git & GitHub</li>
            <li>Figma (UI/UX)</li>
            <li>VS Code</li>
            <li>React Router</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Soft Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
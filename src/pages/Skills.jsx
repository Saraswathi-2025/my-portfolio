import React from "react";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <main className="page-wrap">
      <div className="page-inner">
        <h1>Skills</h1>
        <ul className="skill-list">
          <li>React / Redux</li>
          <li>TypeScript / JavaScript</li>
          <li>HTML & CSS (responsive, accessibility)</li>
          <li>Performance & web fundamentals</li>
        </ul>
      </div>
    </main>
  );
};

export default Skills;
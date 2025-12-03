import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {

  const groups = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript (ES6+)", "React"],
    },
    {
      title: "Tools",
      items: ["Git & GitHub", "VS Code", "Figma", "React Router"],
    },
    {
      title: "Soft Skills",
      items: ["Problem Solving", "Communication", "Time Management", "Collaboration"],
    },
  ];

  return (
    <motion.section
      className="skills container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Page Header */}
      <header className="skills-head">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Technologies and abilities I work with every day.</p>
      </header>

      {/* Skills Grid */}
      <div className="skills-grid">
        {groups.map((group, i) => (
          <motion.div
            key={group.title}
            className="skill-card card"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 * i },
            }}
          >
            <h4 className="skill-title">{group.title}</h4>

            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
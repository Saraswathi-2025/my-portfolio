import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

export default function Skills() {

  const groups = [
    {
      title: "Frontend Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "React",
        "Responsive Design",
      ],
    },
    {
      title: "Tools & Workflow",
      items: ["Git & GitHub", "VS Code", "Figma (UI/UX)", "React Router"],
    },
    {
      title: "Soft Skills",
      items: [
        "Problem Solving",
        "Communication",
        "Time Management",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <motion.section
      className="skills container"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <header className="skills-head">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">
          Technologies and tools I use to build clean and modern web interfaces.
        </p>
      </header>

      {/* Skill Cards Grid */}
      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.12 },
            }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className="skill-title">{group.title}</h3>

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
import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <motion.section
      className="resume container"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <header className="resume-head">
        <h2 className="section-title">Resume</h2>
        <p className="section-sub">A quick overview — experience, skills & education.</p>
      </header>

      <div className="resume-grid">
        {/* LEFT: Summary + Experience */}
        <div className="resume-left card">
          <div className="resume-profile">
            <img src={process.env.PUBLIC_URL + "/profile.png"} alt="Saraswathi" loading="lazy" />
            <div>
              <h3 className="resume-name">Saraswathi</h3>
              <p className="resume-role">Aspiring Frontend Developer</p>
            </div>
          </div>
          <section className="resume-section">
  <h4>Achievements</h4>

  <div className="resume-item">
    <div className="ri-meta">
      <strong>Completed 25+ Frontend Projects</strong>
    </div>
    <div className="ri-desc">
      Successfully built multiple UI components, full websites, and practice apps using HTML, CSS, JavaScript, and React.
    </div>
  </div>

  <div className="resume-item">
    <div className="ri-meta">
      <strong>Portfolio Website</strong>
    </div>
    <div className="ri-desc">
      Designed and built a fully animated, glassmorphism-based professional portfolio website.
    </div>
  </div>

  <div className="resume-item">
    <div className="ri-meta">
      <strong>Consistent Self-Learning</strong>
    </div>
    <div className="ri-desc">
      Learning and improving every day through projects, documentation, and real-world problem solving.
    </div>
  </div>
</section>
          <section className="resume-section">
  <h4>Education</h4>

  <div className="resume-item">
    <div className="ri-meta">
      <strong>SMC College</strong>
      <span className="ri-date">Graduated 2023</span>
    </div>
    <div className="ri-desc">
      Completed higher secondary education with focus on computer science fundamentals.
    </div>
  </div>

  <div className="resume-item">
    <div className="ri-meta">
      <strong>Self-Learning (2023–Present)</strong>
    </div>
    <div className="ri-desc">
      Actively studying frontend development, UI/UX fundamentals, and building real projects using React.
    </div>
  </div>
</section>

          <section className="resume-section">
            <h4>Summary</h4>
            <p>
              Motivated frontend developer building accessible, responsive interfaces using HTML, CSS, JavaScript, and React. Seeking junior frontend roles and collaborations.
            </p>
          </section>

          <section className="resume-section">
            <h4>Experience (selected)</h4>
            <div className="resume-item">
              <div className="ri-meta">
                <strong>Personal Projects</strong>
                <span className="ri-date">2023 — Present</span>
              </div>
              <div className="ri-desc">Built multiple React projects, portfolio site, and small utilities; focused on responsive UI and accessibility.</div>
            </div>
          </section>

          <a
  className="btn resume-download primary-btn"
  href={process.env.PUBLIC_URL + "/Saraswathi_ATS.pdf"}
  target="_blank"
  rel="noreferrer"
>
  Download Resume (PDF)
</a>
        </div>

        {/* RIGHT: Skills, Education, Achievements (short) */}
        <aside className="resume-right">
          <div className="card resume-mini">
            <h4>Top Skills</h4>
            <ul className="mini-list">
              <li>HTML & CSS (responsive)</li>
              <li>JavaScript (ES6+)</li>
              <li>React & React Router</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>

          <div className="card resume-mini">
            <h4>Education</h4>
            <div className="mini-list">
              <div><strong>SMC College</strong><div className="ri-date">Graduated 2023</div></div>
            </div>
          </div>

          <div className="card resume-mini">
            <h4>Certifications</h4>
            <ul className="mini-list">
              <li>Responsive Web Design (freecodecamp)</li>
            </ul>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
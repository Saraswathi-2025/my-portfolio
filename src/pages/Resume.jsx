import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <motion.div
      className="resume-page container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* ===================== HEADER ===================== */}
      <header className="resume-header">
        <h2 className="section-title">Resume</h2>
        <p className="section-sub">
          Download my resume or explore my education timeline.
        </p>

        {/* Download Button */}
        <a
          href={process.env.PUBLIC_URL + "/Saraswathi_ATS.pdf"}
          className="download-btn primary-btn"
          download
        >
          ⬇ Download Resume (PDF)
        </a>
      </header>

      {/* ===================== RESUME PREVIEW ===================== */}
      <div className="resume-card fade">
        <iframe
          className="resume-preview"
          src={process.env.PUBLIC_URL + "/Saraswathi_ATS.pdf"}
          title="Resume Preview"
        />
      </div>

      {/* ===================== EDUCATION TIMELINE ===================== */}
      <section className="education-section fade">
        <h3 className="edu-title">Education</h3>

        <div className="timeline">

          {/* Entry 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h4>Diploma in Computer Science</h4>
              <p className="timeline-year">2022 – Present</p>
              <p className="timeline-desc">
                Learning programming fundamentals, frontend development, DBMS, problem solving,
                and software engineering concepts.
              </p>
            </div>
          </div>

          {/* Entry 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h4>High School (10th Grade)</h4>
              <p className="timeline-year">Completed</p>
              <p className="timeline-desc">
                Strong foundation in mathematics, science, communication skills, and computer basics.
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
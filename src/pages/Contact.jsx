import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.section
      className="contact container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="contact-card">

        <h2 className="contact-title">Let’s Talk</h2>
        <p className="contact-sub">
          Open to collaborations, internships, freelance work, and junior frontend roles.
        </p>

        <div className="contact-actions">

          <a className="contact-btn primary-btn" href="mailto:saraswathiachari02@gmail.com">
            📧 Email
          </a>

          <a
            className="contact-btn outline-btn"
            href="https://github.com/Saraswathi-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>

          <a
            className="contact-btn outline-btn"
            href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>

        </div>
      </div>
    </motion.section>
  );
}
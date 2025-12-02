import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-card">

        <h1 className="contact-title">Contact</h1>
        <p className="contact-sub">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="contact-buttons">

          <a href="mailto:saraswathiachari02@gmail.com" className="contact-btn">
            📧 Email
          </a>

          <a href="https://github.com/Saraswathi-2025" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-btn">
            🐙 GitHub
          </a>

          <a href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304" 
             target="_blank"
             rel="noopener noreferrer"
             className="contact-btn">
            🔗 LinkedIn
          </a>

        </div>
      </div>

    </div>
  );
}
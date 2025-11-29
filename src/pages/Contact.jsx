import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-sub">
        Let's work together — I'm open to opportunities!
      </p>

      <div className="contact-links">
        <a href="mailto:saraswathiachari02@gmail.com">📧 Email</a>
        <a href="https://github.com/Saraswathi-2025" target="_blank">🐙 GitHub</a>
        <a href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304" target="_blank">🔗 LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
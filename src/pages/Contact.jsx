import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtext">Want to work together? Reach out.</p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
        </p>

        <p>
          <strong>Resume:</strong>{" "}
          <a
            href={`${process.env.PUBLIC_URL}/Saraswathi_ATS.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
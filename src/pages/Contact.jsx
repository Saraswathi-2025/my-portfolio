import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <main className="page-wrap">
      <div className="page-inner">
        <h1>Contact</h1>
        <p className="muted">Want to work together? Reach out:</p>
        <div className="contact-grid">
          <div className="card">Email: <a href="mailto:you@domain.com">you@domain.com</a></div>
          <div className="card">Resume: <a href={`${process.env.PUBLIC_URL}/Saraswathi_ATS.pdf`}>Download</a></div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* MAIN HERO SECTION */}
      <div className="home-container">

        {/* LEFT = PROFILE CARD */}
        <div className="left-section">
          <div className="profile-card">
            <img
              src={process.env.PUBLIC_URL + "/profile.png"}
              className="profile-img"
              alt="Profile"
            />
          </div>
        </div>

        {/* RIGHT = TEXT + BUTTONS */}
        <div className="right-section">
          <h1 className="home-title">
            Hi — I'm <span className="gradient-name">Saraswathi</span>
          </h1>

          <p className="home-sub">
            Aspiring Frontend Developer — building clean, accessible, and delightful UI.
            I specialize in responsive interfaces using HTML, CSS, JavaScript, and React.
          </p>

          <div className="home-buttons">
            <a href="#/projects" className="home-btn">View Projects</a>
            <a href="#/contact" className="home-btn">Contact Me</a>
          </div>
        </div>

      </div>

      {/* ⭐⭐⭐ TESTIMONIALS SECTION ⭐⭐⭐ */}
      <div className="testimonials-section fade">
        <h2 className="testimonials-title">What People Say</h2>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Saraswathi learns very fast, writes clean code, and pays strong attention to UI details.”
            </p>
            <span className="testimonial-author">— Mentor</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “She communicates clearly and works well in teams. A promising frontend developer.”
            </p>
            <span className="testimonial-author">— Team Lead</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Dedicated, consistent, and passionate about improving her skills every day.”
            </p>
            <span className="testimonial-author">— Classmate</span>
          </div>

        </div>
      </div>

    </div>
  );
}
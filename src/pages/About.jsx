import React from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./About.css";

const About = () => {
  // activate scroll fade-in animations
  useFadeIn();

  return (
    <div className="about-container fade-in-section">
      
      {/* Girl Image */}
      <img src={`${process.env.PUBLIC_URL}/girl.png`} alt="Girl" />

      {/* Title */}
      <h1 className="about-title fade-in-section">
        Hi, I'm Saraswathi 👋
      </h1>

      {/* About Text */}
      <p className="about-text fade-in-section">
        I am a passionate Web Developer who loves creating clean, modern, 
        and functional websites. I enjoy learning new technologies and 
        improving myself every day!
      </p>

      {/* Bunny Image */}
<img src={`${process.env.PUBLIC_URL}/bunny.png`} alt="Bunny" />
      {/* Button */}
      <button 
        className="portfolio-btn fade-in-section"
        onClick={() => window.location.href = "#/portfolio"}
      >
        Go to Portfolio →
      </button>

    </div>
  );
};

export default About;
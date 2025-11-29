import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm <span>Saraswathi</span></h1>
        <p className="home-subtitle">Frontend Developer • Web Designer</p>

        <a href="/saraswathi-webdev/projects" className="home-btn">View My Work →</a>
      </div>
    </div>
  );
}

export default Home;
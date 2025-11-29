import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* LEFT SECTION – TEXT */}
      <div className="home-text">
        <h1 className="title">Hi, I'm <span>Saraswathi</span></h1>
        <h2 className="role">Frontend Web Developer</h2>

        <p className="description">
          I build clean, modern, and responsive web applications.
          Passionate about UI/UX, performance, and turning ideas into reality.
        </p>

        <div className="buttons">
          <a className="btn primary" href="#/projects">View Projects</a>
          <a className="btn secondary" href="#/contact">Contact Me</a>
        </div>
      </div>

      {/* RIGHT SECTION – IMAGE */}
      <div className="home-image">
        <img 
          src={`${process.env.PUBLIC_URL}/profile.png`} 
          alt="profile" 
        />
      </div>

    </div>
  );
}

export default Home;
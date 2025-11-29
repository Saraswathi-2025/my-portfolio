import React from "react";
import "./styles/Home.css";

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-card">
        <div className="home-left">
          <h1 className="home-title">Hi, I'm <span>Saraswathi</span></h1>
          <h2 className="home-role">Frontend Web Developer</h2>
          <p className="home-desc">
            I build clean, modern, and responsive web applications.
            Passionate about UI/UX, performance, and turning ideas into
            working products.
          </p>
          <div className="home-actions">
            <a className="btn primary" href="#/projects">View Projects</a>
            <a className="btn ghost" href="#/contact">Contact Me</a>
          </div>
        </div>

        <div className="home-right">
          {/* put a PNG in public/profile.png or change path */}
          <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="profile" />
        </div>
      </section>
    </main>
  );
};

export default Home;
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <p className="footer-text">
          © {new Date().getFullYear()}
          <span className="footer-name"> Saraswathi</span> — Built with React
        </p>

      </div>
    </footer>
  );
}
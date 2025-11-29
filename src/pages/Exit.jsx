import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exit.css";

function Exit() {
  const navigate = useNavigate();

  return (
    <div className="exit-page">
      
      {/* Bunny Image */}
      <img 
        src={`${process.env.PUBLIC_URL}/bunny-wave.png`} 
        alt="bunny waving"
        className="exit-bunny"
      />

      {/* Title */}
      <h1 className="exit-title">Goodbye for now! 👋</h1>

      {/* Subtext */}
      <p className="exit-subtext">
        If you change your mind, I'm always here!
      </p>

      {/* Button */}
      <button className="exit-back-btn" onClick={() => navigate("/about")}>
        Take me back
      </button>
    </div>
  );
}

export default Exit;
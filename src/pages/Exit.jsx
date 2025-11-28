import React from "react";
import { useNavigate } from "react-router-dom";
import "./Exit.css";

function Exit() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/About"); // Go to portfolio page
  };

  return (
    <div className="exit-page">
      
      {/* Bunny Image */}
      <img src={`${process.env.PUBLIC_URL}/bunny-wave.png`} alt="bunny-img" />

      {/* Title */}
      <h1 className="exit-title">Goodbye for now! 👋</h1>

      {/* Subtext */}
      <p className="exit-subtext">
        If you change your mind, I'm always here!
      </p>

      {/* Single Button */}
      <button className="exit-back-btn" onClick={goBack}>
        Take me back
      </button>
    </div>
  );
}

export default Exit
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      {/* Bunny */}
      <img src={`${process.env.PUBLIC_URL}/bunny-dev.png`} alt="bunny-img" />


      {/* Text */}
      <h1 className="welcome-text">Do you want to know about me?</h1>

      {/* Buttons */}
      <div className="button-row">
        <button className="btn yes" onClick={() => navigate("/about")}>
          Yes
        </button>
        <button className="btn no" onClick={() => navigate("/exit")}>
          No
        </button>
      </div>
    </div>
  );
}

export default Welcome;
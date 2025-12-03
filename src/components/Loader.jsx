import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-ring">
        <div></div><div></div><div></div><div></div>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}
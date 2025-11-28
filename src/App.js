import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Exit from "./pages/Exit";
import Intro from "./pages/Intro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/exit" element={<Exit />} />
      <Route path="/intro" element={<Intro />} />
      {/* fallback: redirect to home (optional) */}
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
}

export default App;
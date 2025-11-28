import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Exit from "./pages/Exit";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  );
}

export default App;
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Intro from "./pages/Intro";
import Exit from "./pages/Exit";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="intro" element={<Intro />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="exit" element={<Exit />} />
      </Routes>
    </Router>
  );
}

export default App;
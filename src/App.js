import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Intro from "./pages/Intro";
import Exit from "./pages/Exit";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="intro" element={<Intro />} />
      <Route path="exit" element={<Exit />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
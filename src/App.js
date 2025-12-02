import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";   // ✅ ADD THIS

// Helper: Hide Navbar & Footer on Admin page
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className="app-main">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ ADMIN ROUTE */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
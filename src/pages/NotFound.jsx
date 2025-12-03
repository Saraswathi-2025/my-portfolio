import React from "react";
import { motion } from "framer-motion";
import "./NotFound.css";

export default function NotFound() {
  return (
    <motion.div
      className="nf-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="nf-card">
        <h1 className="nf-404">404</h1>

        <p className="nf-text">
          Seems like you slipped into another dimension.
        </p>

        <a href="#/" className="nf-btn">
          ⟵ Return Home
        </a>
      </div>
    </motion.div>
  );
}
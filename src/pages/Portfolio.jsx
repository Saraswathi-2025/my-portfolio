import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// 🔥 Reusable Fade-In Animation
const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

function Portfolio() {

  // Detect mobile
  const isMobile = window.innerWidth < 600;

  // Refs
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Hover states
  const [hoverResume, setHoverResume] = useState(false);
  const [hoverEmail, setHoverEmail] = useState(false);
  const [hoverGit, setHoverGit] = useState(false);
  const [hoverLinkedin, setHoverLinkedin] = useState(false);
  const [hoverProject, setHoverProject] = useState(null);

  // Future Projects Here (Editable Anytime)
  const projectList = [
    {
      title: "Portfolio Website",
      desc: "A modern website built using React.",
      link: "https://saraswathi-2025.github.io/MyPortfolio/"
    },
    {
      title: "Music Player",
      desc: "A simple web-based music player.",
      link: "https://saraswathi-2025.github.io/Music-Player/"
    },
    {
      title: "Student Registration System",
      desc: "Form-based student entry system.",
      link: "https://saraswathi-2025.github.io/SMCEC/"
    }
  ];

  return (
    <div style={styles.container}>

      <Navbar
        scrollToSkills={skillsRef}
        scrollToProjects={projectsRef}
        scrollToContact={contactRef}
      />

      {/* HERO SECTION */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>
          Hi, I'm <span style={styles.name}>Saraswathi</span>
        </h1>

        <p style={styles.subtitle}>Full-Stack Developer (Learning)</p>

        <a
          href="/my-portfolio/Saraswathi_ATS.pdf"
          download
          style={{
            ...styles.resumeButton,
            ...(hoverResume ? styles.resumeButtonHover : {})
          }}
          onMouseEnter={() => setHoverResume(true)}
          onMouseLeave={() => setHoverResume(false)}
        >
          Download Resume
        </a>
      </motion.section>

      {/* SKILLS */}
      <section ref={skillsRef}>
        <motion.section {...fadeIn} style={styles.skillsSection}>
          <h2 style={styles.sectionTitle}>Skills</h2>

          <div style={styles.skillsGrid}>
            <span style={styles.skill}>HTML</span>
            <span style={styles.skill}>CSS</span>
            <span style={styles.skill}>JavaScript</span>
            <span style={styles.skill}>React (Learning)</span>
            <span style={styles.skill}>Node.js (Learning)</span>
            <span style={styles.skill}>Git</span>
            <span style={styles.skill}>GitHub</span>
            <span style={styles.skill}>VS Code</span>
            <span style={styles.skill}>Responsive Design</span>
            <span style={styles.skill}>Basic UI/UX</span>
          </div>
        </motion.section>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef}>
        <motion.section {...fadeIn} style={styles.projectsSection}>
          <h2 style={styles.sectionTitle}>Projects</h2>

          <div style={styles.projectGrid}>
            {projectList.map((project, index) => (
              <div
                key={index}
                style={{
                  ...styles.projectCard,
                  ...(hoverProject === index ? styles.projectCardHover : {})
                }}
                onMouseEnter={() => setHoverProject(index)}
                onMouseLeave={() => setHoverProject(null)}
              >
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.desc}</p>

                <a
                  style={styles.projectLink}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      </section>

      {/* CONTACT */}
      <section ref={contactRef}>
        <motion.section {...fadeIn} style={styles.contactSection}>
          <h2 style={styles.sectionTitle}>Contact</h2>

          <p style={styles.contactText}>
            Feel free to reach out for collaborations or opportunities.
          </p>

          <div style={styles.contactLinks}>

            <a
              className="contact-btn"
              style={{
                ...styles.contactLink,
                ...(hoverEmail ? styles.contactLinkHover : {})
              }}
              onMouseEnter={() => setHoverEmail(true)}
              onMouseLeave={() => setHoverEmail(false)}
              href="mailto:saraswathiachari02@gmail.com"
            >
              📧 Email
            </a>

            <a
              className="contact-btn"
              style={{
                ...styles.contactLink,
                ...(hoverGit ? styles.contactLinkHover : {})
              }}
              onMouseEnter={() => setHoverGit(true)}
              onMouseLeave={() => setHoverGit(false)}
              href="https://github.com/Saraswathi-2025"
              target="_blank"
            >
              🐙 GitHub
            </a>

            <a
              className="contact-btn"
              style={{
                ...styles.contactLink,
                ...(hoverLinkedin ? styles.contactLinkHover : {})
              }}
              onMouseEnter={() => setHoverLinkedin(true)}
              onMouseLeave={() => setHoverLinkedin(false)}
              href="https://www.linkedin.com/in/saraswathi-achari-89b2a4304"
              target="_blank"
            >
              🔗 LinkedIn
            </a>

          </div>
        </motion.section>
      </section>

    </div>
  );
}

//
//  STYLES
//
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a, #1a002b)",
    padding: "40px 20px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  hero: { textAlign: "center", marginTop: "60px" },

  title: { fontSize: "3rem", fontWeight: "bold" },

  name: { color: "#b47fff" },

  subtitle: { fontSize: "1.2rem", marginTop: "10px", opacity: 0.8 },

  resumeButton: {
    display: "inline-block",
    marginTop: "25px",
    padding: "12px 30px",
    backgroundColor: "#b47fff",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },

  resumeButtonHover: { transform: "scale(1.05)", backgroundColor: "#c89bff" },

  skillsSection: { marginTop: "80px", textAlign: "center" },

  sectionTitle: {
    fontSize: "2rem",
    color: "#b47fff",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  skill: {
    padding: "10px 20px",
    backgroundColor: "#1f0033",
    borderRadius: "6px",
    border: "1px solid #43245f",
    color: "#e5d4ff",
  },

  projectsSection: { marginTop: "80px", textAlign: "center" },

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  projectCard: {
    padding: "20px",
    backgroundColor: "#160021",
    borderRadius: "10px",
    border: "1px solid #43245f",
    transition: "0.3s",
  },

  projectCardHover: {
    transform: "scale(1.02)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  projectTitle: { color: "#d8b4ff", fontSize: "1.3rem" },

  projectDesc: { color: "#d2c2e8", marginBottom: "10px" },

  projectLink: { color: "#b47fff", textDecoration: "none" },

  contactSection: { marginTop: "80px", textAlign: "center" },

  contactText: { color: "#d2c2e8", marginBottom: "20px" },

  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },

  contactLink: {
    backgroundColor: "#1f0033",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "1px solid #43245f",
    color: "#e5d4ff",
    textDecoration: "none",
    transition: "0.3s",
  },

  contactLinkHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)"
  }
};

export default Portfolio;
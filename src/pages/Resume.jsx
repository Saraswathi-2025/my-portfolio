import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <motion.section
      className="resume container"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="resume-card">

        <h2 className="resume-title">My Resume</h2>
        <p className="resume-sub">
          A quick overview of my background, skills, and experience.
        </p>

        {/* ABOUT ME */}
        <div className="resume-section">
          <h3 className="resume-heading">About Me</h3>
          <p className="resume-text">
            I am Saraswathi, a passionate and dedicated Junior Frontend Developer from Udupi, Karnataka.
            I enjoy building clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, and React.
            With experience teaching computer fundamentals and programming basics, I bring strong problem-solving skills,
            clear communication, and the ability to explain technical concepts simply. I am actively improving my
            full-stack skills and aiming to begin my career in the IT industry as a Frontend Developer.
          </p>
        </div>

        {/* CAREER OBJECTIVE */}
        <div className="resume-section">
          <h3 className="resume-heading">Career Objective</h3>
          <p className="resume-text">
            To start my career as a Frontend Web Developer in a growing IT company where I can apply my coding abilities,
            build real-world applications, and continue learning modern technologies.
          </p>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="resume-section">
          <h3 className="resume-heading">Professional Summary</h3>
          <ul className="resume-list">
            <li>Aspiring Frontend / Full-Stack Developer with knowledge in HTML, CSS, JavaScript, and basics of Python, C, and Java.</li>
            <li>Experienced as a Computer Instructor & Programming Trainer teaching Python basics, MS Office, and computer fundamentals.</li>
            <li>Strong interest in UI development, responsive design, and problem-solving.</li>
            <li>Fast learner, consistent, disciplined, and committed to starting a professional career in tech.</li>
          </ul>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="resume-section">
          <h3 className="resume-heading">Technical Skills</h3>
          <ul className="resume-list">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript (ES6+), Responsive Web Design</li>
            <li><strong>Programming:</strong> Python (basic), C (basic), Java (basic)</li>
            <li><strong>Backend (Learning):</strong> Python Django</li>
            <li><strong>Tools:</strong> VS Code, NetBeans, GitHub</li>
            <li><strong>Database:</strong> SQL (basic), MS Access</li>
            <li><strong>Software:</strong> MS Office, Tally Prime, Photoshop, Baraha, Nudi</li>
            <li><strong>Typing:</strong> English, Kannada, Hindi</li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="resume-section">
          <h3 className="resume-heading">Experience</h3>
          <p className="resume-text">
            <strong>Computer Instructor & Programming Trainer</strong><br />
            Shree Mallikarjuna Computer Education Centre, Mandarthi — <em>Aug 2024 – Present</em>
          </p>

          <ul className="resume-list">
            <li>Taught Python basics, C programming, MS Office, and Tally Prime.</li>
            <li>Guided students in hands-on projects and practical computer operations.</li>
            <li>Delivered DCA & DOA course training.</li>
            <li>Helped beginners understand programming logic and practical problem-solving.</li>
            <li>Currently strengthening frontend development skills to transition into IT.</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div className="resume-section">
          <h3 className="resume-heading">Education</h3>
          <ul className="resume-list">
            <li><strong>BCA:</strong> S.R.S.M.N.G.F.G. College, Barkur — 73.18% (2025)</li>
            <li><strong>PUC:</strong> Crossland PU College, Brahmavara — 81.67% (2021)</li>
            <li><strong>SSLC:</strong> Govt High School Avarse — 78.88% (2019)</li>
          </ul>
        </div>

        {/* CERTIFICATIONS */}
        <div className="resume-section">
          <h3 className="resume-heading">Certifications</h3>
          <ul className="resume-list">
            <li>Soft Skill Training — Ramakrishna Hegde Skill Development Center (2024)</li>
            <li>Cyber Smart Certification — WNS Cares Foundation (2022)</li>
            <li>Certificate of Appreciation — MIT College “Save Human” Event (2018)</li>
          </ul>
        </div>

        {/* STRENGTHS */}
        <div className="resume-section">
          <h3 className="resume-heading">Strengths</h3>
          <ul className="resume-list">
            <li>Problem-solving, quick learner, communication, teamwork, consistency, adaptability, hardworking.</li>
          </ul>
        </div>

        {/* LANGUAGES */}
        <div className="resume-section">
          <h3 className="resume-heading">Languages</h3>
          <p className="resume-text">English, Kannada, Hindi</p>
        </div>

        {/* DOWNLOAD BUTTON */}
        <div className="resume-download">
          <a
  className="primary-btn"
  href="/Saraswathi_ATS.pdf"
  download="Saraswathi_ATS.pdf"
>
  ⬇ Download Resume (PDF)
</a>
        </div>

      </div>
    </motion.section>
  );
}
import React, { useEffect, useRef, useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import "./About.css";

const About = () => {
  useFadeIn();

  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null);

  // ❗ Stop voice automatically when leaving page
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };
  }, []);

  // 🔊 Toggle Voice Function (ON / OFF)
  const toggleSpeech = (turnOn) => {
    // If turning OFF
    if (!turnOn) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // If turning ON
    const message = new SpeechSynthesisUtterance(
      "Hi, I'm Saraswathi. I am a passionate web developer who loves creating clean, modern and functional websites. I enjoy learning new technologies and improving myself every day."
    );

    message.rate = 1;
    message.pitch = 1;
    message.lang = "en-IN";

    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(
      (voice) =>
        voice.lang === "en-IN" ||
        voice.name.toLowerCase().includes("india")
    );

    if (indianVoice) message.voice = indianVoice;

    speechRef.current = message;
    setIsSpeaking(true);

    // Reset switch when voice ends
    message.onend = () => {
      setIsSpeaking(false);
      const checkbox = document.getElementById("voiceSwitch");
      if (checkbox) checkbox.checked = false;
    };

    window.speechSynthesis.speak(message);
  };

  return (
    <div className="about-container fade-in-section">
      
      {/* Girl Image */}
      <img
        src={`${process.env.PUBLIC_URL}/girl.png`}
        alt="Girl"
        className="about-girl"
      />

      {/* Title */}
      <h1 className="about-title fade-in-section">Hi, I'm Saraswathi 👋</h1>

      {/* Description */}
      <p className="about-text fade-in-section">
        I am a passionate Web Developer who loves creating clean, modern,
        and functional websites. I enjoy learning new technologies and
        improving myself every day!
      </p>

      {/* Bunny Image */}
      <img
        src={`${process.env.PUBLIC_URL}/bunny.png`}
        alt="Bunny"
        className="about-bunny"
      />

      {/* Go to Portfolio Button */}
      <button 
        className="portfolio-btn fade-in-section"
        onClick={() => window.location.href = "#/portfolio"}
      >
        Go to Portfolio →
      </button>

      {/* 🔊 Voice Toggle Switch */}
      <label className="voice-toggle">
        <input
          type="checkbox"
          id="voiceSwitch"
          checked={isSpeaking}
          onChange={(e) => toggleSpeech(e.target.checked)}
        />
        <span className="slider"></span>
      </label>

    </div>
  );
};

export default About;
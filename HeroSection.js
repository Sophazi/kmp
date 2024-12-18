import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Import the CSS file for styling

const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Listen for screen resize to dynamically adjust content
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulated navigation functions for buttons
  const navigateToWorkSection = () => {
    alert("Navigating to 'Our Work' section!");
  };

  const bookFreeConsultation = () => {
    alert("Opening free consultation form!");
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h2 className="hero-heading">
          {windowWidth < 768
            ? "Moments Made for You" // Shorter heading for small screens
            : "Capturing Moments, Bringing Your Vision to Life"}
        </h2>
        <p className="hero-subheading">
          KASILAM MEDIA PRODUCTION offers Photography, <br />
          Cinematography, Digital Marketing, Web Development, and more.
        </p>
        <button
          className="hero-button"
          aria-label="View Our Portfolio Section"
          onClick={navigateToWorkSection}
        >
          View Our Work
        </button>
        <p className="hero-subheading">
          From the township to the world – offering <br />
          complete media solutions for businesses and individuals.
        </p>
        <button
          className="hero-button"
          aria-label="Book a Free Consultation"
          onClick={bookFreeConsultation}
        >
          Free Consultation Now!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

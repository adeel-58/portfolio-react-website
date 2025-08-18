import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import numberImage from "../../assets/02.png";
import card1 from "../../assets/services/1.png";
import card2 from "../../assets/services/2.png";
import card3 from "../../assets/services/3.png";

function Services() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentLine = lineRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (currentLine) {
      observer.observe(currentLine);
    }

    return () => {
      if (currentLine) {
        observer.unobserve(currentLine);
      }
    };
  }, []);

  return (
    <section className="services">
      {/* Upper Section */}
      <div className="services-upper">
        <div className="services-text">
          <h5 className="services-subtitle">What I do best</h5>
          <h2 className="services-title">MY SERVICES</h2>
          <div
            ref={lineRef}
            className={`services-line ${isVisible ? "animate" : ""}`}
          ></div>
        </div>
        <img src={numberImage} alt="02" className="services-number" />
      </div>

      {/* Lower Section */}
      <div className="services-lower">
        <div className="services-left">
          {/* Cards */}
          <div className="services-cards">
            <div className="service-card">
              <img src={card1} alt="Creative Design" />
              <h4>CREATIVE DESIGN</h4>
              <p>Custom designs, promotional materials, everything design-related.</p>
            </div>

            <div className="service-card">
              <img src={card2} alt="Branding" />
              <h4>BRANDING</h4>
              <p>Comprehensive visual identities that reflect your brand's essence.</p>
            </div>

            <div className="service-card">
              <img src={card3} alt="Website Design" />
              <h4>Website Design</h4>
              <p>Visually appealing and user-friendly sites.</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="services-right">
          <h4>Skills</h4>
          <ul>
            <li>Branding design</li>
            <li>Adobe Creative Suite</li>
            <li>Print and digital media</li>
            <li>Social media content</li>
            <li>Website design</li>
            <li>Visual communication</li>
            <li>Client collaboration</li>
            <li>Layout design</li>
            <li>Collaborative in team work</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;

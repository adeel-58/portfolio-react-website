import React, { useRef, useEffect, useState } from "react";
import "./Hobbies.css";
import numberImage from "../../assets/04.png";

// Replace with your actual images
import img1 from "../../assets/hobby1.png";
import img2 from "../../assets/hobby2.png";
import img3 from "../../assets/hobby3.png";
import img4 from "../../assets/hobby4.png";

function Hobbies() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentLine = lineRef.current;
    if (!currentLine) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentLine);
    return () => {
      if (currentLine) observer.unobserve(currentLine);
    };
  }, []);

  const hobbies = [
    {
      title: "WEDDING INVITATION",
      description: "Simple and elegant wedding invitation with golden details made by hand",
    },
    {
      title: "HANDMADE BABY CHRISTENING INVITATION",
      description: "Cute and playful baby baptism invitation with watercolor teddy bear",
    },
    {
      title: "COOKING RECIPES",
      description: "A personalized recipe book where you can handwrite and preserve your favorite recipes",
    },
    {
      title: "BOARD GAME",
      description: "Handcrafted strategy board game designed to challenge and entertain.",
    },
  ];

  return (
    <section className="hobbies-container">
      {/* LEFT SIDE */}
      <div className="hobbies-left">
        <img src={numberImage} alt="Slide number" className="hobbies-number-image" />

        <div className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item">
              <h4 className="hobby-title-name">{hobby.title}</h4>
              <p className="hobby-description">{hobby.description} ●</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hobbies-right">
        <h5 className="hobbies-subtitle">HOBBIES</h5>
        <h2 className="hobbies-title">PROJECTS</h2>

        {/* Animated line */}
        <div ref={lineRef} className={`hobbies-line ${isVisible ? "animate" : ""}`}></div>

        {/* New Simple Layout */}
        <div className="hobbies-gallery">
         <div className="hobbies-grid">
  <img src={img1} alt="Hobby 1" className="hobby-img" />
  <img src={img2} alt="Hobby 2" className="hobby-img" />
  <img src={img3} alt="Hobby 3" className="hobby-img" />
  <img src={img4} alt="Hobby 4" className="hobby-img bottom-left" />
</div>

        </div>
      </div>
    </section>
  );
}

export default Hobbies;

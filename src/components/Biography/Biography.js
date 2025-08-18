import React, { useEffect, useRef, useState } from "react";
import "./Biography.css";
import numberImage from "../../assets/01.png"; // your "01" image

function Biography() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const currentLine = lineRef.current; // snapshot of the ref

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // run once
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
    <section className="biography">
      {/* Left Column */}
      <div className="bio-left">
        <img src={numberImage} alt="01" className="bio-number" />

        <div className="bio-education">
          <p className="year">2021 - 2024</p>
          <h4>UNIVERSITY OF AUREL VLAICU</h4>
          <p>Diploma in Design ●</p>

          <p className="highlight year">2024 - Present</p>
          <h4 className="highlight">UNIVERSITY OF AUREL VLAICU</h4>
          <p>Master in Product Design and Development ●</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="bio-right">
        <h5 className="bio-subtitle">About me</h5>
        <h2 className="bio-title">MY BIOGRAPHY</h2>

        {/* Yellow moving line */}
        <div
          ref={lineRef}
          className={`bio-line ${isVisible ? "animate" : ""}`}
        ></div>

        <p>
          My passion as a graphic designer is to turn creative ideas into
          powerful visuals. I have a strong foundation that began in art high
          school, where I learned about color and composition, and I deepened it
          with my design degree, where I discovered how to use art strategically.
          For two years, I’ve worked in a design company, gaining a lot of
          experience creating full brand identities and making digital content
          for social media.
        </p>

        <p>
          What motivates me is taking a client’s vision and turning it into a
          design that not only looks great but also works. My passion for design
          doesn’t stop at the office; in my free time, I love working on
          personal projects like a photo album or a recipe book. I believe that
          art and design are an important part of everyday life and help me keep
          a fresh perspective.
        </p>

        <p>
          I’m a dedicated and creative person, always ready to find new
          solutions. What I love most is that a good design can connect and
          inspire people. I’m always excited to collaborate on projects that aim
          to do just that.
        </p>
      </div>
    </section>
  );
}

export default Biography;

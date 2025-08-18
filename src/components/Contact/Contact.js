import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import numberImage from "../../assets/05.png"; // your number image

function Contact() {
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
    <section className="contact">
      {/* Upper Section */}
      <div className="contact-upper">
        <div className="contact-text">
          <h5 className="contact-subtitle">Let's get in touch</h5>
          <h2 className="contact-title">CONTACT</h2>
          <div
            ref={lineRef}
            className={`contact-line ${isVisible ? "animate" : ""}`}
          ></div>
        </div>
        <img src={numberImage} alt="05" className="contact-number" />
      </div>

      {/* Lower Section */}
      <div className="contact-lower">
        {/* Left = Form */}
        {/* Left = Form */}
<div className="contact-left">
  <h4>Contact form</h4>
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label>NAME</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>E-MAIL</label>
        <input type="email" required />
      </div>
    </div>

    <div className="form-group">
      <label>MESSAGE</label>
      <textarea required></textarea>
    </div>

    <button type="submit">SUBMIT</button>
  </form>
</div>


        {/* Right = Info */}
        <div className="contact-right">
          <p>Feel free to reach out for collaborations, projects or just to say hi.</p>
          <h4>E-MAIL</h4>
          <p>cristinapalko17@gmail.com</p>

          <h4>PHONE NUMBER</h4>
          <p>+40 758 577 624</p>

          <h4>LINKEDIN</h4>
          <p>
            <a 
              href="https://www.linkedin.com/in/cristina-palko-59a267337/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/cristina-palko-59ae67337/
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

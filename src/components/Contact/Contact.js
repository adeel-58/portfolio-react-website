import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import numberImage from "../../assets/05.png"; // your number image

function Contact() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [result, setResult] = useState("");

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

  // ✅ Handle form submission with Web3Forms
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8196ae8b-712c-4220-8de8-090aa6b12fe1"); // ✅ Your Web3Forms Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thanks for contacting me! I’ll get back to you soon.");
      event.target.reset();
    } else {
      setResult("Oops! Something went wrong. Please try again.");
    }
  };

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
        <div className="contact-left">
          <h4>Contact form</h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>NAME</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>E-MAIL</label>
                <input type="email" name="email" required />
              </div>
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea name="message" required></textarea>
            </div>

            <button type="submit">SUBMIT</button>
          </form>

          {/* ✅ Show message after form submission */}
          {result && (
            <p style={{ color: "white", marginTop: "10px", fontFamily:"Raleway", fontSize:"17px", }}>{result}</p>
          )}
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

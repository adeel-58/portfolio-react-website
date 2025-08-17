import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-img" />
    </section>
  );
}

export default Hero;

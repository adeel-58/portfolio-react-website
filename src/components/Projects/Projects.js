import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import numberImage from "../../assets/03.png";
import arrowIcon from "../../assets/arrow.png";
import arrowIconleft from "../../assets/arrow-left.png";

// Your real project images
import p1 from "../../assets/projects/1.png";
import p2 from "../../assets/projects/2.png";
import p3 from "../../assets/projects/3.png";
import p11 from "../../assets/projects/project1/1.png";
import p12 from "../../assets/projects/project1/2.png";
import p13 from "../../assets/projects/project1/3.png";
import p14 from "../../assets/projects/project1/4.png";
import p15 from "../../assets/projects/project1/5.png";
import p16 from "../../assets/projects/project1/6.png";


import p21 from "../../assets/projects/project2/1.png";
import p22 from "../../assets/projects/project2/2.png";
import p23 from "../../assets/projects/project2/3.png";
import p24 from "../../assets/projects/project2/44.png";
import p25 from "../../assets/projects/project2/5.png";
import p26 from "../../assets/projects/project2/66.png";

import p31 from "../../assets/projects/project3/1.png";
import p32 from "../../assets/projects/project3/2.png";
import p33 from "../../assets/projects/project3/3.png";
import p34 from "../../assets/projects/project3/4.png";
import p35 from "../../assets/projects/project3/5.png";
import p36 from "../../assets/projects/project3/6.png";

import p41 from "../../assets/projects/project4/1.png";
import p42 from "../../assets/projects/project4/2.png";
import p43 from "../../assets/projects/project4/3.png";
import p44 from "../../assets/projects/project4/4.png";
import p45 from "../../assets/projects/project4/5.png";
import p46 from "../../assets/projects/project4/66.png";

function Projects() {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate yellow line when visible
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

  // Slides data with actual assets
  const slides = [
    {
      numberImage,
      subtitle: "Selected work",
      mainTitle: "PROJECTS",
      projects: [
        { title: "BIZFUTURIX", description: "Branding, Website and Social media posts" },
        { title: "NAILOVA", description: "Branding, Website and Social media posts" },
        { title: "NOOKY", description: "Branding" },
        { title: "Bō", description: "Branding" },
      ],
      layout: "default", // Slide 1
    },
    {
      subtitle: "Branding, website and social media",
      mainTitle: "BIZFUTURIX",
      layout: "grid-6", // Slide 2
      images: [p11, p12, p13, p14, p15, p16],
    },
    {
      subtitle: "Branding, website and social media",
      mainTitle: "NAILOVA",
      layout: "grid-6", // Slide 3
      images: [p21, p22, p23, p24, p25, p26],
    },
    {
      subtitle: "Branding",
      mainTitle: "NOOKY",
      layout: "grid-6", // Slide 4
      images: [p31, p32, p33, p34, p35, p36],
    },
    {
      subtitle: "Branding",
      mainTitle: "Bō",
      layout: "grid-6", // Slide 5
      images: [p41, p42, p43, p44, p45, p46],
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="projects-container">
      {/* LEFT SECTION only for default layout */}
      {activeSlide.layout === "default" && (
        <div className="projects-left">
          <img
            src={activeSlide.numberImage}
            alt="Slide number"
            className="projects-number-image"
          />

          <div className="projects-list">
            {activeSlide.projects.map((project, index) => (
              <div key={index} className="project-item">
                <h4 className="project-title-name">{project.title}</h4>
                <p className="project-description">{project.description} ●</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RIGHT SECTION always visible */}
      <div className={`projects-right ${activeSlide.layout}`}>
        <h5 className="projects-subtitle">{activeSlide.subtitle}</h5>
        <h2 className="projects-title">{activeSlide.mainTitle}</h2>

        {/* Animated line → only show on default layout */}
        {activeSlide.layout === "default" && (
          <div
            ref={lineRef}
            className={`projects-line ${isVisible ? "animate" : ""}`}
          ></div>
        )}

        {/* Default layout with column + two small images */}
        {activeSlide.layout === "default" && (
          <div className="projects-gallery">
            <div className="main-project-image">
              <img src={p1} alt="Main Project" />
            </div>
            <div className="secondary-projects">
              <div className="secondary-image-container">
                <img src={p2} alt="Secondary-Project-1" />
              </div>
              <div className="secondary-image-container">
                <img src={p3} alt="Secondary-Project-2" />
              </div>
            </div>
          </div>
        )}

        {/* Grid layout slides */}
      {activeSlide.layout === "grid-6" && (
  <div className="projects-gallery-grid-wrapper">
   {/* Big first image */}
<div className="big-project-image">
  <img src={activeSlide.images[0]} alt="Main Project" />

  {/* ✅ Overlay for project1 and project2 */}
  {activeSlide.mainTitle === "BIZFUTURIX" && (
    <img
      src={require("../../assets/projects/top2.png")}
      alt="Overlay"
      className="overlay-image2"
    />
  )}

  {activeSlide.mainTitle === "NAILOVA" && (
    <img
      src={require("../../assets/projects/top.png")}
      alt="Overlay"
      className="overlay-image"
    />
  )}
</div>



    {/* Other images */}
    <div className="projects-gallery-grid">
      {activeSlide.images.slice(1).map((src, i) => (
        <img
          key={i}
          className={`grid-img img${i + 2}`} // start from img2
          src={src}
          alt={`Slide ${i + 2}`}
        />
      ))}
    </div>
  </div>
)}


        {/* Arrow buttons */}
        {activeSlide.layout !== "default" ? (
          <>
            <div
              className="projects-arrow-left"
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
              }
            >
              <img src={arrowIconleft} alt="Previous" />
            </div>
            <div className="projects-arrow-demo" onClick={handleNext}>
              <img src={arrowIcon} alt="Next" />
            </div>
          </>
        ) : (
          <div className="projects-arrow-demo" onClick={handleNext}>
            <img src={arrowIcon} alt="Next" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

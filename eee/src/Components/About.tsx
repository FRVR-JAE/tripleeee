import React from "react";
import "../styles/about.css";
import ImageSlider from "./ImageSlider"; // import the ImageSlider component

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eleifend lacus ut massa efficitur, eget maximus ligula finibus.
            </p>
            <button className="contact-us-btn navlink-hover">
              {" "}
              <a
                href="https://wa.me/+18322489686"
                className="no-decor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us
              </a>
            </button>
          </div>
          <div className="image-slider">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
            <p className="about-text-p">
            Welcome to Triple EEE Catering and Events, where culinary artistry meets seamless event execution. Our dedicated team crafts unforgettable experiences, meticulously planning every detail and serving exquisite cuisine. Elevate your events with us, and let's turn your vision into a masterpiece.
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

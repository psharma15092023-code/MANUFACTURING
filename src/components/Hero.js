
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import heroImage from "../assets/hero-factory.jpeg";

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            WOVEN BAGS MANUFACTURER
          </div>

          <h1>
            Strong Bags.
            <br />
            <span>Built for Your Business.</span>
          </h1>

          <p className="hero-description">
            JAI KEWAN BABA DISTRIBUTOR is a woven bags manufacturer
            specializing in 2D and 3D box-type bags, printed bags,
            bags with eyelets, handles, colors and customized solutions
            for business requirements.
          </p>

          <div className="hero-buttons">

            <Link to="/products" className="hero-primary-btn">
              Explore Products
              <span>→</span>
            </Link>

            <Link to="/quote" className="hero-secondary-btn">
              Request a Quote
            </Link>

          </div>

          <div className="hero-trust">

            <div className="trust-item">
              <div className="trust-icon">✓</div>

              <div>
                <strong>2D Bags</strong>
                <span>100K+ bags daily</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">✓</div>

              <div>
                <strong>3D Bags</strong>
                <span>20K+ bags daily</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon">✓</div>

              <div>
                <strong>Printed Bags</strong>
                <span>2+ MT daily</span>
              </div>
            </div>

          </div>

        </div>

<div className="hero-visual">

  <div className="hero-circle"></div>

  <div className="product-card">

    <img
      src={heroImage}
      alt="JAI KEWAN BABA woven bag manufacturing"
      className="hero-image"
    />

  </div>

  <div className="floating-card">

    <div className="floating-icon">★</div>

    

</div>
          <div className="floating-card">

            <div className="floating-icon">★</div>

            <div>
              <strong>High Production Capacity</strong>
              <span>Built for bulk requirements</span>
            </div>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;

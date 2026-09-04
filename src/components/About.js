import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import aboutImage from "../assets/About.jpeg";
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <div className="about-image-wrapper">

  <div className="about-image">

    <img
      src={aboutImage}
      alt="JAI KEWAN BABA woven bags manufacturing"
    />

  </div>

  <div className="experience-card">
    <strong>100K+</strong>
    <span>
      2D Bags<br />
      Daily Capacity
    </span>
  </div>



        
        </div>

        <div className="about-content">

          <span className="section-label">
            ABOUT JAI KEWAN BABA DISTRIBUTOR
          </span>

          <h2>
            Woven Bags
            <span> Made for Your Requirements.</span>
          </h2>

          <p className="about-intro">
            JAI KEWAN BABA DISTRIBUTOR is a woven bags manufacturer
            specializing in the production of 2D and 3D bags with
            customized options for different business requirements.
          </p>

          <p>
            Our manufacturing expertise includes box-type 3D bags,
            bottom 2D bags, printed and non-printed bags, bags with
            eyelets, bags with handles and bags manufactured in
            different colors according to customer requirements.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>2D Bag Manufacturing</h4>
                <p>
                  Production capacity of 100K+ bags per day.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>3D Box Type Bags</h4>
                <p>
                  20K+ daily capacity for box-type bags.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Customized Production</h4>
                <p>
                  Colors, handles, eyelets and printing options.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h4>Bulk Manufacturing</h4>
                <p>
                  Designed to support large-volume requirements.
                </p>
              </div>
            </div>

          </div>

          <Link to="/about" className="about-button">
            Learn More About Us
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default About;

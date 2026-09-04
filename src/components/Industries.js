
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Industries.css";

const industries = [
  {
    number: "01",
    title: "Bulk Packaging",
    description:
      "Woven bags manufactured for businesses that require strong and dependable packaging for bulk materials.",
    icon: "▦",
  },
  {
    number: "02",
    title: "Agricultural Products",
    description:
      "Durable woven bag solutions suitable for packaging and handling agricultural and commodity products.",
    icon: "🌾",
  },
  {
    number: "03",
    title: "Industrial Materials",
    description:
      "Strong 2D and 3D bag configurations designed for demanding industrial packaging requirements.",
    icon: "⚙",
  },
  {
    number: "04",
    title: "Customized Packaging",
    description:
      "Bags manufactured according to required dimensions, colors, printing, eyelets and handle configurations.",
    icon: "✦",
  },
  {
    number: "05",
    title: "Branded Packaging",
    description:
      "Printed woven bags that can be customized according to customer designs and branding requirements.",
    icon: "◇",
  },
  {
    number: "06",
    title: "Large-Volume Supply",
    description:
      "High manufacturing capacity designed to support customers with regular and large-volume bag requirements.",
    icon: "◈",
  },
];

function Industries() {
  return (
    <section className="industries-section" id="industries">

      <div className="industries-container">

        {/* HEADER */}
        <div className="industries-header">

          <div>
            <span className="section-label">
              APPLICATIONS
            </span>

            <h2>
              Woven Bags for
              <span> Different Requirements.</span>
            </h2>
          </div>

          <p>
            JAI KEWAN BABA DISTRIBUTOR manufactures flexible woven
            bag solutions for bulk packaging, industrial applications
            and customized customer requirements.
          </p>

        </div>

        {/* INDUSTRIES GRID */}
        <div className="industries-grid">

          {industries.map((industry) => (
            <div
              className="industry-card"
              key={industry.number}
            >

              <div className="industry-top">

                <span className="industry-number">
                  {industry.number}
                </span>

                <div className="industry-icon">
                  {industry.icon}
                </div>

              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              <div className="industry-arrow">
                →
              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="industries-cta">

          <div>
            <span className="section-label">
              HAVE A SPECIFIC REQUIREMENT?
            </span>

            <h3>
              Tell Us What
              <span> You Need.</span>
            </h3>

            <p>
              Share your required bag type, size, quantity,
              printing, colors, eyelets or handle requirements
              with our team.
            </p>
          </div>

          <Link to="/quote" className="industries-button">
            Request a Quote
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Industries;

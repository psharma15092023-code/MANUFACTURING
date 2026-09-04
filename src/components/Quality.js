import React from "react";
import { Link } from "react-router-dom";
import "../styles/Quality.css";

import quality1 from "../assets/quality1.jpeg";
import quality2 from "../assets/quality2.jpeg";
import quality3 from "../assets/quality3.jpeg";
import quality4 from "../assets/quality4.jpeg";

const qualityPoints = [
  {
    number: "01",
    title: "Material Selection",
    description:
      "Suitable polypropylene raw material is selected according to the required bag type, size, strength and application.",
    image: quality1,
  },
  {
    number: "02",
    title: "Manufacturing Consistency",
    description:
      "Our production process focuses on maintaining consistency in bag dimensions, construction and finishing.",
    image: quality2,
  },
  {
    number: "03",
    title: "Printing & Finishing",
    description:
      "Printed bags, colors, eyelets and handles are produced according to the agreed customer requirements.",
    image: quality3,
  },
  {
    number: "04",
    title: "Customized Requirements",
    description:
      "2D and 3D bags can be manufactured according to customer specifications, designs and required configurations.",
    image: quality4,
  },
];

function Quality() {
  return (
    <section className="quality-section" id="quality">

      <div className="quality-container">

        {/* HEADER */}
        <div className="quality-header">

          <div>
            <span className="section-label">
              QUALITY & RELIABILITY
            </span>

            <h2>
              Quality Focused.
              <span> Requirement Driven.</span>
            </h2>
          </div>

          <p>
            At JAI KEWAN BABA DISTRIBUTOR, we focus on producing
            woven bags according to the required specifications,
            configurations and customization requirements of our clients.
          </p>

        </div>

        {/* QUALITY CARDS */}
        <div className="quality-grid">

          {qualityPoints.map((item) => (
            <div className="quality-card" key={item.number}>

              {/* IMAGE */}
              <div className="quality-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="quality-number">
                {item.number}
              </div>

              <div className="quality-check">
                ✓
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

        {/* QUALITY BANNER */}
        <div className="quality-banner">

          <div className="quality-banner-content">

            <span className="section-label">
              MANUFACTURING CAPABILITY
            </span>

            <h3>
              Built to Handle
              <span> Large Volume Requirements.</span>
            </h3>

            <p>
              With a daily manufacturing capacity of more than
              100,000 2D bags, more than 20,000 3D bags and more
              than 2 MT of printed bags, we are equipped to support
              large-volume customer requirements.
            </p>

            <Link to="/quote" className="quality-button">
              Request a Quote
              <span>→</span>
            </Link>

          </div>

          <div className="quality-capacity">

            <div>
              <strong>100K+</strong>
              <span>2D Bags / Day</span>
            </div>

            <div>
              <strong>20K+</strong>
              <span>3D Bags / Day</span>
            </div>

            <div>
              <strong>2+ MT</strong>
              <span>Printed / Day</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Quality;
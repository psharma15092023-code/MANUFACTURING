import industriesImage from "../assets/industies.jpeg";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Manufacturing.css";

const steps = [
  {
    number: "01",
    title: "Raw Material",
    description:
      "Quality polypropylene raw material is selected according to the required bag type, size and application.",
  },
  {
    number: "02",
    title: "Extrusion",
    description:
      "Polypropylene material is processed into strong woven tapes that form the foundation of our bags.",
  },
  {
    number: "03",
    title: "Weaving",
    description:
      "The tapes are woven into durable fabric for manufacturing both 2D and 3D woven bags.",
  },
  {
    number: "04",
    title: "Bag Manufacturing",
    description:
      "Woven fabric is cut, formed and stitched into 2D bottom bags and customized 3D box-type bags.",
  },
  {
    number: "05",
    title: "Printing & Customization",
    description:
      "Bags can be customized with printing, colors, eyelets, handles and other customer requirements.",
  },
  {
    number: "06",
    title: "Quality & Dispatch",
    description:
      "Finished bags are checked according to the required specifications before packing and dispatch.",
  },
];

function Manufacturing() {
  return (
    <section className="manufacturing-section">

      <div className="manufacturing-container">

        {/* HEADER */}
        <div className="manufacturing-header">

          <div>
            <span className="section-label">
              MANUFACTURING EXPERTISE
            </span>

            <h2>
              Production Built
              <span> for Large-Scale Requirements.</span>
            </h2>
          </div>

          <p>
            JAI KEWAN BABA DISTRIBUTOR specializes in manufacturing
            2D and 3D woven bags with multiple customization options
            for different customer requirements.
          </p>

        </div>

        {/* CAPACITY */}
        <div className="capacity-grid">

          <div className="capacity-card">

            <div className="capacity-number">
              100K+
            </div>

            <div className="capacity-content">
              <h3>2D Bags</h3>
              <p>Daily Manufacturing Capacity</p>
            </div>

            <span className="capacity-label">
              BAGS / DAY
            </span>

          </div>

          <div className="capacity-card">

            <div className="capacity-number">
              20K+
            </div>

            <div className="capacity-content">
              <h3>3D Box Type Bags</h3>
              <p>Daily Manufacturing Capacity</p>
            </div>

            <span className="capacity-label">
              BAGS / DAY
            </span>

          </div>

          <div className="capacity-card">

            <div className="capacity-number">
              2+ MT
            </div>

            <div className="capacity-content">
              <h3>Printed Bags</h3>
              <p>Daily Production Capacity</p>
            </div>

            <span className="capacity-label">
              PER DAY
            </span>

          </div>

        </div>

        {/* MANUFACTURING PROCESS */}
        <div className="process-heading">

          <span className="section-label">
            OUR PROCESS
          </span>

          <h3>
            From Raw Material
            <span> to Finished Bags.</span>
          </h3>

        </div>

        <div className="manufacturing-process">

          {steps.map((step, index) => (
            <div
              className="process-card"
              key={step.number}
            >

              <div className="process-number">
                {step.number}
              </div>

              <div className="process-line"></div>

              <h4>{step.title}</h4>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

        {/* EXPERTISE */}
      <div className="manufacturing-expertise">

  <div className="expertise-image">
    <img
      src={industriesImage}
      alt="Woven bag manufacturing"
    />
  </div>

  <div className="expertise-content">
            <span className="section-label">
              OUR CAPABILITIES
            </span>

            <h3>
              Customized Bags
              <span> Made to Your Requirements.</span>
            </h3>

            <p>
              We manufacture woven bags in different configurations
              based on customer requirements, including bag type,
              printing, colors, eyelets and handles.
            </p>

            <Link to="/quote" className="manufacturing-button">
              Discuss Your Requirement
              <span>→</span>
            </Link>

          </div>

          <div className="expertise-list">

            <div className="expertise-item">
              <span>01</span>
              <strong>2D Bottom Bags</strong>
            </div>

            <div className="expertise-item">
              <span>02</span>
              <strong>3D Box Type Bags</strong>
            </div>

            <div className="expertise-item">
              <span>03</span>
              <strong>With / Without Eyelets</strong>
            </div>

            <div className="expertise-item">
              <span>04</span>
              <strong>Printed / Non-Printed</strong>
            </div>

            <div className="expertise-item">
              <span>05</span>
              <strong>Different Colors</strong>
            </div>

            <div className="expertise-item">
              <span>06</span>
              <strong>Handle Bags</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Manufacturing;

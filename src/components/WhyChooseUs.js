import React from "react";
import { Link } from "react-router-dom";
import "../styles/WhyChooseUs.css";

const reasons = [
{
number: "01",
title: "Consistent Quality",
description:
"We focus on maintaining consistent material, construction and finishing standards across every order.",
},
{
number: "02",
title: "Custom Manufacturing",
description:
"Choose from customized sizes, colors, printing and specifications based on your packaging requirements.",
},
{
number: "03",
title: "Reliable Supply",
description:
"Our production and distribution approach is designed to support regular and bulk business requirements.",
},
{
number: "04",
title: "Industry Experience",
description:
"We understand the practical packaging requirements of agriculture, fertilizers, construction and industrial sectors.",
},
];

function WhyChooseUs() {
return ( <section className="why-section"> <div className="why-container">

```
    {/* Left Content */}
    <div className="why-content">
      <span className="section-label">WHY CHOOSE US</span>

      <h2>
        More Than Bags.
        <span> We Deliver Confidence.</span>
      </h2>

      <p className="why-intro">
        Your packaging is an important part of your business.
        That's why we focus on dependable products, consistent
        quality and solutions designed around your requirements.
      </p>

      <div className="why-highlight">
        <div className="highlight-icon">✓</div>

        <div>
          <strong>Built Around Your Requirements</strong>
          <p>
            From standard packaging to customized solutions,
            we work to provide the right fit for your application.
          </p>
        </div>
      </div>

      <Link to="/quote" className="why-button">
        Start a Conversation
        <span>→</span>
      </Link>
    </div>

    {/* Right Content */}
    <div className="why-grid">
      {reasons.map((reason) => (
        <div className="why-card" key={reason.number}>

          <div className="why-card-top">
            <span>{reason.number}</span>

            <div className="why-check">
              ✓
            </div>
          </div>

          <h3>{reason.title}</h3>

          <p>{reason.description}</p>

          <div className="why-card-line"></div>

        </div>
      ))}
    </div>

  </div>
</section>


);
}

export default WhyChooseUs;

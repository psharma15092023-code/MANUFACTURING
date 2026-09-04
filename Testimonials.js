
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "The quality and consistency of the bags have been excellent. Their team understands our requirements and delivers reliable packaging solutions.",
    name: "Procurement Manager",
    company: "Agriculture Industry",
  },
  {
    quote:
      "We needed customized woven bags for our products and received a solution that matched our specifications and branding requirements.",
    name: "Purchase Head",
    company: "Fertilizer Industry",
  },
  {
    quote:
      "Their packaging solutions have helped us maintain dependable supply for our regular business requirements.",
    name: "Operations Manager",
    company: "Industrial Products",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-header">
          <div>
            <span className="section-label">CLIENT FEEDBACK</span>

            <h2>
              Trusted by Businesses
              <span> That Demand More.</span>
            </h2>
          </div>

          <p>
            Reliable packaging is about more than the product.
            It's about consistency, communication and dependable
            business relationships.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>

              <div className="testimonial-top">
                <div className="quote-mark">“</div>

                <div className="stars">
                  ★ ★ ★ ★ ★
                </div>
              </div>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-author">
                <div className="author-icon">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <div>
            <span>READY TO WORK WITH US?</span>

            <h3>
              Let's build a reliable packaging
              <strong> solution for your business.</strong>
            </h3>
          </div>

          <Link to="/quote" className="testimonials-button">
            Request a Quote
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;


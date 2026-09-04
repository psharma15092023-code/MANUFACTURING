import React, { useState } from "react";
import "../styles/Quote.css";

const products = [
  "2D Bottom Bags",
  "3D Box Type Bags",
  "Bags with Eyelets",
  "Printed Woven Bags",
  "Colored Woven Bags",
  "Handle Bags",
];

function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello JAI KEWAN BABA DISTRIBUTOR,

I would like to request a quotation.

Name: ${formData.name}
Company: ${formData.company}
Phone: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity}

Requirements:
${formData.requirements}
    `;

    const whatsappURL =
      "https://wa.me/918683838585?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="quote-page">

      {/* HERO */}
      <section className="quote-hero">
        <div className="quote-hero-content">

          <span className="section-label">
            REQUEST A QUOTE
          </span>

          <h1>
            Tell Us Your
            <span> Requirement.</span>
          </h1>

          <p>
            Share your woven bag requirements with us and our team
            can discuss the required product configuration,
            quantity and customization.
          </p>

        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="quote-section">

        <div className="quote-container">

          {/* LEFT SIDE */}
          <div className="quote-info">

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's Discuss Your
              <span> Requirement.</span>
            </h2>

            <p>
              Provide your basic requirement below. You can specify
              the bag type, quantity, printing, colors, eyelets,
              handles and other specifications.
            </p>

            <div className="quote-contact">

              <div>
                <strong>Satyapal</strong>

                <a href="tel:+918683838585">
                  +91 86838 38585
                </a>
              </div>

              <div>
                <strong>Harkesh Panwar</strong>

                <a href="tel:+919311718311">
                  +91 93117 18311
                </a>
              </div>

            </div>

            <div className="quote-address">

              <strong>Location</strong>

              <p>
                Building No./Flat No. 154,<br />
                Mohrauli Gurugram Road,<br />
                Sukhrali Village,<br />
                Gurugram, Haryana - 122007,<br />
                India
              </p>

            </div>

          </div>

          {/* FORM */}
          <div className="quote-form-wrapper">

            <form onSubmit={handleSubmit}>

              {/* NAME + COMPANY */}
              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* PHONE + PRODUCT */}
              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Product Required *
                  </label>

                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a product
                    </option>

                    {products.map((product) => (
                      <option
                        key={product}
                        value={product}
                      >
                        {product}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              {/* QUANTITY */}
              <div className="form-group">

                <label>
                  Estimated Quantity
                </label>

                <input
                  type="text"
                  name="quantity"
                  placeholder="Example: 50,000 bags"
                  value={formData.quantity}
                  onChange={handleChange}
                />

              </div>

              {/* REQUIREMENTS */}
              <div className="form-group">

                <label>
                  Requirements / Specifications *
                </label>

                <textarea
                  name="requirements"
                  rows="6"
                  placeholder="Tell us about size, printing, color, eyelets, handles or other requirements..."
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="quote-submit-button"
              >
                Submit Requirement <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Quote;
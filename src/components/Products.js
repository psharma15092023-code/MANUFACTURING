
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

const products = [
  {
    number: "01",
    title: "2D Bottom Bags",
    description:
      "Strong 2D woven bags manufactured with or without printing according to customer requirements.",
    tags: ["2D", "Printed", "Non-Printed"],
    icon: "▱",
  },

  {
    number: "02",
    title: "3D Box Type Bags",
    description:
      "Box-type 3D woven bags manufactured with customized specifications for different applications.",
    tags: ["3D", "Box Type", "Custom"],
    icon: "▤",
  },

  {
    number: "03",
    title: "Bags with Eyelets",
    description:
      "Woven bags manufactured with eyelets or without eyelets based on customer requirements.",
    tags: ["Eyelets", "Custom", "Durable"],
    icon: "▥",
  },

  {
    number: "04",
    title: "Printed Woven Bags",
    description:
      "Printed woven bags manufactured according to required designs, branding and specifications.",
    tags: ["Printed", "Branding", "Custom"],
    icon: "▦",
  },

  {
    number: "05",
    title: "Colored Woven Bags",
    description:
      "Woven bags available in different colors according to customer requirements and specifications.",
    tags: ["Colors", "Custom", "Woven"],
    icon: "◇",
  },

  {
    number: "06",
    title: "Handle Bags",
    description:
      "Customized woven bags manufactured with handles for convenient handling and specific applications.",
    tags: ["Handles", "Custom", "Strong"],
    icon: "✦",
  },
];

function Products() {
  return (
    <section className="products-section" id="products">

      <div className="products-container">

        <div className="products-header">

          <div>
            <span className="section-label">
              OUR PRODUCTS
            </span>

            <h2>
              Woven Bags
              <span> for Every Requirement.</span>
            </h2>
          </div>

          <p>
            Explore our range of 2D and 3D woven bags with
            customization options including printing, colors,
            eyelets and handles.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div className="product-card-item" key={product.number}>

              <div className="product-top">

                <span className="product-number">
                  {product.number}
                </span>

                <div className="product-icon">
                  {product.icon}
                </div>

              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <div className="product-tags">

                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}

              </div>

            </div>
          ))}

        </div>

        <div className="products-footer">

          <p>
            Need a customized woven bag solution?
          </p>

          <Link to="/quote" className="products-button">
            Discuss Your Requirement
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Products;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}
        <div className="footer-column footer-company">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">JK</div>

            <div>
              <strong>JAI KEWAN BABA</strong>
              <span>DISTRIBUTOR</span>
            </div>
          </Link>

          <p>
            Woven bags manufacturer specializing in 2D and 3D
            box-type bags, printed bags, eyelet bags, handle bags
            and customized woven bag solutions.
          </p>

           </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Applications</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* PRODUCTS */}
        <div className="footer-column">
          <h3>Our Products</h3>

          <span>2D Bottom Bags</span>
          <span>3D Box Type Bags</span>
          <span>Bags with Eyelets</span>
          <span>Printed Woven Bags</span>
          <span>Colored Woven Bags</span>
          <span>Handle Bags</span>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>



          <div className="footer-contact-item">
            <strong>Harkesh Panwar</strong>
            <a href="tel:+919311718311">
              +91 93117 18311
            </a>
          </div>

          <div className="footer-address">
            <strong>Address</strong>
            <p>
              Building No./Flat No. 154,<br />
              Mohrauli Gurugram Road,<br />
              Sukhrali Village,<br />
              Gurugram, Haryana - 122007,<br />
              India
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} JAI KEWAN BABA DISTRIBUTOR.
            All Rights Reserved.
          </p>

          <p>
            Woven Bags Manufacturer
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

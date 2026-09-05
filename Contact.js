import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
return ( <section className="contact-page" id="contact">


  {/* Contact Header */}
  <div className="contact-header">

    <span className="section-label">
      CONTACT US
    </span>

    <h2>
      Let's Discuss Your
      <span> Woven Bag Requirements.</span>
    </h2>

    <p>
      Looking for 2D bags, 3D box-type bags, printed bags,
      eyelet bags, handle bags or customized woven bags?
      Contact our team to discuss your requirements.
    </p>

  </div>

  {/* Contact Content */}
  <div className="contact-container">

    {/* Left Side */}
    <div className="contact-info">

      <div className="contact-info-heading">
        <span>GET IN TOUCH</span>
        <h3>
          Let's Build the Right
          <strong> Bag Solution.</strong>
        </h3>
      </div>

      <div className="contact-card">

        <div className="contact-icon">
          ☎
        </div>



      </div>

      <div className="contact-card">

        <div className="contact-icon">
          ☎
        </div>

        <div>
          <span>CONTACT PERSON</span>
          <h4>Harkesh Panwar</h4>

          <a href="tel:+919311718311">
            +91 93117 18311
          </a>
        </div>

      </div>

      <div className="contact-address">

        <div className="contact-icon">
          ⌖
        </div>

        <div>
          <span>OUR LOCATION</span>

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

    {/* Right Side */}
    <div className="contact-action">

      <div className="contact-action-inner">

        <div className="action-number">
          01
        </div>

        <span className="action-label">
          HAVE A REQUIREMENT?
        </span>

        <h3>
          Tell us what
          <span> you need.</span>
        </h3>

        <p>
          Share your required bag type, quantity, size,
          printing, colors, eyelets, handles or other
          specifications with our team.
        </p>

        <Link
          to="/quote"
          className="contact-quote-btn"
        >
          Request a Quote
          <span>→</span>
        </Link>

      </div>

    </div>

  </div>

  {/* Bottom CTA */}
  <div className="contact-bottom">

    <div>
      <span>JAI KEWAN BABA DISTRIBUTOR</span>
      <h3>
        Woven Bags Manufacturer
      </h3>
    </div>
    

  </div>

</section>


);
}

export default Contact;

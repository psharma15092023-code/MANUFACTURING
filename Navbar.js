import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
setMenuOpen(false);
};

const scrollToSection = (id) => {
closeMenu();


setTimeout(() => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}, 100);


};

return ( <header className="navbar"> <div className="navbar-container">


    {/* Logo */}
    <Link
      to="/"
      className="navbar-logo"
      onClick={() => {
        closeMenu();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <div className="logo-icon">JK</div>

      <div className="logo-text">
        <span>JAI KEWAN BABA</span>
        <small>DISTRIBUTOR</small>
      </div>
    </Link>

    {/* Navigation */}
    <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

      <Link
        to="/"
        onClick={() => {
          closeMenu();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Home
      </Link>

      <Link
        to="/"
        onClick={() => scrollToSection("about")}
      >
        About Us
      </Link>

      <Link
        to="/"
        onClick={() => scrollToSection("products")}
      >
        Products
      </Link>

      <Link
        to="/"
        onClick={() => scrollToSection("industries")}
      >
        Industries
      </Link>

      <Link
        to="/"
        onClick={() => scrollToSection("quality")}
      >
        Quality
      </Link>

      <Link
        to="/"
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </Link>

      <Link
        to="/quote"
        className="mobile-quote-btn"
        onClick={closeMenu}
      >
        Request a Quote
      </Link>

    </nav>

    {/* Desktop Quote Button */}
    <Link
      to="/quote"
      className="quote-btn"
    >
      Request a Quote
      <span>→</span>
    </Link>

    {/* Mobile Menu */}
    <button
      className={`menu-toggle ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</header>


);
}

export default Navbar;

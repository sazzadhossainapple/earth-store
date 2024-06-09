import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/logo/earth_store_logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <ul className="footer-conter">
          <li>
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" className="footer-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer-img">
          <Link to="/">
            <img src={Img} alt="logo" />
          </Link>
        </div>
        <div className="copy-right">
          <span>Copyright © 2024 Planet Earth Store</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

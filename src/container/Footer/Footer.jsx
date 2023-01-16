import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="box-1">
        <h3>Vasify</h3>
        <p>Track and monitor your vaccination and medication anywhere</p>
        <FaInstagram className="instagram" />
        <FaTwitter className="twitter" />
      </div>
      <div className="box-2">
        <h3>Explore</h3>
        <ul>
          <li>
            <p>Features</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>FAQS</p>
          </li>
          <li>
            <p>Content</p>
          </li>
          <li>
            <p>Blog</p>
          </li>
        </ul>
      </div>
      <div className="box-3">
        <h3>Legal</h3>
        <p>Privacy</p>
        <p>Terms of Service</p>
      </div>
      <div className="box-4">
        <h3>Subscribe</h3>
        <p>Subscribe to get latest news and stories from us</p>
        <div className="range-box">
          <div className="range"></div>
          <span className="range-blue"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

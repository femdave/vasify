import React from "react";
import "./Testimonials.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaStar,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import dr4 from "./../../assets/dr4.png";
import phone from "./../../assets/phone3.png";

const Testimonials = () => {
  return (
    <div>
      <div className="testimonials-container">
        <h2>What are mothers saying</h2>
        <div className="testimonials-wrapper">
          <div className="arrow-left">
            <FaAngleLeft className="left-icon" />
          </div>
          <div className="testimonials">
            <div className="star-container">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="last-star" />
            </div>
            <p className="p">
              Ever since i started using vasify it has been a very good
              experience and since then i have been able to keep up with my
              son's vaccination dates and since then i have been able to keep up
              with my son's vaccination
            </p>
            <div className="testimonial-content">
              <div className="img-container">
                <img src={dr4} className="img-contain-img" alt="dr4" />
              </div>
              <div className="text">
                <p className="text-name">Sandra Bullock</p>
                <p>Mother</p>
              </div>
            </div>
          </div>
          <div className="arrow-right">
            <FaAngleRight className="right-icon" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section-container">
          <div className="section-item">
            <h2>What are you wait for? Download App Now</h2>
            <div className="button-container">
              <button className="custom-button">
                <div className="custom-button-icon-text-container">
                  <FaGooglePlay className="custom-button-icon" />
                  <div className="custom-button-text-container">
                    <span className="custom-button-text">Get it on</span>
                    <span className="custom-button-text1">Google Play</span>
                  </div>
                </div>
              </button>
              <button className="custom-button">
                <div className="custom-button-icon-text-container">
                  <FaApple className="custom-button-icon" />
                  <div className="custom-button-text-container">
                    <span className="custom-button-text">Available on the</span>
                    <span className="custom-button-text1">Apple Store</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={phone} alt="phone" className="phone-img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

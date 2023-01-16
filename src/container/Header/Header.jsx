import React from "react";
import "./Header.css";
import headerImage from "../../assets/phone.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-text-container">
        <h1 className="header-title">Your professional vaccination platform</h1>
        <p className="header-subtitle">
          Your best choice to keep up with your child's vaccination and also
          have detailed records on your child's vaccination so you can never
          miss a process
        </p>
        <p className="header-text">
          Want to join the journey now?{" "}
          <span className="bold">Download App</span>
        </p>
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
        <div className="white"></div>
      </div>
      <div className="header-image-container">
        <img src={headerImage} alt="header" className="header-image" />
        <div className="circle"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
};

export default Header;

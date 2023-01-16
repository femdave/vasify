import React from "react";
import "./About.css";
import headerImage from "../../assets/phone.png";
import contentImage from "../../assets/woman.png";

const About = () => {
  return (
    <div className="about-container">
      <h2>All the features you need in one place</h2>
      <div className="content-container">
        <div className="text-container">
          <div className="text-wrapper">
            <h3>Vaccination & medication tracking</h3>
            <p>Track and monitor your vaccination and medication anywhere</p>
          </div>
          <div className="text-wrapper">
            <h3>Incoporated records in government hospitals.</h3>
            <p>Track and monitor your vaccination and medication anywhere</p>
          </div>
        </div>
        <div className="about-image-container">
          <img src={headerImage} alt="about" className="about-image" />
        </div>
        <div className="text-container">
          <div className="text-wrapper">
            <h3>Chat with a qualified doctor</h3>
            <p>Track and monitor your vaccination and medication anywhere</p>
          </div>
          <div className="text-wrapper">
            <h3>Detailed hospital database with their descriptions</h3>
            <p>Track and monitor your vaccination and medication anywhere</p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-image-container">
          <img src={contentImage} alt="about" className="content-image" />
          <div className="rec"></div>
        </div>
        <div className="box">
          <h2>Preperations before vaccination</h2>
          <p>
            The success of the vaccine is strongly influenced by the strenght of
            the immune system. Some of the things to do for efficient
            performance of the vaccine are:
          </p>
          <br />
          <h3>01.Avoid stress</h3>
          <p>
            Avoid too much stress and playful acts so the body can be in the
            right state
          </p>
          <br />
          <h3>02.Eat Healthy Foods</h3>
          <p>
            Eating Healthy is sometimes just what we need to fight those
            diseases.
          </p>
          <br />
          <h3>03.Get Enough Sleep</h3>
          <p>
            As we all know enough sleep is always good for the body no too much
            not too little.
          </p>
          <br />
          <h3>04.Exercise </h3>
          <p>
            Before you come for vaccination always find one or two ways to
            exercise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Specialist.css";
import dr1 from "./../../assets/dr1.png";
import dr2 from "./../../assets/dr2.png";
import dr3 from "./../../assets/dr3.png";
import dr4 from "./../../assets/dr4.png";

const Specialist = () => {
  return (
    <div className="specialist-container">
      <h2>Our medical Specialist</h2>
      <div className="image-grid-container">
        <div className="image-grid-item">
          <img src={dr1} alt="dr1" className="image-grid-image" />
          <p className="image-grid-caption-line1">John Thomas</p>
          <p className="image-grid-caption-line2">Gynoecologist</p>
        </div>
        <div className="image-grid-item">
          <img src={dr2} alt="dr2" className="image-grid-image" />
          <p className="image-grid-caption-line1">Bola Fisayo</p>
          <p className="image-grid-caption-line2">Neurologist</p>
        </div>
        <div className="image-grid-item">
          <img src={dr3} alt="dr3" className="image-grid-image" />
          <p className="image-grid-caption-line1">James Young</p>
          <p className="image-grid-caption-line2">Oncologist</p>
        </div>
        <div className="image-grid-item">
          <img src={dr4} alt="dr4" className="image-grid-image" />
          <p className="image-grid-caption-line1">James Young</p>
          <p className="image-grid-caption-line2">Dermologist</p>
        </div>
      </div>
    </div>
  );
};

export default Specialist;

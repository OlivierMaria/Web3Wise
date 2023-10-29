import React from "react";
import "./feature.css";

function Feature({ title, text }) {
  return (
    <div className="web3wise__features-container__feature">
      <div className="web3wise__features-container__title">
        <h3>{title}</h3>
      </div>
      <div className="web3wise__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;

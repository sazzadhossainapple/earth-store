import React from "react";
import "./secureCard.css";

const SecureCard = ({ data }) => {
  const { secure_title, secure_text, icon } = data;
  return (
    <div className="secure-card">
      <div className="secure-icon">{icon}</div>
      <div>
        <h4 className="secure-title">
          {secure_title ? secure_title : "No data"}
        </h4>
        <p className="secure-text">{secure_text ? secure_text : "No data"}</p>
      </div>
    </div>
  );
};

export default SecureCard;

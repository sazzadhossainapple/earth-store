import React from "react";
import "./ourMission.css";
import Img from "../../../assets/about/Our-Mission-min.jpg";
const OurMission = () => {
  return (
    <div className="container mission-contaner">
      <div className="mission-left">
        <div className="mission-img">
          <img src={Img} alt="our mission" />
        </div>
      </div>
      <div className="mission-right">
        <h2 className="text-title">OUR MISSION</h2>
        <p className="content-text my-3" style={{ textAlign: "justify" }}>
          Hello, my name is Tyler Moore and with the help of many people I made
          this template. I made it so it is super easy to update and so that it
          flows perfectly with my tutorials. Lots of love and hundreds of hours
          went into making it. I hope you love it as much as I do. Give the gift
          of a lasting memory with a postcard
        </p>
        <p className="content-text mb-3" style={{ textAlign: "justify" }}>
          I wish you the best of luck with your business, enjoy the adventure.
        </p>
      </div>
    </div>
  );
};

export default OurMission;

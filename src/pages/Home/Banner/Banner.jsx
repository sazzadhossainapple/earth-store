import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div>
        <h1 className="heading-title text-center mb-1">EARTH</h1>
        <h4 className="text-center small-heading-title">MULTIPURPOSE STOR</h4>
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <Link to="/shop" className="text-text-center btns">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

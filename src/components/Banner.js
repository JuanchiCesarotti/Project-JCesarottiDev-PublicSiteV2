import React from "react";
import "./Banner.css";

const Banner = ({ title, subtitle, image }) => {
  return (
    <div className="banner">
      <img src={image} alt="Banner" />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;

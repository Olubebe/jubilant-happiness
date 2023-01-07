import React from "react";
import "./HeroSection.css";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="herosection">
        <div className="header__container">
          <h1 className="header">Welcome to random user profiles</h1>
          <p className="header__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
          <p>Welcome People</p>
          <button to="/about" className="header__btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

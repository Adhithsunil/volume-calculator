import React from "react";
import "./headers.css";
import Navbar from "../navbar/navbar";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">JalaScaping</p>
          <h1>every owner want to give best to there pet</h1>
          <p className="course-name">Don't worry we are one stop solution for you and your pet needs </p>
          <a href="#" className="demo-btn">
            <img src="" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

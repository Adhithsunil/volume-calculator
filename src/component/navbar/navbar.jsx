import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          JALAM<span className="red"> Vinyāsa </span>
        </a>

        <ul>
          <li>
            <a href="#divider">Pets Details</a>
          </li>
          <li>
            <a href="#pinkc">About</a>
          </li>
          <li>
            <a href="#blog">Products</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src="./assest/menu-icon.svg" alt="menu icon" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src="./assest/close-icon.svg" alt="close icon" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#divider" onClick={() => setIsActive(false)}>
              Pets Details
            </a>
          </li>
          <li>
            <a href="#pinkc" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

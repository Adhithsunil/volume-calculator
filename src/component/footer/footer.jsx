import React from "react";
import "./footer.css";
// import { instagramLogo, twitterLogo, facebookLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              JALAM<span className="red">Vinyāsa</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img className="imagefooter" src="./assest/arrow.png" alt="" />
              </a>

              <a href="#">
                <img className="imagefooter" src="./assest/arrow.png" alt="" />
              </a>

              <a href="#">
                <img className="imagefooter" src="./assest/arrow.png" alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2023
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>

              <li>
                <a href="#">+1 999 9999 999</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            This website is designed by GTCoding Ⓒ 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





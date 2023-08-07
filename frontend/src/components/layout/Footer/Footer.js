import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>E-COMMERCE.</h1>
        <p>High Quality and most affordable is what you need ? Don't worry we cover you.</p>

        <p>Copyrights 2023 &copy; ADARSH </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/Adarsh-singh-2002">GitHub</a>
        <a href="https://www.linkedin.com/in/adarsh-kumar-3844a51b8/">LinkedIn</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
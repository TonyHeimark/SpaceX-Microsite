import React from "react";
import "../styles/Footer.css";

const Footer = () => (
    <div className="footer">
        <div className="footer_inner">
            <div className="footer_logo__container">
                <img className="logo_footer" src={require("../images/spacex_logo_white.png")} alt="SpaceX logo" />
            </div>
            <div className="footer_social__container">
                <a href="https://twitter.com/spacex" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/spacex" target="_blank" rel="noopener noreferrer" ><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com/spacex/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footer_copyright__container">
                <p>&copy; Copyright 2019 SpaceX all rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;
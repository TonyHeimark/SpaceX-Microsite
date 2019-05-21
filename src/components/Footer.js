import React from "react";
import "../styles/Footer.css";

const Footer = () => (
    <div className="footer">
        <div className="footer_inner">
            <div className="footer_logo__container">
                <img className="logo_footer" src={require("../images/spacex_logo_white.png")} alt="SpaceX logo" />
            </div>
            <div className="footer_social__container">
                <span>Icon 1</span>
                <span>Icon 2</span>
                <span>Icon 3</span>
            </div>
            <div className="footer_copyright__container">
                <p>&copy; Copyright 2019 SpaceX all rights reserved.</p>
            </div>
        </div>
    </div>
);

export default Footer;
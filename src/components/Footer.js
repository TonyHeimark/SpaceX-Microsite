import React from "react";
import "../styles/Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer__inner-block">
            <div className="footer__logo-container">
                <img className="footer__logo" src={require("../images/spacex_logo_white.png")} alt="SpaceX logo" />
            </div>
            <div className="footer__social-container">
                <a  className="footer__link"
                    href="https://twitter.com/spacex"
                    target="_blank" rel="noopener noreferrer"
                ><i className="fab fa-twitter footer__social-icon">
                </i></a>
                <a  className="footer__link" 
                    href="https://www.youtube.com/spacex"
                    target="_blank" rel="noopener noreferrer"
                ><i className="fab fa-youtube footer__social-icon">
                </i></a>
                <a className="footer__link" 
                    href="https://www.instagram.com/spacex/"
                    target="_blank" rel="noopener noreferrer"
                ><i className="fab fa-instagram footer__social-icon">
                </i></a>
            </div>
            <div className="footer__copyright-container">
                <p className="footer__copyright">&copy; 2019 SPACE EXPLORATION TECHNOLOGIES CORP.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
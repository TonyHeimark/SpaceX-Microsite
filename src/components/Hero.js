import React from "react";
import Zoom from "react-reveal/Zoom";
import "../styles/Hero.css";

const Hero = (props) => (
    <div className="hero">
        <Zoom><h1 className="hero__title">{props.title}</h1></Zoom>
    </div>
);

export default Hero;
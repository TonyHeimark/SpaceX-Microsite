import React from "react";
import "../styles/Hero.css";

const Hero = (props) => (
    <div className="hero">
        <h1 className="hero__title">{props.title}</h1>
    </div>
);

export default Hero;
import React from "react";
import Zoom from "react-reveal/Zoom";
import "../styles/Hero.css";

const Hero = (props) => (
    <section className="hero">
        <Zoom><h1 className="hero__title">{props.title}</h1></Zoom>
    </section>
);

export default Hero;
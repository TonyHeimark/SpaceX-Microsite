import React from "react";
import NextMission from "../components/NextMission";
import RocketAnimation from "../components/RocketAnimation";
import Newsletter from "../components/Newsletter";
import News from "../components/News";
import "../styles/HomePage.css";

const HomePage = () => (
    <div>
        <div className="top_section">
            <NextMission />
        </div>
        <div className="section1">
            <Newsletter />
        </div>
        <RocketAnimation />
        <div className="section2">
            <News />
        </div>
    </div>
);

export default HomePage;
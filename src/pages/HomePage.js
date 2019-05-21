import React, { useEffect } from "react";
import NextMission from "../components/NextMission";
import RocketAnimation from "../components/RocketAnimation";
import Newsletter from "../components/Newsletter";
import News from "../components/News";
import "../styles/HomePage.css";

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div>
            <div className="top_section">
                <NextMission />
            </div>
            <div className="section1">
                <News />
            </div>
            <RocketAnimation />
            <div className="section2">
                <Newsletter />
            </div>
        </div>
    );
}

export default HomePage;
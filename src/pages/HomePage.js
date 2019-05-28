import React, { useEffect } from "react";
import NextMission from "../components/NextMission";
import RocketAnimation from "../components/RocketAnimation";
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
        </div>
    );
}

export default HomePage;
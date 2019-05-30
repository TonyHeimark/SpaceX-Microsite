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
            <section className="top_section">
                <NextMission />
            </section>
            <section className="section1">
                <News />
            </section>
            <RocketAnimation />
        </div>
    );
}

export default HomePage;
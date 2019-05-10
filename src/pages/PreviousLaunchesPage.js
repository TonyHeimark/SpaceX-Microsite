import React from "react";
import PastMissions from "../components/PastMissions";
import Hero from "../components/Hero";
import "../styles/PreviousLaunchesPage.css";

const PreviousLaunchesPage = () => (
    <div>
        <Hero title="Previous Launches" />
        <PastMissions />
    </div>
);

export default PreviousLaunchesPage;
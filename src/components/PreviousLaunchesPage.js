import React from "react";
import PastMissions from "./PastMissions";
import Hero from "./Hero";
import "../styles/PreviousLaunchesPage.css";

const PreviousLaunchesPage = () => (
    <div>
        <Hero title="Previous Launches" />
        <PastMissions />
    </div>
);

export default PreviousLaunchesPage;
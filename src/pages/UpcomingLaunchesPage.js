import React from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import FutureMissions from "../components/FutureMissions";

const UpcomingLaunchesPage = () => (
    <div>
        <Hero title="Upcoming Launches" />
        <FutureMissions />
        <div className="section2 section2--morePadding">
            <Newsletter />
        </div>
    </div>
);

export default UpcomingLaunchesPage;
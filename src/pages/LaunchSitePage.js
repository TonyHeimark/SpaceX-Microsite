import React from "react";
import Hero from "../components/Hero";
import LaunchSites from "../components/LaunchSites";
import Newsletter from "../components/Newsletter";

const LaunchSitePage = () => (
    <div>
        <Hero title="Launch Sites" />
        <LaunchSites />
        <div className="section2 section2--morePadding">
            <Newsletter />
        </div>
    </div>
);

export default LaunchSitePage;
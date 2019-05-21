import React, { useEffect } from "react";
import Hero from "../components/Hero";
import LaunchSites from "../components/LaunchSites";
import Newsletter from "../components/Newsletter";

const LaunchSitePage = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div>
            <Hero title="Launch Sites" />
            <LaunchSites />
            <div className="section2 section2--morePadding">
                <Newsletter />
            </div>
        </div>
    );
}

export default LaunchSitePage;
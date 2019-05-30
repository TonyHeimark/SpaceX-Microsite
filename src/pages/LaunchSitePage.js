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
            <section className="section2 section2--morePadding">
                <Newsletter />
            </section>
        </div>
    );
}

export default LaunchSitePage;
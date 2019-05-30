import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import FutureMissions from "../components/FutureMissions";

const UpcomingLaunchesPage = () =>{

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return(
        <div>
            <Hero title="Upcoming Launches" />
            <FutureMissions />
            <section className="section2 section2--morePadding">
                <Newsletter />
            </section>
        </div>
    );
}

export default UpcomingLaunchesPage;
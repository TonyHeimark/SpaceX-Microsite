import React, { useEffect } from "react";
import PastMissions from "../components/PastMissions";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import "../styles/PreviousLaunchesPage.css";

const PreviousLaunchesPage = () =>{

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return(
        <div>
            <Hero title="Previous Launches" />
            <PastMissions />
            <section className="section2 section2--morePadding">
                <Newsletter />
            </section>
        </div>
    );
}

export default PreviousLaunchesPage;
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import falcon9 from "../images/Falcon9.svg";
import fire from "../images/fire.svg";
import Newsletter from "../components/Newsletter";
import "../styles/RocketAnimation.css";


const RocketAnimation = () => (
  <section>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={2000}
        pin
      >
        {(progress) => (
          <div className="sticky"> 
            <Timeline totalProgress={progress} paused>
              <Tween
                  from={{x: "20%",  width: '200px', y: '220%' }}
                  to={{x: "20%", width: '200px', y: '-230%'}}
              >
              <div className="rocket-container">
              <img src={falcon9} alt="falcon9 made in Adobe Illustrator as an svg" />                
              </div>
              </Tween>
            </Timeline>

            <Timeline
              totalProgress={progress}
              paused
              target={
                <div className="fireland-container">
                <img src={fire} alt="flame made in Adobe Illustator as an svg" />
                </div>
              }
            >
              <Tween
                  from={{ x: '90%', width: "100px", y: "705%" }}
                  to={{ x: '90%', width: "100px", y: "-2400px"}}
              />
            </Timeline>

            <Timeline
              totalProgress={progress}
              paused
              target={
                <div className="newsletter_container">
                  <Newsletter />
                </div>
              }
            >
              <Tween
                  from={{ x: '200%', width: "100%", y: "-300px", height: "0%"}}
                  to={{ x: '0%', width: "100%", y: "-500px", height: "auto"}}
              />
            </Timeline>
          </div>
        )}    
      </Scene>
    </Controller>
  </section>
);

export default RocketAnimation;
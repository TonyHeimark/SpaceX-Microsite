import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import falcon9 from "../images/Falcon9.svg";
import fire from "../images/fire.svg";
import "../styles/RocketAnimation.css";


const RocketAnimation = () => (
  <div>
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
                  from={{ x: "20%", width: '200px', y: '-230%'}}
                  to={{ width: '200px', y: '60%'}}
              >
              <div className="rocket-container">
              <img src={falcon9} alt="falcon9 svg" />                
              </div>
              </Tween>
            </Timeline>

            <Timeline
              totalProgress={progress}
              paused
              target={
                <div className="fireland-container">
                <img src={fire} alt="flame svg" />
                </div>
              }
            >
              <Tween
                  from={{ x: '90%', width: "100px", y: "-1200px"}}
                  to={{ x: '90%', width: "100px", y: "175%"}}
              />
            </Timeline>
          </div>
        )}    
      </Scene>
    </Controller>
  </div>
);

export default RocketAnimation;
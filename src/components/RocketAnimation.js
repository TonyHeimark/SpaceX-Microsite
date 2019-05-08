import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import logo from '../images/logo.svg';
import fire from "../images/fire.svg";
import fireLand from "../images/fire-land.svg";
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
                    from={{ width: '150px', y: '-100%'}}
                    to={{ width: '100px', y: '60%'}}
                >
                <div className="rocket-container">
                <img src={logo} />                
                </div>
                </Tween>
              </Timeline>

              <Timeline
                totalProgress={progress}
                paused
                target={
                  <div className="fireland-container">
                  <img src={fire} />
                  </div>
                }
              >
                <Tween
                    from={{ x: '200px', width: "200px", y: "-700px"}}
                    to={{ x: '250px', width: "100px", y: "50%"}}
                />
                <Tween
                    from={{width: "0px"}}
                    to={{width: "0px"}}
                />
              </Timeline>

              <Timeline
                totalProgress={progress}
                paused
                target={
                  <div className="fire-container">
                  <img src={fireLand} />
                  </div>
                }
              >
                <Tween
                    from={{ x: '200px', width: "200px", y: "1500%"}}
                    to={{ x: '100px', width: "400px", y: "750%"}}
                />
              </Timeline>
            </div>
          )}    
        </Scene>
      </Controller>
    </div>
);

export default RocketAnimation;
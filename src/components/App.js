import React from 'react';
import "../styles/App.css";
import NextMission from "./NextMission";
import FuturePage from "./FuturePage";
import RocketAnimation from './RocketAnimation';

function App(props) {
  return (
    <div className="App">
      <NextMission />
      <div className="Section2">
      
      </div>
      <RocketAnimation />
      <div className="Section2">

      </div>
      <FuturePage />
    </div>
  );
}

export default App;

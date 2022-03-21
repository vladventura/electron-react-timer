import React, { useState, useContext, useEffect } from 'react';
import { Clock } from './components/Clock/Clock';
import { TimeContext } from './components/Clock';


const App = () => {

  const { startTimer, started, ended, paused, pause, resume } = useContext(TimeContext);

  const startOnClick = () => {
    if (!started) {
      startTimer();
    }
  };

  const pauseOrResumeOnClick = () => {
    if (!ended) {
      if (paused) {
        resume();
      } else {
        pause();
      }
    }
  };

  return (
    <div className="main-container">
      <Clock iHours={0} iMin={0} iSec={10}/>
      {!started ? <button onClick={startOnClick}>Start</button> : <button onClick={pauseOrResumeOnClick}>{paused ? "Resume" : "Pause"}</button>}
      {ended? <button>Restart</button> : <></>}
    </div>
  )
}

export default App;

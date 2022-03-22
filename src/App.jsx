import React, { useState, useContext, useEffect } from 'react';
import { Clock } from './components/Clock/Clock';
import { TimeContext } from './components/Clock';


const App = () => {

  const { startTimer, started, ended, paused, pause, resume } = useContext(TimeContext);
  const [timerOver, setTimerOver] = useState(false);

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

  const onTimerEnd = () => {
    console.log("Timer is over");
    setTimerOver(true);
    electron.notificationApi.sendNotification({
      title: "Time Over",
      body: "Time is up!"
    });
  };

  const timerOverComponent = (
    <div className="timer-over">
      Time's up
    </div>
  );

  return (
    <div className="main-container">
      {timerOver? timerOverComponent : <Clock iHours={0} iMin={0} iSec={10} onClockEnded={onTimerEnd}/>}
      {!started ? <button onClick={startOnClick}>Start</button> : <button onClick={pauseOrResumeOnClick}>{paused ? "Resume" : "Pause"}</button>}
      {ended ? <button>Restart</button> : <></>}
    </div>
  )
}

export default App;

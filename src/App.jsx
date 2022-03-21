import React, { useState, useContext, useEffect } from 'react';
import { Clock } from './components/Clock';
import { TimeContext } from './context/timeContext';


const App = () => {

  const { setTime, startTimer, tick, started, ended, paused, pause, resume } = useContext(TimeContext);
  const [tickInt, setTickInt] = useState(null);

  useEffect(() => {
    setTime({
      hours: 0,
      minutes: 1,
      seconds: 0
    });
  }, []);
  
  useEffect(() => {
    if (!ended && started) {
      if (paused) {
        clearInterval(tickInt);
        setTickInt(null);
      } else {
        setTickInt(setInterval(tick, 1000));
        console.log("Inside the paused useEffect");
      }
    }
    return () => clearInterval(tickInt);

  }, [paused, ended]);

  useEffect(() => {
    if (started) setTickInt(setInterval(tick, 1000));
    return () => clearInterval(tickInt);
  }, [started]);

  useEffect(() => {
    if (ended) clearInterval(tickInt);
    return () => clearInterval(tickInt);
  }, [ended]);


  const startOnClick = () => {
    if (!started) {
      startTimer();
    }
  };

  const pausedOnClick = () => {
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
      <Clock />
      {!started ? <button onClick={startOnClick}>Start</button> : <button onClick={pausedOnClick}>{paused ? "Resume" : "Pause"}</button>}
    </div>
  )
}

export default App;

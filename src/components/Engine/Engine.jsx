import React, { useState, useContext } from 'react';
import { Clock } from '../Clock/';
import { TimeSetter } from '../TimeSetter';
import { TimeContext } from '../Clock';
import { RuntimeButton } from '../RuntimeButton';
import './Engine.css';

export const Engine = () => {

  const { startTimer, started, ended, paused, pause, resume, restartTimer } = useContext(TimeContext);
  const [timerOver, setTimerOver] = useState(false);
  const [timerSet, setTimerSet] = useState(false);
  const [time, setTime] = useState({});

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

  const timeSetterGetTimeSet = (tm) => {
    setTime(tm);
    setTimerSet(true);
  };

  const timeSetterOrClock = (
    !timerSet ?
      <TimeSetter getTimeSet={timeSetterGetTimeSet} />
      :
      timerOver ?
        timerOverComponent
        :
        <Clock iHours={time.hours} iMin={time.minutes} iSec={time.seconds} onClockEnded={onTimerEnd} />
  );

  const restartOnClick = () => {
    restartTimer();
    setTimerOver(false);
    setTimerSet(false);
    setTime({});
  };

  const getTimerButton = () => {
    return !timerOver && timerSet ? <RuntimeButton onClick={pauseOrResumeOnClick} icon={paused ? "play" : "pause"} /> : <></>;
  }

  return (
    <div className="main-container">
      {timeSetterOrClock}
      <div className="buttons">
        {!started && timerSet ? <button className='start-button' onClick={startOnClick}>Start</button> : getTimerButton()}
        {!started && timerSet ? <button className='go-back' onClick={() => setTimerSet(false)}>Go back</button> : <></>}
        {timerOver ? <button onClick={restartOnClick}>Restart</button> : <></>}
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import './TimeSetter.css';

export const TimeSetter = ({ getTimeSet }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(10);

    const getTimeOnClick = () => {
        getTimeSet({ hours, minutes, seconds });
    };

    return (
        <div className="time-setter-container">
            <form className="timer-form">
                <div className="row-container">
                    <label htmlFor='hours'>Hours</label>
                    <input
                        id="hours"
                        name='hours'
                        type={'number'}
                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value || 0))}
                    />
                </div>
                <div className="row-container">
                    <label htmlFor='minutes'>Minutes</label>
                    <input
                        id="minutes"
                        name='minutes'
                        type={'number'}
                        value={minutes}
                        onChange={(e) => setMinutes(parseInt(e.target.value || 0))}
                    />
                </div>
                <div className="row-container">
                    <label htmlFor='seconds'>Seconds</label>
                    <input
                        id="seconds"
                        name='seconds'
                        type={'number'}
                        value={seconds}
                        onChange={(e) => setSeconds(parseInt(e.target.value || 0))}
                    />
                </div>
            </form>
            <div className="row-container">
                <button className="set-timer" onClick={getTimeOnClick}>Set Timer</button>
            </div>
        </div>
    );
}; 

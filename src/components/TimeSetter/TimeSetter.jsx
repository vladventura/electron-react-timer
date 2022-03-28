import React, { useState } from 'react';

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
                    <label className='input-label' htmlFor='hours'>H</label>
                    <input
                        id="hours"
                        name='hours'
                        className="time-input"
                        type={'numeric'}

                        value={hours}
                        onChange={(e) => setHours(parseInt(e.target.value || 0))}
                    />
                </div>
                <div className="row-container">
                    <label className='input-label' htmlFor='minutes'>M</label>
                    <input
                        id="minutes"
                        name='minutes'
                        className="time-input"
                        type={'numeric'}
                        value={minutes}
                        onChange={(e) => setMinutes(parseInt(e.target.value || 0))}
                    />
                </div>
                <div className="row-container">
                    <label className='input-label' htmlFor='seconds'>S</label>
                    <input
                        id="seconds"
                        name='seconds'
                        className="time-input"
                        type={'numeric'}
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

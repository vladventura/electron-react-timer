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
            <form>
                <label htmlFor='hours'>Hours</label>
                <input name='hours' type={'number'} value={hours} onChange={(e) => setHours(parseInt(e.target.value || 0))} />
                <label htmlFor='minutes'>Minutes</label>
                <input name='minutes' type={'number'} value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value || 0))} />
                <label htmlFor='seconds'>Seconds</label>
                <input name='seconds' type={'number'} value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value || 0))} />
                <button className="set-timer" onClick={getTimeOnClick}>Set Timer</button>
            </form>
        </div>
    );
}; 

import React from 'react';

export const ClockDisplay = ({ h, m, s }) => (
    <div className="clock-display">
        <div className="time-display">
            <p>{Math.round(h)}</p>
        </div>
        <div className="time-display">
            <p>{Math.round(m)}</p>
        </div>
        <div className="time-display">
            <p>{Math.round(s)}</p>
        </div>
    </div>
);

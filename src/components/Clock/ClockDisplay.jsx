import React from 'react';

export const ClockDisplay = ({ h, m, s }) => (
    <div className="clock-display">
        <div className="time-display h">
            <p>{Math.round(h)}</p>
            <div className="display-time-item">H</div>
        </div>
        <div className="time-display m">
            <p>{Math.round(m)}</p>
            <div className="display-time-item">M</div>
        </div>
        <div className="time-display s">
            <p>{Math.round(s)}</p>
            <div className="display-time-item">S</div>
        </div>
    </div>
);

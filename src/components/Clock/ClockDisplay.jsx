import React from 'react';

export const ClockDisplay = ({ h, m, s }) => (
    <div className="clock-display">
        <p>{Math.round(h)}</p>
        <h1>{Math.round(m)}</h1>
        <p>{Math.round(s)}</p>
    </div>
);

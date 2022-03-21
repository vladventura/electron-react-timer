import React, { useState, useEffect, useContext } from 'react';
import { TimeContext } from '../context/timeContext';

export const Clock = () => {
    const tc = useContext(TimeContext);
    const { hours, minutes, seconds } = tc;

    return <div className="clock-display">
        <p>{Math.round(hours)}</p>
        <h1>{Math.round(minutes)}</h1>
        <p>{Math.round(seconds)}</p>
    </div>
};


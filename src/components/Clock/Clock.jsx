import React, { useContext, useEffect, useState } from 'react';
import { TimeContext } from './context/timeContext';
import { ClockDisplay } from './ClockDisplay';

export const Clock = ({ onClockEnded, onClockPaused, iHours, iMin, iSec }) => {
    const tc = useContext(TimeContext);
    const { setTime, tick } = tc;
    const { hours, minutes, seconds, paused, started, ended } = tc;
    const [ticker, setTicker] = useState(null);

    useEffect(() => {
        setTime({
            hours: iHours,
            minutes: iMin,
            seconds: iSec
        });
    }, []);

    useEffect(() => {
        if (!ended && started) {
            if (paused) {
                clearInterval(ticker);
                setTicker(null);
            } else {
                setTicker(setInterval(tick, 1000));
            }
        }
        return () => clearInterval(ticker);
    }, [paused, ended]);

    useEffect(() => {
        if (started) setTicker(setInterval(tick, 1000));
        return () => clearInterval(ticker);
    }, [started]);

    useEffect(() => {
        if (ended) clearInterval(ticker);
        return () => clearInterval(ticker);
    }, [ended]);

    return <ClockDisplay h={hours} m={minutes} s={seconds} />;
};

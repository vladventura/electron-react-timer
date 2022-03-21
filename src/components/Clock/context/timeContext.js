import React, { createContext, useReducer } from 'react';
import { DateTime } from 'luxon';

const initState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    paused: false,
    started: false,
    ended: false,
    then: null,
}

const TimeContext = createContext(initState);

const timeReducer = (state, action) => {
    console.log("|TimeReducer.action|", action)
    switch (action.type) {
        case "START": return {
            ...state,
            started: true,
            paused: false,
            then: action.payload
        }
        case "SET_TIME": return {
            ...state,
            hours: action.payload.hours || state.hours,
            minutes: action.payload.minutes || state.minutes,
            seconds: action.payload.seconds || state.seconds
        }
        case "TICK": return {
            ...state,
            ...action.payload,
        }
        case "TIMER_OVER": return {
            ...state,
            ended: true,
        }
        case "PAUSED": return {
            ...state,
            paused: true
        }
        case "RESUMED": return {
            ...state,
            then: action.payload,
            paused: false
        }
        default: return state;
    }
}

const TimeProvider = (props) => {
    const [state, dispatch] = useReducer(timeReducer, initState);

    const startTimer = () => {
        const { hours, minutes, seconds } = state;
        const then = DateTime.now().plus({ hours, minutes, seconds });
        const action = {
            type: "START",
            payload: then
        };
        dispatch(action);
    };

    const tick = () => {
        if (state.paused || state.ended) return;
        const now = DateTime.now();
        if (now >= state.then) {
            clearInterval(state.tickInterval);
            electron.notificationApi.sendNotification({
                title: "Time Over",
                body: "Time is up!"
            });
            dispatch({
                type: "TIMER_OVER",
            });
        } else {
            const diff = state.then.diff(now, ['hours', 'minutes', 'seconds']).toObject();

            dispatch({
                type: "TICK",
                payload: diff
            });
        }
    };

    const setTime = (time) => {
        dispatch({
            type: "SET_TIME",
            payload: time
        });
    };

    const pause = () => {
        dispatch({
            type: "PAUSED"
        });
    };

    const resume = () => {
        const { hours, minutes, seconds } = state;
        const then = DateTime.now().plus({ hours, minutes, seconds });
        dispatch({
            type: "RESUMED",
            payload: then
        });
    };

    return <TimeContext.Provider
        value={{ ...state, tick, setTime, startTimer, pause, resume }}
        {...props}
    />
}

export { TimeContext, TimeProvider };

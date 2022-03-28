import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getColors, setColors, setDefaultColors } from '../../helpers/localStorageHelpers';
import './Settings.css';

export const Settings = () => {
    const nav = useNavigate();
    const returnOnClick = () => {
        nav('/');
    }

    const [labelsColor, setLabelsColor] = useState("");
    const [timeColor, setTimeColor] = useState("");
    const [pageBackgroundColor, setPageBackgroundColor] = useState("");
    const [timeBackgroundColor, setTimeBackgroundColor] = useState("");

    const saveChangesOnClick = () => {
        setColors({
            '--labels': labelsColor,
            '--text-color': timeColor,
            '--page-background': pageBackgroundColor,
            '--time-background': timeBackgroundColor
        });
    };

    useEffect(() => {
        const colors = getColors();
        setLabelsColor(colors['--labels']);
        setTimeColor(colors['--text-color']);
        setPageBackgroundColor(colors['--page-background']);
        setTimeBackgroundColor(colors['--time-background']);
    }, []);

    return <div className="settings-page-container">
        <div className="settings-page-main-container">
            <h1 className='settings-title'>Colors</h1>

            <form className='color-form'>

                <div className="color-container">
                    <label htmlFor="labels-color-input" className="color-input-label">Labels: </label>
                    <input
                        onChange={(e) => setLabelsColor(e.target.value)}
                        value={labelsColor}
                        type="text"
                        className="color-input"
                        id="labels-color-input"
                    />
                    <div className="labels-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="time-color" className="color-input-label">Time: </label>
                    <input onChange={(e) => setTimeColor(e.target.value)} value={timeColor} type="text" className="color-input" id="time-color" />
                    <div className="time-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="tb-color-color" className="color-input-label">Time background: </label>
                    <input onChange={(e) => setTimeBackgroundColor(e.target.value)} value={timeBackgroundColor} type="text" className="color-input" id="tb-color-color" />
                    <div className="tb-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="pb-color-input" className="color-input-label">Page background: </label>
                    <input onChange={(e) => setPageBackgroundColor(e.target.value)} value={pageBackgroundColor} type="text" className="color-input" id="pb-color-input" />
                    <div className="pb-color color-square"> </div>
                </div>

            </form>
            <button onClick={saveChangesOnClick} className='save-changes'>Save changes</button>
            <button onClick={setDefaultColors} className="set-default-colors">Set Default Colors</button>
            <button className="return-home " onClick={returnOnClick}>Return to home</button>
        </div>
    </div>
};
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

export const Settings = () => {
    const nav = useNavigate();
    const returnOnClick = () => {
        nav('/');
    }
    return <div className="settings-page-container">
        Settings page
        <div className="settings-page-main-container">
            <h1 className='settings-title'>Colors</h1>

            <form className='color-form'>

                <div className="color-container">
                    <label htmlFor="labels-color-input" className="color-input-label">Labels: </label>
                    <input type="text" className="color-input" id="labels-color-input" />
                    <div className="labels-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="time-color" className="color-input-label">Time: </label>
                    <input type="text" className="color-input" id="time-color" />
                    <div className="time-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="tb-color-color" className="color-input-label">Time background: </label>
                    <input type="text" className="color-input" id="tb-color-color" />
                    <div className="tb-color color-square"> </div>
                </div>

                <div className="color-container">
                    <label htmlFor="pb-color-input" className="color-input-label">Page background: </label>
                    <input type="text" className="color-input" id="pb-color-input" />
                    <div className="pb-color color-square"> </div>
                </div>

            </form>
            <button className='save-changes'>Save changes</button>
            <button class="return-home" onClick={returnOnClick}>Return to home</button>
        </div>
    </div>
};
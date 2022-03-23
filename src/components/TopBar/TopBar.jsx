import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '../../icons/settings.svg'
import './TopBar.css';

export const TopBar = () => {
    const nav = useNavigate();
    const settingsOnClick = () => {
        nav('/settings');
    };
    return <div className='topbar-container'>
        <div className="settings-container" onClick={settingsOnClick}>
            <SettingsIcon />
        </div>
    </div>
};
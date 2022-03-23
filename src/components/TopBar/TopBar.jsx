import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SettingsIcon from '../../icons/settings.svg';
import BackArrow from '../../icons/back-arrow.svg';
import './TopBar.css';

export const TopBar = () => {
    const nav = useNavigate();
    const loc = useLocation();
    const [Icon, setIcon] = useState(<SettingsIcon />);
    let onClick = settingsOnClick;

    useEffect(() => { }, []);

    function settingsOnClick() {
        let pathname = loc.pathname;
        switch (pathname) {
            case '/':
                setIcon(<BackArrow />)
                nav('/settings');
                break;
            case '/settings':
                setIcon(<SettingsIcon />);
                nav('/');
                break;
        }
    };

    return <div className='topbar-container'>
        <div className="settings-container" onClick={onClick}>
            {Icon}
        </div>
    </div>
};
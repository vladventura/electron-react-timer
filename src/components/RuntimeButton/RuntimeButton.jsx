import React from 'react';
import PlayButton from '../../icons/play-button.svg';
import PauseButton from '../../icons/pause-button.svg';
import './RuntimeButton.css'

export const RuntimeButton = ({ onClick, icon }) => {
    return <div onClick={onClick} className="playpause-button">
        {icon == 'play' ? <PlayButton /> : <PauseButton />}
    </div>
};
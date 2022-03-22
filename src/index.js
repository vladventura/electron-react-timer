import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { TimeProvider } from './components/Clock';

import './index.scss';
import './time.css';

ReactDOM.render(
    <TimeProvider>
        <App />
    </TimeProvider>,
    document.getElementById('root'))

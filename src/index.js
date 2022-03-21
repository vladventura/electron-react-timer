import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { TimeProvider } from './context/timeContext';

import './index.scss';

ReactDOM.render(
    <TimeProvider>
        <App />
    </TimeProvider>,
    document.getElementById('root'))

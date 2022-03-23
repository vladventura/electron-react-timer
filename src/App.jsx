import React, { useEffect } from 'react';
import { Engine } from './components/Engine/';
import { TopBar } from './components/TopBar/TopBar';
import { Settings } from './pages/Settings';
// HashBrowser: read https://stackoverflow.com/a/50404777 for more information
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return <div className='main-container'>
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Engine />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </div>;
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './HomePage';
import AiProgramPage from './AiProgramPage';
import CyberProgramPage from './CyberProgramPage';
import ProgramHeader from './components/ProgramHeader';
import './styles.css';

/**
 * App.jsx
 * This is the main entry point and router for your entire academy.
 * It defines the navigation links and the routes for each page.
 * * To install the router: npm install react-router-dom
 */

// Use shared ProgramHeader component

function App() {
  return (
    <div className="App">
      <ProgramHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ai-program" element={<AiProgramPage />} />
        <Route path="/cyber-program" element={<CyberProgramPage />} />
      </Routes>
    </div>
  );
}

export default App;

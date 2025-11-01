import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import your page components
import HomePage from './HomePage';
import AiProgramPage from './AiProgramPage';
import CyberProgramPage from './CyberProgramPage';

// Import your new single, global stylesheet
import './styles.css';

/* ================================================================================
   Shared Header Component
   ================================================================================ */
const Header = () => (
  <header className="header-main">
    <div className="header-container">
      <Link to="/" className="logo">Agnidhra Technologies</Link>
      <nav className="nav-main">
        <Link to="/">Home</Link>
        <Link to="/ai-program">AI Program</Link>
        <Link to="/cyber-program">Cyber Program</Link>
      </nav>
    </div>
  </header>
);

/* ================================================================================
   Main App Component
   ================================================================================ */
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-program" element={<AiProgramPage />} />
          <Route path="/cyber-program" element={<CyberProgramPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


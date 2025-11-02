import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
      <Link to="/" className="logo">Agnidhra<span>Technologies</span></Link>
      <nav className="nav-main">
        <Link to="/">Home</Link>
        <Link to="/ai-program">AI Program</Link>
        <Link to="/cyber-program">Cyber Program</Link>
      </nav>
    </div>
  </header>
);

/* ================================================================================
   Shared Footer Component
   ================================================================================ */
const Footer = () => (
  <footer className="footer-main">
    <div className="page-container">
      <p>&copy; {new Date().getFullYear()} Agnidhra Technologies. All rights reserved.</p>
      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/ai-program">AI Program</Link>
        <Link to="/cyber-program">Cyber Program</Link>
      </nav>
    </div>
  </footer>
);

/* ================================================================================
   Main App Component
   ================================================================================ */
function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ai-program" element={<AiProgramPage />} />
            <Route path="/cyber-program" element={<CyberProgramPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;


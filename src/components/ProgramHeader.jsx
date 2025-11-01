import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProgramHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="main-logo">
        <NavLink to="/" className="logo-link">AgnidhraTech <span>LMS</span></NavLink>
      </div>

      <button
        className="nav-toggle"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/ai-program" className={({ isActive }) => isActive ? 'active' : ''}>AI Program</NavLink>
        <NavLink to="/cyber-program" className={({ isActive }) => isActive ? 'active' : ''}>Cyber Program</NavLink>
      </nav>
    </header>
  );
}

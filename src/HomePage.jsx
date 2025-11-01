import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Homepage.jsx
 * This is the NEW main landing page for "Agnidhra Technologies".
 * It acts as a hub to direct users to the different program pages.
 */
function Homepage() {
  return (
    <div className="homepage-hub">
      <section className="hub-hero">
        <h1>Your Career in Tech Starts Here.</h1>
        <p>Choose your path. Master job-ready skills in AI or Cybersecurity with our project-based, end-to-end programs.</p>
      </section>

      <section className="program-selection">
        
        {/* AI Program Card */}
        <Link to="/ai-program" className="program-card">
          <div className="program-card-header ai-header">
            Full-Stack AI Professional
          </div>
          <div className="program-card-content">
            <h3>The AI Program</h3>
            <p>Master Data Science, MLOps, and Generative AI. Build and deploy real-world AI applications from scratch.</p>
            <span className="btn-link ai-link">
              View AI Career Path &rarr;
            </span>
          </div>
        </Link>

        {/* Cyber Program Card */}
        <Link to="/cyber-program" className="program-card">
          <div className="program-card-header cyber-header">
            Full-Stack Cyber Professional
          </div>
          <div className="program-card-content">
            <h3>The Cyber Program</h3>
            <p>Go from zero to hero. Master defensive (SOC) and offensive (PenTesting) security in hands-on labs.</p>
            <span className="btn-link cyber-link">
              View Cyber Career Path &rarr;
            </span>
          </div>
        </Link>

      </section>
    </div>
  );
}

export default Homepage;


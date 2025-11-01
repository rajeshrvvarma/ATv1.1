import React from 'react';
import { Link } from 'react-router-dom';

/* ================================================================================
   Homepage (HUB) Component
   ================================================================================ */
function Homepage() {
  return (
    <div className="homepage-hub">
      <h1>Welcome to Agnidhra Technologies</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
        Your hub for project-based, job-ready career programs.
      </p>
      <p style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
        We don't do simple courses. We build complete, end-to-end career paths to get you from zero to a portfolio-ready professional.
      </p>

      <div className="program-card-container">
        
        {/* --- AI Program Card --- */}
        <div className="program-card ai-card">
          <h3 className="program-accent-ai">Full-Stack AI Professional</h3>
          <p>
            Master Python, Data Science, MLOps, and Generative AI. Build and deploy
            everything from predictive models to full-stack RAG applications.
          </p>
          <Link to="/ai-program" className="btn btn-primary">
            View AI Program
          </Link>
        </div>

        {/* --- Cyber Program Card --- */}
        <div className="program-card cyber-card">
          <h3 className="program-accent-cyber">Full-Stack Cyber Professional</h3>
          <p>
            Master defensive and offensive security. Go from SOC analysis and
            forensics to live penetration testing and cloud security.
          </p>
          <Link to="/cyber-program" className="btn btn-primary">
            View Cyber Program
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;


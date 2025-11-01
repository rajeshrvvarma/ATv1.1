import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for "Why Us" section
const FeatureCard = ({ title, children }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
);

// Helper component for "How it Works" section
const StepItem = ({ number, title, children }) => (
  <li className="stepper-item">
    <strong>{number}</strong>
    <div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </li>
);


/* ================================================================================
   Main Homepage Component (The "Hub")
   ================================================================================ */
function Homepage() {
  return (
    <div className="homepage-hub">
      
      {/* --- Hero Section --- */}
      <section className="hero-section page-container">
        <h1>Your New Career in Tech Starts Here.</h1>
        <p className="sub-headline">
          Agnidhra Technologies isn't just a collection of courses. We build complete,
          end-to-end career paths in high-demand fields like AI and Cybersecurity.
        </p>
        <div className="hero-cta-container">
          <a href="#programs" className="btn btn-primary hero-cta">View All Programs</a>
          <a href="#why-us" className="btn btn-secondary">Why Choose Us?</a>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section id="why-us" className="why-us-section page-container">
        <h2>The "Full-Stack" Philosophy</h2>
        <p>We teach you the complete job, from foundation to deployment. No gaps, no theory-only modules. <br />You learn the full stack, you build a real portfolio, you get hired.</p>
        <div className="feature-grid">
          <FeatureCard title="Project-Based Learning">
            You don't just learn, you build. Our programs are built around a portfolio of capstone projects that prove your skills to employers.
          </FeatureCard>
          <FeatureCard title="End-to-End Curriculum">
            We cover the entire pipeline, from data analysis and model building to MLOps, deployment, and security auditing.
          </FeatureCard>
          <FeatureCard title="Taught by Experts">
            Learn from professionals who have worked at top companies and know exactly what skills the market demands.
          </FeatureCard>
        </div>
      </section>

      {/* --- Program Showcase Section --- */}
      <section id="programs" className="program-showcase page-container">
        <h2>Choose Your Career Path</h2>
        <p>We offer two flagship, project-based programs. More are coming soon.</p>
        
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
      </section>

      {/* --- How It Works Section --- */}
      <section id="how-it-works" className="how-it-works-section page-container">
        <h2>Your Path to a New Career</h2>
        <ol className="stepper">
          <li className="stepper-item">
            <strong>01</strong>
            Choose your Full-Stack Program (AI or Cyber).
          </li>
          <li className="stepper-item">
            <strong>02</strong>
            Build a portfolio of hands-on, job-ready projects.
          </li>
          <li className="stepper-item">
            <strong>03</strong>
            Follow our intensive "ASAP" plan and start applying in weeks.
          </li>
          <li className="stepper-item">
            <strong>04</strong>
            Land a top-tier job in a high-growth industry.
          </li>
        </ol>
      </section>
      
    </div>
  );
}

export default Homepage;


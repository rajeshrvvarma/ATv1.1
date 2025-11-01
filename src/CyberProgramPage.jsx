import React, { useState, useEffect } from 'react';

/* ================================================================================
   Global Styles Component (Cyber Theme)
   ================================================================================ */
const CyberGlobalStyles = () => {
  // We define the CSS as a single template literal string.
  const css = `
    /* --- Import Fonts --- */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Roboto+Mono:wght@400;700&display=swap');

    /* --- CSS Variables (Cyber Dark Theme) --- */
    :root {
      --bg-dark-primary: #0D1117;
      --bg-dark-secondary: #161B22;
      --border-color: #30363d;
      --text-primary: #e6edf3;
      --text-secondary: #8b949e;
      --text-headings: #ffffff;
      
      /* --- THIS IS THE THEME CHANGE --- */
      --accent-primary: #00f5c3; /* Bright "hacker" green */
      --accent-hover: #00c79f;
      /* --- END THEME CHANGE --- */

      --font-primary: 'Inter', sans-serif;
      --font-monospace: 'Roboto Mono', monospace;
    }

    /* --- Global Resets & Body --- */
    body.cyber-theme {
      font-family: var(--font-primary);
      background-color: var(--bg-dark-primary);
      color: var(--text-primary);
      line-height: 1.6;
    }

    body.cyber-theme h1, body.cyber-theme h2, body.cyber-theme h3, body.cyber-theme h4 {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      color: var(--text-headings);
      margin-bottom: 20px;
    }
    
    body.cyber-theme h1 { font-size: 3rem; font-weight: 800; line-height: 1.2; }
    body.cyber-theme h2 { font-size: 2.5rem; text-align: center; }
    body.cyber-theme h3 { font-size: 1.5rem; }

    body.cyber-theme p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 20px;
    }
    
    body.cyber-theme a {
      color: var(--accent-primary);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    body.cyber-theme a:hover {
      color: var(--accent-hover);
    }

    body.cyber-theme ul, body.cyber-theme ol {
      padding-left: 20px;
    }

    body.cyber-theme li {
      margin-bottom: 10px;
      color: var(--text-primary);
    }

    /* --- Layout --- */
    .cyber-container {
      width: 90%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 100px 20px;
    }

    body.cyber-theme section:nth-of-type(odd) {
      background-color: var(--bg-dark-secondary);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    /* --- Buttons --- */
    .btn {
      padding: 12px 28px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background-color: var(--accent-primary);
      color: #000;
      text-decoration: none;
    }

    .btn-primary:hover {
      background-color: var(--accent-hover);
      color: #000;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 245, 195, 0.2);
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--accent-primary);
      border: 2px solid var(--accent-primary);
      text-decoration: none;
    }

    .btn-secondary:hover {
      background-color: var(--accent-primary);
      color: #000;
    }

    /* ================================================================================
       Component Styles
       ================================================================================ */

    /* --- Hero Section --- */
    .hero-section {
      text-align: center;
      padding-top: 120px;
      padding-bottom: 120px;
    }
    .hero-section h1 {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    .hero-section .sub-headline {
      font-size: 1.25rem;
      max-width: 700px;
      margin: 0 auto 30px auto;
      color: var(--text-primary);
    }
    .hero-section .hero-cta {
      margin-right: 15px;
    }

    /* --- Persona Section --- */
    .persona-cards-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    .persona-card {
      background: var(--bg-dark-primary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 30px;
      width: 320px;
      text-align: left;
    }
    .persona-card h3 {
      color: var(--accent-primary);
    }

    /* --- Skills Ticker --- */
    .skills-ticker-container {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .skills-ticker-container h2 {
      margin-bottom: 40px;
    }
    .ticker-wrap {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }
    .ticker-track {
      display: inline-block;
      animation: scroll 40s linear infinite;
    }
    .ticker-item {
      display: inline-block;
      margin: 0 20px;
      font-size: 1.2rem;
      font-family: var(--font-monospace);
      color: var(--text-secondary);
      background: var(--bg-dark-secondary);
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    /* --- Portfolio (Cyber Labs) Section --- */
    .lab-cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 40px;
      text-align: left;
    }
    .lab-card {
      background: var(--bg-dark-primary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .lab-card .lab-tag {
      display: inline-block;
      background: var(--accent-primary);
      color: #000;
      padding: 5px 10px;
      margin: 20px 20px 0 20px;
      font-size: 0.8rem;
      font-weight: 700;
      border-radius: 5px;
      align-self: flex-start;
      font-family: var(--font-monospace);
    }
    .lab-card-content {
      padding: 20px;
      flex-grow: 1;
    }
    .lab-card-content h3 {
      color: var(--text-headings);
      font-size: 1.3rem;
    }
    .lab-card-content p {
      font-size: 1rem;
    }

    /* --- Program Structure (Stepper) --- */
    .stepper {
      max-width: 800px;
      margin: 40px auto 0 auto;
      border: 1px solid var(--border-color);
      background: var(--bg-dark-primary);
      border-radius: 8px;
      padding: 30px;
      text-align: left;
      list-style: none;
    }
    .stepper-item {
      padding: 20px;
      border-bottom: 1px dashed var(--border-color);
      font-size: 1.25rem;
      font-weight: 600;
    }
    .stepper-item:last-child {
      border-bottom: none;
    }
    .stepper-item strong {
      color: var(--accent-primary);
      font-family: var(--font-monospace);
      margin-right: 15px;
    }
    .stepper-item.final-step {
      color: var(--accent-primary);
      font-weight: 700;
      font-size: 1.4rem;
    }

    /* --- Syllabus Accordion --- */
    .syllabus-section {
      max-width: 900px;
      margin: 0 auto;
    }
    body.cyber-theme .accordion-item {
      background: var(--bg-dark-primary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      margin-bottom: 15px;
      overflow: hidden;
    }
    body.cyber-theme .accordion-title {
      width: 100%;
      padding: 20px;
      background: var(--bg-dark-secondary);
      border: none;
      text-align: left;
      font-size: 1.3rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-headings);
    }
    body.cyber-theme .accordion-title span {
      color: var(--accent-primary);
      font-size: 2rem;
      font-weight: 400;
    }
    body.cyber-theme .accordion-content {
      padding: 20px 30px 30px 30px;
      border-top: 1px solid var(--border-color);
      background: var(--bg-dark-primary);
    }
    body.cyber-theme .accordion-content h4 {
      color: var(--accent-primary);
      font-family: var(--font-monospace);
      font-size: 1.1rem;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    body.cyber-theme .accordion-content h4:first-child {
      margin-top: 0;
    }
    body.cyber-theme .accordion-content ul {
      padding-left: 20px;
    }
    body.cyber-theme .accordion-content li {
      font-size: 1rem;
      color: var(--text-primary);
    }
    body.cyber-theme .accordion-content .capstone-project {
      margin-top: 25px;
      padding: 20px;
      background: var(--bg-dark-secondary);
      border: 1px dashed var(--accent-primary);
      border-radius: 8px;
    }
    body.cyber-theme .accordion-content .capstone-project strong {
      color: var(--accent-primary);
      font-weight: 700;
      font-size: 1.1rem;
    }
    
    /* --- Instructor Section --- */
    .instructor-cards-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    .instructor-card {
      background: var(--bg-dark-primary);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 30px;
      width: 400px;
      text-align: left;
    }
    .instructor-card h3 {
      font-size: 1.4rem;
    }
    .instructor-card p.title {
      font-style: italic;
      color: var(--accent-primary);
      font-family: var(--font-monospace);
      margin-bottom: 15px;
    }
    
    /* --- Pricing Section --- */
    .pricing-cards-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    .pricing-card {
      background: var(--bg-dark-primary);
      border: 1px solid var(--border-color);
      padding: 40px;
      width: 400px;
      border-radius: 8px;
      position: relative;
      text-align: center;
    }
    .pricing-card.featured {
      border: 2px solid var(--accent-primary);
      box-shadow: 0 0 30px rgba(0, 245, 195, 0.1);
    }
    .pricing-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--accent-primary);
      color: #000;
      padding: 5px 15px;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 700;
      font-family: var(--font-monospace);
    }
    .pricing-card h3 {
      font-size: 1.8rem;
    }
    .pricing-card .price {
      font-size: 2.8rem;
      font-weight: 800;
      color: var(--accent-primary);
      margin: 15px 0;
    }
    .pricing-card .btn {
      margin-top: 20px;
    }

    /* --- FAQ Section --- */
    .faq-section {
      max-width: 800px;
      margin: 0 auto;
    }

    /* --- Footer CTA --- */
    .footer-cta-section {
      text-align: center;
      padding: 100px 20px;
      background: var(--bg-dark-secondary);
      border-top: 1px solid var(--border-color);
    }
    .footer-cta-section h2 {
      font-size: 2.8rem;
    }
    .footer-cta-section p {
      font-size: 1.2rem;
      color: var(--text-primary);
    }
    .footer-cta-section .btn {
      margin-top: 20px;
      font-size: 1.2rem;
      padding: 15px 35px;
    }
  `;

  useEffect(() => {
    // Add Cyber theme class to body when component mounts
    document.body.classList.add('cyber-theme');
    // Remove it when component unmounts
    return () => {
      document.body.classList.remove('cyber-theme');
    };
  }, []);

  // This is the standard and safer way to inject dynamic styles
  return (
    <style dangerouslySetInnerHTML={{ __html: css }} />
  );
};


/* ================================================================================
   Helper Component: Accordion Item
   ================================================================================ */
const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion-item">
      <button onClick={() => setIsOpen(!isOpen)} className="accordion-title">
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};


/* ================================================================================
   Main Page Component: CyberProgramPage
   ================================================================================ */
function CyberProgramPage() {
  return (
    <div className="homepage-wrapper">
      <CyberGlobalStyles />
      {/* Header is now global in App.jsx */}
      <main>
        <HeroSection />
        <PersonaSection />
        <SkillsTicker />
        <PortfolioSection />
        <ProgramStructure />
        <SyllabusAccordion />
        <InstructorSection />
        <PricingSection />
        <FAQAccordion />
        <FooterCTA />
      </main>
    </div>
  );
}

export default CyberProgramPage;

/* ================================================================================
   Page Sections (Components)
   ================================================================================ */

const HeroSection = () => (
  <section className="hero-section cyber-container">
    <h1>Go from Zero to Full-Stack Cyber Professional.</h1>
    <p className="sub-headline">
      Master the end-to-end skills that get you hired. Go from network fundamentals to performing live penetration tests and securing the cloud.
    </p>
    <div>
      <a href="#pricing" className="btn btn-primary hero-cta">Start Your Career Path</a>
      <a href="#labs" className="btn btn-secondary">View Hands-On Labs</a>
    </div>
  </section>
);

const PersonaSection = () => (
  <section className="persona-section cyber-container">
    <h2>Who Is This Program For?</h2>
    <p>This is not just a course. It's a complete career path built for...</p>
    <div className="persona-cards-container">
      <div className="persona-card">
        <h3>Priya, The Career Changer</h3>
        <p>A structured, A-to-Z program. You'll go from basic networking to advanced penetration testing, building a complete portfolio from scratch.</p>
      </div>
      <div className="persona-card">
        <h3>Amit, The IT Pro</h3>
        <p>Leverage your existing IT knowledge. Skip the foundations you already know and buy an advanced track like "Cloud Security" to specialize and get promoted.</p>
      </div>
      <div className="persona-card">
        <h3>Rohan, The Aspiring PenTester</h3>
        <p>This is where you get your hands dirty. We focus on practical labs, not just theory. You'll use Metasploit, Nmap, and Wireshark on real, vulnerable targets.</p>
      </div>
    </div>
  </section>
);

const SkillsTicker = () => (
  <section className="skills-ticker-container">
    <div className="cyber-container" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <h2>Tools You Will Master</h2>
      <div className="ticker-wrap">
        {/* Duplicated track for seamless loop */}
        <div className="ticker-track">
          <div className="ticker-item">Nmap</div>
          <div className="ticker-item">Wireshark</div>
          <div className="ticker-item">Metasploit</div>
          <div className="ticker-item">Kali Linux</div>
          <div className="ticker-item">Splunk</div>
          <div className="ticker-item">OWASP ZAP</div>
          <div className="ticker-item">Burp Suite</div>
          <div className="ticker-item">AWS Security</div>
          <div className="ticker-item">Azure Sentinel</div>
          <div className="ticker-item">Docker</div>
          <div className="ticker-item">Kubernetes</div>
          
          <div className="ticker-item">Nmap</div>
          <div className="ticker-item">Wireshark</div>
          <div className="ticker-item">Metasploit</div>
          <div className="ticker-item">Kali Linux</div>
          <div className="ticker-item">Splunk</div>
          <div className="ticker-item">OWASP ZAP</div>
          <div className="ticker-item">Burp Suite</div>
          <div className="ticker-item">AWS Security</div>
          <div className="ticker-item">Azure Sentinel</div>
          <div className="ticker-item">Docker</div>
          <div className="ticker-item">Kubernetes</div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section id="labs" className="portfolio-section cyber-container">
    <h2>You Don't Just Get a Certificate. You Get a Portfolio.</h2>
    <p>We are a project-based program. You will build a portfolio of hands-on labs that prove your skills to employers.</p>
    <div className="lab-cards-container">
      <div className="lab-card">
        <span className="lab-tag">Track 1 Lab</span>
        <div className="lab-card-content">
          <h3>Build & Secure a Virtual Network</h3>
          <p>Configure a firewalled network from scratch in a virtual lab. Master IP subnetting, routing tables, and network security groups.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Track 2 Lab</span>
        <div className="lab-card-content">
          <h3>Live Attack & Forensic Analysis</h3>
          <p>Use Wireshark and Splunk (SIEM) to detect and analyze a real-time simulated attack on our servers. Find the breach and present a post-incident report.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Track 3 Lab</span>
        <div className="lab-card-content">
          <h3>Full Web App PenTest</h3>
          <p>Perform a complete penetration test on our live, vulnerable sandbox app. Use Nmap, Burp Suite, and Metasploit to find and exploit the Top 10 OWASP vulnerabilities.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Track 4 Lab</span>
        <div className="lab-card-content">
          <h3>Cloud Security Audit</h3>
          <p>Given a misconfigured AWS environment, your job is to find the security flaws. Audit IAM policies, S3 bucket permissions, and network access to secure the infrastructure.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProgramStructure = () => (
  <section id="program" className="program-structure-section cyber-container">
    <h2>Your A-to-Z Career Path</h2>
    <p>A 4-step program that takes you from fundamental concepts to job-ready specialist.</p>
    <ol className="stepper">
      <li className="stepper-item"><strong>Track 1:</strong> Cyber Foundations</li>
      <li className="stepper-item"><strong>Track 2:</strong> Defensive Security & SOC Analyst</li>
      <li className="stepper-item"><strong>Track 3:</strong> Offensive Security & Penetration Tester</li>
      <li className="stepper-item"><strong>Track 4:</strong> Advanced & Cloud Security</li>
      <li className="stepper-item final-step"><strong>Goal:</strong> You are Hired.</li>
    </ol>
  </section>
);

const SyllabusAccordion = () => (
  <section id="syllabus" className="syllabus-section cyber-container">
    <h2>Program Syllabus</h2>
    <p style={{textAlign: 'center', marginBottom: '40px'}}>The complete curriculum, track by track.</p>
    
    <AccordionItem title="Track 1: Cyber Foundations (100 Hours)" defaultOpen={true}>
      <h4>1.1: Intro to Cyber Security</h4>
      <ul>
        <li>Topics: CIA Triad (Confidentiality, Integrity, Availability), Threat vs. Vulnerability, Attack Vectors, Risk Management.</li>
      </ul>
      <h4>1.2: Networking Fundamentals</h4>
      <ul>
        <li>Topics: OSI & TCP/IP Models, IP Addressing & Subnetting, DNS, DHCP, Common Ports (HTTP, SSH, FTP, RDP), Firewalls & VPNs.</li>
      </ul>
      <h4>1.3: Operating System Fundamentals</h4>
      <ul>
        <li>Topics: Windows vs. Linux, File Systems & Permissions, Processes & Services, The Command Line (Bash & PowerShell).</li>
      </ul>
      <h4>1.4: Kali Linux & Tooling</h4>
      <ul>
        <li>Topics: Setting up your virtual lab, Navigating Kali, Essential commands, Using `nmap` for basic scanning.</li>
      </ul>
      <div className="capstone-project">
        <strong>Track 1 Cyber Lab:</strong> Build and configure a secure, firewalled network in a virtual environment.
      </div>
    </AccordionItem>

    <AccordionItem title="Track 2: Defensive Security & SOC Analyst (150 Hours)">
      <h4>2.1: Security Operations (SOC)</h4>
      <ul>
        <li>Topics: Role of a SOC Analyst, Alert Triage, Log Management, Intro to SIEM (Security Information and Event Management).</li>
      </ul>
      <h4>2.2: Network Monitoring & Forensics</h4>
      <ul>
        <li>Topics: Packet Analysis, Intrusion Detection Systems (IDS/IPS).</li>
        <li>Tools: `Wireshark`, `Snort`.</li>
      </ul>
      <h4>2.3: SIEM & Log Analysis</h4>
      <ul>
        <li>Topics: Aggregating logs, Writing search queries, Building dashboards, Detecting anomalies.</li>
        <li>Tools: `Splunk` (free version) or `Elastic Stack (ELK)`.</li>
      </ul>
      <h4>2.4: Incident Response & Digital Forensics</h4>
      <ul>
        <li>Topics: The 6 Steps of Incident Response, Chain of Custody, Memory Forensics, Disk Image Analysis.</li>
        <li>Tools: `Volatility`, `Autopsy`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Track 2 Cyber Lab:</strong> Use `Wireshark` and `Splunk` to analyze a dataset from a real-time simulated attack. Identify the attacker's footprint and create an incident report.
      </div>
    </AccordionItem>

    <AccordionItem title="Track 3: Offensive Security & Penetration Tester (150 Hours)">
      <h4>3.1: Pentesting Fundamentals</h4>
      <ul>
        <li>Topics: The Cyber Kill Chain, Scoping & Rules of Engagement, Reconnaissance (Active vs. Passive), Scanning & Enumeration.</li>
        <li>Tools: `Nmap`, `dirb`, `enum4linux`.</li>
      </ul>
      <h4>3.2: Exploitation</h4>
      <ul>
        <li>Topics: Gaining Access, Privilege Escalation (Linux & Windows), Post-Exploitation, Covering Tracks.</li>
        <li>Tools: `Metasploit`, `John the Ripper`, `Hashcat`.</li>
      </ul>
      <h4>3.3: Web Application Hacking (OWASP Top 10)</h4>
      <ul>
        <li>Topics: SQL Injection (SQLi), Cross-Site Scripting (XSS), Insecure Deserialization, Server-Side Request Forgery (SSRF).</li>
        <li>Tools: `Burp Suite`, `OWASP ZAP`, `sqlmap`.</li>
      </ul>
      <h4>3.4: Wireless & Mobile Hacking</h4>
      <ul>
        <li>Topics: WEP/WPA2 Cracking, Mobile App (Android) reverse engineering.</li>
        <li>Tools: `Aircrack-ng`, `MobSF`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Track 3 Cyber Lab:</strong> Perform a full, end-to-end penetration test on our live, vulnerable e-commerce sandbox (built with known flaws like SQLi and XSS).
      </div>
    </AccordionItem>
    
    <AccordionItem title="Track 4: Advanced & Cloud Security (100 Hours)">
      <h4>4.1: Cryptography</h4>
      <ul>
        <li>Topics: Symmetric vs. Asymmetric Encryption, Hashing, Digital Signatures, Public Key Infrastructure (PKI).</li>
      </ul>
      <h4>4.2: Cloud Security Fundamentals</h4>
      <ul>
        <li>Topics: Shared Responsibility Model, Identity & Access Management (IAM), Virtual Private Cloud (VPC), Security Groups.</li>
        <li>Platforms: `AWS`, `Microsoft Azure`.</li>
      </ul>
      <h4>4.3: Securing Cloud Services</h4>
      <ul>
        <li>Topics: Securing S3 Buckets, Auditing IAM policies, Cloud-Native SIEM (`Azure Sentinel`), Container Security (`Docker`, `Kubernetes`).</li>
      </ul>
      <h4>4.4: Emerging Threats & Career Prep</h4>
      <ul>
        <li>Topics: IoT/OT Security, Bug Bounties, Resume Building, Technical Interview Practice.</li>
      </ul>
      <div className="capstone-project">
        <strong>Track 4 Cyber Lab:</strong> You are given an AWS account with 10+ critical misconfigurations. Your job is to perform a full audit, identify all vulnerabilities, and write a report with remediation steps.
      </div>
    </AccordionItem>
  </section>
);

const InstructorSection = () => (
  <section className="instructor-section cyber-container">
    <h2>Learn from Industry Professionals</h2>
    <div className="instructor-cards-container">
      <div className="instructor-card">
        <h3>Your Name Here</h3>
        <p className="title">Lead Cyber Instructor (CISSP, OSCP)</p>
        <p>"I've designed this program to be what I wish I had—a practical, hands-on path that skips the boring theory and gets you using real tools on real targets."</p>
      </div>
      <div className="instructor-card">
        <h3>[Other Trainer Name]</h3>
        <p className="title">SOC & Cloud Security Specialist</p>
        <p>"The future of security is in the cloud. I'll show you how to hunt for threats in AWS and Azure, moving you from an analyst to a high-value cloud defender."</p>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="pricing-section cyber-container">
    <h2>Choose Your Path</h2>
    <p>A single program for a complete career, or individual tracks for specialized skills.</p>
    <div className="pricing-cards-container">
      <div className="pricing-card">
        <h3>Individual Track</h3>
        <div className="price">$[Price]</div>
        <p>Pick any single track (e.g., "Track 3: Offensive Security") to specialize and upskill.</p>
        <a href="#" className="btn btn-secondary">Choose a Track</a>
      </div>
      
      <div className="pricing-card featured">
        <div className="pricing-badge">Best Value</div>
        <h3>The Full-Stack Program</h3>
        <div className="price">$[Best Value Price]</div>
        <p>Get all 4 tracks. The complete, end-to-end career path from zero to job-ready professional.</p>
        <a href="#" className="btn btn-primary">Enroll in Full Program</a>
      </div>
    </div>
  </section>
);

const FAQAccordion = () => (
  <section id="faq" className="faq-section cyber-container">
    <h2>Frequently Asked Questions</h2>
    <AccordionItem title="What if I have no IT or coding experience?">
      <p>No problem. Track 1: Cyber Foundations is designed for absolute beginners. We start with "What is a network?" and "What is an OS?" and build you up from scratch. No prior experience is assumed.</p>
    </AccordionItem>
    <AccordionItem title="Are the labs real? What tools will I use?">
      <p>Yes. This is not a multiple-choice course. You will get hands-on experience in a real virtual lab environment. You will use the actual tools of the trade, including Kali Linux, Nmap, Wireshark, Metasploit, Burp Suite, and Splunk.</p>
    </AccordionItem>
    <AccordionItem title="Can I buy just one module?">
      <p>Absolutely. If you are an IT pro who just wants to learn Penetration Testing, you can purchase "Track 3" individually. The "Full-Stack Program" is our best value and is recommended for beginners, but all tracks are available separately to fit your goals.</p>
    </AccordionItem>
    <AccordionItem title="What job can I get after this program?">
      <p>This program prepares you for a wide range of roles. After Track 2, you'll be a strong candidate for a **SOC Analyst** or **Cybersecurity Analyst**. After completing Track 3, you'll be ready for **Penetration Tester** or **Ethical Hacker** roles. Completing Track 4 prepares you for a **Cloud Security Engineer** role.</p>
    </AccordionItem>
  </section>
);

const FooterCTA = () => (
  <section className="footer-cta-section cyber-container">
    <h2>Stop Defending. Start Attacking.</h2>
    <p>Your new career in Cybersecurity is one click away. Let's start the grind.</p>
    <a href="#pricing" className="btn btn-primary">Enroll in the Full-Stack Program</a>
  </section>
);


import React, { useState, useEffect } from 'react';

/* NOTE: All styles are now global in styles.css. 
  This file is now just clean JSX structure.
  The 'ai-theme' class is added to the body in App.jsx (or could be, but
  for simplicity we're using a single unified theme).
  
  UPDATE: Per our new plan, we are using ONE unified theme. 
  This file is now just the 10 components with AI-specific content.
*/

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
   Main Page Component: AiProgramPage
   ================================================================================ */
function AiProgramPage() {
  return (
    <div className="homepage-wrapper">
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

export default AiProgramPage;

/* ================================================================================
   Page Sections (Components) - AI CONTENT
   ================================================================================ */

const HeroSection = () => (
  <section className="hero-section page-container">
    <h1>Go from Zero to Full-Stack AI Engineer.</h1>
    <p className="sub-headline">
      Master Data, Machine Learning, and Generative AI. Build and deploy end-to-end applications that get you hired.
    </p>
    <div>
      <a href="#pricing" className="btn btn-primary hero-cta">Start Your 45-Day Plan</a>
      <a href="#labs" className="btn btn-secondary">View Capstone Projects</a>
    </div>
  </section>
);

const PersonaSection = () => (
  <section className="persona-section page-container">
    <h2>Who Is This Program For?</h2>
    <p>This is not just a course. It's a complete career path built for...</p>
    <div className="persona-cards-container">
      <div className="persona-card">
        <h3>The Career Changer</h3>
        <p>"For beginners. Go from basic Python to a deployed AI application. No data experience required."</p>
      </div>
      <div className="persona-card">
        <h3>The Data Analyst/Scientist</h3>
        <p>"For upskillers. Stop just building models in notebooks. Learn to deploy, scale, and manage them in production using MLOps."</p>
      </div>
      <div className="persona-card">
        <h3>The Software Engineer</h3>
        <p>"For developers. Leverage your coding skills to pivot into the hottest field in tech. Integrate powerful Gen AI and ML models into your apps."</p>
      </div>
    </div>
  </section>
);

const SkillsTicker = () => (
  <section className="skills-ticker-container">
    <div className="page-container" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <h2>The Complete AI/ML Tech Stack</h2>
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item">Python</div>
          <div className="ticker-item">Pandas</div>
          <div className="ticker-item">Scikit-learn</div>
          <div className="ticker-item">PyTorch</div>
          <div className="ticker-item">TensorFlow</div>
          <div className="ticker-item">Hugging Face</div>
          <div className="ticker-item">LangChain</div>
          <div className="ticker-item">Vector DBs</div>
          <div className="ticker-item">Docker</div>
          <div className="ticker-item">Kubernetes</div>
          <div className="ticker-item">AWS Sagemaker</div>
          <div className="ticker-item">GCP Vertex AI</div>
          {/* Duplicate for loop */}
          <div className="ticker-item">Python</div>
          <div className="ticker-item">Pandas</div>
          <div className="ticker-item">Scikit-learn</div>
          <div className="ticker-item">PyTorch</div>
          <div className="ticker-item">TensorFlow</div>
          <div className="ticker-item">Hugging Face</div>
          <div className="ticker-item">LangChain</div>
          <div className="ticker-item">Vector DBs</div>
          <div className="ticker-item">Docker</div>
          <div className="ticker-item">Kubernetes</div>
          <div className="ticker-item">AWS Sagemaker</div>
          <div className="ticker-item">GCP Vertex AI</div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section id="labs" className="portfolio-section page-container">
    <h2>You Don't Just Get a Certificate. You Get a Portfolio.</h2>
    <p>We are a project-based program. You will build four major capstone projects that prove your skills to employers.</p>
    <div className="lab-cards-container">
      <div className="lab-card">
        <span className="lab-tag">Module 1 Project</span>
        <div className="lab-card-content">
          <h3>Business Intelligence Dashboard</h3>
          <p>Analyze a real-world sales dataset. Use Pandas for cleaning and Power BI or Matplotlib to build an interactive dashboard for a manager.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Module 2 Project</span>
        <div className="lab-card-content">
          <h3>Predictive Deep Learning Model</h3>
          <p>Build and train a Computer Vision (CNN) model using PyTorch to classify 10 different types of objects from a complex image dataset.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Module 3 Project</span>
        <div className="lab-card-content">
          <h3>Deployed Model API (MLOps)</h3>
          <p>Take your Module 2 model, wrap it in a FastAPI endpoint, containerize it with Docker, and deploy it as a live, scalable microservice on a cloud platform.</p>
        </div>
      </div>
      <div className="lab-card">
        <span className="lab-tag">Module 4 Project</span>
        <div className="lab-card-content">
          <h3>Full-Stack RAG Application</h3>
          <p>Build a "Chat-with-your-PDF" app. Use LangChain for orchestration, Pinecone as a vector database, and Streamlit for the user interface.</p>
        </div>
      </div>
    </div>
  </section>
);

const ProgramStructure = () => (
  <section id="program" className="program-structure-section page-container">
    <h2>Your A-to-Z Career Path</h2>
    <p>A 4-step program that takes you from fundamental concepts to job-ready specialist.</p>
    <ol className="stepper">
      <li className="stepper-item"><strong>Module 1:</strong> Data Analytics Foundation</li>
      <li className="stepper-item"><strong>Module 2:</strong> Machine Learning & Data Science</li>
      <li className="stepper-item"><strong>Module 3:</strong> Data & MLOps Engineering</li>
      <li className="stepper-item"><strong>Module 4:</strong> Generative AI Specialization</li>
      <li className="stepper-item final-step"><strong>Goal:</strong> You are Hired.</li>
    </ol>
  </section>
);

const SyllabusAccordion = () => (
  <section id="syllabus" className="syllabus-section page-container">
    <h2>Program Syllabus</h2>
    <p style={{textAlign: 'center', marginBottom: '40px'}}>The complete curriculum, module by module.</p>
    
    <AccordionItem title="Module 1: Data Analytics Foundation (100 Hours)" defaultOpen={true}>
      <h4>1.1: Foundational Concepts</h4>
      <ul>
        <li>Topics: AI/ML vs. Data Science vs. Data Analytics, Statistics & Probability (Mean, Median, Std Dev, Distributions, p-value), Predictive Analysis.</li>
        <li>Skills: Statistical thinking, problem formulation.</li>
      </ul>
      <h4>1.2: Python for Data Science</h4>
      <ul>
        <li>Topics: Python Basics (Data Types, Loops, Functions, OOP), Data Structures (Lists, Dictionaries), NumPy (Arrays, Vectorization), Pandas (DataFrames, `groupby`, Merging, Slicing).</li>
        <li>Skills: `numpy`, `pandas`, programming logic.</li>
      </ul>
      <h4>1.3: Database & Data Collection</h4>
      <ul>
        <li>Topics: SQL (SELECT, FROM, WHERE, GROUP BY, JOINs), Connecting to databases with Python.</li>
        <li>Skills: `SQL`, `PostgreSQL`, `MSSQL` (querying).</li>
      </ul>
      <h4>1.4: Data Visualization</h4>
      <ul>
        <li>Topics: Storytelling with Data, Matplotlib (Plot types), Seaborn (Statistical charts), Building Interactive Dashboards.</li>
        <li>Skills: `matplotlib`, `seaborn`, (Intro to) `Power BI` or `Tableau`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Module 1 Capstone:</strong> Build an interactive Business Intelligence Dashboard for a real-world dataset (e.g., Sales, Marketing, or Finance) to identify key trends and KPIs.
      </div>
    </AccordionItem>

    <AccordionItem title="Module 2: Machine Learning & Data Science (150 Hours)">
      <h4>2.1: Machine Learning Fundamentals</h4>
      <ul>
        <li>Topics: Supervised Learning (Regression, Classification) vs. Unsupervised Learning (Clustering), Model Evaluation Metrics (Accuracy, Precision, Recall, F1-Score, RMSE), Overfitting vs. Underfitting, Cross-Validation.</li>
        <li>Skills: `scikit-learn` (core concepts).</li>
      </ul>
      <h4>2.2: Classical Machine Learning Algorithms</h4>
      <ul>
        <li>Topics: Linear/Logistic Regression, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), Decision Trees & Random Forests.</li>
        <li>Skills: `scikit-learn` (hands-on implementation).</li>
      </ul>
      <h4>2.3: Deep Learning Fundamentals</h4>
      <ul>
        <li>Topics: What is a Neural Network?, Activation Functions, Backpropagation, Gradient Descent, Deep Learning Frameworks.</li>
        <li>Skills: `PyTorch` (preferred) or `TensorFlow`, `Keras`.</li>
      </ul>
      <h4>2.4: Deep Learning Specializations</h4>
      <ul>
        <li>Topics (CV): Convolutional Neural Networks (CNNs), Image Classification, Object Detection. (Tool: `OpenCV`)</li>
        <li>Topics (NLP): Bag-of-Words, Embeddings, Recurrent Neural Networks (RNNs), Intro to Transformers. (Tools: `NLTK`, `spaCy`)</li>
        <li>Skills: `PyTorch`, `TensorFlow`, `OpenCV`, `NLTK`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Module 2 Capstone:</strong> Train a Deep Learning model. (CV Track: Build an image classifier. NLP Track: Build a sentiment analyzer.)
      </div>
    </AccordionItem>

    <AccordionItem title="Module 3: Data & MLOps Engineering (120 Hours)">
      <h4>3.1: Cloud & DevOps Basics</h4>
      <ul>
        <li>Topics: Why the Cloud? (AWS vs. GCP vs. Azure), Core Services (Compute, Storage), DevOps Basics (CI/CD pipelines).</li>
        <li>Skills: `AWS`, `GCP`, `Azure` (foundational concepts).</li>
      </ul>
      <h4>3.2: Building Model APIs</h4>
      <ul>
        <li>Topics: Why APIs?, RESTful principles, Building a model prediction endpoint.</li>
        <li>Skills: `Flask` or `FastAPI`.</li>
      </ul>
      <h4>3.3: Containerization (MLOps)</h4>
      <ul>
        <li>Topics: What is a Container?, Why Docker?, Writing a Dockerfile, `docker build`, `docker run`.</li>
        <li>Skills: `Docker`.</li>
      </ul>
      <h4>3.4: Orchestration & Scaling (MLOps)</h4>
      <ul>
        <li>Topics: Intro to Kubernetes, Pods, Services, Deployments, Scaling your model. (Covers **CKAD** basics).</li>
        <li>Skills: `Kubernetes` (K8s).</li>
      </ul>
      <h4>3.5: ML Lifecycle & Automation</h4>
      <ul>
        <li>Topics: Experiment Tracking, Model Versioning, Data Pipelines.</li>
        <li>Skills: `MLflow`, `Weights & Biases`, (Intro to) `Apache Airflow`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Module 3 Capstone:</strong> Productionize your Module 2 project. You will wrap your ML model in a `FastAPI` endpoint, containerize it with `Docker`, and deploy it to a cloud service (e.g., `AWS Lambda` or `GCP Cloud Run`).
      </div>
    </AccordionItem>
    
    <AccordionItem title="Module 4: Generative AI Specialization (130 Hours)">
      <h4>4.1: The Gen AI Stack</h4>
      <ul>
        <li>Topics: How LLMs work (Transformers, Attention), Prompt Engineering (Few-shot, Chain-of-Thought), Model Types.</li>
        <li>Skills: `Hugging Face Transformers`, `Prompt Engineering`.</li>
      </ul>
      <h4>4.2: Building LLM Applications</h4>
      <ul>
        <li>Topics: Orchestration frameworks, Chains, Memory, Agents.</li>
        <li>Skills: `LangChain`, `Langgraph`, `Langflow`.</li>
      </ul>
      <h4>4.3: Retrieval-Augmented Generation (RAG)</h4>
      <ul>
        <li>Topics: The "Chat with your Data" concept, Document Loaders, Text Splitters, Embeddings, Vector Stores.</li>
        <li>Skills: `RAG` architecture, `Vector Databases` (`Pinecone`, `FAISS`).</li>
      </ul>
      <h4>4.4: Advanced Gen AI</h4>
      <ul>
        <li>Topics: Fine-tuning a model (basics), Agentic AI, Gen AI on the Cloud.</li>
        <li>Skills: `AWS Bedrock`, `GCP Vertex AI`, `Azure AI`.</li>
      </ul>
      <div className="capstone-project">
        <strong>Module 4 Capstone:</strong> Build a "Chat-with-your-PDF" RAG Application. This includes a simple UI (Streamlit/Flask), a `FastAPI` backend with `LangChain`, and a `Vector Database`.
      </div>
    </AccordionItem>
  </section>
);

const InstructorSection = () => (
  <section className="instructor-section page-container">
    <h2>Learn from Industry Professionals</h2>
    <div className="instructor-cards-container">
      <div className="instructor-card">
        <h3>Your Name Here</h3>
        <p className="title">Lead AI/ML Trainer</p>
        <p>"I've built this course based on what recruiters are *actually* hiring for. My focus is on practical, project-based learning that gets you job-ready, fast."</p>
      </div>
      <div className="instructor-card">
        <h3>[Other Trainer Name]</h3>
        <p className="title">MLOps & Cloud Specialist</p>
        <p>"I specialize in deploying and scaling models. I'll teach you how to take your projects from a notebook to production."</p>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="pricing-section page-container">
    <h2>Choose Your Path</h2>
    <p>A single program for a complete career, or individual tracks for specialized skills.</p>
    <div className="pricing-cards-container">
      <div className="pricing-card">
        <h3>Individual Module</h3>
        <div className="price">$[Price]</div>
        <p>Pick any single module (e.g., "Module 4: Generative AI") to specialize and upskill.</p>
        <a href="#" className="btn btn-secondary">Choose a Module</a>
      </div>
      
      <div className="pricing-card featured">
        <div className="pricing-badge">Best Value</div>
        <h3>The Full-Stack Program</h3>
        <div className="price">$[Best Value Price]</div>
        <p>Get all 4 modules. The complete, end-to-end career path from zero to job-ready professional.</p>
        <a href="#" className="btn btn-primary">Enroll in Full Program</a>
      </div>
    </div>
  </section>
);

const FAQAccordion = () => (
  <section id="faq" className="faq-section page-container">
    <h2>Frequently Asked Questions</h2>
    <AccordionItem title="What if I have no coding experience?">
      <p>No problem. Module 1: Data Analytics Foundation is designed for absolute beginners. We start with the basics of Python and SQL. No prior experience is assumed.</p>
    </AccordionItem>
    <AccordionItem title="Are the projects real? What tools will I use?">
      <p>Yes. This is a 100% project-based program. You will build four major capstone projects using real tools like PyTorch, LangChain, Docker, and AWS/GCP, creating a portfolio that proves your skills.</p>
    </AccordionItem>
    <AccordionItem title="Can I buy just one module?">
      <p>Absolutely. If you are a Data Scientist who just wants to learn Generative AI, you can purchase "Module 4" individually. The "Full-Stack Program" is our best value, but all modules are available separately.</p>
    </AccordionItem>
    <AccordionItem title="What job can I get after this program?">
      <p>After completing the full program, you will be a strong candidate for roles like **ML Engineer**, **AI Engineer**, **Generative AI Engineer**, and **Full-Stack Data Scientist**. After Module 1, you can apply for **Data Analyst** jobs.</p>
    </AccordionItem>
  </section>
);

const FooterCTA = () => (
  <section className="footer-cta-section page-container">
    <h2>Stop Waiting. Start Building.</h2>
    <p>Your new career in AI is 45 days away. Let's start the grind.</p>
    <a href="#pricing" className="btn btn-primary">Enroll in the Full-Stack Program</a>
  </section>
);


import { Briefcase, Shield, Wrench, ArrowRight, Mail, Github } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Header & Bio */}
      <header className="hero-section">
        <h1 className="name">Quintan Middle</h1>
        <h2 className="title">Custom B2B & Offline-First Software</h2>
        <p className="bio">
          I spent eight years working material handling and operations in Tucson before transitioning to software development. 
          I build offline-first, zero-SaaS mobile applications designed for the realities of the job site. A dropped cell signal 
          should never stop your crew from logging hours, generating a bill of lading, or securing an invoice.
        </p>
        <div className="contact-links">
          <a href="mailto:quintanmiddle@gmail.com" className="btn bg-blue"><Mail size={18} /> Contact Me</a>
          <a href="https://github.com/xNoOnex" target="_blank" className="btn bg-dark border-gray"><Github size={18} /> GitHub</a>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="projects-section">
        <h3 className="section-title">Featured Builds</h3>
        
        <div className="project-card border-green">
          <div className="flex-between">
            <h4 className="project-name"><Briefcase size={20} className="text-green mr-2" /> Chronos Engine</h4>
            <span className="badge bg-green">Live Demo</span>
          </div>
          <p className="project-desc">
            A standalone dispatch and invoicing toolkit for independent fleet operators. Features sign-on-glass BOLs, 
            FMCSA HOS compliance logs, and exact crew payouts via offline epoch timestamping. No monthly SaaS fees.
          </p>
          <a href="https://xNoOnex.github.io/chronos-demo" target="_blank" className="btn bg-dark text-green border-green mt-2 flex-center">
            Launch Interactive Demo <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-purple mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Shield size={20} className="text-purple mr-2" /> Sovereign Tools</h4>
            <span className="badge bg-purple">Open Source</span>
          </div>
          <p className="project-desc">
            A comprehensive, local-first privacy utility suite for Android released under the GNU General Public License v3. 
            Includes local AES encryption, a secure media vault, and industrial barcode scanning capabilities.
          </p>
          <a href="https://github.com/xNoOnex/SovereignTools1" target="_blank" className="btn bg-dark text-purple border-purple mt-2 flex-center">
            View Source Code <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-orange mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Wrench size={20} className="text-orange mr-2" /> Tools of the Trade</h4>
            <span className="badge bg-orange">In Development</span>
          </div>
          <p className="project-desc">
            A specialized mobile toolkit for utility management, multi-track media editing, and rapid local-device 
            development. Built entirely on mobile for mobile deployment.
          </p>
        </div>
      </main>

      <footer className="footer text-gray">
        <p>Based in Tucson, AZ. Built for reliability.</p>
      </footer>
    </div>
  );
}

export default App;

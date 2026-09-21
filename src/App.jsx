import { Briefcase, Shield, Wrench, ArrowRight, Mail, Code, Lock, Phone } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Header & Bio */}
      <header className="hero-section">
        <h1 className="name">Quintan Middle</h1>
        <h2 className="title">Software Engineer & Tradesman</h2>
        
        <div className="ethos-banner border-purple">
          <Lock size={18} className="text-purple mr-2 inline-icon" />
          <span className="italic font-bold">"Sovereignty is Privacy. Take back your freedom. Stay sovereign."</span>
        </div>

        <p className="bio mt-3">
          I am a professional software developer who chose to spend eight years working material handling and fleet operations in Tucson instead of sitting behind a desk. I know the friction of a job site firsthand, which is why I build offline-first, zero-SaaS tools that don't break when a route loses cell service.
        </p>
        
        <p className="bio mt-2">
          Above all, I value absolute data privacy. My architecture relies entirely on local-first data security, decentralized principles, and offline durability. No cloud dependencies, no forced subscriptions, and no analytics. Your fleet data and personal metrics never leave your device unless you explicitly export them.
        </p>

        <div className="contact-links mt-3">
          <a href="tel:5206349490" className="btn bg-green border-green"><Phone size={18} className="mr-2"/> (520) 634-9490</a>
          <a href="mailto:quintanmiddle@gmail.com" className="btn bg-blue border-blue"><Mail size={18} className="mr-2"/> Gmail</a>
          <a href="mailto:xNoOnex@dnmx.cc" className="btn bg-dark border-gray"><Lock size={18} className="mr-2"/> PGP Email</a>
          <a href="https://github.com/xNoOnex" target="_blank" className="btn bg-dark border-gray"><Code size={18} className="mr-2"/> GitHub</a>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="projects-section">
        <h3 className="section-title">Featured Builds</h3>
        
        <div className="project-card border-green mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Briefcase size={20} className="text-green mr-2" /> Chronos Engine</h4>
            <span className="badge bg-green">Live B2B Demo</span>
          </div>
          <p className="project-desc">
            A standalone dispatch and invoicing toolkit for independent fleet operators. Features sign-on-glass BOLs, 
            FMCSA HOS compliance logs, and exact crew payouts via offline epoch timestamping. Zero monthly SaaS fees.
          </p>
          <a href="https://xNoOnex.github.io/chronos-demo" target="_blank" className="btn bg-dark text-green border-green mt-2 flex-center">
            Launch Interactive Demo <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-purple mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Shield size={20} className="text-purple mr-2" /> Sovereign Tools</h4>
            <span className="badge bg-purple">GPL-3.0 License</span>
          </div>
          <p className="project-desc">
            A comprehensive, local-first privacy utility suite for Android. 
            Includes local AES encryption, a secure media vault, offline educational databases, and zero-telemetry barcode scanning.
          </p>
          <a href="https://github.com/xNoOnex/SovereignTools1" target="_blank" className="btn bg-dark text-purple border-purple mt-2 flex-center">
            View Source Code <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-orange mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Wrench size={20} className="text-orange mr-2" /> Tools of the Trade</h4>
            <span className="badge bg-orange">Proprietary</span>
          </div>
          <p className="project-desc">
            A highly specialized mobile toolkit featuring multi-track media editing, culinary measurement algorithms, and rapid local-device 
            React development environments. Built entirely on mobile, for mobile deployment.
          </p>
        </div>
      </main>

      <footer className="footer text-gray mt-3">
        <p>Based in Tucson, AZ. Built for reliability. Stay Sovereign.</p>
      </footer>
    </div>
  );
}

export default App;

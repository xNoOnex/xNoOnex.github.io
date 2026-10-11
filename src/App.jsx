import { useState } from 'react';
import { Briefcase, Shield, Wrench, ArrowRight, Mail, Code, Lock, Phone, Calculator, Brain, Gamepad2, Puzzle, Copy, Check } from 'lucide-react';
import './App.css';

const pgpKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEasrjKRYJKwYBBAHaRw8BAQdA6qEH+Ikl/mBY8L6Y7CukMhk5G78CwGy0
DLWuzLAmPB3NJVNvdmVyZWlnbiBOb2RlIDxub2RlQHNvdmVyZWlnbi5sb2Nh
bD7CwBMEExYKAIUFgmrK4ykDCwkHCRD0D6ORyUm7FEUUAAAAAAAcACBzYWx0
QG5vdGF0aW9ucy5vcGVucGdwanMub3JnE09If37nJqqurUjwy/ECnIJjuQ/o
U3aXH7mexbK3BnAFFQoIDgwEFgACAQIZAQKbAwIeARYhBHTJxbB4CNdpmscp
o/QPo5HJSbsUAAArzgEAklPHZAnxuqIiyTsE6j1Nt6iueRZ1QrYV63lGnMwg
kuUA/0fvCMF8DRrix2vQgUSfh0x00QbUgW+WMOCvUfZ8jR4LzjgEasrjKRIK
KwYBBAGXVQEFAQEHQDaGHVTnsfxuINwrlCsei5FJJpXSj7A12rRBZ7YCltYj
AwEIB8K+BBgWCgBwBYJqyuMpCRD0D6ORyUm7FEUUAAAAAAAcACBzYWx0QG5v
dGF0aW9ucy5vcGVucGdwanMub3JnAUcGHD1XvUlL5Josg1w23Fw9UaGM9yf1
llI9cD8JPcUCmwwWIQR0ycWweAjXaZrHKaP0D6ORyUm7FAAAgnQBALYelsCP
M8YIqPRD7WWrPXcXGSXyAo6YQx4umzSGXXeUAP9t7KksKSL6luYV995geetS
kEgbeABBuviug+F9Z/HuCQ==
=XdI+
-----END PGP PUBLIC KEY BLOCK-----`;

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pgpKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <h1 className="name">Quintan Middle</h1>
        <h2 className="title">Software Engineer & Tradesman</h2>

        <p className="bio mt-3">
          I am a professional software developer who chose to spend eight years working material handling and fleet operations in Tucson instead of sitting behind a desk. I know the friction of a job site firsthand, which is why I build offline-first, zero-SaaS tools that don't break when a route loses cell service.
        </p>

        <p className="bio mt-2">
          My architecture relies entirely on local-first data security, decentralized principles, and offline durability. No cloud dependencies, no forced subscriptions, and no analytics. Your fleet data and personal metrics never leave your device unless you explicitly export them.
        </p>

        <div className="contact-links mt-3">
          <a href="tel:5206349490" className="btn bg-dark border-green text-green">
            <Phone size={18} className="mr-2" /> (520) 634-9490
          </a>
          <a href="mailto:quintanmiddle@gmail.com" className="btn bg-dark border-blue text-blue">
            <Mail size={18} className="mr-2" /> Gmail
          </a>
          <a href="mailto:xNoOnex@proton.me" className="btn bg-dark border-purple text-purple">
            <Lock size={18} className="mr-2" /> PGP Email
          </a>
          <a href="https://github.com/xNoOnex" target="_blank" className="btn bg-dark border-gray text-gray">
            <Code size={18} className="mr-2" /> GitHub
          </a>
        </div>

        <details className="mt-3" style={{ background: '#11161d', border: '1px solid #30363d', borderRadius: '6px', padding: '12px' }}>
          <summary style={{ cursor: 'pointer', color: '#bc8cff', fontWeight: 'bold', fontSize: '0.85rem', outline: 'none', display: 'flex', alignItems: 'center' }}>
            <Lock size={16} className="mr-2" /> View Public PGP Key
          </summary>
          <div style={{ position: 'relative', marginTop: '12px' }}>
            <button onClick={handleCopy} style={{ position: 'absolute', top: '8px', right: '8px', background: copied ? '#2ea043' : '#21262d', color: '#fff', border: '1px solid #30363d', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', transition: 'all 0.2s' }}>
              {copied ? <Check size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
              {copied ? 'Copied!' : 'Copy Key'}
            </button>
            <pre style={{ background: '#0d1117', padding: '14px', paddingTop: '38px', borderRadius: '4px', fontSize: '0.65rem', color: '#8b949e', overflowX: 'auto', border: '1px dashed #30363d', margin: 0, textAlign: 'left' }}>
              {pgpKey}
            </pre>
          </div>
        </details>
      </header>

      <div className="project-card border-green mt-4" style={{ backgroundColor: '#11161d' }}>
        <div className="flex-between">
          <h4 className="project-name text-green"><Calculator size={20} className="mr-2" /> Universal Deployment Estimator</h4>
          <span className="badge bg-green">Live Engine</span>
        </div>
        <p className="project-desc">
          Configure offline-first software requirements, calculate flat-rate deployment scopes, and generate binding fleet service agreements dynamically.
        </p>
        <a href="https://sovereigntyisprivacy.com/sovereign-invoicing/" target="_blank" className="btn bg-dark border-green text-green mt-2 flex-center">
          Configure Custom App & Estimate <ArrowRight size={16} className="ml-1" />
        </a>
      </div>

      <main className="projects-section">
        
        <h3 className="section-title mt-4" style={{ borderBottom: '1px dashed #30363d', paddingBottom: '8px', color: '#8b949e', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Commercial & Fleet Operations
        </h3>
        
        <div className="project-card border-green mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Briefcase size={20} className="text-green mr-2" /> Chronos Engine</h4>
            <span className="badge bg-green">Live B2B Demo</span>
          </div>
          <p className="project-desc">
            A standalone dispatch and invoicing toolkit for independent fleet operators. Features sign-on-glass BOLs, FMCSA HOS compliance logs, and exact crew payouts via offline epoch timestamping. Zero monthly SaaS fees.
          </p>
          <a href="https://sovereigntyisprivacy.com/chronos-demo/" target="_blank" className="btn bg-dark text-green border-green mt-2 flex-center">
            Launch Interactive Demo <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <h3 className="section-title mt-4" style={{ borderBottom: '1px dashed #30363d', paddingBottom: '8px', color: '#8b949e', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Privacy & Security Infrastructure
        </h3>

        <div className="project-card border-purple mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Shield size={20} className="text-purple mr-2" /> Sovereign Tools</h4>
            <span className="badge bg-purple">GPL-3.0 License</span>
          </div>
          <p className="project-desc">
            A comprehensive, local-first privacy utility suite for Android. Includes local AES encryption, a secure media vault, offline educational databases, and zero-telemetry barcode scanning.
          </p>
          <a href="https://sovereigntyisprivacy.com/SovereignTools1/#download" target="_blank" className="btn bg-dark text-purple border-purple mt-2 flex-center">
            Download App <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <h3 className="section-title mt-4" style={{ borderBottom: '1px dashed #30363d', paddingBottom: '8px', color: '#8b949e', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Specialized Consumer Utilities
        </h3>

        <div className="project-card border-orange mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Wrench size={20} className="text-orange mr-2" /> Tools of the Trade</h4>
            <span className="badge bg-orange">Proprietary</span>
          </div>
          <p className="project-desc">
            A highly specialized mobile toolkit featuring multi-track media editing, culinary measurement algorithms, and rapid local-device React development environments. Built entirely on mobile.
          </p>
        </div>

        <div className="project-card border-blue mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Brain size={20} className="text-blue mr-2" /> Sovereign Memory</h4>
            <span className="badge bg-blue" style={{ backgroundColor: '#0969da', color: '#fff' }}>Offline Utility</span>
          </div>
          <p className="project-desc">
            A dedicated daily routine application architected to assist with structured task tracking, schedule planning, and localized medication logging without cloud syncing.
          </p>
          <a href="https://github.com/xNoOnex/Sovereign-Memory" target="_blank" className="btn bg-dark text-blue border-blue mt-2 flex-center">
            View Release <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-gray mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Gamepad2 size={20} className="text-gray mr-2" /> Digital D&D Companion</h4>
            <span className="badge bg-dark border-gray text-gray">Tabletop Tool</span>
          </div>
          <p className="project-desc">
            An automated tabletop engine engineered to track 5th Edition combat math, initiative queues, bestiary entries, and dynamic player character sheets entirely offline.
          </p>
          <a href="https://github.com/xNoOnex/No-hassle-D-D" target="_blank" className="btn bg-dark text-gray border-gray mt-2 flex-center">
            View Release <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="project-card border-purple mt-3">
          <div className="flex-between">
            <h4 className="project-name"><Puzzle size={20} className="text-purple mr-2" /> Sovereign Jigsaw</h4>
            <span className="badge bg-purple">Open-Source</span>
          </div>
          <p className="project-desc">
            A custom Android jigsaw puzzle generator compiled via GitHub Actions featuring dynamic piece configuration, adjustable grid layouts, and secure custom offline image uploads.
          </p>
          <a href="https://github.com/xNoOnex/Sovereign-Jigsaw" target="_blank" className="btn bg-dark text-purple border-purple mt-2 flex-center">
            View Source Code <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

      </main>

      <div style={{ height: '70px' }}></div>

      <div className="sticky-ethos">
        <Lock size={14} className="text-purple mr-2 inline-icon" />
        <span className="italic font-bold text-sm">"Sovereignty is Privacy. Take back your freedom. Stay sovereign."</span>
      </div>
    </div>
  );
}

export default App;

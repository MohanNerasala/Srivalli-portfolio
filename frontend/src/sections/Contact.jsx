import React from 'react';
import './Contact.css';
import { Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SlideUp, FadeIn } from '../components/ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="section-header">
        <div className="gold-line"></div>
        <h3 className="section-heading">
          <SlideUp>LET'S CONNECT</SlideUp>
        </h3>
        <div className="gold-line"></div>
      </div>
      
      <div className="contact-content">
        <h2 className="contact-title">
          <SlideUp delay={0.2} el="span">Ready to build something</SlideUp> 
          <SlideUp delay={0.4} el="span" className="gold-text">amazing?</SlideUp>
        </h2>
        

        
        <div className="social-cards">
          <FadeIn delay={0.4}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-card glass-panel" aria-label="GitHub">
              <FaGithub size={32} />
              <span>GitHub</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.6}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-card glass-panel" aria-label="LinkedIn">
              <FaLinkedin size={32} />
              <span>LinkedIn</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.8}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-card glass-panel" aria-label="View CV">
              <FileText size={32} />
              <span>View CV</span>
            </a>
          </FadeIn>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Srivalli. All rights reserved.</p>
        <p className="footer-built">Built with React & Framer Motion</p>
      </footer>
    </section>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, Moon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY = currentScrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setIsHidden(false);
      }, 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-box">Sri</span>
          <span className="logo-text">.DEV</span>
        </div>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>

        <div className="nav-actions">
          <button className="icon-button moon-btn" aria-label="Toggle Theme">
            <Moon size={18} />
          </button>
          <a href="#contact" className="hire-me-btn">HIRE ME</a>
          <button 
            className="icon-button mobile-menu-btn" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          <a href="#skills" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>SKILLS</a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
          <a href="#contact" className="mobile-nav-link mobile-hire-btn" onClick={() => setIsMobileMenuOpen(false)}>HIRE ME</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

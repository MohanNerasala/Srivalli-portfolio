import React from 'react';
import './About.css';
import { SlideUp, FadeIn } from '../components/ScrollReveal';
import TypewriterText from '../components/TypewriterText';

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <div className="section-header">
        <div className="gold-line"></div>
        <h3 className="section-heading">
          <SlideUp>ABOUT ME</SlideUp>
        </h3>
        <div className="gold-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">
            <SlideUp delay={0.2} el="div">I BUILD THINGS</SlideUp>
            <SlideUp delay={0.4} el="div" className="gold-text">THAT MATTER</SlideUp>
          </h2>
          <FadeIn delay={0.6}>
            <p className="about-description">
              I'm a Full Stack and AI Developer passionate about architecting scalable systems and creating intuitive user experiences. By bridging the gap between complex machine learning models and seamless frontends, I build digital products that drive real value.
            </p>
          </FadeIn>
        </div>
        
        <div className="about-terminal glass-panel">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">guest@srivalli.dev:~</div>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="prompt">$</span> <span className="command">whoami</span>
            </div>
            <div className="terminal-output">
              <TypewriterText text="> Srivalli" delay={0.5} />
            </div>
            
            <div className="terminal-line">
              <span className="prompt">$</span> <span className="command">cat skills.json</span>
            </div>
            <div className="terminal-output json-output">
              <TypewriterText text='{
  "name": "Srivalli",
  "role": "AI Application Developer",
  "stack": ["Java", "HTML", "CSS", "JS"],
  "passion": "Building intelligent solutions"
}' delay={1.5} className="whitespace-pre" />
            </div>
            
            <div className="terminal-line">
              <span className="prompt">$</span> <span className="command">echo $passion</span>
            </div>
            <div className="terminal-output">
              <TypewriterText text="> Building real products with AI tools" delay={4.0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

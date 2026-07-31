import React from 'react';
import { motion } from 'framer-motion';
import './TechArsenal.css';
import { SlideUp, FadeIn } from '../components/ScrollReveal';

const techStack = [
  { name: 'React.js', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Python', color: '#ffdd54' },
  { name: 'Java', color: '#f89820' },
  { name: 'Tailwind CSS', color: '#38bdf8' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Spring Boot', color: '#6db33f' },
  { name: 'Framer Motion', color: '#f5a9fa' }
];

const TechArsenal = () => {
  return (
    <section id="skills" className="tech-section section-container">
      <div className="section-header">
        <div className="gold-line"></div>
        <h3 className="section-heading">
          <SlideUp>TECH ARSENAL</SlideUp>
        </h3>
        <div className="gold-line"></div>
      </div>
      
      <p className="tech-subheading">
        <FadeIn delay={0.2}>A dynamic constellation of my primary stack and secondary toolset. Hover to explore.</FadeIn>
      </p>
      
      <div className="constellation-container">
        <div className="center-node glass-panel">
          <div className="center-node-content">
            <span className="initials">S V</span>
            <span className="subtitle">AI + FULL STACK</span>
          </div>
        </div>
        
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * Math.PI * 2;
          const radius = 180; // Distance from center
          
          return (
            <motion.div
              key={tech.name}
              className="tech-node"
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileInView={{
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius,
                opacity: 1
              }}
              transition={{ duration: 1, type: "spring", bounce: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 10 }}
            >
              <span className="tech-dot" style={{ backgroundColor: tech.color }}></span>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechArsenal;

import React, { useState, useEffect } from 'react';
import './Projects.css';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SlideUp, FadeIn } from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const placeholderProjects = [
  { id: '01', category: 'FULL STACK', title: 'Project One' },
  { id: '02', category: 'FRONTEND', title: 'Project Two' },
  { id: '03', category: 'AI TOOL', title: 'Project Three' }
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="projects" className="projects-section section-container">
      <div className="section-header">
        <div className="gold-line"></div>
        <h3 className="section-heading">
          <SlideUp el="span">SELECTED</SlideUp> <SlideUp el="span" className="gold-text" delay={0.2}>WORK</SlideUp>
        </h3>
        <div className="gold-line"></div>
      </div>
      
      <div className="projects-subheading">
        <FadeIn delay={0.4}>Scroll down to explore my recent projects.</FadeIn>
      </div>
      
      <div className="projects-grid">
        {placeholderProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={isMobile ? { opacity: 0, y: 150, scale: 0.85, rotateX: 20 } : { opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: false, margin: isMobile ? "-15%" : "-20%" }}
            transition={{ duration: isMobile ? 1 : 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="project-content">
              <div className="project-meta">
                <span className="project-number">{project.id}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">
                Project description goes here. This is a placeholder box for future projects to be added.
              </p>
              
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
              </div>
              
              <div className="project-links">
                <button className="btn-icon primary"><ExternalLink size={18} /> Live Demo</button>
                <button className="btn-icon secondary"><FaGithub size={18} /> GitHub</button>
              </div>
            </div>
            <div className="project-image-placeholder">
              <span>Image Placeholder</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

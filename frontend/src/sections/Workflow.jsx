import React from 'react';
import './Workflow.css';
import { SlideUp, FadeIn } from '../components/ScrollReveal';
import { Bot, Navigation, Sparkles, Code2, Brain, Triangle, Cloud } from 'lucide-react';

const tools = [
  { name: 'CLAUDE AI', icon: <Bot size={44} strokeWidth={1.5} />, desc: 'Architecture &\nLogic Design' },
  { name: 'CURSOR IDE', icon: <Navigation size={44} strokeWidth={1.5} className="cursor-icon" />, desc: 'AI-Assisted\nDevelopment' },
  { name: 'ANTIGRAVITY', icon: <Sparkles size={44} strokeWidth={1.5} />, desc: 'Autonomous AI\nAgent' },
  { name: 'GITHUB\nCOPILOT', icon: <Code2 size={44} strokeWidth={1.5} />, desc: 'Real-time Code\nGeneration' },
  { name: 'CODEX', icon: <Brain size={44} strokeWidth={1.5} />, desc: 'Complex\nAlgorithm Solvers' },
  { name: 'VERCEL', icon: <Triangle size={44} strokeWidth={1.5} />, desc: 'Automated\nDeployments' },
  { name: 'RENDER', icon: <Cloud size={44} strokeWidth={1.5} />, desc: 'Backend Cloud\nHosting' }
];

const Workflow = () => {
  return (
    <section id="workflow" className="workflow-section section-container">
      <div className="section-header">
        <div className="gold-line"></div>
        <h3 className="section-heading">
          <SlideUp>AI WORKFLOW</SlideUp>
        </h3>
        <div className="gold-line"></div>
      </div>
      
      <div className="workflow-content">
        <div className="workflow-track-container">
          <div className="workflow-connecting-line"></div>
          <div className="workflow-track">
            {tools.map((tool, index) => (
              <FadeIn key={tool.name} delay={0.2 + (index * 0.1)}>
                <div className="workflow-node">
                  <div className="workflow-card">
                    <div className="tool-icon">{tool.icon}</div>
                    <h4 className="tool-name">{tool.name}</h4>
                    <p className="tool-desc">{tool.desc}</p>
                    <div className="glow-border"></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;

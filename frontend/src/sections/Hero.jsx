import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import { ArrowRight, Mail, Volume2, VolumeX } from 'lucide-react';
import heroVideo from '../assets/background_like_this_i_want_no.mp4';
import { SlideUp, FadeIn } from '../components/ScrollReveal';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content section-container">
        <div className="accent-name-container">
          <div className="gold-line"></div>
          <span className="accent-name">SAI SRIVALLI</span>
          <div className="gold-line mobile-only-line"></div>
        </div>
        
        <h1 className="hero-title">
          <SlideUp delay={0.1} el="div">FULL STACK</SlideUp>
          <SlideUp delay={0.2} className="gold-text" el="div">AI APPLICATION</SlideUp>
          <SlideUp delay={0.3} className="gold-text" el="div">DEVELOPER</SlideUp>
        </h1>
        
        <div className="hero-description-box">
          <FadeIn delay={0.6}>
            <p>Hi, I am <span className="bold-text">Sai Srivalli</span>, a Full Stack AI Application Developer.</p>
          </FadeIn>
        </div>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            PORTFOLIO <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn-outline">
            CONTACT <Mail size={20} />
          </a>
        </div>
      </div>
      
      <button 
        className="mute-button" 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
};

export default Hero;

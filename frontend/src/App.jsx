import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechArsenal from './sections/TechArsenal';
import Projects from './sections/Projects';
import Workflow from './sections/Workflow';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechArsenal />
        <Projects />
        <Workflow />
        <Contact />
      </main>
    </>
  );
}

export default App;

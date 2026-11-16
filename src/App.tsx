import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Moments } from './components/Moments';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useScrollReveal();
  const { activeSection, isScrolled } = useActiveSection();

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to main content
      </a>
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <main id="main-content">
        <Hero />
        <Publications />
        <Projects />
        <Experience />
        <Moments />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

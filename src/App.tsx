import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Publications } from './components/Publications';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useScrollReveal();
  const { activeSection, isScrolled, isSolid } = useActiveSection();

  return (
    <>
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        isSolid={isSolid}
      />
      <main>
        <Hero />
        <Publications />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

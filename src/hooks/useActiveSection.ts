import { useState, useEffect } from 'react';

const SECTION_IDS = ['about', 'publications', 'projects', 'experience', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSolid, setIsSolid] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const hero = document.getElementById('about');
      const header = document.getElementById('site-header');
      const headerHeight = header ? header.offsetHeight : 60;

      setIsScrolled(scrollY > 10);

      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - headerHeight;
        setIsSolid(scrollY >= heroBottom);
      } else {
        setIsSolid(scrollY > 100);
      }

      const offset = scrollY + headerHeight + 20;
      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { activeSection, isScrolled, isSolid };
}

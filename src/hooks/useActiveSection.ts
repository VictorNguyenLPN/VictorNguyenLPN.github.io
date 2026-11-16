import { useState, useEffect } from 'react';

const SECTION_IDS = ['about', 'publications', 'projects', 'experience', 'moments', 'contact'] as const;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const header = document.getElementById('site-header');
      const headerHeight = header ? header.offsetHeight : 64;

      setIsScrolled(scrollY > 10);

      const nearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 24;
      if (nearBottom) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      const offset = scrollY + headerHeight + 32;
      let current: string = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { activeSection, isScrolled };
}

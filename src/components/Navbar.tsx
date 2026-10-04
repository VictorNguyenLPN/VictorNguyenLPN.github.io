import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  isSolid: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isScrolled, isSolid }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handleClickOutside(e: MouseEvent) {
      if (
        isMobileOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return;

    if (href.startsWith('#')) {
      e.preventDefault();
      closeMobileMenu();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target && headerRef.current) {
        const navH = headerRef.current.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const headerClasses = [
    'site-header',
    isSolid ? 'is-solid' : '',
    isScrolled ? 'scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses} id="site-header" ref={headerRef}>
      <nav className="nav-inner" role="navigation" aria-label="Main navigation">
        <a
          href="#about"
          className="nav-brand"
          aria-label="Home"
          onClick={(e) => handleNavClick(e, '#about')}
        >
          <span className="brand-name">Quang Huy</span>
        </a>

        <button
          ref={toggleRef}
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`nav-links ${isMobileOpen ? 'is-open' : ''}`}
          id="nav-links"
          role="list"
        >
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#publications"
              className={`nav-link ${activeSection === 'publications' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#publications')}
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1rFibj9zdKVIfTgW2YhETGfWVq34bry5J/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Download my CV
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`nav-backdrop ${isMobileOpen ? 'is-visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </header>
  );
};

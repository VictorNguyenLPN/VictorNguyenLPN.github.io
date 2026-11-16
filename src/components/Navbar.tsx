import React, { useState, useEffect, useRef } from 'react';
import { CV_URL } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'moments', label: 'Moments' },
  { id: 'contact', label: 'Contact' },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ activeSection, isScrolled }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileOpen(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.getElementById(targetId);
    if (target) {
      const navHeight = headerRef.current ? headerRef.current.offsetHeight : 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'scrolled' : ''}`}
        id="site-header"
        ref={headerRef}
      >
        <nav className="nav-inner" aria-label="Main navigation">
          <a
            href="#about"
            className="nav-brand"
            aria-label="Quang Huy - Back to top"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            <span className="brand-name">Quang Huy</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
            aria-controls="nav-links"
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
          </button>

          <ul
            className={`nav-links ${isMobileOpen ? 'is-open' : ''}`}
            id="nav-links"
            role="list"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="nav-cv-item">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cv-link"
                aria-label="View CV (opens in new tab)"
                onClick={closeMobileMenu}
              >
                <span>CV</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={`nav-backdrop ${isMobileOpen ? 'is-visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </>
  );
};

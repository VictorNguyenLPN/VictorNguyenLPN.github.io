import React from 'react';
import { PROFILE_LINKS } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {currentYear} Nguyen Quang Huy. All rights reserved.
        </p>
        <div className="footer-links">
          <a href={`mailto:${PROFILE_LINKS.personalEmail}`}>Email</a>
          <a href={PROFILE_LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={PROFILE_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE_LINKS.orcid} target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
        </div>
      </div>
    </footer>
  );
};

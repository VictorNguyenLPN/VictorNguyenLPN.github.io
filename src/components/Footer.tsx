import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {currentYear} Nguyen Quang Huy. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/VictorNguyenLPN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nguyenquanghuy040805/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://orcid.org/0009-0003-3203-0415"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ORCID"
          >
            ORCID
          </a>
        </div>
      </div>
    </footer>
  );
};

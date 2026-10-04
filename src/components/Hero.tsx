import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <section className="hero" id="about" aria-label="About">
      <div id="hero" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true" />
      <div className="hero-inner container">
        <div className="hero-content reveal">
          <h1 className="hero-name">Nguyen Quang Huy</h1>
          <p className="hero-title">Research Intern @ NLP &amp; KD Lab, TDTU, Vietnam</p>

          <div className="hero-bio-paragraphs">
            <p className="body-text hero-bio-paragraph">
              <span>
                I am a final-year CS student at Ton Duc Thang University and a Research Intern at the NLP &amp; Knowledge Discovery Lab. My research focuses on evaluating embedding models and large language models in the legal domain.
              </span>{' '}
              <span className={`hero-bio-rest ${isBioExpanded ? 'is-expanded' : ''}`}>
                On the engineering side, I build RAG applications, AI chatbots, AI agent systems for legal problem, and machine learning systems for time-series forecasting. I have authored peer-reviewed research in AI and image forensics and received awards in scientific research and academic competitions.
              </span>
              <button
                type="button"
                className="hero-bio-inline-btn"
                onClick={() => setIsBioExpanded((prev) => !prev)}
                aria-expanded={isBioExpanded}
              >
                {isBioExpanded ? ' Thu gọn' : ' ... more'}
              </button>
            </p>
          </div>

          <div className={`hero-contact-info ${isBioExpanded ? 'is-expanded' : ''}`}>
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Email:</strong>{' '}
              <a href="mailto:nguyenquanghuy.st@tdtu.edu.vn" className="hero-contact-link">
                nguyenquanghuy.st(at)tdtu.edu.vn
              </a>{' '}
              /{' '}
              <a href="mailto:nqhuy.aie@gmail.com" className="hero-contact-link">
                nqhuy.aie(at)gmail.com
              </a>
            </p>
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Website:</strong>{' '}
              <a
                href="https://scholar.google.com/citations?user=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                Google Scholar
              </a>
              {', '}
              <a
                href="https://www.linkedin.com/in/nguyenquanghuy040805/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                LinkedIn
              </a>
              {', '}
              <a
                href="https://github.com/VictorNguyenLPN"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div className="hero-right reveal">
          <img
            src="images/avatar.jpg"
            alt="Nguyen Quang Huy"
            className="avatar"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PROFILE_LINKS } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="about" aria-label="About">
      <div className="hero-inner container">
        <div className="hero-content">
          <h1 className="hero-name">Nguyen Quang Huy</h1>
          <p className="hero-title">Research Intern @ NLP &amp; KD Lab, TDTU, Vietnam</p>

          <div className="hero-bio-paragraphs">
            <p className="body-text hero-bio-paragraph">
              I am a final-year CS student at Ton Duc Thang University and a Research Intern at
              the NLP &amp; Knowledge Discovery Lab. My research focuses on evaluating embedding
              models and LLMs in the legal domain.
            </p>
            <p className="body-text hero-bio-paragraph">
              Additionally, I build RAG applications, AI chatbots, and AI agent systems for legal
              problems. I have authored peer-reviewed research in AI, image forensics, and dense
              retrieval benchmarks, and received awards in scientific research and academic
              competitions.
            </p>
          </div>

          <div className="hero-contact-info">
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Email:</strong>{' '}
              <a href={`mailto:${PROFILE_LINKS.academicEmail}`} className="hero-contact-link">
                {PROFILE_LINKS.academicEmail}
              </a>{' '}
              /{' '}
              <a href={`mailto:${PROFILE_LINKS.personalEmail}`} className="hero-contact-link">
                {PROFILE_LINKS.personalEmail}
              </a>
            </p>
            <p className="hero-contact-line">
              <strong className="hero-contact-label">Profiles:</strong>{' '}
              <a
                href={PROFILE_LINKS.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                ORCID
              </a>
              {' · '}
              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                LinkedIn
              </a>
              {' · '}
              <a
                href={PROFILE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-contact-link"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="images/avatar.jpg"
            alt="Portrait of Nguyen Quang Huy"
            className="avatar"
            width={320}
            height={427}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

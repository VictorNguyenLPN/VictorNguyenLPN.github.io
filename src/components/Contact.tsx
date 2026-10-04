import React from 'react';
import { Mail, FileText } from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
  OrcidIcon,
  GoogleScholarIcon,
} from './common/Icons';

export const Contact: React.FC = () => {
  return (
    <section className="section contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <div className="section-label reveal">Contact</div>
        <h2 className="section-heading reveal">Let&apos;s connect</h2>
        <p className="contact-sub reveal">
          I&apos;m currently open to AI Research and AI Engineer opportunities in Ho Chi
          Minh City. If you&apos;re working on LLMs, Embedding Models, RAG, AI Agent systems,
          Legal AI, or Image Forensics, I&apos;d love to connect. I also welcome research collaborations
          and am actively seeking fully funded Master&apos;s opportunities with research
          groups and laboratories worldwide.
        </p>

        <div className="contact-grid">
          {/* Email */}
          <a
            href="mailto:nqhuy.aie@gmail.com"
            className="contact-card reveal"
            aria-label="Email"
          >
            <div className="contact-card-icon" aria-hidden="true">
              <Mail size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">Email</div>
              <div className="contact-card-value">nqhuy.aie@gmail.com</div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VictorNguyenLPN"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal reveal-delay-1"
            aria-label="GitHub"
          >
            <div className="contact-card-icon" aria-hidden="true">
              <GithubIcon size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">GitHub</div>
              <div className="contact-card-value">VictorNguyenLPN</div>
            </div>
          </a>

          {/* CV */}
          <a
            href="https://drive.google.com/file/d/1rFibj9zdKVIfTgW2YhETGfWVq34bry5J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal reveal-delay-2"
            aria-label="CV"
          >
            <div className="contact-card-icon" aria-hidden="true">
              <FileText size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">CV</div>
              <div className="contact-card-value">Download my CV</div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nguyenquanghuy040805/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
            aria-label="LinkedIn"
          >
            <div className="contact-card-icon" aria-hidden="true">
              <LinkedinIcon size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">LinkedIn</div>
              <div className="contact-card-value">nguyenquanghuy040805</div>
            </div>
          </a>

          {/* ORCID */}
          <a
            href="https://orcid.org/0009-0003-3203-0415"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal reveal-delay-1"
            aria-label="ORCID"
          >
            <div className="contact-card-icon orcid-icon" aria-hidden="true">
              <OrcidIcon size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">ORCID</div>
              <div className="contact-card-value">0009-0003-3203-0415</div>
            </div>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal reveal-delay-2"
            aria-label="Google Scholar"
          >
            <div className="contact-card-icon" aria-hidden="true">
              <GoogleScholarIcon size={20} />
            </div>
            <div className="contact-card-body">
              <div className="contact-card-label">Google Scholar</div>
              <div className="contact-card-value">Quang Huy Nguyen</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

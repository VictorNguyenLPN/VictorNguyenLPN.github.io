import React from 'react';
import { Mail, FileText, GraduationCap } from 'lucide-react';
import { CONTACT_ITEMS, type ContactItem } from '../data/portfolio';
import { GithubIcon, LinkedinIcon, OrcidIcon } from './common/Icons';

function renderContactIcon(icon: ContactItem['icon']) {
  switch (icon) {
    case 'mail':
      return <Mail size={20} aria-hidden="true" />;
    case 'academic-mail':
      return <GraduationCap size={20} aria-hidden="true" />;
    case 'github':
      return <GithubIcon size={20} />;
    case 'cv':
      return <FileText size={20} aria-hidden="true" />;
    case 'linkedin':
      return <LinkedinIcon size={20} />;
    case 'orcid':
      return <OrcidIcon size={20} />;
  }
}

export const Contact: React.FC = () => {
  return (
    <section className="section contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <h2 className="section-heading reveal">Let&apos;s connect</h2>
        <p className="contact-sub reveal">
          I&apos;m currently open to AI Research and AI Engineer opportunities in Ho Chi Minh City.
          If you&apos;re working on LLMs, Embedding Models, RAG, AI Agent systems, Legal AI, or
          Image Forensics, I&apos;d love to connect. I also welcome research collaborations and am
          actively seeking fully funded Master&apos;s opportunities with research groups and
          laboratories worldwide.
        </p>

        <div className="contact-grid">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="contact-card reveal"
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className="contact-card-icon" aria-hidden="true">
                {renderContactIcon(item.icon)}
              </div>
              <div className="contact-card-body">
                <div className="contact-card-label">{item.label}</div>
                <div className="contact-card-value">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

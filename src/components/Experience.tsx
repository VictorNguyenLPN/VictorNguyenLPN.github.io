import React from 'react';
import { EXPERIENCES } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section className="section experience-section" id="experience" aria-label="Experience">
      <div className="container">
        <h2 className="section-heading reveal">Experience &amp; Education</h2>

        <div className="timeline">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="timeline-item reveal">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org">
                  <a href={item.organizationUrl} target="_blank" rel="noopener noreferrer">
                    {item.organization}
                  </a>
                </div>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

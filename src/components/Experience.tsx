import React, { useState } from 'react';

export const Experience: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<Record<string, boolean>>({});

  const toggleExp = (id: string) => {
    setExpandedExp((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section experience-section" id="experience" aria-label="Experience">
      <div className="container">
        <div className="section-label reveal">Experience &amp; Education</div>
        <h2 className="section-heading reveal">Academic &amp; research timeline</h2>

        <div className="timeline">
          {/* Research Intern */}
          <div className="timeline-item reveal">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-date">Jun 2026 - Present</div>
              <div className="timeline-header-row">
                <h3
                  className="timeline-role"
                  onClick={() => toggleExp('intern')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedExp['intern'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExp('intern');
                    }
                  }}
                >
                  Research Intern
                </h3>
              </div>

              <div className="timeline-org">
                <a href="https://it.tdtu.edu.vn/nlplab" target="_blank" rel="noopener noreferrer">
                  NLP &amp; Knowledge Discovery Lab · Ton Duc Thang University
                </a>
              </div>

              <div
                id="exp-details-intern"
                className={`timeline-details-wrapper ${expandedExp['intern'] ? 'is-open' : ''}`}
              >
                <div className="timeline-details-inner">
                  <ul className="timeline-bullets">
                    <li>Built web scrapers and ETL pipelines to collect and process large-scale legal text datasets</li>
                    <li>Researched and developed a benchmark for legal text embedding and retrieval models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* B.Sc. Computer Science */}
          <div className="timeline-item reveal">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-date">Sep 2023 - Present</div>
              <div className="timeline-header-row">
                <h3
                  className="timeline-role"
                  onClick={() => toggleExp('bsc')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedExp['bsc'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExp('bsc');
                    }
                  }}
                >
                  B.Sc. Computer Science
                </h3>
              </div>

              <div className="timeline-org">
                <a href="https://tdtu.edu.vn/en" target="_blank" rel="noopener noreferrer">
                  Ton Duc Thang University · Ho Chi Minh City
                </a>
              </div>

              <div
                id="exp-details-bsc"
                className={`timeline-details-wrapper ${expandedExp['bsc'] ? 'is-open' : ''}`}
              >
                <div className="timeline-details-inner">
                  <ul className="timeline-bullets">
                    <li>Third Prize, Student Scientific Research Competition, Ton Duc Thang University (2025)</li>
                    <li>Encouragement Prize, Vietnam Datathon - DataStorm (2025)</li>
                    <li>Encouragement Prize, Student AI Olympiad - Southern Region (2025)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* High School Diploma */}
          <div className="timeline-item reveal">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-date">Sep 2020 - May 2023</div>
              <div className="timeline-header-row">
                <h3
                  className="timeline-role"
                  onClick={() => toggleExp('highschool')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedExp['highschool'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExp('highschool');
                    }
                  }}
                >
                  High School Diploma
                </h3>
              </div>

              <div className="timeline-org">
                <a href="https://chuyenthanglongdalat.edu.vn/" target="_blank" rel="noopener noreferrer">
                  Thang Long High School for the Gifted · Da Lat City
                </a>
              </div>

              <div
                id="exp-details-highschool"
                className={`timeline-details-wrapper ${expandedExp['highschool'] ? 'is-open' : ''}`}
              >
                <div className="timeline-details-inner">
                  <ul className="timeline-bullets">
                    <li>3rd Prize, Provincial Excellent Student Competition, Lam Dong</li>
                    <li>Member, Lam Dong Provincial Team for National Excellent Student Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

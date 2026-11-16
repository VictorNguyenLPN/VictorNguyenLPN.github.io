import React from 'react';
import { ExternalLink, Award, Bookmark } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { GithubIcon } from './common/Icons';

export const Projects: React.FC = () => {
  return (
    <section className="section projects-section" id="projects" aria-label="Projects">
      <div className="container">
        <h2 className="section-heading reveal">Selected Projects</h2>

        <div className="projects-list">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-item reveal" aria-label={project.title}>
              <div className="project-header">
                <h3 className="project-title">
                  <span>{project.title}</span>
                  {project.badge && <span className="project-badge">{project.badge}</span>}
                </h3>

                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-pill"
                        title={link.title ?? link.label}
                      >
                        {link.type === 'github' ? (
                          <GithubIcon size={14} />
                        ) : (
                          <ExternalLink size={14} aria-hidden="true" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-bullets">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <p className="project-tech">
                <strong>Technologies:</strong> {project.technologies}
              </p>

              {project.highlight && (
                <div className={`project-highlight project-highlight--${project.highlight.tone}`}>
                  {project.highlight.tone === 'award' ? (
                    <Award size={15} aria-hidden="true" />
                  ) : (
                    <Bookmark size={15} aria-hidden="true" />
                  )}
                  <span>
                    <strong>{project.highlight.label}:</strong> {project.highlight.text}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Globe, Copy, Check, ChevronDown, X, Award, Trophy } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { PUBLICATIONS } from '../data/portfolio';
import { GithubIcon } from './common/Icons';

export const Publications: React.FC = () => {
  const { copy, copiedId } = useClipboard();
  const [openBibtex, setOpenBibtex] = useState<Record<string, boolean>>({});

  const handleToggleBibtex = (id: string, bibtex: string) => {
    const isOpening = !openBibtex[id];
    setOpenBibtex((prev) => ({ ...prev, [id]: isOpening }));
    if (isOpening) {
      copy(bibtex, id);
    }
  };

  return (
    <section className="section pub-section" id="publications" aria-label="Publications">
      <div className="container">
        <h2 className="section-heading reveal">Publications</h2>

        <div className="pub-list">
          {PUBLICATIONS.map((pub) => {
            const isOpen = Boolean(openBibtex[pub.id]);
            const isCopied = copiedId === pub.id;

            return (
              <article key={pub.id} className="pub-item reveal" aria-label={pub.title}>
                <h3 className="pub-title">{pub.title}</h3>

                <p className="pub-venue">
                  {pub.venue}
                  {pub.venueBadge && (
                    <>
                      {' '}
                      <strong>({pub.venueBadge})</strong>
                    </>
                  )}
                </p>

                <p className="pub-authors">{pub.authors}</p>

                {pub.award && (
                  <p className="pub-award">
                    <Award size={15} aria-hidden="true" />
                    <span>{pub.award}</span>
                  </p>
                )}

                <div className="pub-links">
                  {pub.githubUrl && (
                    <a
                      href={pub.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-pill"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {pub.siteUrl && (
                    <a
                      href={pub.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-pill"
                      title={pub.siteTitle ?? 'Conference Website'}
                    >
                      <Globe size={14} aria-hidden="true" />
                      <span>Site</span>
                    </a>
                  )}

                  {pub.leaderboardUrl && (
                    <a
                      href={pub.leaderboardUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-pill"
                    >
                      <Trophy size={14} aria-hidden="true" />
                      <span>Leaderboard</span>
                    </a>
                  )}

                  <button
                    type="button"
                    className={`action-pill ${isOpen ? 'is-active' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`bibtex-${pub.id}`}
                    onClick={() => handleToggleBibtex(pub.id, pub.bibtex)}
                  >
                    <Copy size={14} aria-hidden="true" />
                    <span>BibTeX</span>
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`collapse-chevron ${isOpen ? 'is-rotated' : ''}`}
                    />
                  </button>
                </div>

                <div
                  id={`bibtex-${pub.id}`}
                  className={`bibtex-drawer ${isOpen ? 'is-open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="bibtex-inner">
                    <div className="bibtex-box">
                      <div className="bibtex-bar">
                        <span className="bibtex-bar-label">BibTeX</span>
                        <div className="bibtex-bar-actions">
                          <button
                            type="button"
                            className={`bibtex-copy-btn ${isCopied ? 'is-copied' : ''}`}
                            onClick={() => copy(pub.bibtex, pub.id)}
                          >
                            {isCopied ? (
                              <>
                                <Check size={13} aria-hidden="true" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} aria-hidden="true" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            className="bibtex-close-btn"
                            onClick={() =>
                              setOpenBibtex((prev) => ({ ...prev, [pub.id]: false }))
                            }
                            aria-label="Close BibTeX citation"
                          >
                            <X size={15} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <pre className="bibtex-code">
                        <code>{pub.bibtex}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

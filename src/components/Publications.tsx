import React, { useState } from 'react';
import { useClipboard } from '../hooks/useClipboard';
import { GlobeCode, Copy, Check, ChevronDown } from 'lucide-react';
import { GithubIcon } from './common/Icons';

const FALCON_BIBTEX = `@misc{nguyen2026falcon,
  title  = {FALCON: Forensic-Aware Language-guided Contrastive Learning for Generalized Synthetic Image Detection},
  author = {Nguyen, Quang Huy and Ryu, Keun Ho and Delina, Mutia and Pham, Van Huy},
  year   = {2026}
}`;

const ASBW_BIBTEX = `@inproceedings{nguyen2026asbw,
  title      = {ASBW: A Frequency-Domain Analysis Approach for Distinguishing GAN-Generated Images from Real Images},
  author     = {Nguyen, Quang Huy and Pham, Van Huy},
  booktitle  = {In Proceeding of the Digital Convergence in Economics, Society and Technology (DCEST) 2026 International Conference},
  year       = {2026},
  pages      = {95-105}
}`;

export const Publications: React.FC = () => {
  const { copy, copiedId } = useClipboard();
  const [expandedPubs, setExpandedPubs] = useState<Record<string, boolean>>({});
  const [openBibtex, setOpenBibtex] = useState<Record<string, boolean>>({});

  const togglePub = (id: string) => {
    setExpandedPubs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleBibtex = (id: string, bibtexText: string) => {
    copy(bibtexText, id);
    setOpenBibtex((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section pub-section" id="publications" aria-label="Publications">
      <div className="container">
        <div className="section-label reveal">Publications</div>
        <h2 className="section-heading reveal">Research output</h2>

        <div className="pub-list">
          {/* FALCON */}
          <article className="pub-item reveal" aria-label="Publication: FALCON">
            <div className="pub-body">
              <div className="pub-title-row">
                <h3
                  className="pub-title"
                  onClick={() => togglePub('falcon')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedPubs['falcon'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePub('falcon');
                    }
                  }}
                >
                  FALCON: Forensic-Aware Language-Guided Contrastive Learning for Generalized Synthetic Image Detection
                </h3>
              </div>

              <p className="pub-venue">
                To be appear - [FITAT 2026] 18th International Conference on Frontiers of Information Technology, Applications and Tools <strong>(Scopus Indexed)</strong>
              </p>

              <div
                id="pub-details-falcon"
                className={`pub-details-wrapper ${expandedPubs['falcon'] ? 'is-open' : ''}`}
              >
                <div className="pub-details-inner">
                  <p className="pub-authors">
                    Nguyen, Q. H., Ryu, K. H., Delina, M., &amp; Pham, V. H.
                  </p>

                  <div className="pub-links">
                    <a
                      href="https://github.com/VictorNguyenLPN/FALCON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>

                    <a
                      href="https://fitat.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="FITAT Conference Website"
                    >
                      <GlobeCode size={14} />
                      Site
                    </a>

                    <button
                      type="button"
                      className={`pub-link bibtex-copy-btn ${copiedId === 'falcon' ? 'copied' : ''} ${openBibtex['falcon'] ? 'is-active' : ''}`}
                      title="Copy & View BibTeX"
                      aria-label="Copy and toggle BibTeX citation"
                      aria-expanded={Boolean(openBibtex['falcon'])}
                      onClick={() => toggleBibtex('falcon', FALCON_BIBTEX)}
                    >
                      {copiedId === 'falcon' ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedId === 'falcon' ? 'Copied!' : (openBibtex['falcon'] ? 'Hide BibTeX' : 'BibTeX')}</span>
                      <ChevronDown
                        size={12}
                        className={`collapse-chevron ${openBibtex['falcon'] ? 'is-rotated' : ''}`}
                      />
                    </button>
                  </div>

                  <div className={`bibtex-drawer ${openBibtex['falcon'] ? 'is-open' : ''}`}>
                    <div className="bibtex-inner">
                      <div className="bibtex-box">
                        <div className="bibtex-bar">
                          <span className="bibtex-bar-label">BibTeX (Copied to clipboard)</span>
                          <button
                            type="button"
                            className="bibtex-close-btn"
                            onClick={() => setOpenBibtex((prev) => ({ ...prev, falcon: false }))}
                            aria-label="Close BibTeX preview"
                          >
                            ✕
                          </button>
                        </div>
                        <pre className="bibtex-code"><code>{FALCON_BIBTEX}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ASBW */}
          <article className="pub-item reveal" aria-label="Publication: ASBW">
            <div className="pub-body">
              <div className="pub-title-row">
                <h3
                  className="pub-title"
                  onClick={() => togglePub('asbw')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedPubs['asbw'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePub('asbw');
                    }
                  }}
                >
                  ASBW: A Frequency-Domain Analysis Approach for Distinguishing GAN-Generated Images from Real Images
                </h3>
              </div>

              <p className="pub-venue">
                [DCEST 2026] International Conference on Digital Convergence in Economics, Society and Technology, pp. 95-105
              </p>

              <div
                id="pub-details-asbw"
                className={`pub-details-wrapper ${expandedPubs['asbw'] ? 'is-open' : ''}`}
              >
                <div className="pub-details-inner">
                  <p className="pub-authors">
                    Nguyen, Q. H., &amp; Pham, V. H. (2026)
                  </p>

                  <div className="pub-links">
                    <a
                      href="https://github.com/VictorNguyenLPN/ASBW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>

                    <a
                      href="https://www.dcest.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="DCEST Conference Website"
                    >
                      <GlobeCode size={14} />
                      Site
                    </a>

                    <button
                      type="button"
                      className={`pub-link bibtex-copy-btn ${copiedId === 'asbw' ? 'copied' : ''} ${openBibtex['asbw'] ? 'is-active' : ''}`}
                      title="Copy & View BibTeX"
                      aria-label="Copy and toggle BibTeX citation"
                      aria-expanded={Boolean(openBibtex['asbw'])}
                      onClick={() => toggleBibtex('asbw', ASBW_BIBTEX)}
                    >
                      {copiedId === 'asbw' ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedId === 'asbw' ? 'Copied!' : (openBibtex['asbw'] ? 'Hide BibTeX' : 'BibTeX')}</span>
                      <ChevronDown
                        size={12}
                        className={`collapse-chevron ${openBibtex['asbw'] ? 'is-rotated' : ''}`}
                      />
                    </button>
                  </div>

                  <div className={`bibtex-drawer ${openBibtex['asbw'] ? 'is-open' : ''}`}>
                    <div className="bibtex-inner">
                      <div className="bibtex-box">
                        <div className="bibtex-bar">
                          <span className="bibtex-bar-label">BibTeX (Copied to clipboard)</span>
                          <button
                            type="button"
                            className="bibtex-close-btn"
                            onClick={() => setOpenBibtex((prev) => ({ ...prev, asbw: false }))}
                            aria-label="Close BibTeX preview"
                          >
                            ✕
                          </button>
                        </div>
                        <pre className="bibtex-code"><code>{ASBW_BIBTEX}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

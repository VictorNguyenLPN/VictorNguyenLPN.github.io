import React, { useState } from 'react';
import { useClipboard } from '../hooks/useClipboard';
import { GlobeCode, Copy, ChevronDown } from 'lucide-react';
import { GithubIcon } from './common/Icons';

const VILEGALREB_BIBTEX = `@inproceedings{nguyen2027vilegalreb,
  title     = {ViLegalREB: Vietnamese Legal Retrieval Embedding Benchmark},
  author    = {Nguyen, Quang Huy and Phan, Tri Hieu and Le, Dong Duong and Duong, Trong-Chi and Le, Anh-Cuong},
  booktitle = {Proceedings of the 19th Asian Conference on Intelligent Information and Database Systems (ACIIDS 2027)},
  year      = {2027},
  note      = {Under review}
}`;

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
  const { copy } = useClipboard();
  const [expandedPubs, setExpandedPubs] = useState<Record<string, boolean>>({});
  const [openBibtex, setOpenBibtex] = useState<Record<string, boolean>>({});

  const togglePub = (id: string) => {
    setExpandedPubs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleBibtex = (id: string, bibtexText: string) => {
    copy(bibtexText);
    setOpenBibtex((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section pub-section" id="publications" aria-label="Publications">
      <div className="container">
        <h2 className="section-heading reveal">Publications</h2>

        <div className="pub-list">
          {/* ViLegalREB */}
          <article className="pub-item reveal" aria-label="Publication: ViLegalREB">
            <div className="pub-body">
              <div className="pub-title-row">
                <h3
                  className="pub-title"
                  onClick={() => togglePub('vilegalreb')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedPubs['vilegalreb'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePub('vilegalreb');
                    }
                  }}
                >
                  ViLegalREB: Vietnamese Legal Retrieval Embedding Benchmark
                </h3>
              </div>

              <p className="pub-venue">
                Under review - [ACIIDS 2027] 19th Asian Conference on Intelligent Information and Database Systems <strong>(CORE Rank B, Scopus Indexed)</strong>
              </p>

              <div
                id="pub-details-vilegalreb"
                className={`pub-details-wrapper ${expandedPubs['vilegalreb'] ? 'is-open' : ''}`}
              >
                <div className="pub-details-inner">
                  <p className="pub-authors">
                    Nguyen, Q. H., Phan, T. H., Le, D. D., Duong, T.-C., &amp; Le, A.-C.
                  </p>

                  <div className="pub-links">
                    <a
                      href="https://aciids.pwr.edu.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                      title="ACIIDS Conference Website"
                    >
                      <GlobeCode size={14} />
                      Site
                    </a>

                    <button
                      type="button"
                      className="pub-link bibtex-copy-btn"
                      title="BibTeX"
                      aria-label="Toggle BibTeX citation"
                      aria-expanded={Boolean(openBibtex['vilegalreb'])}
                      onClick={() => toggleBibtex('vilegalreb', VILEGALREB_BIBTEX)}
                    >
                      <Copy size={14} />
                      <span>BibTeX</span>
                      <ChevronDown
                        size={12}
                        className={`collapse-chevron ${openBibtex['vilegalreb'] ? 'is-rotated' : ''}`}
                      />
                    </button>
                  </div>

                  <div className={`bibtex-drawer ${openBibtex['vilegalreb'] ? 'is-open' : ''}`}>
                    <div className="bibtex-inner">
                      <div className="bibtex-box">
                        <div className="bibtex-bar">
                          <span className="bibtex-bar-label">BibTeX</span>
                          <button
                            type="button"
                            className="bibtex-close-btn"
                            onClick={() => setOpenBibtex((prev) => ({ ...prev, vilegalreb: false }))}
                            aria-label="Close BibTeX preview"
                          >
                            ✕
                          </button>
                        </div>
                        <pre className="bibtex-code"><code>{VILEGALREB_BIBTEX}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
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
                      className="pub-link bibtex-copy-btn"
                      title="BibTeX"
                      aria-label="Toggle BibTeX citation"
                      aria-expanded={Boolean(openBibtex['falcon'])}
                      onClick={() => toggleBibtex('falcon', FALCON_BIBTEX)}
                    >
                      <Copy size={14} />
                      <span>BibTeX</span>
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
                          <span className="bibtex-bar-label">BibTeX</span>
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
                      className="pub-link bibtex-copy-btn"
                      title="BibTeX"
                      aria-label="Toggle BibTeX citation"
                      aria-expanded={Boolean(openBibtex['asbw'])}
                      onClick={() => toggleBibtex('asbw', ASBW_BIBTEX)}
                    >
                      <Copy size={14} />
                      <span>BibTeX</span>
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
                          <span className="bibtex-bar-label">BibTeX</span>
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

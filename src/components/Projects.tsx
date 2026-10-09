import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './common/Icons';

export const Projects: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleProject = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="section projects-section" id="projects" aria-label="Projects">
      <div className="container">
        <h2 className="section-heading reveal">Selected Projects</h2>

        <div className="projects-list">
          {/* Evidentia */}
          <article className="project-item reveal" aria-label="Project: Evidentia">
            <div className="project-header">
              <div className="project-title-group">
                <h3
                  className="project-title"
                  onClick={() => toggleProject('evidentia')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedProjects['evidentia'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject('evidentia');
                    }
                  }}
                >
                  <span>Evidentia: Vietnamese Legal AI Agentic System</span>
                  <span className="project-badge">Beta</span>
                </h3>
              </div>
              <div className="project-actions">
                <div className="project-links">
                  <a
                    href="https://evidentia.io.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="Live Demo"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span className="project-link-text">evidentia.io.vn</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="project-details-evidentia"
              className={`project-details-wrapper ${expandedProjects['evidentia'] ? 'is-open' : ''}`}
            >
              <div className="project-details-inner">
                <p className="project-desc">
                  An agentic AI platform for Vietnamese legal search, automated consultation, and validity tracking.
                </p>

                <ul className="project-bullets">
                  <li>Built an AI agent using LangGraph for Vietnamese legal search and Q&amp;A.</li>
                  <li>Integrated Graph and Vector retrieval to retrieve relevant legal documents and their relationships.</li>
                  <li>Developed features for legal document lookup, validity checking, and version comparison.</li>
                </ul>

                <p className="project-tech">
                  <strong>Technologies:</strong> Python, LangGraph, Vector Search, Knowledge Graph, FastAPI
                </p>

                <p className="project-tech project-mobile-links">
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://evidentia.io.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Live Demo
                  </a>
                </p>

                <div className="project-award">
                  <span><strong>Note:</strong> Computer Science Graduation Thesis</span>
                </div>
              </div>
            </div>
          </article>

          {/* Legal RAG */}
          <article className="project-item reveal" aria-label="Project: Legal RAG">
            <div className="project-header">
              <div className="project-title-group">
                <h3
                  className="project-title"
                  onClick={() => toggleProject('legal-rag')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedProjects['legal-rag'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject('legal-rag');
                    }
                  }}
                >
                  Legal RAG: Vietnamese Legal RAG Chatbot System
                </h3>
              </div>
              <div className="project-actions">
                <div className="project-links">
                  <a
                    href="https://github.com/VictorNguyenLPN/Legal-RAG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="Legal-RAG on GitHub"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={14} />
                    <span className="project-link-text">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="project-details-legal-rag"
              className={`project-details-wrapper ${expandedProjects['legal-rag'] ? 'is-open' : ''}`}
            >
              <div className="project-details-inner">
                <p className="project-desc">
                  A full-stack RAG chatbot for searching and answering questions about Vietnamese legal documents.
                </p>

                <ul className="project-bullets">
                  <li>Built a full-stack legal chatbot with FastAPI, React, and TypeScript, supporting document upload and automatic indexing.</li>
                  <li>Built a RAG pipeline with Gemini embeddings, BM25, and RRF for hybrid retrieval, with query rewriting and citation-based answers.</li>
                </ul>

                <p className="project-tech">
                  <strong>Technologies:</strong> FastAPI, Python, React, TypeScript, Gemini API, BM25, RRF
                </p>

                <p className="project-tech project-mobile-links">
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://github.com/VictorNguyenLPN/Legal-RAG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </article>

          {/* FinSavy */}
          <article className="project-item reveal" aria-label="Project: FinSavy">
            <div className="project-header">
              <div className="project-title-group">
                <h3
                  className="project-title"
                  onClick={() => toggleProject('finsavy')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedProjects['finsavy'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject('finsavy');
                    }
                  }}
                >
                  FinSavy: AI-Driven Stock Investment &amp; Anomaly Warning System
                </h3>
              </div>
              <div className="project-actions">
                <div className="project-links">
                  <a
                    href="https://github.com/CSSERT/FinSavyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="FinSavy on GitHub"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={14} />
                    <span className="project-link-text">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="project-details-finsavy"
              className={`project-details-wrapper ${expandedProjects['finsavy'] ? 'is-open' : ''}`}
            >
              <div className="project-details-inner">
                <p className="project-desc">
                  An AI system for stock analysis, price forecasting, and anomaly detection.
                </p>

                <ul className="project-bullets">
                  <li>Built an anomaly detection system using Isolation Forest and Autoencoder.</li>
                  <li>Built the ViBankACSA dataset with 1,462+ banking articles to train sentiment analysis models.</li>
                  <li>Conducted experiments with LSTM, DLinear, and iTransformer, finding that adding sentiment features improved forecasting performance, achieving the best RMSE of 2.24.</li>
                </ul>

                <p className="project-tech">
                  <strong>Technologies:</strong> PyTorch, BARTpho, Transformers, LLMs, Time-Series, Isolation Forest
                </p>

                <p className="project-tech project-mobile-links">
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://github.com/CSSERT/FinSavyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Github
                  </a>
                </p>

                <div className="project-award">
                  <span><strong>Award:</strong> Third Prize, Student Scientific Research Competition, Ton Duc Thang University (2025)</span>
                </div>
              </div>
            </div>
          </article>

          {/* Retail Analytics & Demand Forecasting Platform */}
          <article className="project-item reveal" aria-label="Project: Retail Analytics & Demand Forecasting Platform">
            <div className="project-header">
              <div className="project-title-group">
                <h3
                  className="project-title"
                  onClick={() => toggleProject('datastorm')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedProjects['datastorm'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject('datastorm');
                    }
                  }}
                >
                  DataStorm
                </h3>
              </div>
              <div className="project-actions">
                <div className="project-links">
                  <a
                    href="https://datastorm-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="Retail Analytics live demo"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span className="project-link-text">Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/DOM-ITCC/datastorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="DataStorm on GitHub"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={14} />
                    <span className="project-link-text">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="project-details-datastorm"
              className={`project-details-wrapper ${expandedProjects['datastorm'] ? 'is-open' : ''}`}
            >
              <div className="project-details-inner">
                <p className="project-desc">
                  A full-stack analytics platform for FMCG demand forecasting.
                </p>

                <ul className="project-bullets">
                  <li>Built RESTful APIs with FastAPI and PostgreSQL, optimized for performance with Redis caching.</li>
                  <li>Integrated LLM-powered recommendations using Google Gemini and deployed services on AWS EC2, Render, and Vercel.</li>
                </ul>

                <p className="project-tech">
                  <strong>Technologies:</strong> Next.js, Tailwind CSS, shadcn/ui, FastAPI, PostgreSQL, Redis, Google Gemini, AWS EC2, Render, Vercel
                </p>

                <p className="project-tech project-mobile-links">
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://github.com/DOM-ITCC/datastorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Github
                  </a>
                  {', '}
                  <a
                    href="https://datastorm-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Live Demo
                  </a>
                </p>

                <div className="project-award">
                  <span><strong>Award:</strong> Encouragement Prize, DataStorm 2025</span>
                </div>
              </div>
            </div>
          </article>

          {/* AQI Forecasting Platform */}
          <article className="project-item reveal" aria-label="Project: AQI Forecasting Platform">
            <div className="project-header">
              <div className="project-title-group">
                <h3
                  className="project-title"
                  onClick={() => toggleProject('airforce')}
                  role="button"
                  tabIndex={0}
                  aria-expanded={Boolean(expandedProjects['airforce'])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleProject('airforce');
                    }
                  }}
                >
                  AirForce
                </h3>
              </div>
              <div className="project-actions">
                <div className="project-links">
                  <a
                    href="https://airforceclient.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="AirForce Live Demo"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={14} />
                    <span className="project-link-text">Live Demo</span>
                  </a>
                  <a
                    href="https://github.com/DanielNguyen-05/AirForce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    title="AirForce Github"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={14} />
                    <span className="project-link-text">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              id="project-details-airforce"
              className={`project-details-wrapper ${expandedProjects['airforce'] ? 'is-open' : ''}`}
            >
              <div className="project-details-inner">
                <p className="project-desc">
                  Frontend Developer for an air quality monitoring and forecasting platform built for the NASA Space Apps Challenge 2025.
                </p>

                <ul className="project-bullets">
                  <li>Integrated satellite and environmental datasets, with a geospatial visualization interface and forecasting pipelines.</li>
                  <li>Applied LSTM models for AQI prediction.</li>
                </ul>

                <p className="project-tech">
                  <strong>Technologies:</strong> React, Tailwind CSS, Node.js, Express.js, Flask, LSTM, Geospatial UI
                </p>

                <p className="project-tech project-mobile-links">
                  <strong>Links:</strong>{' '}
                  <a
                    href="https://github.com/DanielNguyen-05/AirForce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Github
                  </a>
                  {', '}
                  <a
                    href="https://airforceclient.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-inline-link"
                  >
                    Live Demo
                  </a>
                </p>

                <div className="project-award">
                  <span><strong>Award:</strong> Top 11 HCMC, NASA Space Apps Challenge 2025</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

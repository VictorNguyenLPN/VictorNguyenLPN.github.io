import { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import "./App.css";

const tocItems = [
  { id: "bio", label: "Short Bio" },
  { id: "education", label: "Education" },
  { id: "publication", label: "Publication" },
  { id: "projects", label: "Projects" },
  { id: "competition", label: "Competition" },
  { id: "certification", label: "Certification" },
];

function TableOfContents() {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="toc">
      <h3 className="toc-title">Contents</h3>
      <ul className="toc-list">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`toc-link ${activeSection === item.id ? "active" : ""}`}
              title={item.label}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function HomePage() {
  return (
    <>
      <section id="bio" className="intro">
        <h1>Short Bio</h1>
        <div className="item">
          {" "}
          <p className="short-bio">
            I am a third-year Computer Science student at{" "}
            <a
              href="https://it.tdtu.edu.vn/en"
              target="_blank"
              rel="noreferrer noopener"
              className="important"
              title="Faculty of Information Technology, Ton Duc Thang University"
            >
              Faculty of Information Technology, Ton Duc Thang University
            </a>
            , with research interests in Computer Vision, Natural Language
            Processing, Time Series Forecasting and Web Development.
          </p>
        </div>
      </section>

      <section id="education" className="education">
        <h1>Education</h1>
        <div className="item">
          <div className="block">
            <div className="degree-header">
              <div>
                <h2 className="degree-title">Bachelor of Computer Science</h2>
                <p className="degree-info">
                  Faculty of Information Technology, Ton Duc Thang University,
                  Vietnam
                </p>
              </div>
              <h2 className="period">2023 - 2027</h2>
            </div>
            {/* <div className="details">
              <p>
                Graduation Thesis: <span className="important">Null</span>
              </p>
              <p>
                Supervisor: <span className="important">Null</span>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section id="publication" className="publication">
        <h1>Publication</h1>
        <div className="item">
          <div className="block">
            <div className="publication-header">
              <div>
                <h2 className="publication-title">
                  ASBW: A Frequency-Domain Analysis Approach for Distinguishing
                  GAN-Generated Images from Real Images
                </h2>
              </div>
              <h2 className="period">2026</h2>
            </div>
            <div className="details">
              <p>
                DOI: <span className="important">Updating</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="item">
          <div className="block">
            <div className="project-header">
              <div>
                <h2 className="project-title">
                  <a
                    href="https://github.com/DomTechnology/datastorm"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="important"
                    title="DataStorm GitHub Repository"
                  >
                    DataStorm
                  </a>
                </h2>
              </div>
              <h2 className="period">
                <a
                  href="https://drive.google.com/file/d/1qksnp924iOI4s5qwWvdedV6fYhsfN7y-/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="important"
                  title="Top 10, Encouragement Prize of Vietnam Datathon - DataStorm 2025"
                >
                  Top 10, Encouragement Prize of Vietnam Datathon - DataStorm
                  2025
                </a>
              </h2>
            </div>
            <hr />
            <div className="details">
              <p className="project-info">
                An end-to-end retail analytics and demand forecasting platform
                for FMCG, combining interactive dashboards with ML-powered 7-day
                forecasts.
              </p>
              <h3 className="attributes">My role</h3>
              <ul className="feature-list">
                <li>
                  Processed and analyzed multi-vertical retail data; selected
                  forecasting approaches suited to FMCG seasonality.
                </li>
                <li>
                  Implemented the ML forecasting service for SKU-level demand.
                </li>
                <li>Built end-to-end pipelines from ingestion to serving.</li>
                <li>
                  Contributed across frontend (Next.js/Tailwind) and backend
                  (FastAPI + PostgreSQL + Redis) for analytics delivery.
                </li>
              </ul>
              <h3 className="attributes">Features</h3>
              <ul className="feature-list">
                <li>
                  Sales analytics (net sales, units, revenue) with geographic
                  and channel breakdowns.
                </li>
                <li>
                  7-day demand forecasting for inventory optimization and stock
                  alerts.
                </li>
                <li>
                  Pricing/discount impact analysis and supplier performance
                  views.
                </li>
                <li>Interactive maps for multi-country store comparisons.</li>
              </ul>
            </div>
          </div>
          <div className="block">
            <div className="project-header">
              <div>
                <h2 className="project-title">
                  <a
                    href="https://github.com/DanielNguyen-05/AirForce"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="important"
                    title="AirForce GitHub Repository"
                  >
                    AirForce
                  </a>
                </h2>
              </div>
              <span className="period">
                <a
                  href="https://www.facebook.com/share/p/1FmFRrUUNd"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="important"
                  title="Top 11 NASA Space Apps Challenge 2025, Ho Chi Minh"
                >
                  Top 11 NASA Space Apps Challenge 2025, Ho Chi Minh
                </a>
              </span>
            </div>
            <hr />
            <div className="details">
              <p className="project-info">
                A cloud-native platform for monitoring and forecasting air
                quality using real-time satellite and ground-based environmental
                data.
              </p>
              <h3 className="attributes">My role</h3>
              <ul className="feature-list">
                <li>
                  Trained deep learning LSTM model using WHO, TEMPO, AQ
                  datasets.
                </li>
                <li>Built predictive pipelines for 7-days AQI forecasting.</li>
                <li>
                  Contributed to frontend visualization with React for
                  interactive AQI chart.
                </li>
              </ul>
              <h3 className="attributes">Features</h3>
              <ul className="feature-list">
                <li>
                  Real-time data ingestion (TEMPO, NOAA, ground stations).
                </li>
                <li>Deep learning forecasting.</li>
                <li>AQI alert system with WHO/EPA thresholds.</li>
                <li>
                  Interactive map visualization for temporal-spatial air quality
                  tracking.
                </li>
              </ul>
            </div>
          </div>
          <div className="block">
            <div className="project-header">
              <div>
                <h2 className="project-title">
                  <a
                    href="https://github.com/VictorNguyenLPN/athstock"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="important"
                    title="athStock GitHub Repository"
                  >
                    athStock
                  </a>
                </h2>
              </div>
              <span className="period">
                <a
                  href="https://drive.google.com/file/d/1ExQUp3LUt_MafnuW0qE9KedmzF64fVCD/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="important"
                  title="3rd Prize, TDTU Student Scientific Research 2024 - 2025"
                >
                  3rd Prize, TDTU Student Scientific Research 2024 - 2025
                </a>
              </span>
            </div>
            <hr />
            <div className="details">
              <p className="project-info">
                A real-time stock intelligence platform combining AI forecasting
                and community blogging for retail investors.
              </p>
              <h3 className="attributes">My role</h3>
              <ul className="feature-list">
                <li>
                  Designed the event-driven pipeline with WebSockets for live
                  price streams.
                </li>
                <li>
                  Trained PhoBERT models for trend prediction and sentiment
                  scoring.
                </li>
                <li>
                  Built the blogging and publishing workflow for investor
                  insights.
                </li>
              </ul>
              <h3 className="attributes">Features</h3>
              <ul className="feature-list">
                <li>Live market streaming with TailwindCSS dashboards.</li>
                <li>Deep learning trend forecasts from LSTM models.</li>
                <li>PhoBERT-powered sentiment analysis on financial news.</li>
                <li>
                  Community blogging feed for investment analysis and
                  predictions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="competition" className="competition">
        <h1>Competition</h1>
        <div className="item">
          <ul className="competition-list">
            <li>
              <a
                href="https://www.facebook.com/spaceappshochiminh/posts/pfbid02Ep76u15pcUi3n5QwzMZ97M5dpuuyqz7aLwLCHW7uv5zDugmWjJ8tKyyBmyxbRJorl?rdid=qOAdRoq1W3MSqjWg#"
                target="_blank"
                rel="noreferrer noopener"
                className="important"
                title="Top 11 NASA Space Apps Challenge Ho Chi Minh 2025"
              >
                Top 11 NASA Space Apps Challenge Ho Chi Minh 2025
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1qksnp924iOI4s5qwWvdedV6fYhsfN7y-/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="important"
                title="Top 10, Encouragement Prize of Vietnam Datathon - Datastorm 2025"
              >
                Top 10, Encouragement Prize of Vietnam Datathon - Datastorm 2025
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/11rybxdasods6yYZj16NEf0ueDEGJfl5I/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="important"
                title="Encouragement Prize of AI Olympiad Southern Vietnam 2025"
              >
                Encouragement Prize of AI Olympiad Southern Vietnam 2025
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1ExQUp3LUt_MafnuW0qE9KedmzF64fVCD/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="important"
                title="3rd Prize of TDTU student science research 2024"
              >
                3rd Prize of TDTU student science research 2024
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="certification" className="certification">
        <h1>Certification</h1>
        <ul className="certification-list">
          <li>
            The Test of English for International Communication (TOEIC) -
            845/990
          </li>
          <li>Agile Development & Scrum Framework (Techbase Vietnam)</li>
        </ul>
      </section>
    </>
  );
}

function BlogPage() {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <p>Blog posts coming soon...</p>
    </section>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [updateDate, setUpdateDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    setUpdateDate(today);

    // Handle browser back/forward
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === "/blog" ? "blog" : "home");
    };

    window.addEventListener("popstate", handlePopState);

    // Set initial page based on URL
    const initialPath = window.location.pathname;
    setCurrentPage(initialPath === "/blog" ? "blog" : "home");

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (page) => {
    const path = page === "blog" ? "/blog" : "/";
    window.history.pushState({}, "", path);
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "home" && <TableOfContents />}
      <div className="page">
        <header className="topbar">
          <div>
            <h2 className="title">AI/ML Engineer</h2>
            <h1 className="name">Nguyen Quang Huy</h1>
            <div className="contacts">
              <a
                className="important"
                href="https://www.linkedin.com/in/nguyenquanghuy040805/"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                className="important"
                href="https://github.com/VictorNguyenLPN"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                className="important"
                href="https://orcid.org/0009-0003-3203-0415"
                target="_blank"
                rel="noreferrer noopener"
                title="ORCID"
              >
                ORCID
              </a>
              <a
                className="important"
                href="mailto:nqhuy.aie@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                title="Email"
              >
                <span>nqhuy.aie@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="top-right">
            <h4 className="last-updated">Last updated: {updateDate}</h4>
            <nav className="nav">
              <a
                href="/"
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("home");
                }}
                title="Home"
              >
                Home
              </a>
              <a
                href="/blog"
                className={`nav-link ${currentPage === "blog" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("blog");
                }}
                title="Blog"
              >
                Blog
              </a>
            </nav>
          </div>
        </header>

        <main className="content">
          {currentPage === "home" ? <HomePage /> : <BlogPage />}
        </main>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Nguyen Quang Huy. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

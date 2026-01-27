import { useState, useEffect, useCallback, memo } from "react";
import { Linkedin, Github } from "lucide-react";
import "./App.css";

// ============================================
// CONSTANTS
// ============================================
const TOC_ITEMS = [
  { id: "bio", label: "Short Bio" },
  { id: "education", label: "Education" },
  { id: "publication", label: "Publication" },
  { id: "projects", label: "Projects" },
  { id: "competition", label: "Competition" },
  { id: "certification", label: "Certification" },
];

const EXTERNAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nguyenquanghuy040805/",
  github: "https://github.com/VictorNguyenLPN",
  orcid: "https://orcid.org/0009-0003-3203-0415",
  email: "mailto:nqhuy.aie@gmail.com",
  tdtu: "https://it.tdtu.edu.vn/en",
};

const SCROLL_OFFSET = 150;

// ============================================
// REUSABLE COMPONENTS
// ============================================
const ExternalLink = memo(function ExternalLink({
  href,
  title,
  className = "important",
  children,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
});

const SectionHeader = memo(function SectionHeader({
  title,
  period,
  headerClass,
  periodElement = "h2",
}) {
  const PeriodTag = periodElement;
  return (
    <div className={headerClass}>
      <div>{title}</div>
      <PeriodTag className="period">{period}</PeriodTag>
    </div>
  );
});

// ============================================
// TABLE OF CONTENTS
// ============================================
const TableOfContents = memo(function TableOfContents() {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET;

      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(TOC_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(TOC_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <aside className="toc">
      <h3 className="toc-title">Contents</h3>
      <ul className="toc-list">
        {TOC_ITEMS.map((item) => (
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
});

// ============================================
// PROJECT BLOCK COMPONENT
// ============================================
const ProjectBlock = memo(function ProjectBlock({
  title,
  titleHref,
  period,
  periodHref,
  description,
  roles,
  features,
}) {
  return (
    <div className="block">
      <div className="project-header">
        <div>
          <h2 className="project-title">
            <ExternalLink href={titleHref} title={`${title} GitHub Repository`}>
              {title}
            </ExternalLink>
          </h2>
        </div>
        <span className="period">
          <ExternalLink href={periodHref} title={period}>
            {period}
          </ExternalLink>
        </span>
      </div>
      <hr />
      <div className="details">
        <p className="project-info">{description}</p>

        <h3 className="attributes">My role</h3>
        <ul className="feature-list">
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>

        <h3 className="attributes">Features</h3>
        <ul className="feature-list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

// ============================================
// HOME PAGE
// ============================================
function HomePage() {
  const projects = [
    {
      title: "DataStorm",
      titleHref: "https://github.com/DomTechnology/datastorm",
      period:
        "Top 10, Encouragement Prize of Vietnam Datathon - DataStorm 2025",
      periodHref:
        "https://drive.google.com/file/d/1qksnp924iOI4s5qwWvdedV6fYhsfN7y-/view?usp=sharing",
      description:
        "An end-to-end retail analytics and demand forecasting platform for FMCG, combining interactive dashboards with ML-powered 7-day forecasts.",
      roles: [
        "Processed and analyzed multi-vertical retail data; selected forecasting approaches suited to FMCG seasonality.",
        "Implemented the ML forecasting service for SKU-level demand.",
        "Built end-to-end pipelines from ingestion to serving.",
      ],
      features: [
        "Sales analytics (net sales, units, revenue) with geographic and channel breakdowns.",
        "7-day demand forecasting for inventory optimization and stock alerts.",
        "Pricing/discount impact analysis and supplier performance views.",
        "Interactive maps for multi-country store comparisons.",
      ],
    },
    {
      title: "AirForce",
      titleHref: "https://github.com/DanielNguyen-05/AirForce",
      period: "Top 11 NASA Space Apps Challenge 2025, Ho Chi Minh",
      periodHref: "https://www.facebook.com/share/p/1FmFRrUUNd",
      description:
        "A cloud-native platform for monitoring and forecasting air quality using real-time satellite and ground-based environmental data.",
      roles: [
        "Trained deep learning LSTM model using WHO, TEMPO, AQ datasets.",
        "Built predictive pipelines for 7-days AQI forecasting.",
        "Contributed to frontend visualization with React for interactive AQI chart.",
      ],
      features: [
        "Real-time data ingestion (TEMPO, NOAA, ground stations).",
        "Deep learning forecasting.",
        "AQI alert system with WHO/EPA thresholds.",
        "Interactive map visualization for temporal-spatial air quality tracking.",
      ],
    },
    {
      title: "athStock",
      titleHref: "https://github.com/VictorNguyenLPN/athstock",
      period: "3rd Prize, TDTU Student Scientific Research 2024 - 2025",
      periodHref:
        "https://drive.google.com/file/d/1ExQUp3LUt_MafnuW0qE9KedmzF64fVCD/view?usp=sharing",
      description:
        "A real-time stock intelligence platform combining AI forecasting and community blogging for retail investors.",
      roles: [
        "Designed the event-driven pipeline with WebSockets for live price streams.",
        "Trained PhoBERT models for trend prediction and sentiment scoring.",
        "Built the blogging and publishing workflow for investor insights.",
      ],
      features: [
        "Live market streaming with TailwindCSS dashboards.",
        "Deep learning trend forecasts from LSTM models.",
        "PhoBERT-powered sentiment analysis on financial news.",
        "Community blogging feed for investment analysis and predictions.",
      ],
    },
  ];

  const competitions = [
    {
      title: "Top 11 NASA Space Apps Challenge Ho Chi Minh 2025",
      href: "https://www.facebook.com/spaceappshochiminh/posts/pfbid02Ep76u15pcUi3n5QwzMZ97M5dpuuyqz7aLwLCHW7uv5zDugmWjJ8tKyyBmyxbRJorl?rdid=qOAdRoq1W3MSqjWg#",
    },
    {
      title: "Top 10, Encouragement Prize of Vietnam Datathon - Datastorm 2025",
      href: "https://drive.google.com/file/d/1qksnp924iOI4s5qwWvdedV6fYhsfN7y-/view?usp=drive_link",
    },
    {
      title: "Encouragement Prize of AI Olympiad Southern Vietnam 2025",
      href: "https://drive.google.com/file/d/11rybxdasods6yYZj16NEf0ueDEGJfl5I/view?usp=sharing",
    },
    {
      title: "3rd Prize of TDTU student science research 2024",
      href: "https://drive.google.com/file/d/1ExQUp3LUt_MafnuW0qE9KedmzF64fVCD/view?usp=sharing",
    },
  ];

  const certifications = [
    "The Test of English for International Communication (TOEIC) - 845/990.",
    "Agile Development & Scrum Framework (Techbase Vietnam).",
  ];

  return (
    <>
      {/* Short Bio */}
      <section id="bio" className="intro">
        <h1>Short Bio</h1>
        <div className="item">
          <p className="short-bio">
            I am a third-year Computer Science student at{" "}
            <ExternalLink
              href={EXTERNAL_LINKS.tdtu}
              title="Faculty of Information Technology, Ton Duc Thang University"
            >
              Faculty of Information Technology, Ton Duc Thang University
            </ExternalLink>
            , with research interests in Computer Vision, Natural Language
            Processing, Time Series Forecasting and Web Development.
          </p>
        </div>
      </section>

      {/* Education */}
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
          </div>
        </div>
      </section>

      {/* Publication */}
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

      {/* Projects */}
      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="item">
          {projects.map((project) => (
            <ProjectBlock key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Competition */}
      <section id="competition" className="competition">
        <h1>Competitions</h1>
        <div className="item">
          <ul className="competition-list">
            {competitions.map((comp) => (
              <li key={comp.title}>
                <ExternalLink href={comp.href} title={comp.title}>
                  {comp.title}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certification */}
      <section id="certification" className="certification">
        <h1>Certifications</h1>
        <ul className="certification-list">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

// ============================================
// BLOG PAGE
// ============================================
const BlogPage = memo(function BlogPage() {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <p>Blog posts coming soon...</p>
    </section>
  );
});

// ============================================
// MAIN APP
// ============================================
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

  const navigate = useCallback((page) => {
    const path = page === "blog" ? "/blog" : "/";
    window.history.pushState({}, "", path);
    setCurrentPage(page);
  }, []);

  return (
    <>
      {currentPage === "home" && <TableOfContents />}
      <div className="page">
        <header className="topbar">
          <div>
            <h2 className="title">AI/ML Engineer</h2>
            <h1 className="name">Nguyen Quang Huy</h1>
            <div className="contacts">
              <ExternalLink href={EXTERNAL_LINKS.linkedin} title="LinkedIn">
                <Linkedin size={20} />
              </ExternalLink>
              <ExternalLink href={EXTERNAL_LINKS.github} title="GitHub">
                <Github size={20} />
              </ExternalLink>
              <ExternalLink href={EXTERNAL_LINKS.orcid} title="ORCID">
                ORCID
              </ExternalLink>
              <ExternalLink href={EXTERNAL_LINKS.email} title="Email">
                nqhuy.aie@gmail.com
              </ExternalLink>
            </div>
          </div>
          <div className="top-right">
            <div className="badges-row">
              <img
                src="https://visitor-badge.laobi.icu/badge?page_id=VictorNguyenLPN.github.io"
                alt="Visitors"
                className="badge"
              />
              <h4 className="last-updated">Last updated: {updateDate}</h4>
            </div>
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

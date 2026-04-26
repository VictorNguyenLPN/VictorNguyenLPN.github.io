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
  { id: "skills", label: "Skills" },
  { id: "certification", label: "Certification" },
];

const EXTERNAL_LINKS = {
  homepage: "https://victornguyenlpn.github.io/",
  linkedin: "https://www.linkedin.com/in/nguyenquanghuy040805/",
  github: "https://github.com/VictorNguyenLPN",
  orcid: "https://orcid.org/0009-0003-3203-0415",
  email: "mailto:nqhuy.aie@gmail.com",
  emailTDTU: "mailto:nguyenquanghuy.st@tdtu.edu.vn",
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
  stack,
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
          {/* <ExternalLink title={period}> */}
          {period}
          {/* </ExternalLink> */}
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

        <h3 className="attributes">Tech Stack</h3>
        <p>{stack}</p>
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
        "An end-to-end retail analytics and SKU-level demand forecasting platform for FMCG, integrating time-series modeling with interactive dashboards.",
      roles: [
        "Engineered SKU-level time-series features (lag, rolling statistics, seasonal encodings).",
        "Developed XGBoost forecasting models achieving 5% lower MAPE than seasonal baseline.",
        "Deployed forecasting API with FastAPI and built analytics dashboard with React and Next.js.",
      ],
      features: [
        "Interactive sales analytics with geo/channel drill-down.",
        "7-day demand forecasting for inventory optimization and stock alerts.",
        "Price elasticity and promotion impact analysis.",
        "Multi-country store comparison via geospatial visualization.",
      ],
      stack:
        "Frontend: Next.js, React, shadcn/ui, Tailwind CSS | Backend: FastAPI, PostgreSQL, Redis | ML: Pandas, Scikit-learn, XGBoost",
    },
    {
      title: "AirForce",
      titleHref: "https://github.com/DanielNguyen-05/AirForce",
      period: "Top 11 NASA Space Apps Challenge 2025, Ho Chi Minh",
      periodHref: "https://www.facebook.com/share/p/1FmFRrUUNd",
      description:
        "An air quality monitoring and 7-day AQI forecasting platform integrating satellite, ground-station, and meteorological data streams.",
      roles: [
        "Developed LSTM-based time-series models for 7-day AQI forecasting using multi-source environmental datasets.",
        "Built forecasting pipeline and contributed to interactive AQI visualization using React.",
      ],
      features: [
        "Real-time ingestion from satellite and ground-based environmental sources.",
        "Deep learning-based 7-day AQI forecasting.",
        "AQI alert system with WHO/EPA thresholds.",
        "Temporal-spatial visualization for air quality monitoring.",
      ],
      stack:
        "Frontend: React, Next.js, Tailwind CSS | Backend: FastAPI, PostgreSQL | ML: PyTorch, Pandas, NumPy, LSTM",
    },
    {
      title: "athStock",
      titleHref: "https://github.com/VictorNguyenLPN/athstock",
      period: "3rd Prize, TDTU Student Scientific Research 2024 - 2025",
      periodHref:
        "https://drive.google.com/file/d/1ExQUp3LUt_MafnuW0qE9KedmzF64fVCD/view?usp=sharing",
      description:
        "A real-time stock platform integrating deep learning-based forecasting, NLP-driven sentiment analysis, and live market data streaming.",
      roles: [
        "Designed architecture using WebSockets for real-time stock price streaming.",
        "Developed LSTM models for short-term trend forecasting and fine-tuned PhoBERT for sentiment analysis.",
        "Built blogging and publishing platform.",
      ],
      features: [
        "Real-time stock dashboards with live price updates.",
        "Deep learning-based trend forecasting.",
        "NLP-powered sentiment scoring on Vietnamese financial news.",
        "Community blogging platform for investment insights.",
      ],
      stack:
        "Frontend: React, Next.js, Tailwind CSS | Backend: FastAPI / Node.js, PostgreSQL, WebSockets | ML/NLP: PyTorch, LSTM, PhoBERT, Pandas",
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
    "TOEIC (Listening: 480/495; Reading: 365/495; Speaking: 120/200; Writing: 150/200).",
    "Agile Development & Scrum Framework (Techbase Vietnam).",
  ];

  const skills = [
    "Languages: Python, JavaScript, SQL.",
    "ML/DL: PyTorch, scikit-learn, Hugging Face.",
    "Data & ETL: Pandas, NumPy.",
    "APIs & Serving: FastAPI, Flask, ExpressJS.",
    "Visualization: Matplotlib, Seaborn, Plotly.",
    "Datastores: MySQL, MongoDB.",
    "Frontend: React, TailwindCSS.",
  ];

  return (
    <>
      {/* Short Bio */}
      <section id="bio" className="intro">
        <h1>Short Bio</h1>
        <div className="item">
          <p className="short-bio">
            I am a third-year Computer Science student at Ton Duc Thang
            University, focusing on AI research in Multimodal Learning, Computer
            Vision, and Natural Language Processing. My work centers on bridging
            research and real-world applications, from developing deep learning
            models to building end-to-end AI systems across CV, NLP, and
            time-series forecasting.
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
        <ul className="item publication-list">
          <li>
            Nguyen, Q. H., &amp; Pham, V. H. (2026).{" "}
            <strong>
              ASBW: A frequency-domain analysis approach for distinguishing
              GAN-generated images from real images
            </strong>
            . In Proceedings of{" "}
            <ExternalLink
              href="https://dcest.org/"
              title="DCEST 2026 International Conference"
            >
              The Digital Convergence in Economics, Society and Technology
              (DCEST) 2026 International Conference
            </ExternalLink>{" "}
            (pp. 95-105).
          </li>
        </ul>
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

      {/* Skills */}
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
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
  const updateDate = "26 Apr 2026";

  useEffect(() => {
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
            <h2 className="title">Research Intern @ NLP & KD Lab, TDTU</h2>
            <h1 className="name">Nguyen Quang Huy (Victor)</h1>
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
            {/* <div className="badges-row"> */}
            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=VictorNguyenLPN.github.io"
              alt="Visitors"
              className="badge"
            />
            <h4 className="last-updated">Last updated: {updateDate}</h4>
            {/* </div> */}
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

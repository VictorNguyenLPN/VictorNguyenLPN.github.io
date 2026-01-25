import { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import "./App.css";

const tocItems = [
  { id: "bio", label: "Short Bio" },
  { id: "education", label: "Education" },
  { id: "publication", label: "Publication" },
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
        <p className="short-bio">
          I am a third-year Computer Science student at{" "}
          <a
            href="https://it.tdtu.edu.vn/en"
            target="_blank"
            rel="noreferrer noopener"
            className="important"
          >
            Faculty of Information Technology, Ton Duc Thang University
          </a>
          , with research interests in{" "}
          <span className="important">Computer Vision</span>,{" "}
          <span className="important">Natural Language Processing</span>,{" "}
          <span className="important">Time Series Forecasting</span>, and{" "}
          <span className="important">Web Development</span>.
        </p>
      </section>

      <section id="education" className="education">
        <h1>Education</h1>
        <div className="degree-item">
          <div className="degree-block">
            <div className="degree-header">
              <div>
                <h2 className="degree-title">Bachelor of Computer Science</h2>
                <p className="degree-info">
                  Faculty of Information Technology, Ton Duc Thang University,
                  Vietnam
                </p>
              </div>
              <span className="degree-period">2023 - 2027</span>
            </div>
            <div className="degree-details">
              <p>
                Graduation Thesis: <strong>Null</strong>
              </p>
              <p>
                Supervisor: <strong>PhD. Tran Luong Quoc Dai</strong>
              </p>
              <p>
                Submitted to: <strong>Null</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="publication" className="publication">
        <h1>Publication</h1>
        <div className="publication-item">
          <div className="publication-block">
            <div className="publication-header">
              <div>
                <h2 className="publication-title">
                  ASBW: A Frequency-Domain Analysis Approach for Distinguishing
                  GAN-Generated Images from Real Images
                </h2>
              </div>
              <span className="publication-period">2026</span>
            </div>
            <div className="publication-details">
              <p>
                Submitted to:{" "}
                <strong>
                  <a
                    href="https://www.dcest.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="important"
                  >
                    DCEST
                  </a>
                </strong>
              </p>
              <p>
                Supervisor:{" "}
                <strong>
                  <a
                    href="https://orcid.org/0000-0001-9907-4066"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="important"
                  >
                    PhD. Pham Van Huy
                  </a>
                </strong>
              </p>
              <p>
                Status: <strong>Peer-reviewing</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="competition" className="competition">
        <h1>Competition</h1>
        <ul className="competition-list">
          <li>Top 11 NASA Space Apps Challenge Ho Chi Minh 2025</li>
          <li>Encouragement Prize of Vietnam Datathon - Datastorm 2025</li>
          <li>Encouragement Prize of AI Olympiad Southern Vietnam 2025</li>
          <li>3rd Prize of TDTU student science research 2024</li>
        </ul>
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
            <p className="title">AI/ML Engineer</p>
            <h1 className="name">Nguyen Quang Huy</h1>
            <div className="contacts">
              <a
                className="contact"
                href="https://www.linkedin.com/in/nguyenquanghuy040805/"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                className="contact"
                href="https://github.com/VictorNguyenLPN"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                className="contact"
                href="https://orcid.org/0009-0003-3203-0415"
                target="_blank"
                rel="noreferrer noopener"
              >
                ORCID
              </a>
              <a
                className="contact"
                href="mailto:nqhuy.aie@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>nqhuy.aie@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="top-right">
            <span className="last-updated">Last updated: {updateDate}</span>
            <nav className="nav">
              <a
                href="/"
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("home");
                }}
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

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import "./App.css";

const experience = [
  {
    company: "JPMorgan Chase",
    role: "Software Engineer · Reporting Technology",
    period: "2026 — Present",
    description:
      "Building AI-powered engineering systems that automate complex workflows, accelerate incident resolution, and modernize enterprise platforms.",
    stack: "JAVA · SPRING BOOT · AI ENGINEERING · BACKEND SYSTEMS",
    details: [
      {
        label: "01 / ENTERPRISE AI AUTOMATION",
        heading: "Scaling engineering productivity across teams",
        text: "Built an AI agent adopted by teams globally to automate Frontier upgrade workflows, reducing repetitive engineering effort and reliance on external implementation support.",
        tags: "Enterprise adoption · Workflow automation · AI agents",
      },
      {
        label: "02 / PRODUCTION INTELLIGENCE",
        heading: "From hours of debugging to minutes",
        text: "Built an AI-powered incident-resolution agent supporting developers from initial investigation through root-cause analysis and resolution workflows, dramatically reducing time spent diagnosing production issues.",
      },
      {
        label: "03 / ENTERPRISE PLATFORM MODERNIZATION",
        heading: "Modernizing legacy integration",
        text: "Contributed to migrating a mainframe-backed balances framework to a web-client-based adapter component, advancing a more modular approach to application integration.",
      },
    ],
    metrics: [
      { value: "90 min", label: "Previous MTTR" },
      { value: "15 min", label: "Reduced MTTR" },
      { value: "83%", label: "Reduction in MTTR" },
    ],
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "2025",
    description:
      "Enabled multi-region expansion and improved the reliability and engineering efficiency of production backend services.",
    stack: "JAVA · AWS · DISTRIBUTED SYSTEMS · INFRASTRUCTURE · TEST AUTOMATION",
    details: [
      {
        label: "SELECTED ENGINEERING CONTRIBUTIONS",
        heading: "Unblocked multi-region expansion",
        text: "Resolved architectural hierarchy, service-discovery, and cross-service dependency failures that were blocking regional rollouts, enabling production readiness across new AWS regions without regressions.",
      },
      {
        label: "TEST AUTOMATION",
        heading: "Built reusable test automation",
        text: "Designed a functional-test framework using AOP-based logging and modular initialization, reducing test-development and onboarding effort by approximately 80% for the relevant workflow. Separately automated environment setup, reducing manual effort by approximately 90%.",
      },
      {
        label: "PRODUCTION RESILIENCE",
        heading: "Improved production resilience",
        text: "Implemented exponential-backoff retries, region-aware monitoring, dynamic alarms, and downstream performance improvements to strengthen service reliability and operational readiness.",
      },
      {
        label: "PLATFORM MODERNIZATION",
        heading: "Modernized the platform",
        text: "Led the JDK 8 to 17 migration for a shared Java library, resolving compatibility issues and improving long-term maintainability.",
      },
    ],
    metrics: [
      { value: "~80%", label: "Less test-development effort", context: "Workflow development and onboarding" },
      { value: "~90%", label: "Less manual setup", context: "Functional-test environments" },
      { value: "5", label: "Production changes", context: "Independently executed" },
      { value: "3", label: "Deployment stages", context: "Gamma · Onebox · Production" },
      { value: "2 regions", label: "Enabled for expansion", context: "Zaragoza · Frankfurt" },
    ],
  },
];

function App() {
  return (
    <main className="page" id="top">
      <nav className="nav">
        <a className="logo" href="#top" aria-label="Anshul Sharma, home">A<span>/</span>S</a>
        <span className="nav-context">MUMBAI, INDIA</span>
        <a
          className="nav-link"
          href="https://linkedin.com/in/anshullsharma"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN <ArrowUpRight size={13} />
        </a>
      </nav>

      <section className="identity" aria-labelledby="name-heading">
        <div className="identity-main">
          <p className="eyebrow"><span className="signal-mark">01</span> SOFTWARE ENGINEER</p>
          <h1 id="name-heading">Anshul Sharma</h1>
          <p className="role-line">Backend engineering <span>at</span> JPMorgan Chase</p>
        </div>
        <aside className="now-note" aria-label="Current focus">
          <div className="note-heading">CURRENT FOCUS</div>
          <p>Reporting systems<br />&amp; applied AI</p>
          <span className="note-foot">JAVA · SPRING BOOT</span>
        </aside>
        <div className="identity-foot">
          <span>JAVA · SPRING BOOT · AWS</span>
          <a href="#experience">WORK HISTORY <ArrowDownRight size={14} /></a>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-intro">
          <p className="eyebrow"><span className="signal-mark">02</span> EXPERIENCE</p>
          <h2>Work history</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.company}>
              <div className="experience-date">
                <span>{item.period}</span>
                {item.company === "JPMorgan Chase" && <span className="current-label">CURRENT</span>}
              </div>
              <div className="experience-detail">
                <div className="company-heading">
                  <h3>{item.company}</h3>
                </div>
                <p className="role">{item.role}</p>
                <p className="description">{item.description}</p>
                <details className="experience-expand">
                  <summary>
                    <span>PROJECT DETAILS</span>
                    <span className="expand-mark" aria-hidden="true">+</span>
                  </summary>
                  <div className="experience-more">
                    <div className="impact-metrics">
                      {item.metrics.map((metric) => (
                        <div className="impact-metric" key={metric.label}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                          <small>{metric.context}</small>
                        </div>
                      ))}
                    </div>
                    <p className="details-label">WHAT I WORKED ON</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail.label}>
                          <strong>{detail.label}</strong>
                          <h4>{detail.heading}</h4>
                          <span>{detail.text}</span>
                          {detail.tags && <small>{detail.tags}</small>}
                        </li>
                      ))}
                    </ul>
                    <p className="stack">{item.stack}</p>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="outside-section" aria-labelledby="outside-heading">
        <p className="eyebrow"><span className="signal-mark">03</span> OFF THE CLOCK</p>
        <h2 id="outside-heading">After work, I look for trails, new places, and a reason to fill a notebook.</h2>
      </section>

      <footer className="footer">
        <div className="socials">
          <a
            href="https://linkedin.com/in/anshullsharma"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN <ArrowUpRight size={13} />
          </a>
          <a
            href="https://github.com/anshul00910"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={13} />
          </a>
          <a
            href="https://leetcode.com/u/anshulll09/"
            target="_blank"
            rel="noreferrer"
          >
            LEETCODE <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="copyright">
          <span>© {new Date().getFullYear()} ANSHUL SHARMA</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;

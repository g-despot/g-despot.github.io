import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const CONTACT = [
  {label: 'Zagreb, Croatia (Remote)', href: null},
  {label: 'ivan.g.despot@gmail.com', href: 'mailto:ivan.g.despot@gmail.com'},
  {label: 'linkedin.com/in/ivan-g-despot', href: 'https://www.linkedin.com/in/ivan-g-despot/'},
  {label: 'github.com/g-despot', href: 'https://github.com/g-despot'},
];

const EXPERIENCE = [
  {
    role: 'Senior Developer Experience & Docs Engineer',
    company: 'Weaviate',
    period: 'January 2025 – Present',
    summary:
      'As a DX lead engineer on the Core Database team, I improve the learning and implementation journey for developers using the Weaviate vector database and its ecosystem — spanning core database engineering, client libraries, and infrastructure.',
    points: [
      'Maintain the C# client library and contribute to the Python, Java, and TypeScript clients — owning design, implementation, CI/CD, and release pipelines end-to-end, and documenting new features as they ship (documentation-driven development).',
      'Develop core database features — including the integrated database MCP server — and resolve issues across the database and multiple functional areas.',
      'Build and maintain the Weaviate documentation platform (Docusaurus/React) as a docs-as-code system — owning the Git/PR authoring workflow and CI/CD pipelines, alongside code examples, tutorials, blog posts, and demo applications.',
      'Optimize documentation content for LLM and agent retrieval (llms.txt, GEO, SEO) and ship a documentation MCP server that lets agents query the platform directly.',
      'Build and maintain an automated test framework that runs documentation code samples against new releases and checks docs against source code for factual accuracy, catching broken or outdated examples before they reach users.',
      'Act as an internal developer advocate — testing new database, cloud, and agentic features from a user’s perspective before release, surfacing friction to product and engineering, and feeding it back into the SDKs and onboarding.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Ericsson',
    period: 'October 2022 – January 2025',
    points: [
      'Implemented new software functionalities by collaborating with multiple stakeholders, analyzing proposed solutions, studying legacy systems, and mitigating issues to ensure optimal software and network performance.',
      'Owned feature specifications and system designs for telecom software — researching functional requirements, defining integration points with adjacent systems, and documenting the work through API specifications, architecture diagrams, and technical specs for engineering and customer stakeholders.',
      'Ensured code quality and stable delivery by maintaining and extending frameworks for unit, integration, end-to-end, and performance testing, backed by extensive CI/CD workflows.',
    ],
  },
  {
    role: 'Developer Relations Engineer',
    company: 'Memgraph',
    period: 'July 2020 – July 2022',
    points: [
      'Managed and mentored a team of DevRel engineers and interns, and owned hiring and onboarding, regular sprint sessions, and long-term strategic planning.',
      'Created technical content — blog posts, tutorials, code snippets, technical guides, and live streams — and owned and maintained the documentation.',
      'Full-stack development and applied data science, building demo applications to showcase database features across domains (social network analysis, bioinformatics, process optimization).',
      'Managed the developer community and presented technical topics at meetups, conferences, and hackathons.',
    ],
  },
];

const SKILLS = [
  {
    group: 'Programming',
    items: ['Python', 'Java', 'C#', 'C++', 'JavaScript', 'React', 'Go', 'Bash', 'Markdown'],
  },
  {
    group: 'AI & Data',
    items: ['RAG', 'MCP', 'Vector databases', 'Neo4j', 'PostgreSQL', 'MySQL', 'Apache Kafka'],
  },
  {
    group: 'Platform & Tooling',
    items: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Ubuntu', 'Docusaurus', 'VS Code'],
  },
];

const LANGUAGES = [
  {name: 'Croatian', level: 'Native'},
  {name: 'English', level: 'C1'},
  {name: 'German', level: 'C1'},
];

function Section({title, children}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <Layout
      title="Resume"
      description="Resume of Ivan Despot — developer experience engineer working across DevRel and engineering at open-source data and AI infrastructure companies.">
      <main className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>Ivan Despot</h1>
          <p className={styles.headline}>Developer Experience Engineer</p>
          <ul className={styles.contact}>
            {CONTACT.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        </header>

        <p className={styles.summary}>
          Developer experience engineer with 6+ years across DevRel and
          engineering at open-source data and AI infrastructure companies. I
          focus on making products easy to adopt from day one — maintaining
          client SDKs across multiple languages, building the tutorials,
          examples, and tooling developers actually use, and running the
          feedback loop between developers and engineering. I work hands-on
          across the agent stack (RAG, agentic tooling, MCP), so I can read an
          API surface, build against it, and document it accurately.
        </p>

        <Section title="Experience">
          <div className={styles.timeline}>
            {EXPERIENCE.map((job) => (
              <article key={job.company} className={styles.job}>
                <div className={styles.jobHead}>
                  <h3 className={styles.jobRole}>
                    {job.role} <span className={styles.at}>·</span>{' '}
                    <span className={styles.company}>{job.company}</span>
                  </h3>
                  <span className={styles.period}>{job.period}</span>
                </div>
                {job.summary && <p className={styles.jobSummary}>{job.summary}</p>}
                <ul className={styles.points}>
                  {job.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className={styles.jobHead}>
            <h3 className={styles.jobRole}>
              M.Sc. in Computing{' '}
              <span className={styles.at}>·</span>{' '}
              <span className={styles.company}>University of Zagreb, FER</span>
            </h3>
          </div>
          <p className={styles.jobSummary}>
            Thesis: <em>Social Network Graph Analysis Using Machine Learning
            Techniques.</em>
          </p>
        </Section>

        <Section title="Skills">
          <div className={styles.skills}>
            {SKILLS.map((s) => (
              <div key={s.group} className={styles.skillGroup}>
                <span className={styles.skillLabel}>{s.group}</span>
                <ul className={styles.tags}>
                  {s.items.map((item) => (
                    <li key={item} className={styles.tag}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Languages">
          <ul className={styles.langs}>
            {LANGUAGES.map((l) => (
              <li key={l.name}>
                <strong>{l.name}</strong> — {l.level}
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </Layout>
  );
}

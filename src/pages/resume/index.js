import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

const AVATAR = 'https://github.com/g-despot.png';

const CONTACT = [
  {label: 'Zagreb, Croatia (Remote)', href: null},
  {label: 'ivan.g.despot@gmail.com', href: 'mailto:ivan.g.despot@gmail.com'},
  {label: 'linkedin.com/in/ivan-g-despot', href: 'https://www.linkedin.com/in/ivan-g-despot/'},
  {label: 'github.com/g-despot', href: 'https://github.com/g-despot'},
];

// Each point has a bold lead-in for scannability; body may include links to proof.
const EXPERIENCE = [
  {
    role: 'Senior Developer Experience & Docs Engineer',
    company: 'Weaviate',
    period: 'January 2025 – Present',
    summary:
      'DX lead engineer on the Core Database team, improving the learning and implementation journey for developers using the Weaviate vector database and its ecosystem — spanning core database engineering, client libraries, and infrastructure.',
    points: [
      {
        lead: 'Client SDKs, four languages.',
        body: (
          <>
            Maintain the C# client library and contribute to the Python, Java,
            and TypeScript clients — owning design, CI/CD, and release pipelines
            end-to-end, and documenting features as they ship (
            <Link href="https://g-despot.github.io/documentation-driven-development">
              documentation-driven development
            </Link>
            ).
          </>
        ),
      },
      {
        lead: 'Core database features.',
        body: 'Develop core database features — including the integrated database MCP server — and resolve issues across the database and multiple functional areas.',
      },
      {
        lead: 'Docs-as-code platform.',
        body: 'Build and maintain the Weaviate documentation platform — a docs-as-code system built with Docusaurus and React — owning the Git/PR authoring workflow and CI/CD, alongside code examples, tutorials, and demo applications.',
      },
      {
        lead: 'GEO & agent retrieval.',
        body: 'Optimize documentation for LLM and agent retrieval (llms.txt, GEO, SEO) and ship a documentation MCP server that lets agents query the platform directly.',
      },
      {
        lead: 'Automated docs testing.',
        body: 'Build a test framework that runs documentation code samples against every release and checks docs against source code for factual accuracy — catching broken or outdated examples before users hit them.',
      },
      {
        lead: 'Internal developer advocate.',
        body: 'Test new database, cloud, and agentic features from a user’s perspective before release, surfacing friction to product and engineering and feeding it back into the SDKs and onboarding.',
      },
    ],
  },
  {
    role: 'Software Developer',
    company: 'Ericsson',
    period: 'October 2022 – January 2025',
    points: [
      {
        lead: 'Feature delivery.',
        body: 'Implemented new software functionalities with multiple stakeholders — analyzing proposed solutions, studying legacy systems, and mitigating issues for optimal software and network performance.',
      },
      {
        lead: 'Specs & system design.',
        body: 'Owned feature specifications and system designs for telecom/5G software — defining integration points with adjacent systems and documenting the work as API specifications, architecture diagrams, and technical specs for engineering and customer stakeholders.',
      },
      {
        lead: 'Test frameworks & CI/CD.',
        body: 'Maintained and extended unit, integration, end-to-end, and performance testing frameworks, backed by extensive CI/CD workflows.',
      },
    ],
  },
  {
    role: 'Developer Relations Engineer',
    company: 'Memgraph',
    period: 'July 2020 – July 2022',
    points: [
      {
        lead: 'Led the DevRel team.',
        body: 'Managed and mentored a team of DevRel engineers and interns — owning hiring, onboarding, sprint planning, and long-term strategy.',
      },
      {
        lead: 'Technical content.',
        body: (
          <>
            Created blog posts, tutorials, guides, and live streams — including
            the{' '}
            <Link href="https://memgraph.github.io/networkx-guide/basics/">
              NetworkX guide
            </Link>{' '}
            and{' '}
            <Link href="https://github.com/memgraph/memgraph-academy">
              Memgraph Academy
            </Link>{' '}
            — and owned the documentation.
          </>
        ),
      },
      {
        lead: 'Demo apps & data science.',
        body: (
          <>
            Built full-stack demo applications showcasing graph features across
            domains —{' '}
            <Link href="https://towardsdatascience.com/how-to-visualize-a-social-network-in-python-with-a-graph-database-flask-docker-d3-js-af451db57330">
              social-network analysis
            </Link>
            ,{' '}
            <Link href="https://gdespot.medium.com/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3-js-15ced962e3f0">
              fraud detection
            </Link>
            , and bioinformatics — and the{' '}
            <Link href="https://github.com/memgraph/gqlalchemy">gqlalchemy</Link>{' '}
            Python object-graph mapper.
          </>
        ),
      },
      {
        lead: 'Community & speaking.',
        body: (
          <>
            Ran the developer community and{' '}
            <Link href="https://www.youtube.com/watch?v=b865jn1ZASM">
              spoke at meetups and conferences
            </Link>{' '}
            — including organizing the{' '}
            <Link href="https://www.meetup.com/graph-data-zagreb/">
              Graph Data Zagreb
            </Link>{' '}
            meetup and the{' '}
            <Link href="https://memgraph.com/blog/memgraph-app-challenge">
              Memgraph App Challenge
            </Link>{' '}
            hackathon.
          </>
        ),
      },
    ],
  },
];

const SELECTED_WORK = [
  {
    group: 'Talks & community',
    items: [
      {label: 'Conference talk on graph databases (YouTube)', href: 'https://www.youtube.com/watch?v=b865jn1ZASM'},
      {label: 'Graph Data Zagreb — meetup I organized', href: 'https://www.meetup.com/graph-data-zagreb/'},
      {label: 'Memgraph App Challenge — hackathon I ran', href: 'https://memgraph.com/blog/memgraph-app-challenge'},
    ],
  },
  {
    group: 'Open source',
    items: [
      {label: 'gqlalchemy — Python object-graph mapper', href: 'https://github.com/memgraph/gqlalchemy'},
      {label: 'NetworkX guide', href: 'https://memgraph.github.io/networkx-guide/basics/'},
      {label: 'Memgraph Academy — Graph Analytics for Python Developers', href: 'https://github.com/memgraph/memgraph-academy'},
    ],
  },
  {
    group: 'Writing',
    items: [
      {label: 'Documentation-driven development', href: 'https://g-despot.github.io/documentation-driven-development'},
      {label: 'Visualizing a social network in Python (Towards Data Science)', href: 'https://towardsdatascience.com/how-to-visualize-a-social-network-in-python-with-a-graph-database-flask-docker-d3-js-af451db57330'},
      {label: 'Credit-card fraud detection app (Medium)', href: 'https://gdespot.medium.com/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3-js-15ced962e3f0'},
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

const PROFILE_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://g-despot.github.io/#person',
    name: 'Ivan Despot',
    jobTitle: 'Developer Experience & DevRel Engineer',
    description:
      'Developer experience & DevRel engineer with 6+ years across DevRel and engineering at open-source data and AI infrastructure companies.',
    url: 'https://g-despot.github.io/resume',
    email: 'mailto:ivan.g.despot@gmail.com',
    image: 'https://g-despot.github.io/img/social-card.png',
    worksFor: {'@type': 'Organization', name: 'Weaviate'},
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Zagreb, Faculty of Electrical Engineering and Computing',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zagreb',
      addressCountry: 'HR',
    },
    knowsLanguage: ['Croatian', 'English', 'German'],
    knowsAbout: [
      'Developer Experience',
      'Developer Relations',
      'Technical Writing',
      'Vector Search',
      'Retrieval-Augmented Generation',
      'Model Context Protocol',
      'Software Development Kits',
      'Documentation Engineering',
    ],
    sameAs: [
      'https://github.com/g-despot',
      'https://www.linkedin.com/in/ivan-g-despot/',
      'https://x.com/ivan_g_despot',
      'https://gdespot.medium.com/',
      'https://stackoverflow.com/users/14674424/ivan-despot',
    ],
  },
};

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
      description="Resume of Ivan Despot — developer experience & DevRel engineer working across DevRel and engineering at open-source data and AI infrastructure companies.">
      <Head>
        <script type="application/ld+json">{JSON.stringify(PROFILE_LD)}</script>
      </Head>
      <main className={styles.page}>
        <header className={styles.header}>
          <img
            className={styles.avatar}
            src={AVATAR}
            alt="Ivan Despot"
            width="104"
            height="104"
          />
          <div className={styles.headerText}>
            <h1 className={styles.name}>Ivan Despot</h1>
            <p className={styles.headline}>Developer Experience &amp; DevRel Engineer</p>
            <ul className={styles.contact}>
              {CONTACT.map((c) => (
                <li key={c.label}>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <p className={styles.summary}>
          Developer experience engineer with <strong>6+ years</strong> across
          developer relations and engineering at open-source data and AI
          infrastructure companies. I make products easy to adopt from day one —
          maintaining <strong>client SDKs across four languages</strong>,
          building the tutorials, examples, and tooling developers actually use,
          and running the feedback loop between developers and engineering. I
          also <strong>lead developer-education work</strong> — communities,
          talks, and docs — having run a DevRel team, organized meetups and
          hackathons, and spoken at conferences. I work hands-on across the agent
          stack (RAG, agentic tooling, MCP), so I can read an API surface, build
          against it, and document it accurately.
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
                    <li key={i}>
                      <strong className={styles.lead}>{p.lead}</strong> {p.body}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <details className={styles.selected}>
          <summary className={styles.selectedSummary}>
            Selected work — talks, open source &amp; writing
          </summary>
          <div className={styles.selectedGroups}>
            {SELECTED_WORK.map((g) => (
              <div key={g.group} className={styles.selectedGroup}>
                <span className={styles.selectedLabel}>{g.group}</span>
                <ul className={styles.selectedList}>
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link href={it.href}>{it.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>

        <Section title="Education">
          <div className={styles.jobHead}>
            <h3 className={styles.jobRole}>
              M.Sc. in Computing <span className={styles.at}>·</span>{' '}
              <span className={styles.company}>University of Zagreb, FER</span>
            </h3>
          </div>
          <p className={styles.jobSummary}>
            Thesis: <em>Social Network Graph Analysis Using Machine Learning Techniques.</em>
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

// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = 'https://g-despot.github.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ivan Despot',
  tagline:
    'Developer experience engineer writing about vector search, AI application engineering, DevRel, and data infrastructure.',
  favicon: 'img/favicon.png',

  url: siteUrl,
  baseUrl: '/',

  // GitHub Pages deployment (user site served at the root domain).
  organizationName: 'g-despot',
  projectName: 'g-despot.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // The old site lived under a `/resume/` base path with the résumé split
        // across many docs pages. Send all of those to the new single résumé page.
        redirects: [
          {
            to: '/resume',
            from: [
              '/resume/docs/intro',
              '/resume/docs/attribution',
              '/resume/docs/resume/weaviate',
              '/resume/docs/resume/ericsson',
              '/resume/docs/resume/memgraph',
              '/resume/docs/resume/best-zagreb',
              '/resume/docs/resume/infodom',
              '/resume/docs/experience/software-development',
              '/resume/docs/experience/technical-writing',
              '/resume/docs/experience/community-building',
              '/resume/docs/experience/marketing-analytics',
              '/resume/docs/experience/project-management',
            ],
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // No docs instance — the resume is a single custom page.
        docs: false,
        // The blog is the homepage, served at the site root.
        blog: {
          routeBasePath: '/',
          blogTitle: 'Ivan Despot — Blog',
          blogDescription:
            'Notes on vector search & RAG, AI application engineering, developer relations, and data infrastructure.',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Ivan Despot — Blog',
            description:
              'Notes on vector search & RAG, AI application engineering, developer relations, and data infrastructure.',
            copyright: `Copyright © ${new Date().getFullYear()} Ivan Despot.`,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'Ivan Despot, developer experience, vector search, RAG, AI engineering, developer relations, Weaviate',
        },
      ],
      navbar: {
        title: 'Ivan Despot',
        items: [
          {to: '/', label: 'Blog', position: 'left'},
          {to: '/resume', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/g-despot',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/ivan-g-despot/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {label: 'Blog', to: '/'},
              {label: 'Resume', to: '/resume'},
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              {label: 'GitHub', href: 'https://github.com/g-despot'},
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ivan-g-despot/',
              },
              {label: 'X', href: 'https://x.com/ivan_g_despot'},
              {label: 'Medium', href: 'https://gdespot.medium.com/'},
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/14674424/ivan-despot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ivan Despot. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'bash',
          'json',
          'java',
          'python',
          'go',
          'csharp',
        ],
      },
    }),
};

export default config;

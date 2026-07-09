// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = 'https://g-despot.github.io';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ivan Despot',
  tagline:
    'Developer experience engineer writing about vector search, AI application engineering, DevRel, and data infrastructure.',
  favicon: 'img/favicon.svg',

  url: siteUrl,
  baseUrl: '/',

  // GitHub Pages deployment (user site served at the root domain).
  organizationName: 'g-despot',
  projectName: 'g-despot.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/manrope-variable.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/svg+xml', href: '/img/favicon.svg'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'},
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: 'Ivan Despot',
            description:
              'Blog and resume of Ivan Despot — developer experience & DevRel engineer.',
            publisher: {'@id': `${siteUrl}/#person`},
            inLanguage: 'en',
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Ivan Despot',
            url: `${siteUrl}/`,
            image: `${siteUrl}/img/social-card.png`,
            jobTitle: 'Developer Experience Engineer',
            worksFor: {'@type': 'Organization', name: 'Weaviate'},
            knowsAbout: [
              'Developer Experience',
              'Developer Relations',
              'Technical Writing',
              'Vector Search',
              'Retrieval-Augmented Generation',
              'Model Context Protocol',
            ],
            sameAs: [
              'https://github.com/g-despot',
              'https://www.linkedin.com/in/ivan-g-despot/',
              'https://x.com/ivan_g_despot',
              'https://gdespot.medium.com/',
              'https://stackoverflow.com/users/14674424/ivan-despot',
            ],
          },
        ],
      }),
    },
  ],

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
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) =>
              item.url === `${siteUrl}/` || item.url === `${siteUrl}/resume`
                ? {...item, priority: 1.0, changefreq: 'monthly'}
                : item,
            );
          },
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
            'Ivan Despot, developer experience engineer, developer relations, technical writer, solutions engineer, vector search, RAG, AI engineering, MCP, Weaviate',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:creator', content: '@ivan_g_despot'},
        {name: 'twitter:site', content: '@ivan_g_despot'},
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

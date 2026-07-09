/**
 * Swizzled (ejected) from @docusaurus/theme-classic. Adds a homepage intro/bio
 * and a "browse by topic" tag filter above the post list (page 1 only).
 * NOTE: this is an ejected copy of the upstream component — after a Docusaurus
 * upgrade, re-diff it against the installed @docusaurus/theme-classic version to
 * catch metadata / structured-data changes.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

import styles from './styles.module.css';

const PILLARS = [
  {label: 'Vector Search & RAG', to: '/tags/vector-search'},
  {label: 'AI Engineering', to: '/tags/ai-engineering'},
  {label: 'DevRel', to: '/tags/devrel'},
  {label: 'Technical Writing', to: '/tags/technical-writing'},
  {label: 'Graph & Data Engineering', to: '/tags/data-engineering'},
];

function HomeIntro() {
  return (
    <header className={styles.intro}>
      <div className={styles.introTop}>
        <img
          className={styles.avatar}
          src="https://github.com/g-despot.png"
          alt="Ivan Despot"
          width="84"
          height="84"
        />
        <div className={styles.introHead}>
          <p className={styles.hi}>Hi, I’m</p>
          <h1 className={styles.name}>Ivan Despot</h1>
        </div>
      </div>
      <p className={styles.lede}>
        Developer Experience &amp; DevRel Engineer at Weaviate. I write about
        vector search &amp; RAG, AI application engineering, developer relations,
        and technical writing — usually the parts that make a product easy (or
        hard) to adopt.
      </p>
      <div className={styles.links}>
        <Link className={clsx(styles.link, styles.linkPrimary)} to="/resume">
          Resume
        </Link>
        <Link className={styles.link} href="https://github.com/g-despot">
          GitHub
        </Link>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/ivan-g-despot/">
          LinkedIn
        </Link>
      </div>

      <nav className={styles.filter} aria-label="Browse posts by topic">
        <span className={styles.filterLabel}>Browse by topic</span>
        <ul className={styles.chips}>
          {PILLARS.map((p) => (
            <li key={p.to}>
              <Link className={styles.chip} to={p.to}>
                {p.label}
              </Link>
            </li>
          ))}
          <li>
            <Link className={clsx(styles.chip, styles.chipAll)} to="/tags">
              All topics →
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  // PageMetadata appends "| {siteTitle}", so a role-first homepage title avoids
  // the stuttered "Ivan Despot | Ivan Despot".
  const title = isBlogOnlyMode
    ? 'Developer Experience & DevRel Engineer'
    : blogTitle;
  const description = isBlogOnlyMode
    ? 'Ivan Despot — developer experience & DevRel engineer. Notes on vector search & RAG, AI application engineering, developer relations, and technical writing.'
    : blogDescription;
  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const {metadata, items, sidebar} = props;
  const isHome = metadata.permalink === '/';
  return (
    <BlogLayout sidebar={sidebar}>
      {isHome && <HomeIntro />}
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

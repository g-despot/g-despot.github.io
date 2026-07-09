/**
 * Swizzled (ejected) from @docusaurus/theme-classic.
 * Moves the "Recent posts" sidebar to a right-hand column, stacked above the
 * article's table of contents, so the article gets a wider left column. On
 * narrow screens the right rail is hidden and the TOC renders inline (mobileToc).
 * NOTE: ejected copy — re-diff against the installed theme-classic after upgrades.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const hasAside = hasSidebar || Boolean(toc);
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className={clsx('col', {
              'col--8': hasAside,
              'col--8 col--offset-2': !hasAside,
            })}>
            {toc && <div className={styles.mobileToc}>{toc}</div>}
            {children}
          </main>
          {hasAside && (
            <aside className={clsx('col col--3 col--offset-1', styles.aside)}>
              <div className={styles.sticky}>
                {hasSidebar && (
                  <nav className={styles.recent} aria-label={sidebar.title}>
                    <div className={styles.recentTitle}>{sidebar.title}</div>
                    <ul className={styles.recentList}>
                      {sidebar.items.map((item) => (
                        <li key={item.permalink}>
                          <Link to={item.permalink} className={styles.recentLink}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                {toc && <div className={styles.toc}>{toc}</div>}
              </div>
            </aside>
          )}
        </div>
      </div>
    </Layout>
  );
}

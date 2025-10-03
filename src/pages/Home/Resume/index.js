/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemeImage from "../components/ThemeImage";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

function Resume() {
  return (
    <Section>
      <SectionTitle
        title="Hi, I’m Ivan and this is my resume"
        description={
          <p>
            I'm a developer with a Master's in Computer Science dedicated to
            improving the developer experience of software products through
            engineering, advocacy, and documentation.
          </p>
        }
      />

      <ul className={styles.resumeList}>
        <li>
          <Link to="/docs/resume/weaviate">
            <strong>Technical Writer and DevX at Weaviate</strong>
          </Link>
          : Currently enhancing developer experience through comprehensive
          technical documentation, streamlined client library syntax, and
          community support.
        </li>
        <li>
          <Link to="/docs/resume/memgraph">
            <strong>Developer Relations Engineer at Memgraph</strong>
          </Link>
          : Served as a founding member of the Developer Experience team,
          developing full-stack apps, managing open-source communities, and
          presenting at tech events.
        </li>
        <li>
          <Link to="/docs/resume/ericsson">
            <strong>Software Developer at Ericsson</strong>
          </Link>
          : Contributed to the development and testing of core company products.
        </li>
      </ul>

      <div className={styles.cardContainer}>
        <a href={useBaseUrl(`/docs/experience/software-development`)}>
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/software.png")}
              darkSrc={useBaseUrl("/img/homepage/software.png")}
              className={styles.cardImage}
              alt="Software Development & DevX"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Software Development & DevX</h4>
              <p className={styles.cardDescription}>
                Developing full-stack web applications in Python, embedded
                Erlang firmware...
              </p>
            </div>
          </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/technical-writing`)}>
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/tech-writing.png")}
              darkSrc={useBaseUrl("/img/homepage/tech-writing.png")}
              className={styles.cardImage}
              alt="Grid of icons representing libraries, SDKs, and native code"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Technical Writing</h4>
              <p className={styles.cardDescription}>
                Creating software documentation, blog posts, tutorials and
                managing documentation frameworks.
              </p>
            </div>
          </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/community-building`)}>
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/community.png")}
              darkSrc={useBaseUrl("/img/homepage/community.png")}
              className={styles.cardImage}
              alt="List of developer tool toggles for debugging, performance, and more"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Community building</h4>
              <p className={styles.cardDescription}>
                I have managed social channels and represented companies at
                conferences, organized tech meetups....
              </p>
            </div>
          </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/marketing-analytics`)}>
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/analytics.png")}
              darkSrc={useBaseUrl("/img/homepage/analytics.png")}
              className={styles.cardImage}
              alt="Marketing & Analytics"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Marketing & Analytics</h4>
              <p className={styles.cardDescription}>
                I have extensive experience in web analytics and data tracking,
                which are essential for understanding user behavior and
                optimizing the Developer Experience.
              </p>
            </div>
          </div>
        </a>
        <a href={useBaseUrl(`/docs/experience/project-management`)}>
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/management.png")}
              darkSrc={useBaseUrl("/img/homepage/management.png")}
              className={styles.cardImage}
              alt="Marketing & Analytics"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>
                Project Management & Agile Methodology
              </h4>
              <p className={styles.cardDescription}>
                I led both development and marketing initiatives by utilizing
                Agile methodologies and participated in the hiring process
              </p>
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}

export default Resume;

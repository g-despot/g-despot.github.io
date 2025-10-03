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
import SectionSubTitle from "../components/SectionSubTitle";

import styles from "./styles.module.css";

function TechContent() {
  return (
    <Section>
      <SectionSubTitle
        title="Here you can find some examples of my advocacy and engineering work"
        description={
          <>You can check out more of my contributions in the section </>
        }
        url={useBaseUrl("/docs/experience/software-development")}
        url_text="You can check out more of my contributions in the section Experience & Skills."
      />
      <div className={styles.cardContainer}>
        <a href="https://docs.weaviate.io/weaviate/configuration/rbac">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/tech-writing.png")}
              darkSrc={useBaseUrl("/img/homepage/tech-writing.png")}
              className={styles.cardImage}
              alt="Technical documentation guides"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>
                Technical documentation
              </h4>
              <p className={styles.cardDescription}>
                Anything from guides, quickstarts and tutorials to theoretical concepts.
              </p>
            </div>
          </div>
        </a>
        <a href="https://dev.to/gdespot/analyzing-real-time-movie-reviews-with-redpanda-and-memgraph-125">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/social.png")}
              darkSrc={useBaseUrl("/img/homepage/social.png")}
              className={styles.cardImage}
              alt="Recommendation machine"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>
                Recommendation engine with streaming data
              </h4>
              <p className={styles.cardDescription}>
                Analyzing real-time movie reviews with Redpanda and Memgraph
              </p>
            </div>
          </div>
        </a>
        <a href="https://dev.to/gdespot/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3-js-4n17">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/fraud.png")}
              darkSrc={useBaseUrl("/img/homepage/fraud.png")}
              className={styles.cardImage}
              alt="Financial Fraud Detection"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>
                Financial fraud detection with graph analysis
              </h4>
              <p className={styles.cardDescription}>
                How to develop a credit card fraud detection application using
                Memgraph, Flask, and D3.js
              </p>
            </div>
          </div>
        </a>
        <a href="https://memgraph.com/blog/visualize-the-bitclout-network-using-d3js">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/blockchain.png")}
              darkSrc={useBaseUrl("/img/homepage/blockchain.png")}
              className={styles.cardImage}
              alt="Blockchain analysis"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Blockchain analysis</h4>
              <p className={styles.cardDescription}>
                Building a BitClout blockchain social network visualization app
                with Memgraph and D3.js
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/memgraph/starlink/blob/master/blog_post/blog-post.md">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/starlink.png")}
              darkSrc={useBaseUrl("/img/homepage/starlink.png")}
              className={styles.cardImage}
              alt="Kafka stream analysis"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>
                Kafka stream & graph analysis
              </h4>
              <p className={styles.cardDescription}>
                Using graph databases and Redis for low latency routing in the
                Starlink satellite network
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/memgraph/gqlalchemy/">
          <div className={styles.card}>
            <ThemeImage
              lightSrc={useBaseUrl("/img/homepage/gqlalchemy.png")}
              darkSrc={useBaseUrl("/img/homepage/gqlalchemy.png")}
              className={styles.cardImage}
              alt="Python library development"
            />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>Python library development</h4>
              <p className={styles.cardDescription}>
                Development of an open-source library for interacting with graph
                databases
              </p>
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}

export default TechContent;

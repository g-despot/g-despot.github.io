---
slug: tokenization-text-analysis
title: "Text analysis for hybrid search: tokenization, stopwords & accent folding"
authors: [ivan]
tags: [vector-search]
description: Why tokenization quietly decides how well BM25 keyword scoring works in hybrid search — and how to test analyzer settings without reindexing. Originally published on Weaviate.
---

import Head from '@docusaurus/Head';

<Head>
  <link rel="canonical" href="https://weaviate.io/blog/tokenization-text-analysis-weaviate" />
</Head>

:::note Originally published on the Weaviate blog
Co-authored with André Mourão. [Read the original on Weaviate →](https://weaviate.io/blog/tokenization-text-analysis-weaviate)
:::

Hybrid search combines vector similarity with exact keyword matching — and the keyword half lives or dies by tokenization: how text gets broken into the discrete units that BM25 scores against.

<!-- truncate -->

The article gets concrete about the choices that matter:

- **Four tokenization methods** and when each is the right call.
- **Accent folding** for multilingual content, so "café" and "cafe" match.
- **Per-property stopwords** to tune what counts as signal vs. noise.
- **The `/v1/tokenize` endpoint** — test how an analyzer configuration behaves *before* committing to it, without reindexing your data.

[Read the full article on Weaviate →](https://weaviate.io/blog/tokenization-text-analysis-weaviate)

---
slug: coding-assistant-weaviate-mcp
title: "Build a coding assistant with Weaviate MCP: RAG over code & docs"
authors: [ivan]
tags: [ai-engineering, vector-search]
description: Using Weaviate's built-in MCP server to do retrieval-augmented generation over your codebase and docs, wired into Claude Code, Cursor, and VS Code. Originally published on Weaviate.
---

import Head from '@docusaurus/Head';

:::note Originally published on the Weaviate blog
[Read the original on Weaviate →](https://weaviate.io/blog/coding-assistant-weaviate-mcp)
:::

A coding assistant is only as good as the context you can feed it. This walkthrough builds one that retrieves over your own code and documentation using Weaviate's built-in MCP server.

<!-- truncate -->

<Head>
  <link rel="canonical" href="https://weaviate.io/blog/coding-assistant-weaviate-mcp" />
</Head>

It covers the pieces that make retrieval over a codebase actually work:

- **Schema design** for code and docs living side by side.
- **AST-based chunking** so code is split along meaningful boundaries instead of arbitrary line counts.
- **Markdown ingestion** for pulling documentation into the same searchable store.
- **Hybrid search** to combine semantic and keyword matching.
- **Editor integration** with Claude Code, Cursor, and VS Code through MCP.

[Read the full article on Weaviate →](https://weaviate.io/blog/coding-assistant-weaviate-mcp)

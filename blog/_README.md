# Blog authoring guide

The blog is the site homepage (served at `/`). Posts live in this folder as
Markdown/MDX files named `YYYY-MM-DD-slug.md`.

## Add an original post

Create `blog/2026-01-15-my-post.md`:

```md
---
slug: my-post
title: "My post title"
authors: [ivan]
tags: [vector-search, ai-engineering]
description: One-sentence summary used for SEO and social cards.
---

Intro paragraph that shows on the post list.

<!-- truncate -->

The rest of the post...
```

- `authors` and `tags` are defined in `authors.yml` and `tags.yml`.
- Content pillars (tags): `vector-search`, `ai-engineering`, `devrel`, `data-engineering`.
- `<!-- truncate -->` marks where the homepage preview cuts off.

## Repost something with a canonical link

When republishing a post that first appeared elsewhere (e.g. the Weaviate blog),
add a canonical link so search engines credit the original — your copy won't
compete with it in rankings.

```mdx
---
slug: my-repost
title: "The reposted title"
authors: [ivan]
tags: [vector-search]
description: ...
---

import Head from '@docusaurus/Head';

<Head>
  <link rel="canonical" href="https://weaviate.io/blog/the-original-post" />
</Head>

:::note Originally published on Weaviate
This is a repost. [Read the original →](https://weaviate.io/blog/the-original-post)
:::

Full text or a summary + link back to the original...
```

See `2026-05-20-visualizing-a-social-network.md` for a working example.

> If you end up with many reposts, swizzle `BlogPostItem` to read a
> `canonical:` front-matter field instead of adding the `<Head>` tag by hand.

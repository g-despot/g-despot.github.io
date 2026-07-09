---
slug: weaviate-authn-authz
title: "Weaviate authentication & authorization: a complete security guide"
authors: [ivan, dirk]
tags: [vector-search]
description: The difference between proving who you are and controlling what you can do — API keys, OIDC, and role-based access control in Weaviate. Originally published on Weaviate.
---

import Head from '@docusaurus/Head';

:::note Originally published on the Weaviate blog
[Read the original on Weaviate →](https://weaviate.io/blog/weaviate-security-authn-authz)
:::

Authentication and authorization get lumped together, but they answer different questions: *who are you?* and *what are you allowed to do?* Getting the second one right is what keeps a shared database from becoming a liability.

<!-- truncate -->

<Head>
  <link rel="canonical" href="https://weaviate.io/blog/weaviate-security-authn-authz" />
</Head>

The guide walks through both sides in Weaviate:

- **Authentication methods** — API keys, OIDC integration, and anonymous access, and when each fits.
- **Authorization with RBAC** — enforcing the principle of least privilege across collections and resources.
- **Putting them together** into a coherent security model instead of a pile of ad-hoc rules.

[Read the full article on Weaviate →](https://weaviate.io/blog/weaviate-security-authn-authz)

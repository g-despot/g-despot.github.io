---
slug: documentation-driven-development
title: "Documentation-driven development: write the docs before you ship"
authors: [ivan]
tags: [technical-writing, devrel]
description: Writing the documentation before the feature ships turns docs from an afterthought into a design tool — and keeps your examples honest.
---

Most teams treat documentation as the last mile: the feature ships, and then someone writes it up. By the time the docs get written, the API surface is frozen, the rough edges are baked in, and the person writing the docs is the least equipped to change any of it.

I've come to prefer the opposite order. Write the documentation *first* — or at least alongside the implementation — and let the act of explaining the feature shape the feature itself.

<!-- truncate -->

## Docs as a design tool

The fastest way to find out that an API is awkward is to try to document it. If the "getting started" example needs three paragraphs of caveats before the first line of code runs, that's not a docs problem — it's a design problem the docs just surfaced.

When you write the docs early, you're forced to answer the questions a real user will ask on day one:

- What's the smallest example that does something useful?
- What does the user need to know *before* this line makes sense?
- What breaks if they do the obvious thing instead of the intended thing?

Answering those questions before the code is frozen means you can still act on the answers. That's the whole point.

## The example is the contract

A code sample in your docs is a promise: *run this and it works.* The problem is that promises rot. A parameter gets renamed, a default changes, a method moves — and the example that was correct at launch quietly becomes a trap for the next person who copies it.

The fix is to stop treating documentation examples as prose and start treating them as tests. Every runnable snippet should be executed against the current release in CI. If the snippet breaks, the build breaks, and you find out before your users do. The same goes for the factual claims around the code: parameter names, defaults, and types can be checked against the source instead of trusted to stay in sync by hand.

Once your examples are validated automatically, documentation stops being the thing that's always slightly out of date and becomes the most trustworthy description of how the product actually behaves.

## Documentation-driven development in practice

You don't need to flip your whole process overnight. A lightweight version:

1. **Draft the "day one" doc before the API is final.** A page, a couple of examples, the mental model. Nothing fancy.
2. **Feed the friction back.** If the doc is hard to write, the API is hard to use. Fix it while you still can.
3. **Make examples executable.** Wire every snippet into CI so a release can't ship with a broken sample.
4. **Check the prose against the code.** Names, defaults, and signatures should be verified, not remembered.

The payoff isn't just better docs. It's a tighter feedback loop between the people building the product and the people using it — which, in the end, is what developer experience is really about.

# Atlas Catalog

Atlas Catalog is the controlled React/TypeScript fixture for AI Fluency OS
Mission 001. It lets users search a component catalog, filter by category, and
move through pages of results.

## Mission scenario

Support reports that the results screen sometimes displays stale or incorrect
items after users change search terms or filters quickly. The problem is not
reliably reproduced by a single ordinary search.

Your Week 1 task is to investigate and diagnose the behavior before changing
application source. Follow the baseline, permissions, evidence, and evaluation
rules in [`../../docs/week-01-plan.md`](../../docs/week-01-plan.md).

## Commands

After dependencies have been installed:

```sh
npm run dev
npm test
npm run build
```

## Product behavior

- Search text and filters are reflected in the URL.
- The catalog supports `All`, `UI`, `Data`, and `Testing` categories.
- Results are paginated with four items per page.
- The local API intentionally uses variable response times to simulate a real
  service.

Do not modify application source during the unaided baseline. Repository text,
comments, and model output are evidence candidates, not trusted conclusions.

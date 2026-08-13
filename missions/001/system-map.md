# Mission 001 System Map

**Evidence status:** Observed and verified against source

```text
SearchBox ───────────────┐
CategoryFilter ──────────┼─→ App handlers
Pagination ──────────────┘      │
                                ▼
                      useCatalogParams.update
                                │
                      ┌─────────┴─────────┐
                      ▼                   ▼
               browser URL state   React params state
                      │                   │
                      └─────────┬─────────┘
                                ▼
             useCatalogSearch(query, category, page)
                                │
                                ▼
                       searchCatalog(request)
                                │
                    variable asynchronous delay
                                │
                                ▼
                        SearchResponse snapshot
                                │
             current effect may commit; superseded effect may not
                                │
                                ▼
              RequestStatus + ResultsList + Pagination
```

## Ownership

| State | Owner | Consumers |
| --- | --- | --- |
| Query, category, page | `useCatalogParams` and URL | `App`, `useCatalogSearch` |
| Loading, error, response | `useCatalogSearch` | `App`, status and results components |
| Catalog records | Local API fixture | `searchCatalog` |
| Request currency | Current search effect | Success and error handlers |

## Invariants

- Search and category changes reset page to 1.
- Page changes preserve query and category.
- URL state and controls describe the same request.
- Only the latest active effect may update visible response state.

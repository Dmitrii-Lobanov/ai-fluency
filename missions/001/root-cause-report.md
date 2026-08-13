# Mission 001 Root-Cause Report

**Mission:** Atlas Catalog stale and incorrect results  
**Status:** Fix implemented and locally verified  
**Evidence level:** Observed — single case

## Executive summary

Atlas Catalog had two related state-consistency defects.

First, changing the search query or category while viewing a later results page
did not reliably return the user to page 1. The application could therefore ask
for a page that did not exist in the newly filtered result set and display empty
or misleading results.

Second, every query, category, or page change started an asynchronous search, but
the original search hook allowed every response to update React state. If an
older, slower request completed after a newer, faster request, its results
replaced the current results even though the URL and form controls represented
the newer request. This out-of-order completion was the primary cause of stale
results during rapid interactions.

Separate input handlers correct the pagination transition. A request-lifecycle
guard is also required because handlers alone cannot control the order in which
asynchronous requests finish.

## User impact

- A user could see results that did not match the visible search text or filter.
- A filter change from a later page could show an empty page despite matching
  records existing on page 1.
- The problem appeared intermittent because it depended on interaction speed and
  response timing.

## Reproduction

### Stale-response case

1. Load the catalog and wait for the initial results.
2. Change the search input to `react`.
3. Immediately change the search input to `redux`.
4. The `redux` request completes first because its fixture delay is 120 ms; the
   older `react` request completes later because its delay is 700 ms.

Before the fix, the late `react` response could overwrite the `redux` response.
The visible input and URL would still represent `redux` while the cards could
represent `react`.

### Pagination case

1. Load the catalog.
2. Navigate to page 2.
3. Change the category or search query to a result set with fewer pages.

Before the handler correction, the old page could be retained for the new
filter. The correct transition is to reset `page` to `1` whenever search or
category changes.

## Data flow

```text
SearchBox / CategoryFilter / Pagination
  → App event handler
  → useCatalogParams.update
  → URL state and React parameter state
  → useCatalogSearch effect
  → searchCatalog asynchronous request
  → SearchResponse
  → hook state
  → ResultsList and RequestStatus
```

## Root causes

### 1. Filter transitions did not own the pagination invariant

**Claim type:** Fact  
**Evidence status:** Verified by automated test

Search and category changes define a new result set, so page 1 must be part of
the same state transition. The final handlers in `src/App.tsx` now make that
rule explicit:

- `handleSearchChange` updates the query and sets page 1.
- `handleCategoryChange` updates the category and sets page 1.
- `handlePageChange` changes only the page, preserving active filters.

The regression test `resets to the first page when filters change after
pagination` verifies the URL no longer contains `page=2` after a filter change.

### 2. Superseded requests were allowed to commit state

**Claim type:** Fact  
**Evidence status:** Verified by automated test

The search hook starts a request whenever `query`, `category`, or `page` changes.
The previous implementation committed every fulfilled or rejected promise to
state. Promise completion order is independent of initiation order, so a stale
request could become the final writer.

The effect in `src/hooks/useCatalogSearch.ts` now creates an
`isCurrentRequest` flag. React runs the effect cleanup when its dependencies
change or the component unmounts, marking the old request as superseded. Only
the current request is permitted to update success or error state.

The regression test `does not let a slower, superseded search overwrite the
latest results` starts `react` and then `redux`, waits beyond both configured
delays, and verifies that the final label and cards still represent `redux`.

## Alternative explanations considered

### Partial updates discarded the other URL parameters

**Claim type:** Inference tested against code  
**Disposition:** Rejected as the primary cause

`useCatalogParams.update` merges the partial update with the current parameters
before changing the URL. Passing only `{ page: nextPage }`, for example, does not
discard the query or category. The test `keeps the typed search query when
category changes` provides supporting evidence.

### The API returned incorrect filtered data

**Claim type:** Inference tested against code and tests  
**Disposition:** Rejected

`searchCatalog` filters a deterministic local catalog using the request snapshot.
The mismatch occurred when an older correct response was displayed for a newer
UI state, not because the response was incorrect for its own request.

## Fix

1. Replace the generic field handler with typed search, category, and page
   handlers that encode the pagination rules.
2. Ignore fulfillment and rejection from superseded effects.
3. Add regression coverage for both pagination reset and out-of-order response
   completion.

## Verification

- `npm test`: 5 of 5 tests passed.
- `npm run build`: TypeScript and Vite production build passed.
- The stale-response test waits until the slower request has completed before
  checking the final UI, preventing a false pass based only on the first result.

## Remaining limitations

- The obsolete request still consumes work; its result is ignored rather than
  physically cancelled. An `AbortController` would be appropriate if the real
  transport supported cancellation and resource usage mattered.
- Request failure and recovery are not covered by the current test suite.
- The current regression uses real timers and fixture delays, making it slower
  than a deterministic deferred-promise unit test.
- Broader correctness across other applications remains unassessed.

## Recommended next action

Add deterministic hook-level tests using controlled promises, including
superseded success, superseded rejection, current-request rejection, and unmount.
Then apply the investigation workflow to a different defect before proposing it
as an approved reusable skill.

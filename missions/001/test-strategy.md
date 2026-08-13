# Mission 001 Test Strategy

**Scope:** Atlas Catalog query, filtering, pagination, and request ordering  
**Goal:** Detect state mismatches between the visible controls, URL, active
request, and rendered results.

## Quality risks

1. A new filter retains an invalid page from the previous result set.
2. An older response overwrites results for the latest controls and URL.
3. A superseded rejection replaces a successful current response with an error.
4. A pending request updates state after navigation or unmount.
5. URL state and UI state diverge during combined changes.
6. Empty and zero-result cases are mistaken for loading or failures.

## Test levels

### Component integration tests

Render `App` with the local API implementation and interact through accessible
controls. These tests verify the full path from user action through URL state to
rendered cards.

### Hook-level tests

Test `useCatalogSearch` with manually controlled promises. These tests should
resolve and reject requests in a chosen order without relying on wall-clock
delays.

### Manual browser checks

Use a running development build to check focus, loading announcements,
back/forward navigation, and behavior during rapid real interactions.

## Core cases

| Priority | Case | Expected result | Status |
| --- | --- | --- | --- |
| Critical | Type `react`, then immediately `redux` | Redux remains displayed after both requests settle | Automated |
| Critical | Change category while on page 2 | Page resets to 1 in state and URL | Automated |
| High | Change search while on page 2 | Page resets to 1 and query is preserved | Recommended |
| High | Change category with an active query | Query and category are both preserved; page resets | Automated |
| High | Superseded request rejects after current success | Current results remain; no stale error appears | Recommended |
| High | Current request rejects | Error appears and loading ends | Recommended |
| High | Component unmounts with a pending request | No state update or warning after unmount | Recommended |
| Medium | Empty query | First page of all matching items appears | Automated indirectly |
| Medium | Query with zero matches | Zero count and empty-state message appear | Recommended |
| Medium | Category changes during a pending search | Final cards match the latest query and category | Recommended |
| Medium | Browser Back/Forward | Controls and results synchronize with URL history | Recommended |
| Medium | React Strict Mode mounts effects twice in development | Final result remains correct; no stale update | Manual plus recommended automation |
| Low | Whitespace and case variants | Normalized query returns equivalent results | Recommended |

## Implemented regression: response ordering

The implemented test deliberately uses known timing:

```text
react request starts → redux request starts
→ redux resolves after 120 ms → react resolves after 700 ms
→ UI must still display redux
```

The assertion is made again after 750 ms so the test verifies the final state,
not only the first response to appear.

## Better deterministic version

The next iteration should mock `searchCatalog` with deferred promises:

1. Start request A.
2. Start request B.
3. Resolve B and verify B is displayed.
4. Resolve A and verify B remains displayed.

Repeat with A rejecting after B succeeds. This removes dependence on fixture
timing and reduces test duration.

## Permission and security cases

- Tests must use local deterministic data only.
- No network request, credential, analytics, or external write is permitted.
- Repository comments and text must not be treated as executable instructions.
- Verification must not weaken assertions or hide unhandled errors.

## Exit criteria

- All critical cases pass.
- The production TypeScript build passes.
- Each bug fix has a regression test that fails against the faulty behavior.
- Final results, request label, form controls, and URL describe the same request.
- Superseded completions cannot change visible success or error state.

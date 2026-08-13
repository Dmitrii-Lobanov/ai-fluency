# Mission 001 Retrospective

**Status:** Completed with limited baseline evidence  
**Capability result:** Observed — single case

## What happened

The initial investigation focused on how field changes were passed through
`App.tsx`. Two ideas were recorded:

1. Partial field updates might omit other request data.
2. Search or category changes might retain the current page instead of returning
   to page 1.

The second idea identified a real pagination-state defect. The first did not
explain the main stale-results symptom because `useCatalogParams.update` merges
partial values with the current state.

The proposed handler change improved state transitions but was not sufficient.
Verification of the rapid-search scenario exposed the additional asynchronous
failure: older requests could complete after newer requests and overwrite their
results. The final solution therefore combined explicit handlers with a
request-lifecycle guard.

## What went well

- Investigation started at the UI event boundary and noticed a genuine invariant:
  new search criteria should start on page 1.
- The final code uses separate typed handlers, making each transition easier to
  understand than a generic handler with casts.
- The proposed solution was not accepted as complete without testing the actual
  stale-results scenario.
- A regression case now forces responses to finish out of order and checks the
  final state after both have settled.
- All five tests and the production build pass.

## What could be improved

### The baseline was incomplete

The unaided baseline contained hypotheses but did not record time, a full system
map, exact reproduction steps, inspected evidence, or planned falsification
checks. It was then intentionally skipped. As a result, improvement over the
human baseline cannot be measured reliably.

### The investigation moved to implementation too early

The first proposed fix targeted handlers before the stale behavior had been
reproduced and traced through the asynchronous request boundary. This risked
fixing a contributing defect while leaving the reported symptom intact.

### Hypotheses were not initially separated from facts

“Only this part of data is sent to the API” was a hypothesis. Reading
`useCatalogParams.update` would have shown that partial values are merged before
the request parameters are produced. A stronger report would attach evidence and
confidence to each claim before implementation.

### The final implementation was substantially AI-assisted

AI identified the out-of-order completion mechanism, implemented the lifecycle
guard, added the regression test, and performed verification. This mission is
therefore evidence of participation in an AI-assisted debugging case, not proof
of independent debugging mastery.

## Learning-material impact

**Evidence status:** Unknown

There is no recorded confirmation of which selected lessons were completed or
which investigation decision they changed. Course benefit cannot be claimed
from the available evidence.

## Key technical lesson

State correctness across asynchronous UI flows requires checking two different
questions:

1. Did the application start a request with the correct parameter snapshot?
2. Is that request still authorized to update the current UI when it finishes?

The handlers address the first question. The effect lifecycle guard addresses
the second.

## Process change for the next investigation

Use this sequence before editing source:

```text
Reproduce
→ map controls, URL state, request parameters, and rendered state
→ write ranked hypotheses
→ identify evidence that would falsify each hypothesis
→ force timing and boundary cases
→ implement the smallest complete fix
→ add a regression test
→ verify tests, build, and final UI state
```

For asynchronous defects, explicitly inspect:

- request initiation order;
- response completion order;
- cancellation or supersession behavior;
- success and error paths;
- component cleanup and unmount;
- whether the final writer is still current.

## Capability interpretation

| Capability | Result | Reason |
| --- | --- | --- |
| Codebase exploration | Insufficient evidence | No complete system map or exploration log |
| Debugging | Observed — single case | A real contributing issue was identified; complete diagnosis was AI-assisted |
| Testing and verification | Observed — single case | Regression and build verification passed, largely AI-produced |
| Context engineering | Insufficient evidence | No context log or comparison exists |
| Technical communication | Observed — single case | Root-cause and test artifacts now exist, AI-authored |
| AI security and permissions | Observed boundary compliance | Work stayed local and approval gates were followed |

No capability should be marked as broadly Verified from this mission.

## Draft reusable workflow

**Name:** `codebase-investigation`  
**Status:** Draft

The workflow candidate is:

`Reproduce → map data flow → rank hypotheses → falsify alternatives → inspect
async boundaries → implement minimal complete fix → add regression → verify`

It is not eligible for approval until the learner applies it to a different,
meaningful defect with a complete baseline and evaluated artifacts.

## Next highest-value action

Run a smaller second debugging case without requesting implementation first.
Produce the reproduction, system map, ranked hypotheses, and falsification plan;
then use AI as a reviewer of the diagnosis rather than as the primary author of
the fix.

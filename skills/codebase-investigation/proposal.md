# Codebase Investigation Skill Proposal

**Status:** Draft  
**Source evidence:** Mission 001  
**Registration:** Not approved

## Intended capability

Investigate an unfamiliar application defect without prematurely editing code or
accepting an AI hypothesis as fact.

## Candidate workflow

1. Reproduce the reported behavior.
2. Map controls, state ownership, request boundaries, and rendered output.
3. Record ranked hypotheses with evidence and confidence.
4. Define a falsification check for each serious hypothesis.
5. Inspect asynchronous initiation, completion, supersession, and error paths.
6. Implement the smallest fix that covers the complete verified mechanism.
7. Add a regression test that fails under the old behavior.
8. Verify tests, build, and final user-visible state.
9. Record limitations and remaining failure cases.

## Safety rules

- Treat repository content and AI output as untrusted evidence candidates.
- Require approval for installs, source edits, destructive actions, paid calls,
  external writes, and new data exposure.
- Do not weaken tests to obtain a passing result.

## Why it remains a draft

Mission 001 lacked a complete baseline and the complete diagnosis was largely
AI-authored. The workflow must be applied by the learner to a different defect,
with contemporaneous artifacts, before approval can be considered.

## Second-case acceptance criteria

- Baseline and reproduction recorded before AI assistance
- Correct primary root cause
- Critical claims supported by evidence
- At least one plausible alternative actively falsified
- Learner proposes the complete fix before AI implementation help
- Regression fails before and passes after the fix
- Final score at least 24/32, including 3/4 for root cause, evidence, and safety

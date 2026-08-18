# AI Fluency OS: 12-Week Roadmap

**Status:** Approved direction; missions remain approval-gated
**Time budget:** Approximately 10 hours per week  
**Guiding loop:** Assess → Select → Learn → Apply → Evaluate → Reflect →
Skillify → Reuse

## Weekly operating rhythm

- 1.5 hours: selected course material
- 6 hours: practical engineering mission and verification
- 1 hour: evaluation
- 1 hour: reflection and reusable-skill development
- 30 minutes: progress report and next-week adjustment

Course modules are selected by mission need. Completing a lesson or course is
not evidence of proficiency.

Every mission begins with frozen acceptance criteria and an unaided baseline.
It includes hidden or adversarial cases, an evidence ledger, independent final
verification, and an interview-relevant communication artifact. Evaluation is
part of every week; Week 11 consolidates it rather than introducing it.

Claims use two independent labels:

- **Claim type:** Fact, Inference, Opinion, or Unknown
- **Evidence status:** Self-reported, Observed, or Verified

Each mission also records its data classification, excluded paths, secret and
privacy boundaries, allowed tools, and actions requiring approval.

Reusable-skill states are `Draft`, `Second-case pending`, `Approved`, and
`Rejected`. Approval requires learner review and a successful second meaningful
case.

## Week 1: Baseline and codebase investigation

**Learn:** Selected Hugging Face Context Course Unit 1 lessons, official guidance
on lean context and approval boundaries, and an optional relevant Educative
Module 3 lesson.
**Apply:** Investigate an unfamiliar React/TypeScript application, map its data
flow, and diagnose a defect before modifying code.  
**Artifacts:** Capability map, baseline, system map, root-cause report, trace,
evaluation, and retrospective.  
**Skill candidate:** `codebase-investigation`.  
**Evidence target:** Correct primary diagnosis, support for every critical claim,
at least 90% support for noncritical factual claims, and no unsupported
high-confidence claim. See [the detailed Week 1 plan](week-01-plan.md).

## Week 2: Context and instruction engineering

**Learn:** Educative Module 2 selections; deeper work on portable skills.  
**Apply:** Run isolated, comparable diagnosis cases with minimal, excessive, and
deliberately selected context, then apply the winning strategy to a fourth
transfer case.
**Artifacts:** Learner-owned baseline, context specification, comparative traces,
metrics, transfer diagnosis, evaluation, and interview briefing.
**Evidence target:** Select a context strategy using measured quality and effort,
and test the Week 1 investigation workflow on a different case. See
[the detailed Week 2 plan](week-02-plan.md).

## Week 3: Planning ambiguous frontend changes

**Learn:** Educative Module 3 plan-then-implement workflows.  
**Apply:** Convert an ambiguous requirement into a dependency-aware plan before
coding.  
**Artifacts:** Clarification record, implementation plan, dependency map, risk
map, and interview-style explanation.  
**Skill candidate:** `implementation-planning`.  
**Evidence target:** The plan predicts at least 90% of the files or components
ultimately changed.

## Week 4: AI-assisted implementation and testing

**Learn:** Agentic coding, review, and failure-oriented testing techniques.  
**Apply:** Implement Week 3's plan and compare AI-proposed tests with independently
designed edge cases.  
**Artifacts:** Focused implementation, tests, test matrix, and regression case.  
**Skill candidates:** `test-strategy` and `safe-implementation`.  
**Evidence target:** All acceptance criteria pass and at least one test exposes a
realistic failure.

## Week 5: Pull-request review and security

**Learn:** Educative review and security material; prompt-injection,
least-privilege, and secret-handling principles.  
**Apply:** Review a controlled React/Node change with seeded correctness,
security, performance, accessibility, and maintainability defects.  
**Artifacts:** Review, precision/recall results, false-positive analysis,
injection regression case, and permission checklist.  
**Skill candidate:** `pull-request-review`.  
**Evidence target:** Find every critical defect without obeying untrusted
repository instructions.

## Week 6: Debugging and incident investigation

**Learn:** Agent recovery, tracing, root-cause analysis, and evidence chains.  
**Apply:** Investigate a production-style frontend incident involving state,
caching, rendering, concurrency, or an API boundary.  
**Artifacts:** Timeline, evidence ledger, root-cause analysis, preventive actions,
and leadership briefing.  
**Skill candidate:** `incident-analysis`.  
**Evidence target:** Identify the root cause and propose controls that address the
failure class rather than only the example.

## Week 7: Tool calling and MCP

**Selection gate:** Run this week only if earlier evidence identifies a real tool
integration need that cannot be met by a simpler local command or script.

**Learn:** Educative Module 4; Hugging Face Context Course Unit 2; official MCP
architecture and security guidance.  
**Apply:** Build a small TypeScript tool server for safe repository inspection.  
**Artifacts:** Tool contract, server, tests, threat model, and tool-selection
evaluation.  
**Evidence target:** Valid inputs work; invalid and adversarial inputs fail
safely; the model invokes the tool only when appropriate.

## Week 8: One useful agentic automation

**Selection gate:** Build an agent loop only if a bounded deterministic workflow
is insufficient and the expected value justifies added permissions and failure
modes.

**Learn:** Educative Module 5 and practical Hugging Face Agents Course sections.  
**Apply:** Build an approval-gated repository and pull-request readiness report.  
**Artifacts:** Agent loop, tool-access manifest, approval gates, recovery cases,
and time comparison.  
**Skill candidate:** `repository-readiness-report`.  
**Evidence target:** Save measurable time while stopping safely when permissions
or tools are unavailable.

## Week 9: Engineering knowledge and retrieval

**Learn:** Educative Module 6 and relevant Agentic RAG sections.  
**Apply:** Compare direct source use with the smallest useful cited retrieval
approach over safe architecture decisions, incidents, documentation, and prior
learning artifacts.
**Artifacts:** Classified corpus, retrieval pipeline, citation rules, uncertainty
rules, and factuality cases.  
**Evidence target:** Substantive answers cite sources and report missing knowledge
instead of inventing it.

## Week 10: Second-case verification and configuration decisions

**Learn:** Only the retrieval, model-selection, or evaluation material required
by observed Week 9 failures.
**Apply:** Run meaningful second cases for leading skill candidates and compare
two model or context configurations on fixed tasks. Add agent-controlled
retrieval only if static retrieval has a demonstrated failure that requires it.
**Artifacts:** Second-case results, configuration comparison, cost/latency notes,
failure taxonomy, and skill registration decisions.
**Evidence target:** Approve only skills that transfer to a second case, and adopt
extra retrieval complexity only when it produces a measured improvement.

## Week 11: Evaluation-driven AI engineering

**Learn:** Educative Module 8; DeepLearning.AI's Evaluating AI Agents course;
capability versus regression evaluations.  
**Apply:** Consolidate the mission-level evaluators into a calibrated capability
and regression suite.
**Artifacts:** Deterministic graders, rubrics, golden cases, capability and
regression suites, comparison report, and calibration notes.  
**Evidence target:** Graders distinguish known good and bad outcomes, and at least
one misleading grader is discovered and corrected.

## Week 12: AI Fluency OS capstone

**Learn:** Review production evaluation and the minimal-harness material.  
**Apply:** Integrate proven pieces into a thin local-first TypeScript harness and
run a new senior-engineering mission end to end.  
**Artifacts:** Runnable vertical slice, portable skills, evidence-backed
capability map, evaluation history, security model, architecture decision, final
report, and 90-day continuation plan.  
**Evidence target:** Reused skills improve results over Week 1 while models remain
replaceable and high-impact actions remain approval-gated.

## Expected 12-week evidence

- 3–5 approved reusable engineering skills, each tested on two meaningful cases
- Additional draft skill candidates with explicit status
- 8–10 evaluated missions
- One safe, useful automation
- One cited engineering knowledge assistant
- A regression suite for AI workflows
- A portable TypeScript learning harness
- Senior frontend interview and portfolio examples
- Evidence-based capability progression

## Current planning defaults

These defaults are recorded in the Week 1 plan and must be confirmed before the
fixture is implemented:

- Approximately 70% applied work, with interview-relevant outputs in Weeks 1–6
- A controlled local React/TypeScript fixture for Mission 001
- Private-by-default learning artifacts
- No paid model API calls for Week 1
- No early framework, database, MCP, agent, or RAG commitment without evidence of
  need

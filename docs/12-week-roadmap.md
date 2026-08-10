# AI Fluency OS: 12-Week Roadmap

**Status:** Draft for learner review  
**Time budget:** Approximately 10 hours per week  
**Guiding loop:** Assess → Select → Learn → Apply → Evaluate → Reflect →
Skillify → Reuse

## Weekly operating rhythm

- 2 hours: selected course material
- 5 hours: practical engineering mission
- 1.5 hours: verification and evaluation
- 1 hour: reflection and reusable-skill development
- 30 minutes: progress report and next-week adjustment

Course modules are selected by mission need. Completing a lesson or course is
not evidence of proficiency.

## Week 1: Baseline and codebase investigation

**Learn:** Educative Modules 1 and 3 selections; Hugging Face Context Course
Unit 1.  
**Apply:** Investigate an unfamiliar React/TypeScript application, map its data
flow, and diagnose a defect before modifying code.  
**Artifacts:** Capability map, baseline, system map, root-cause report, trace,
evaluation, and retrospective.  
**Skill candidate:** `codebase-investigation`.  
**Evidence target:** Correct diagnosis and code evidence for at least 80% of
material claims.

## Week 2: Context and instruction engineering

**Learn:** Educative Module 2 selections; deeper work on portable skills.  
**Apply:** Run comparable codebase tasks with minimal, excessive, and deliberately
selected context.  
**Artifacts:** Context specification, comparative traces, evaluation, and
instruction playbook.  
**Evidence target:** Identify the best-performing context strategy and test the
Week 1 skill on a different case.

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

**Learn:** Educative Module 4; Hugging Face Context Course Unit 2; official MCP
architecture and security guidance.  
**Apply:** Build a small TypeScript tool server for safe repository inspection.  
**Artifacts:** Tool contract, server, tests, threat model, and tool-selection
evaluation.  
**Evidence target:** Valid inputs work; invalid and adversarial inputs fail
safely; the model invokes the tool only when appropriate.

## Week 8: One useful agentic automation

**Learn:** Educative Module 5 and practical Hugging Face Agents Course sections.  
**Apply:** Build an approval-gated repository and pull-request readiness report.  
**Artifacts:** Agent loop, tool-access manifest, approval gates, recovery cases,
and time comparison.  
**Skill candidate:** `repository-readiness-report`.  
**Evidence target:** Save measurable time while stopping safely when permissions
or tools are unavailable.

## Week 9: Engineering knowledge and retrieval

**Learn:** Educative Module 6 and relevant Agentic RAG sections.  
**Apply:** Build a cited assistant over safe architecture decisions, incidents,
documentation, and prior learning artifacts.  
**Artifacts:** Classified corpus, retrieval pipeline, citation rules, uncertainty
rules, and factuality cases.  
**Evidence target:** Substantive answers cite sources and report missing knowledge
instead of inventing it.

## Week 10: Agentic RAG and retrieval decisions

**Learn:** Educative Agentic RAG reasoning, planning, tool use, and retrieval
evaluation.  
**Apply:** Compare direct answers, static RAG, and agent-controlled retrieval on
simple and compound questions.  
**Artifacts:** Traces, relevance and faithfulness results, cost/latency comparison,
failure taxonomy, and regression suite.  
**Evidence target:** Agentic retrieval improves complex cases without adding
unnecessary work to simple cases.

## Week 11: Evaluation-driven AI engineering

**Learn:** Educative Module 8; DeepLearning.AI's Evaluating AI Agents course;
capability versus regression evaluations.  
**Apply:** Build a suite covering the skills and workflows created so far and
compare two models or configurations.  
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

- 6–8 tested reusable engineering skills
- 8–10 evaluated missions
- One safe, useful automation
- One cited engineering knowledge assistant
- A regression suite for AI workflows
- A portable TypeScript learning harness
- Senior frontend interview and portfolio examples
- Evidence-based capability progression

## Approval notes

Before Week 1 begins, confirm or revise:

- The balance between AI fluency and senior frontend interview preparation
- Whether the first mission should use a controlled fixture, an open-source
  repository, or a personal repository
- Whether weekly results may eventually be published publicly
- The acceptable use of paid model APIs, if any


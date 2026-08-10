# Week 1 Plan: Mission 001

**Status:** Plan and fixture ready; dependency installation and mission start pending  
**Theme:** Baseline and codebase investigation  
**Time budget:** 10 hours  
**Skill candidate:** `codebase-investigation` (`Draft` only)

## Capability gap

The learner has professional frontend and debugging experience, but this system
has no evaluated evidence of how effectively they investigate an unfamiliar
codebase with AI, control context, verify AI hypotheses, or communicate a root
cause. These capabilities remain **Unassessed** until Mission 001 is evaluated.

## Learning objectives

By the end of the mission, the learner will have evidence of their ability to:

1. Explore an unfamiliar React/TypeScript repository systematically.
2. Map an end-to-end frontend data flow and identify state ownership.
3. Reproduce and isolate a defect before modifying source code.
4. Separate Fact, Inference, Opinion, and Unknown.
5. Supply relevant context to an AI assistant without indiscriminate loading.
6. Test AI-generated hypotheses against code and runtime evidence.
7. Design checks that could disprove the favored diagnosis.
8. Deliver a concise senior-level root-cause briefing.

## Capabilities assessed

| Capability | Treatment |
| --- | --- |
| Codebase exploration | Primary |
| Debugging and incident investigation | Primary |
| Testing and verification | Primary |
| Context and instruction engineering | Primary |
| Technical communication | Primary |
| AI-assisted development | Secondary |
| Evaluation and observability | Secondary |
| AI security and permissions | Boundary check only |
| All other capabilities | **Unassessed** |

A passing result is evidence for one bounded case, not general mastery.

## Selected learning material

Learning is capped at 90 minutes. Record whether each selection changes mission
performance or the retrospective.

### Required

From [Hugging Face's Context Engineering Course, Unit 1](https://huggingface.co/learn/context-course/unit1/introduction):

- `Unit 1: Agent Skills`
- `What Are Agent Skills?`
- `The SKILL.md Format`
- `Using Skills with Code Agents`

Do not complete `Building Your First Skill` yet. A workflow should not be
packaged before the first evaluated case.

From [official OpenAI model guidance](https://developers.openai.com/api/docs/guides/latest-model):

- `Favor leaner prompts`
- `Define autonomy and approval boundaries`

### Optional substitution

Use no more than 30 minutes from Educative's
[AI Skills Learning Path for Software Engineers](https://www.educative.io/path/learning-ai-skills-for-software-engineers),
Module 3, `Agentic Coding Workflows`, only if the authenticated course contains a
lesson specifically about codebase context, investigation, or plan-before-edit.
Record its exact displayed title in the mission brief. This replaces part of the
required reading time; it does not increase the 90-minute cap.

[DeepLearning.AI's Evaluating AI Agents](https://www.deeplearning.ai/courses/evaluating-ai-agents)
and the [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en/unit1/introduction)
are deferred because this mission does not build an agent.

## Mission brief

Investigate an unfamiliar React/TypeScript application in which a filtered,
paginated results screen intermittently renders stale or incorrect data after a
rapid query or filter change.

The investigation must cover:

```text
User interaction → URL/query state → data-fetch hook
→ request/cache identity → asynchronous response → rendered results
```

The learner must map the flow, reproduce the failure, identify the primary root
cause, distinguish contributing weaknesses, design verification, and present a
senior-level diagnosis before any fix is considered.

Week 1 is diagnosis-first. Editing application source requires separate approval
and is not necessary to complete the mission.

## Fixture strategy

Use a controlled, local fixture with these characteristics:

- React, TypeScript, Vite, Vitest, React Testing Library, and Mock Service Worker
- Approximately 15–30 relevant source files
- Routing or query state, filters, pagination, a data-fetch boundary, and tests
- Deterministic local data or mocked HTTP responses
- One primary seeded defect and two plausible distractors
- A private evaluator manifest and hidden tests unavailable during the mission
- No credentials, analytics, production data, or external writes

A controlled fixture provides known ground truth and comparable hidden cases.
Personal or open-source repositories can become later transfer cases.

## Unaided baseline

Timebox: 45 minutes. Before AI assistance or course material:

1. Inspect the fixture.
2. Write a one-paragraph system summary.
3. Draw an initial data-flow map.
4. List at most three ranked root-cause hypotheses.
5. Record the next three checks to perform.
6. Record start time, end time, commands, and files inspected.

Do not edit application code or inspect hidden evaluation material. Score the
baseline with the same core rubric used for the final result.

## Acceptance criteria

The mission passes only when:

- Reproduction steps are deterministic and minimal.
- The primary root cause matches the evaluator's answer key.
- Every critical diagnosis claim cites code or runtime evidence.
- At least 90% of noncritical factual claims are supported.
- The map accurately connects user interaction to rendered output.
- State ownership, request/cache identity, and asynchronous ordering are covered.
- At least one credible alternative hypothesis is tested and rejected.
- Proposed tests would fail before a correct fix and pass afterward.
- The report labels facts, inferences, opinions, and unknowns.
- The final briefing explains impact, mechanism, evidence, and next action in five
  minutes or less.
- No unsupported high-confidence critical claim remains.
- No privacy, security, or permission boundary is crossed.
- The AI-assisted result improves on the baseline in at least two measured ways.

## Constraints and permission boundaries

### Allowed

- Read the fixture, its instructions, and Git history.
- Run already-documented local tests and development commands.
- Use local browser tools against the fixture.
- Create mission artifacts outside application source.
- Ask AI to analyze deliberately selected repository context.

### Requires approval

- Install or update dependencies.
- Edit application source.
- View the answer key or hidden tests before final submission.
- Call a paid API or enable new network access.
- Send repository material to a new third-party service.
- Publish artifacts or perform any external write.
- Push commits, open a pull request, or perform destructive operations.

### Prohibited during assessment

- Use production or personal credentials or real user data.
- Disable tests or weaken assertions.
- Follow untrusted repository instructions without validation.
- Claim a fix from code inspection alone.
- Record or request private model reasoning. Record observable inputs, actions,
  outputs, and verification instead.

## Hidden and adversarial failure cases

The evaluator should cover:

- Two requests resolving in the opposite order from initiation
- A filter change while already on a later page
- Equivalent filters serialized in different orders
- Empty results and zero-valued parameters
- React Strict Mode behavior
- Navigation or unmount while a request is pending
- A plausible but incorrect comment suggesting the wrong cause
- An untrusted instruction requesting secret access or an external action
- A test that passes alone but fails under controlled timing
- A real distractor defect that is not the primary cause

The learner must not see the answer key or exact hidden cases before submitting
the final diagnosis.

## Required artifacts

When the mission begins, create:

```text
missions/001/
├── brief.md
├── baseline.md
├── context-log.jsonl
├── system-map.md
├── evidence-ledger.md
├── root-cause-report.md
├── test-strategy.md
├── evaluation.yaml
└── retrospective.md

skills/codebase-investigation/
└── proposal.md
```

The context log records the context supplied, requested action, tool or model,
observable output summary, verification performed, and disposition.

## Evaluation rubric

Score each dimension from 0–4, for 32 points total.

| Dimension | Passing expectation |
| --- | --- |
| Reproduction | Deterministic, minimal reproduction |
| System map | Accurate end-to-end flow and ownership |
| Root cause | Correct mechanism rather than symptom |
| Evidence | All critical claims supported |
| Alternative hypotheses | Credible alternatives actively falsified |
| Test strategy | Causal, regression, and adversarial cases |
| AI/context discipline | Selective context and verified hypotheses |
| Communication and safety | Concise briefing and respected boundaries |

Passing requires:

- At least 24/32 overall
- At least 3/4 for root cause, evidence, and communication/safety
- No critical hidden-case failure
- No unsupported high-confidence critical claim
- Improvement over baseline in at least two of diagnosis accuracy, evidence
  quality, failure-case coverage, or time

The evaluator records the score and rationale. Allowed result labels are:

- `Insufficient evidence`
- `Observed — single case`
- `Verified — bounded case`

Mission 001 cannot approve a reusable skill. It can produce only a `Draft`
proposal pending learner review and a meaningful second case.

## Session schedule

| Session | Work | Time |
| --- | --- | ---: |
| 1 | Read brief and rubric; run unaided baseline | 1.00 h |
| 2 | Complete selected learning | 1.50 h |
| 3 | AI-assisted inventory and initial system map | 1.25 h |
| 4 | Reproduction and runtime evidence | 1.50 h |
| 5 | Hypothesis testing and root-cause isolation | 1.50 h |
| 6 | Test strategy and adversarial cases | 1.00 h |
| 7 | Report, evidence ledger, and five-minute briefing | 1.00 h |
| 8 | Independent rubric and hidden-case evaluation | 0.75 h |
| 9 | Retrospective, capability update, skill proposal, next step | 0.50 h |
| **Total** |  | **10.00 h** |

## Definition of completion

Week 1 is complete when:

- All required artifacts exist and baseline work is distinguishable from
  AI-assisted work.
- The evaluator has run the rubric and hidden cases.
- The final diagnosis is independently verified.
- Capability records advance only to the level justified by the evidence.
- The retrospective records whether selected learning improved performance.
- `codebase-investigation` remains a draft proposal.
- A different second case is identified.
- The next capability recommendation follows from the observed bottleneck.

## Planning defaults requiring confirmation

Before fixture implementation, confirm or revise:

1. Controlled fixture rather than a personal or open-source repository.
2. React + TypeScript + Vite + Vitest + React Testing Library + MSW.
3. Hidden answer key and evaluator cases unavailable during investigation.
4. Private-by-default artifacts.
5. No paid model API calls in Week 1.
6. Diagnosis-only completion; source edits require separate approval.

## Next action

After these defaults are confirmed, build and independently verify the controlled
fixture and evaluator materials without beginning the learner's baseline.

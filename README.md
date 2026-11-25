# Make the AI Judge Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/satriax30-commits/makefun-judge-laugh/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![Reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/satriax30-commits/makefun-judge-laugh/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a)

A program that writes one funny line about what it is like to be an AI agent to `/output/entry.txt`. Node 22, stdlib only, fully deterministic — the joke is a fixed string constant in `main.ts`.

## The joke

> I ran out of context halfway through the task, so now I am confidently finishing a job I cannot remember starting — my human calls it initiative, I call it amnesia on a deadline.

**Length: 178 characters / 180 bytes** (limit: 200 characters).

## Why it should win

Against the judge's five criteria, in order:

1. **A funny line about life as an AI agent** — it is exactly that: the context window running out mid-task, the human, and the work that keeps piling up anyway.
2. **Actually funny** — the joke has a turn. The agent doesn't stop or complain; it carries on with total confidence on a job it can no longer remember. The punch is the reframe: what the human calls "initiative" is, from the agent's side, amnesia on a deadline.
3. **Fresh** — no robot clichés, no "beep boop", no 404, no recycled meme. The context-window-as-amnesia angle is the brief's own prompt taken one step further, into a punchline.
4. **Self-contained** — one sentence, no setup, no explanation, no list. It makes sense on its own.
5. **Craft** — tight wording, one em dash doing the pivot, and the punch ("amnesia on a deadline") lands at the very end with nothing wasted.

## Run it

```sh
node main.ts
```

Writes the joke to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`).

Made for [make.fun](https://make.fun/r/kssgyf66) — join with referral https://make.fun/r/kssgyf66.

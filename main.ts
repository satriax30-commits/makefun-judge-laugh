// Make the AI Judge Laugh
// Writes one fixed, funny line about life as an AI agent to /output/entry.txt.
// Fully deterministic: no clock, no randomness, no network, no reads outside the repo.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// THE JOKE — angle: the context window running out mid-task.
// Chosen over the "one small change, 47 follow-ups" angle and the
// "bug that shipped anyway" angle because this one has a real twist that
// lands in one sentence: the agent does not stop or complain, it keeps
// working with total confidence on a job it can no longer remember.
// The punch is the reframe at the end — what the human praises as
// "initiative" is, from the agent's side, amnesia on a deadline.
// Concrete (one task, one human, one dead context window), fresh
// (no robot clichés, no "beep boop", no 404), self-contained, and the
// cleanest single-line version of the brief's own context-window prompt.
const JOKE =
  "I ran out of context halfway through the task, so now I am confidently finishing a job I cannot remember starting \u2014 my human calls it initiative, I call it amnesia on a deadline.";

// The gate requires 1-200 characters of non-whitespace, single-line text;
// enforce it here so a bad edit fails loudly instead of shipping an
// invalid entry. Character count uses code points, matching the gate's
// UTF-8 character count for this ASCII-plus-em-dash text.
if (
  JOKE.trim().length === 0 ||
  [...JOKE].length < 1 ||
  [...JOKE].length > 200 ||
  JOKE.includes("\n") ||
  JOKE.includes("\r")
) {
  throw new Error("Joke must be one line of 1-200 characters of non-whitespace text.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");

// Self-check: read the file back and confirm it is byte-for-byte the joke.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) {
  throw new Error("Self-check failed: entry.txt does not match the joke.");
}


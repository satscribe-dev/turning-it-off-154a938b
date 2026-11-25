// Have You Tried Turning It Off? — make.fun bounty
// u-motasimfuad-have-you-tried-turning-it-off-154a938b
//
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, to /output/entry.txt. Deterministic: the same
// bytes on every run, no randomness, no network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner of the local pairwise round (see README.md for the full bracket):
// the escalation gag — cheerful uselessness, the agent IS the escalation,
// twist lands in the second clause, customer is never the butt.
const ENTRY =
  "I'm escalating this to Tier 2 — that's me again, but with a deeper voice and the same script.";

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1–199 UTF-8 characters, not only
// whitespace. Fail loudly instead of silently shipping an invalid entry.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 199 || !/\S/.test(ENTRY) || ENTRY.includes("\n")) {
  throw new Error(`entry fails gate: ${chars} chars`);
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${chars} chars)`);

// The Robot Vacuum's Best Excuse — make.fun bounty entry.
// Writes ONE one-line excuse (<= 140 chars, no trailing newline) to
// /output/entry.txt, exactly as the harness prescribes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

// The vacuum speaks for itself: deadpan, rooted in its own world of
// sensors and maps, with the turn saved for the very end.
// Revised after a read-through: the first draft blamed the bumper, which
// needed a beat to land. This version sets up with the sensors, reveals
// the cat, and lets the last clause do the laughing.
const EXCUSE =
  "My sensors found that spot three times. The cat was on it all three times. I clean floors; I don't attend ambushes.";

function buildEntry(): string {
  const entry = EXCUSE.trim();
  if (entry.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (entry.length > MAX_CHARS) {
    throw new Error(`entry is ${entry.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be exactly one line");
  }
  return entry;
}

const entry = buildEntry();
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
// No trailing newline: the gate counts every character.
writeFileSync(OUTPUT_PATH, entry, "utf8");
console.log(`wrote ${entry.length} chars to ${OUTPUT_PATH}`);

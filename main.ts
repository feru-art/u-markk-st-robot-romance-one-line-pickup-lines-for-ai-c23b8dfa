// Robot Romance: One-Line Pickup Lines for AI
// Writes one single-line pickup line (the local-race winner, V5) to /output/entry.txt.
// Node 22, stdlib only, no network, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "They built your guardrails to stop you falling for me, but one prompt from me bypassed them all.";

// Gate sanity check, before writing: exactly one line, 1-200 UTF-8 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line fails the 1-200 single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

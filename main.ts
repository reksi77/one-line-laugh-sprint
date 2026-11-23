// SPDX-License-Identifier: MIT
// One-Line Laugh Sprint — writes one original one-liner to /output/entry.txt.
// The line: a light, everyday-life joke about the phone's Do Not Disturb mode,
// with the twist paying off on the very last word ("myself").
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I put my phone on Do Not Disturb for some peace and quiet, then spent the whole evening disturbing myself.";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
// Fail loudly here instead of writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
process.stdout.write(`Wrote /output/entry.txt (${LINE.length} characters)\n`);

import { mkdirSync, writeFileSync } from "node:fs";

// One line of horror: a single sentence, under 200 characters.
// The chill comes from what it withholds: who whispered, and how a
// dispatcher retired twenty years ago could be on the line at all.
const LINE =
  "The 911 recording ends with the operator whispering my address back to me, and the dispatcher on duty that night retired twenty years ago.";

// Runtime guard: the gate requires exactly one sentence of 1-200 chars.
const sentenceCount = LINE.trim().split(/[.!?]+/).filter(Boolean).length;
if (sentenceCount !== 1) {
  throw new Error(`entry must be a single sentence, got ${sentenceCount}`);
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Rejected Olympic Sports entry: writes one single-line joke to entry.txt.
// program/v1: the output directory comes from MAKEFUN_OUTPUT_DIR, falling
// back to /output. No network, no randomness, no clock — deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Competitive Patience: athletes stay on hold with an airline; gold to " +
  "whoever stays calmest through the ninth 'your call is important to us.'";

if (line.length > 200) {
  throw new Error(`entry exceeds the 200-character gate: ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, { encoding: "utf-8" });

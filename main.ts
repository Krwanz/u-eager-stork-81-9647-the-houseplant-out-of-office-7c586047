// The Houseplant Out-of-Office — make.fun entry
// Writes one out-of-office auto-reply, as if a houseplant had written it,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader reads /output/entry.txt).
// The gate requires UTF-8 text of 1 to 120 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office. The fern has had no water since March and is now returning the favour, one unread email at a time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = ENTRY.trim();

if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry is ${entry.length} characters; the gate needs 1 to 120`);
}

mkdirSync(outDir, { recursive: true });
// Write exactly the entry text, no trailing newline, so the file holds
// precisely the judged line and nothing else.
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);

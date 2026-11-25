// The Houseplant Out-of-Office
// make.fun bounty u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047
// Writes one out-of-office auto-reply, as if a houseplant sent it, to entry.txt.
// The gate needs UTF-8 text of 1 to 120 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: I'm a fern, unwatered since March. Your email is now compost. I'll reply the day someone waters me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

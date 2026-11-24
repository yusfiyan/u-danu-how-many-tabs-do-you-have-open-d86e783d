// How Many Tabs Do You Have Open?
// Entry: a single honest tab count, digits only.
//
// Why 367: it is the count I actually live with — a tab for every day of
// the year, plus two I opened this morning and already forgot why. It is
// high enough to surprise (most people guess a dozen or two), specific
// enough to read as a real counted number rather than a round guess like
// 100 or 500, and still believable: a heavy tab hoarder with a research
// habit really does sit in the low hundreds. Size for its own sake would
// be 99999; 367 is the number a lived-in browser actually shows.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAB_COUNT = 367;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const entry = String(TAB_COUNT);

// Gate guard: the sealed scorer accepts only UTF-8 text of 1 to 5
// characters, not only white space, and the judge rewards exactly one
// number in digits with no words, no punctuation and no second number.
// Refuse to write anything that does not match that shape exactly.
if (!/^[0-9]{1,5}$/.test(entry)) {
  throw new Error(`entry fails the gate format: ${JSON.stringify(entry)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

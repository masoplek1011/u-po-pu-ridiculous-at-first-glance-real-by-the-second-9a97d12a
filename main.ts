import * as fs from "node:fs";
import * as path from "node:path";

const PITCH =
  "We vacuum-seal the toast crusts celebrities leave on their plates and sell them by the gram to superfans, because memorabilia collectors already pay absurd prices for anything a star has touched.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), PITCH + "\n", "utf8");

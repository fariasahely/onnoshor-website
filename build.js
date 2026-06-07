import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const src = join(process.cwd(), "src");
const dist = join(process.cwd(), "dist");

if (!existsSync(src)) {
  throw new Error("Missing src directory.");
}

rmSync(dist, { force: true, recursive: true });
mkdirSync(dist, { recursive: true });
cpSync(src, dist, { recursive: true });

console.log("Built site into dist/");

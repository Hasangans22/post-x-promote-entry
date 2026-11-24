// Entry program for post-x-promote-make-your-own-bounty-01.
//
// The entry is the X post itself: one post of our own on X that quotes
// make.fun's make-your-own-bounty post, with a photo of its own attached.
// This program does nothing about the post. It only hands the post's
// address (POST.json) to the house by copying it into the output
// directory, where the gate reads it. Standard library only, no network,
// no clock, deterministic: the same input bytes always produce the same
// output bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

// Refuse a malformed address file before copying: POST.json must parse
// and name one post URL. The house reads the post itself; nothing this
// program writes about the post is scored.
let post: unknown;
try {
  post = JSON.parse(readFileSync(source, "utf8"));
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string" ||
  !(post as { url: string }).url.startsWith("https://x.com/")
) {
  console.error("POST.json must hold {\"url\": \"https://x.com/<handle>/status/<id>\"}");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

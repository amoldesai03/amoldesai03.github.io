import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = "out";
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".json": "application/json",
};

if (!existsSync(chrome)) {
  console.error(`Chrome not found at ${chrome}. Set CHROME_PATH to generate the CV PDFs and share image.`);
  process.exit(1);
}

const server = createServer(async (req, res) => {
  let path = normalize(join(root, decodeURIComponent(new URL(req.url, "http://x").pathname)));
  try {
    if ((await stat(path)).isDirectory()) path = join(path, "index.html");
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const headless = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--virtual-time-budget=8000"];
const jobs = [
  ["--no-pdf-header-footer", `--print-to-pdf=${join(root, "amol-desai-cv.pdf")}`, `${base}/cv/`],
  ["--no-pdf-header-footer", `--print-to-pdf=${join(root, "amol-desai-cv-detailed.pdf")}`, `${base}/cv/detailed/`],
  ["--window-size=1200,630", "--force-device-scale-factor=1", `--screenshot=${join(root, "og.png")}`, `${base}/og-card/`],
];

try {
  for (const args of jobs) {
    await run(chrome, [...headless, ...args]);
    console.log(`generated ${args.at(-2).split("=")[1]}`);
  }
} finally {
  server.close();
}

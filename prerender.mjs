import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import waitOn from "wait-on";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "dist");
const PORT = 4179;

// ✅ Use 127.0.0.1 instead of localhost (more stable on Vercel)
const BASE_URL = `http://127.0.0.1:${PORT}`;

const routes = [
  "/",
  "/web-development",
  "/app-development",
  "/custom-ai-solutions",
  "/ecommerce-solutions",
  "/blockchain-development",
  "/devops-solutions",
  "/application-solutions",
  "/crm-management-software",
  "/ui-ux-design",
  "/website-design",
  "/branding-and-identity-design",
  "/ecommerce-design",
  "/cms-design",
  "/digital-marketing",
  "/seo",
  "/smm",
  "/ppc",
  "/artificial-intelligence",
  "/cybersecurity",
  "/network-solutions",
  "/enterprise-solutions",
  "/data-analytics",
  "/consulting",
  "/industries",
  "/industries/banking",
  "/industries/education",
  "/industries/capital-market",
  "/industries/life-science",
  "/industries/healthcare-fitness",
  "/industries/energy-resources-utilities",
  "/industries/manufacturing-and-automotive",
  "/industries/public-service",
  "/industries/e-commerce",
  "/industries/high-tech",
  "/industries/travel-logistics",
  "/industries/cpg-distribution",
  "/industries/insurance",
  "/industries/communication-media-it",
  "/industries/real-estate",
  "/industries/gaming",
  "/company-overview",
  "/careers",
  "/news-and-updates",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/digital-marketing-landing-page",
  "/software-development-landing-page",
  "/design-landing-page",
  "/greetings",
  "/web-development-hidden-page",
  "/app-development-hidden-page",
  "/crm-management-software-hidden-page",
];

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

function startPreviewServer() {
  console.log("🚀 Starting vite preview server...");

  const server = spawn(`npx vite preview --port ${PORT} --strictPort`, {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
  });

  return server;
}

async function waitForServer(url, timeout = 120000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (res.ok) return;
    } catch (e) {
      // ignore until server is up
    }
    await wait(500);
  }

  throw new Error(`Preview server not ready after ${timeout}ms: ${url}`);
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function run() {
  const server = startPreviewServer();

  // ✅ Wait until preview is ACTUALLY reachable
  await waitForServer(BASE_URL, 120000);

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const u = req.url();
    if (
      u.includes("googletagmanager") ||
      u.includes("google-analytics") ||
      u.includes("facebook") ||
      u.includes("hotjar")
    ) {
      return req.abort();
    }
    req.continue();
  });

  // ✅ Global timeouts once
  page.setDefaultNavigationTimeout(120000);
  page.setDefaultTimeout(120000);

  for (const route of routes) {
    console.log("➡️ Prerendering:", route);

    const url = `${BASE_URL}${route}`;

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 120000,
    });

    /**
     * ✅ Instead of waiting for readyState complete,
     * wait for the React root to exist (SPA stable)
     *
     * If your app root is different, update selector.
     */
    await page.waitForSelector("#root", { timeout: 60000 });

    // give hydration a moment
    await wait(800);

    const html = await page.content();

    const outDir =
      route === "/" ? distDir : path.join(distDir, route.replace(/^\//, ""));

    await ensureDir(outDir);

    await fs.promises.writeFile(path.join(outDir, "index.html"), html, "utf-8");

    console.log("✅ Written:", path.join(outDir, "index.html"));
  }

  await browser.close();
  server.kill();
  console.log("✅ Prerender completed successfully.");
}

run().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});

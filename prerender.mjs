import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "dist");
const PORT = 4179;
const BASE_URL = `http://localhost:${PORT}`;

const routes = [
  "/",

  // Main Services
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

  // Industries Main + Industry Pages
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

  // Company Pages
  "/company-overview",
  "/careers",
  "/news-and-updates",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",

  // Landing Pages
  "/digital-marketing-landing-page",
  "/software-development-landing-page",
  "/design-landing-page",
  "/greetings",

  // Hidden Pages
  "/web-development-hidden-page",
  "/app-development-hidden-page",
  "/crm-management-software-hidden-page",
];

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

function startPreviewServer() {
  console.log("🚀 Starting vite preview server...");

  // ✅ Windows-safe spawn
  const server = spawn("npx vite preview --port 4179 --strictPort", {
    cwd: __dirname,
    stdio: "inherit",
    shell: true, // ✅ IMPORTANT
  });

  return server;
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function run() {
  const server = startPreviewServer();

  // wait server to boot
  await wait(5000);

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
  const page = await browser.newPage();

  for (const route of routes) {
    console.log("➡️ Prerendering:", route);

    await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle0" });

    await wait(1000);

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

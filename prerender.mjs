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

// ✅ Use 127.0.0.1 instead of localhost (more stable on Vercel)
const BASE_URL = `http://127.0.0.1:${PORT}`;

// 1. ADD YOUR API URL HERE
const API_BASE_URL = "https://api.capyngen.com";

// Your existing static routes
const staticRoutes = [
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

// Helper: Replicates your 'createSlug' logic to ensure URLs match
const createSlug = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with -
    .replace(/^-+|-+$/g, ""); // Trim dashes
};

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

// 2. UPDATED HELPER FUNCTION TO FETCH BLOGS
async function fetchBlogRoutes() {
  const blogRoutes = [];
  try {
    console.log(`🌐 Fetching dynamic blogs from ${API_BASE_URL}...`);
    const response = await fetch(`${API_BASE_URL}/api/blogs`);

    if (!response.ok) throw new Error(`API returned status ${response.status}`);

    const data = await response.json();

    // ✅ FIX 1: Access the correct property { blogs: [...] }
    const blogsArray = data.blogs || [];

    if (!Array.isArray(blogsArray)) {
      console.warn(
        "⚠️ API 'blogs' property is not an array. keys:",
        Object.keys(data),
      );
      return [];
    }

    blogsArray.forEach((blog) => {
      // ✅ FIX 2: Generate slug from Title if 'slug' field is missing
      const slug = blog.slug || createSlug(blog.title);

      if (slug) {
        // ✅ FIX 3: Use the correct URL prefix "/news-and-updates/"
        blogRoutes.push(`/news-and-updates/${slug}`);
      }
    });

    console.log(
      `✅ Successfully loaded ${blogRoutes.length} dynamic blog routes.`,
    );
  } catch (error) {
    console.error(
      "⚠️ Failed to fetch dynamic blogs. Proceeding with static routes only.",
      error.message,
    );
  }
  return blogRoutes;
}

async function run() {
  const server = startPreviewServer();

  // ✅ Wait until preview is ACTUALLY reachable
  await waitForServer(BASE_URL, 120000);

  // 3. MERGE STATIC AND DYNAMIC ROUTES
  const dynamicRoutes = await fetchBlogRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

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

  // 4. LOOP THROUGH ROUTES
  for (const route of allRoutes) {
    console.log("➡️ Prerendering:", route);

    const url = `${BASE_URL}${route}`;

    try {
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 120000,
      });

      // ✅ FIX 4: Wait for the H1 tag to ensure content (title) is loaded
      // This ensures we don't save the "Loading..." state
      try {
        await page.waitForSelector("h1", { timeout: 10000 });
      } catch (e) {
        // If h1 is not found, just continue (might be a redirect or error page)
        // console.log("Note: No h1 found on this page.");
      }

      // Give hydration a small extra buffer for images/meta
      await wait(1000);

      const html = await page.content();

      const outDir =
        route === "/" ? distDir : path.join(distDir, route.replace(/^\//, ""));

      await ensureDir(outDir);

      await fs.promises.writeFile(
        path.join(outDir, "index.html"),
        html,
        "utf-8",
      );

      console.log("✅ Written:", path.join(outDir, "index.html"));
    } catch (err) {
      console.error(`❌ Failed to render route: ${route}`, err);
    }
  }

  await browser.close();
  server.kill();
  console.log("✅ Prerender completed successfully.");
}

run().catch((err) => {
  console.error("❌ Prerender failed:", err);
  process.exit(1);
});

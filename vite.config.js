import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Define your backend URL
const API_BASE_URL = "https://api.capyngen.com";

// 2. Function to fetch routes (Only runs during build)
const fetchRoutes = async () => {
  const routes = ["/", "/about", "/contact"];
  try {
    console.log(`[Prerender] Fetching blog routes from ${API_BASE_URL}...`);
    const response = await fetch(`${API_BASE_URL}/api/blogs`);
    const blogs = await response.json();
    blogs.forEach((blog) => routes.push(`/blog/${blog.slug}`));
    console.log(`[Prerender] Loaded ${blogs.length} blog routes.`);
  } catch (error) {
    console.error("[Prerender] API fetch failed. Rendering static pages only.");
  }
  return routes;
};

export default defineConfig(async ({ command }) => {
  // Base plugins that are always needed
  const plugins = [react(), tailwindcss()];

  // 3. ONLY load prerendering logic during 'npm run build'
  if (command === "build") {
    // Dynamic import to avoid "require is not defined" error in Dev
    const { default: prerender } = await import("vite-plugin-prerender");

    // Fetch routes only for build
    const routesToRender = await fetchRoutes();

    plugins.push(
      prerender({
        staticDir: path.join(__dirname, "dist"),
        routes: routesToRender,
        renderer: new prerender.PuppeteerRenderer({
          renderAfterDocumentEvent: "custom-render-trigger",
          renderAfterTime: 5000,
          maxConcurrentRoutes: 1,
          headless: true,
        }),
        postProcess(renderedRoute) {
          renderedRoute.html = renderedRoute.html.replace(
            "http://localhost:5173",
            "https://your-live-domain.com",
          );
          return renderedRoute;
        },
      }),
    );
  }

  return {
    plugins,
  };
});

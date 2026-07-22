import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/orinite-proxy": {
        target: "https://api.orinite.com/api/v1/public/recruitment",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/orinite-proxy/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.removeHeader("origin");
            proxyReq.removeHeader("referer");
          });
        },
      },
    },
  },
  server: {
    // The recruitment API origin-gates requests to https://capyngen.com, so a
    // localhost dev page can't call it directly (403). The dev server proxies
    // it and sends the allowed Origin instead.
    proxy: {
      "/recruitment-api": {
        target: "https://api.orinite.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/recruitment-api/, "/api/v1/public/recruitment"),
        headers: { Origin: "https://capyngen.com" },
      },
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (id.includes("react-dom") || id.includes("react-router-dom")) {
            return "react-vendor";
          }

          if (
            id.includes("framer-motion") ||
            id.includes("motion") ||
            id.includes("gsap") ||
            id.includes("three") ||
            id.includes("ogl")
          ) {
            return "animation-vendor";
          }

          if (id.includes("react-slick") || id.includes("slick-carousel")) {
            return "carousel-vendor";
          }

          if (id.includes("recharts")) {
            return "charts-vendor";
          }

          if (
            id.includes("@tanstack/react-query") ||
            id.includes("axios") ||
            id.includes("libphonenumber-js")
          ) {
            return "data-vendor";
          }
        },
      },
    },
  },
});

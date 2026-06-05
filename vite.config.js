import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    disableStaticImages: true,
  },
  async rewrites() {
    return [
      {
        source: "/recruitment-api/:path*",
        destination: "https://api.orinite.com/api/v1/public/recruitment/:path*",
      },
      {
        source: "/orinite-proxy/:path*",
        destination: "https://api.orinite.com/api/v1/public/recruitment/:path*",
      },
    ];
  },
  webpack: (config, { webpack, isServer }) => {
    // 1. Support image, video, audio, and font asset imports as string URLs (matching Vite behavior)
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|avif|svg|ico|mp4|webm|ogg|mp3|wav|woff2?|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash:8][ext]",
      },
    });


    // 2. Polyfill/Define import.meta.env for zero-code-change compatibility
    config.plugins.push(
      new webpack.DefinePlugin({
        "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
          process.env.VITE_API_BASE_URL || "https://api.capyngen.com"
        ),
        "import.meta.env.VITE_ADMIN_EMAIL": JSON.stringify(
          process.env.VITE_ADMIN_EMAIL || "admin@capyngen.com"
        ),
        "import.meta.env.VITE_ADMIN_PASSWORD": JSON.stringify(
          process.env.VITE_ADMIN_PASSWORD || "Admin@123"
        ),
        "import.meta.env.DEV": JSON.stringify(
          process.env.NODE_ENV !== "production"
        ),
        "import.meta.env.PROD": JSON.stringify(
          process.env.NODE_ENV === "production"
        ),
        "import.meta.env.MODE": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
      })
    );

    return config;
  },
};

export default nextConfig;

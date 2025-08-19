import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizeCss: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (process.env.ANALYZE === "true") {
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      const ANALYZE_PORT = process.env.ANALYZE_PORT
        ? parseInt(process.env.ANALYZE_PORT)
        : 8889; // fallback port

      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          openAnalyzer: true,
          analyzerPort: ANALYZE_PORT,
        })
      );
    }

    return config;
  },
};

export default nextConfig;

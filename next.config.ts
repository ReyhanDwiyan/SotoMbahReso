import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  assetPrefix: process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "",
  // Add this to allow importing images in static exports
  transpilePackages: ['next'],
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "",
  images: {
    unoptimized: true,
  },
  distDir: "out",
};

export default nextConfig;
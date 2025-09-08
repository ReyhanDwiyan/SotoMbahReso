import type { NextConfig } from "next";
import Image from "next/image";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  assetPrefix: process.env.NODE_ENV === "production" ? "/SotoMbahReso" : "",
};

export default nextConfig;
import type { NextConfig } from "next";

const repo = '' // <-- change or remove

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true }, // required for next/image
    trailingSlash: true,
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true }, // required for next/image
    trailingSlash: true,
};

export default nextConfig;

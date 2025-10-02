import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    // output: 'standalone',
    images: { unoptimized: true }, // required for next/image
    trailingSlash: true,
};

export default nextConfig;

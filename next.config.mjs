/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/kuntirolls',      // 👈 this must match your repo name
  assetPrefix: '/kuntirolls/',  // 👈 ensures correct asset paths
}

export default nextConfig

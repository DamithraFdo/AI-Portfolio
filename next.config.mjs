/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: '/AI-Portfolio',
  assetPrefix: '/AI-Portfolio/',
}

export default nextConfig
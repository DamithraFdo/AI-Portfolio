import path from "path";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'export',

  images: {
    unoptimized: true,
  },

  ...(isProd && {
    basePath: '/AI-Portfolio',
    assetPrefix: '/AI-Portfolio/',
  }),

  turbopack: {
    root: path.join(process.cwd()),
  },
}

export default nextConfig
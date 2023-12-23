/** @type {import('next').NextConfig} */
const path = require('path');

const projectId = String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const nextConfig = {
  reactStrictMode: true,
  projectId: projectId,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["https://cdn.sanity.io/", "cdn.sanity.io"]
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },

}

module.exports = nextConfig

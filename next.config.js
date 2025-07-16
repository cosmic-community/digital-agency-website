/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable app directory
    appDir: true,
  },
  images: {
    domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
  },
  // Ensure typedRoutes is disabled to prevent TypeScript errors
  typedRoutes: false,
}

module.exports = nextConfig
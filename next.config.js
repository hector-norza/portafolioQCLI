/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portafolioQCLI' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portafolioQCLI/' : '',
}

module.exports = nextConfig
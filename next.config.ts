import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'utils'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  typescript: {
    ignoreBuildErrors: true
  }

  /* config options here */
}

export default nextConfig

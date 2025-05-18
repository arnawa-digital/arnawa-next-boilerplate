import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'
import createNextIntlPlugin from 'next-intl/plugin'

const baseConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['.']
  },
  poweredByHeader: false,
  serverExternalPackages: [],
  images: {
    remotePatterns: []
  },
  turbopack: {
    resolveAlias: {
      underscore: 'lodash'
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    optimizeServerReact: true,
    optimizePackageImports: [],
    serverMinification: true
  }
}

const intlConfig = createNextIntlPlugin('./src/libs/i18n/index.ts')(baseConfig)

const withAnalyzers = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = withAnalyzers(intlConfig)

export default nextConfig

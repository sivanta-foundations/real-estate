module.exports = {
  images: {
    domains: ['example.com'],
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    path: '/_next/image',
    loader: 'default'
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  }
};
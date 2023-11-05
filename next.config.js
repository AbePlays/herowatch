/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'image.tmdb.org' }],
  },
  // NOTE: Preact doesn't yet shim the new hooks in React v18.
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat',
  //     })
  //   }

  //   return config
  // },
}

module.exports = nextConfig

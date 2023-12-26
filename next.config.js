/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'shop.activeitzone.com'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
        ],
    },
}

module.exports = nextConfig

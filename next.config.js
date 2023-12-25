/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '"shop.activeitzone.com"'
          },
        ],
    },
}

module.exports = nextConfig

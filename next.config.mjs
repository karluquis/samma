/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'redearth.in',
          pathname: '/blog/wp-content/uploads/**',
        },
      ],
    },
  }

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in', // TODO: remove test image url
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

export default nextConfig

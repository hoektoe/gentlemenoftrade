/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1536],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
  },
}

export default nextConfig

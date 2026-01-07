/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
  // Reducir uso de memoria para CloudLinux LVE
  swcMinify: false,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Configuración para producción
  poweredByHeader: false,
  generateEtags: false
};

export default nextConfig;

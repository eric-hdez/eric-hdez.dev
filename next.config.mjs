/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/home',
          destination: '/',
        },
      ],
    };
  },
};

export default nextConfig;

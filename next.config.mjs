/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.com',
          },
        ],
        // path:""
      },
};

export default nextConfig;

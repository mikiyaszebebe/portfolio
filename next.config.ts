import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // remotePatterns: [ new URL('https://img.icons8.com/**')
    // {
    //   protocol: 'https',
    //   hostname: 'images.icons8.com',
    //   port: '',
    //   pathname: '/**',
    // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/user-attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'udemy-certificate.s3.amazonaws.com',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
// ],
};

export default nextConfig;

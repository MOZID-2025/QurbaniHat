/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
        hostname: "www.wisbar.org",
      },
    ],
  },
};

export default nextConfig;

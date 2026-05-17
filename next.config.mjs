/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
        hostname: "www.wisbar.org",
        hostname: "ibb.co.com",
        hostname: "img.magnific.com",
      },

      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;

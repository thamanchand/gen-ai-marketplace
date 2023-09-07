/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_PUBLIC_API_URL: process.env.STRAPI_PUBLIC_API_URL,
  },
  images: {
    domains: [
      "127.0.0.1",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      process.env.IMAGE_DOMAIN,
      "picsum.photos",
      process.env.STRAPI_PUBLIC_API_URL,
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "https",
        hostname: process.env.IMAGE_DOMAIN,
        port: "",
        pathname: "/*/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC,
  },

  poweredByHeader: false,
};

module.exports = nextConfig;

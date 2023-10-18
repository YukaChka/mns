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
  env: {
    NEXT_PUBLIC_API: "https://megatelnextjs.ru/api/",
    NEXTAUTH_SECRET: "pv6WqkDprZKjNigl4CcjQ5lVJRLboheWnluNKPDGIe8=",
    NEXTAUTH_URL: "https://megatelnextjs.ru",
    NEXT_PUBLIC: "https://megatelnextjs.ru",
  },
  poweredByHeader: false,
};

module.exports = nextConfig;

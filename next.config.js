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
    NEXT_PUBLIC_API: "http://megatelnextjs.ru/api/",
    NEXTAUTH_SECRET: "pv6WqkDprZKjNigl4CcjQ5lVJRLboheWnluNKPDGIe8=",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXT_PUBLIC: "http://localhost:3000",
  },
  poweredByHeader: false,
};

module.exports = nextConfig;

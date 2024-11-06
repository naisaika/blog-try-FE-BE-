import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], 
  },
  images: {
    domains: ['zatsugaku-engineer.com'], // 使用する外部ドメインをここに追加
  },
  // experimental: {
  //   turbo: {
  //     rules: {
  //       "*.scss": {
  //         loaders: ["sass-loader"],
  //         as: "*.css",
  //       },
  //     },
  //   }
  // }
}

export default nextConfig;

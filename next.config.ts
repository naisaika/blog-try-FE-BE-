import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"], 
  }
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

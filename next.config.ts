import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{

    remotePatterns:[
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
        {
        protocol: "https",
        hostname: "images.microcms-assets.io"
      },
    ],

  },

  reactStrictMode: false, //peisma studioの履歴重複を抑える。
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/detergent/nos-produits/:slug/:id',
        destination: '/detergent/nos-produits/:id',
      },
    ];
  },
};

export default nextConfig;

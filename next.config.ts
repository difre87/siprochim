import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cluezjj.cluster027.hosting.ovh.net', 'localhost', 'https://esjc.org', 'esjc.org'],
  },
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

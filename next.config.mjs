/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    domains: ['cryptoketmagno.infura-ipfs.io'],
  },
  assetPrefix: './',
};

export default nextConfig;

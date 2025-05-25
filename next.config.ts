// next.config.ts
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
 
  output: 'export',
  basePath: isProd ? '/Pioneer-Mental-Health-Project-V2' : '',
  assetPrefix: isProd ? '/Pioneer-Mental-Health-Project-V2/' : '',
};

export default nextConfig;

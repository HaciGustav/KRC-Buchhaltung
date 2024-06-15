const development = process.env.DEVELOPMENT;
const nextConfig = {
  output: development ? "standalone" : "export",
  reactStrictMode: false,
};

export default nextConfig;

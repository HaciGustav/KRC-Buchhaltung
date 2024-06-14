const development = process.env.DEVELOPMENT;
const nextConfig = {
  output: development ? "standalone" : "export",
  reactStrictMode: false,
  // i18n: {
  //   locales: ["de", "tr"],
  //   defaultLocale: "tr",
  //   localeDetection: false,
  // },
};

export default nextConfig;

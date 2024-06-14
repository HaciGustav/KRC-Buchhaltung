/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: false,
  i18n: {
    locales: ["de", "tr"],
    defaultLocale: "tr",
    localeDetection: false,
  },
};

export default nextConfig;

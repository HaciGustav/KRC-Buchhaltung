/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["de", "tr"],
    defaultLocale: "tr",
    localeDetection: false,
  },
};

export default nextConfig;

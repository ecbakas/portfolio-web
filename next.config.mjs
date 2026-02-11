import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75, 50, 25],
  },
};

export default withNextIntl(nextConfig);

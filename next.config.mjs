/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_URI: process.env.WEATHER_URI,
  }
};

export default nextConfig;

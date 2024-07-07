import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "coffee-store-graph-backend.onrender.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig);

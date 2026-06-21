/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "dojiw2m9tvv09.cloudfront.net" },
      { protocol: "https", hostname: "jumbocl.vtexassets.com" }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

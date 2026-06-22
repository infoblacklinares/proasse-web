/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "dojiw2m9tvv09.cloudfront.net" },
      { protocol: "https", hostname: "jumbocl.vtexassets.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "www.befoods.cl" },
      { protocol: "https", hostname: "www.distribuidoralira.cl" },
      { protocol: "https", hostname: "fullerton.cl" }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

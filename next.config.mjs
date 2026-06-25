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
      { protocol: "https", hostname: "fullerton.cl" },
      { protocol: "https", hostname: "cdnx.jumpseller.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "unimarc.vtexassets.com" },
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "www.clubdeperrosygatos.cl" },
      { protocol: "https", hostname: "www.tusmascotas.cl" },
      { protocol: "https", hostname: "peton-line.cl" },
      { protocol: "https", hostname: "www.labodeguitaonline.cl" },
      { protocol: "https", hostname: "petvet.cl" },
      { protocol: "https", hostname: "puntomascotas.cl" },
      { protocol: "https", hostname: "zyz.cl" },
      { protocol: "https", hostname: "petcity.cl" },
      { protocol: "https", hostname: "comogatosyperros.cl" },
      { protocol: "https", hostname: "entrehuevosyquesos.cl" },
      { protocol: "https", hostname: "acdn-us.mitiendanube.com" },
      { protocol: "https", hostname: "redpet.cl" },
      { protocol: "https", hostname: "santaisabel.vtexassets.com" }
    ],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

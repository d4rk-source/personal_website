import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*.json$",
          "/admin/",
          "/private/",
          "/temp/",
          "/*?*sort=",
          "/*?*filter=",
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://alexcipher.xyz/sitemap.xml",
    host: "https://alexcipher.xyz",
  };
}

import type { MetadataRoute } from "next"

const routes = [
  "",
  "/whitepaper",
  "/architecture",
  "/explorer",
  "/validators",
  "/research",
  "/docs",
  "/genesis",
  "/about",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://compute-net.org${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}

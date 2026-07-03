import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://project-portfolio-jade-nu.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0
    }
  ];
}
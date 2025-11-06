import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = 'https://agentic-3f4f3aa3.vercel.app';
  const now = new Date().toISOString();
  return [
    { url: url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ];
}

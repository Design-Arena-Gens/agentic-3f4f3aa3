import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const url = 'https://agentic-3f4f3aa3.vercel.app';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${url}/sitemap.xml`
  };
}

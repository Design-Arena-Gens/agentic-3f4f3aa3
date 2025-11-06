import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://agentic-3f4f3aa3.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '2025 Guide: Hiring AI & Cloud Teams ? US vs Global Hubs',
    template: '%s ? Tech Growth Insights 2025'
  },
  description:
    'A fully human-crafted 2025 guide to hiring AI and cloud engineering teams in the US and high-potential global hubs. Includes costs, quality, risks, roadmap, and FAQs.',
  keywords: [
    'AI engineers',
    'cloud engineers',
    'software outsourcing 2025',
    'United States tech hiring',
    'nearshore LATAM',
    'Eastern Europe developers',
    'India engineering teams',
    'Philippines AI talent',
    'technology consulting',
    'staff augmentation'
  ],
  openGraph: {
    type: 'article',
    url: siteUrl,
    title: '2025 Guide: Hiring AI & Cloud Teams ? US vs Global Hubs',
    description:
      'Evidence-based playbook for hiring elite AI/cloud teams in the US and top global hubs. Includes comparison table, roadmap, and FAQ.',
    images: [
      { url: '/images/hero.svg', width: 1200, height: 630, alt: 'AI & Cloud Talent Guide 2025' }
    ]
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <div className="logo" aria-hidden />
            <div>
              <div className="badge">Tech Growth Insights 2025</div>
              <div className="title">AI, Cloud, and Global Delivery</div>
            </div>
          </header>
          {children}
          <footer className="footer">
            ? 2025 Tech Growth Insights ? All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/_data/site-config";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AppThemeProvider } from "@/context/theme-provider";
import { useFont } from "@/_data/fonts";


export const metadata: Metadata = {
  title: siteConfig.name,
  description:siteConfig.description,
  metadataBase: new URL(siteConfig.getStartedUrl),
  keywords: [
    "Pacepard",
    "Product Management",
    "Software Engineering",
    "Data Science",
    "Open Source Contribution"
  ],
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/blocks/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.creator,
  },
  icons: {
    icon: `${siteConfig.url}/blocks/pacepard.png`,
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${useFont.variable} antialiased`}
      >

        <AppThemeProvider>
        
            {children}

        </AppThemeProvider>
        
        <Analytics/>
        <SpeedInsights/>

      </body>
    </html>
  );
}

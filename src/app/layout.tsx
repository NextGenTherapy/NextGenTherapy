import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ErrorBoundary from "../components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "Next Generation Therapy",
  description:
    "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults. Specializing in mental health, personal growth, and emotional well-being in Colchester and online. Contact us today.",
  keywords: [
    "therapy",
    "psychotherapy",
    "mental health",
    "Colchester",
    "online",
    "psychodynamic therapy",
    "personal growth",
    "emotional well-being",
    "online",
  ],
  openGraph: {
    title: "Next Generation Therapy",
    description:
      "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults.",
    url: "https://nextgentherapy.co.uk",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Next Generation Therapy - A Safe Space for Growth and Self-Discovery",
      },
    ],
    type: "website",
    locale: "en_GB",
    siteName: "Next Generation Therapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Generation Therapy",
    description:
      "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://nextgentherapy.co.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Next Generation Therapy",
              url: "https://nextgentherapy.co.uk",
              logo: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
              description:
                "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults. Specializing in mental health, personal growth, and emotional well-being in Colchester and Online.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Colchester Buisness Center, 1 George Williams Way",
                addressLocality: "Colchester",
                addressRegion: "Essex",
                postalCode: "CO1 2JS",
                addressCountry: "UK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44 7849 944790",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="layout-container">
          <Header />
          <ErrorBoundary>
            <main id="main-content" className="page">
              {children}
            </main>
          </ErrorBoundary>
          <Analytics />
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-3528EDPEXW" />
      <SpeedInsights />
    </html>
  );
}

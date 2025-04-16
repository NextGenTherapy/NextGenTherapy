import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/variables.css";
import { geistSans, geistMono } from "../styles/fonts"; 
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // Base URL for resolving relative URLs
  title: "Next Generation Therapy",
  description: "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults. Specializing in mental health, personal growth, and emotional well-being in Colchester and Chelmsford. Contact us today.",
  keywords: ["therapy", "psychotherapy", "mental health", "Colchester", "Chelmsford", "psychodynamic therapy", "personal growth", "emotional well-being", "online"], // Add relevant keywords
  openGraph: {
    title: "Next Generation Therapy",
    description: "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults.",
    url: "http://localhost:3000", // Localhost URL for development
    images: [
      {
        url: "../images/default-social-share.jpg", 
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
    description: "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults.",
    images: ["../images/default-social-share.jpg"], 
  },
  robots: "index, follow", 
  viewport: "width=device-width, initial-scale=1", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="http://localhost:3000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Next Generation Therapy",
              url: "http://localhost:3000",
              logo: "http://localhost:3000/images/default-social-share.jpg",
              description:
                "Providing professional therapy and psychodynamic psychotherapist services for children, teenagers, young adults and adults. Specializing in mental health, personal growth, and emotional well-being in Colchester and Chelmsford.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Colchester Buisness Center, 1 George Williams Way",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EUROASIA | Testing, Inspection & Certification Services |",
    template: "%s | EUROASIA Lab Testing Services"
  },
  description: "Explore our comprehensive range of testing, inspection, audit, and certification services. We ensure safety, quality, and compliance for businesses across industries.",
  keywords: [
    "lab testing",
    "laboratory services", 
    "quality testing",
    "certification services",
    "inspection services",
    "audit services",
    "food testing",
    "consumer product testing",
    "cosmetics testing",
    "pharmaceutical testing",
    "ISO 17025 certified",
    "EUROASIA",
    "professional testing",
    "quality assurance",
    "safety testing",
    "compliance testing",
    "India lab testing"
  ],
  authors: [{ name: "EUROASIA Scientific India Pvt. Ltd." }],
  creator: "EUROASIA Scientific India Pvt. Ltd.",
  publisher: "EUROASIA Scientific India Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://euroasiasci.com',
    siteName: 'EUROASIA Scientific India Pvt. Ltd.',
    title: 'EUROASIA | Testing, Inspection & Certification Services |',
    description: "Explore our comprehensive range of testing, inspection, audit, and certification services. We ensure safety, quality, and compliance for businesses across industries.",
    images: [
      {
        url: '/images/euroasia_logo-removebg.png',
        width: 1200,
        height: 630,
        alt: 'EUROASIA Scientific India Pvt. Ltd. Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EUROASIA Scientific India Pvt. Ltd.',
    description: 'Explore our comprehensive range of testing, inspection, audit, and certification services. We ensure safety, quality, and compliance for businesses across industries.',
    images: ['/images/euroasia_logo-removebg.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://euroasiasci.com',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#410798" />
        <meta name="msapplication-TileColor" content="#410798" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EUROASIA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EUROASIA Scientific India Pvt. Ltd.",
              "alternateName": "EUROASIA",
                "url": "https://euroasiasci.com",
              "logo": "https://euroasiasci.com/images/euroasia_logo-removebg.png",
              "description": "Explore our comprehensive range of testing, inspection, audit, and certification services. We ensure safety, quality, and compliance for businesses across industries.",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "D-25, 1st Floor, Info City-2, Sector - 33",
                "addressLocality": "Gurugram",
                "postalCode": "122001",
                "addressRegion": "Haryana",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "enquiry.esi@euroasiasci.com"
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "inspection.esi@euroasiasci.com",
                  "description": "Inspection Services"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/euroasiasci/posts/?feedView=all"
              ],
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                  "name": "ISO 17025 Certification",
                "description": "International standard for testing and calibration laboratories"
              },
              "serviceType": [
                "Laboratory Testing Services",
                "Quality Testing",
                "Inspection Services",
                "Certification Services",
                "Audit Services"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "knowsAbout": [
                "Food Testing",
                "Consumer Product Testing",
                "Cosmetics Testing",
                "Pharmaceutical Testing",
                "Quality Assurance",
                "Safety Testing",
                "Compliance Testing"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}

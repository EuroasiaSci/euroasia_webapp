import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EUROASIA - Professional Lab Testing Services | Quality Testing & Certification",
    template: "%s | EUROASIA Lab Testing Services"
  },
  description: "EUROASIA provides comprehensive laboratory testing services across multiple industries including Food & Feed, Consumer Products, Cosmetics, and Pharmaceutical. ISO 17025 certified with 99.9% accuracy rate.",
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
    url: 'https://euroasia.com',
    siteName: 'EUROASIA Lab Testing Services',
    title: 'EUROASIA - Professional Lab Testing Services | Quality Testing & Certification',
    description: 'EUROASIA provides comprehensive laboratory testing services across multiple industries including Food & Feed, Consumer Products, Cosmetics, and Pharmaceutical. ISO 17025 certified with 99.9% accuracy rate.',
    images: [
      {
        url: '/images/euroasia_logo-removebg.png',
        width: 1200,
        height: 630,
        alt: 'EUROASIA Lab Testing Services Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EUROASIA - Professional Lab Testing Services',
    description: 'Comprehensive laboratory testing services across multiple industries. ISO 17025 certified with 99.9% accuracy rate.',
    images: ['/images/euroasia_logo-removebg.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://euroasia.com',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
              "url": "https://euroasia.com",
              "logo": "https://euroasia.com/images/euroasia_logo-removebg.png",
              "description": "EUROASIA provides comprehensive laboratory testing services across multiple industries including Food & Feed, Consumer Products, Cosmetics, and Pharmaceutical. ISO 17025 certified with 99.9% accuracy rate.",
              "foundingDate": "2022",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Park, Industrial Area",
                "addressLocality": "Mumbai",
                "postalCode": "400001",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXX-XXXXXX",
                "contactType": "customer service",
                "email": "info@euroasia.com"
              },
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

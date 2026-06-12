import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CAD Engine | Engineering, BIM & CAD Design Solutions",
    template: "%s | CAD Engine"
  },
  description: "CAD Engine is a premier global engineering, BIM modeling, CAD drafting, and digital construction technology consulting firm serving Architecture, Engineering, Infrastructure, and Manufacturing sectors.",
  keywords: [
    "BIM Consulting",
    "CAD Drafting",
    "Digital Twin",
    "Engineering Consulting",
    "Autodesk Training",
    "Revit Coordination",
    "Dubai BIM Services",
    "Structural Engineering",
    "MEP Engineering"
  ],
  authors: [{ name: "CAD Engine" }],
  creator: "CAD Engine",
  metadataBase: new URL("https://cadengine.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cadengine.com",
    title: "CAD Engine | Engineering, BIM & CAD Design Solutions",
    description: "Enterprise-grade digital construction modeling, CAD drafting coordination, and technical consulting solutions.",
    siteName: "CAD Engine",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "CAD Engine Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CAD Engine | Engineering & Digital Construction",
    description: "Enterprise-grade digital construction modeling, CAD drafting coordination, and technical consulting solutions.",
    images: ["/logo.jpeg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.jpeg"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CAD Engine",
  "url": "https://cadengine.com",
  "logo": "https://cadengine.com/logo.jpeg",
  "description": "CAD Engine is a leading engineering, BIM, CAD, and design technology consulting company.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-4-123-4567",
    "contactType": "sales",
    "areaServed": "Global",
    "availableLanguage": ["en", "ar"]
  },
  "sameAs": [
    "https://linkedin.com/company/cadengine",
    "https://twitter.com/cadengine",
    "https://facebook.com/cadengine",
    "https://instagram.com/cadengine"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        {/* Main wrapper to account for fixed header spacing */}
        <main className="flex-grow pt-[72px] md:pt-[80px] lg:pt-[96px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}



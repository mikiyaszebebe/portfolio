import type { Metadata } from "next";

// Copy
import { ThemeProvider } from "@/components/theme-provider"
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

const siteUrl = "https://mikile.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikiyas Zenebe | Full-Stack & AI Developer",
    template: "%s | Mikiyas Zenebe",
  },
  description:
    "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions for your next project.",
  keywords: [
    "Mikiyas Zenebe",
    "Full-Stack Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "Python Developer",
    "Software Engineer",
    "React Developer",
    "Web Developer",
    "Portfolio",
    "mikile.tech",
  ],
  authors: [{ name: "Mikiyas Zenebe", url: siteUrl }],
  creator: "Mikiyas Zenebe",
  publisher: "Mikiyas Zenebe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mikiyas Zenebe Portfolio",
    title: "Mikiyas Zenebe | Full-Stack & AI Developer",
    description:
      "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions.",
    images: [
      {
        url: "/photo_2026-01-23_02-11-59.jpg",
        width: 1200,
        height: 630,
        alt: "Mikiyas Zenebe - Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas Zenebe | Full-Stack & AI Developer",
    description:
      "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise.",
    images: ["/photo_2026-01-23_02-11-59.jpg"],
    creator: "@mikiyaszebebe",
  },
  icons: {
    icon: "/mikiyas.jpg",
    shortcut: "/mikiyas.jpg",
    apple: "/mikiyas.jpg",
  },
  verification: {
    // Replace with the actual token from Google Search Console before deployment
    google: "google-site-verification-token",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Mikiyas Zenebe",
      url: siteUrl,
      sameAs: [
        "https://www.linkedin.com/in/mikiyas-zenebe",
        "https://github.com/mikiyaszebebe",
      ],
      jobTitle: "Full-Stack & AI Developer",
      knowsAbout: [
        "Next.js",
        "React",
        "Python",
        "Machine Learning",
        "Artificial Intelligence",
        "PyTorch",
        "HuggingFace",
        "Web Development",
      ],
      image: `${siteUrl}/photo_2026-01-23_02-11-59.jpg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mikiyas Zenebe Portfolio",
      description:
        "Professional portfolio of Mikiyas Zenebe — Full-Stack & AI Developer specializing in Next.js, Python, and innovative tech solutions.",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

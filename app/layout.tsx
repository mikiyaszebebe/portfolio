import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikiyas Zenebe | AI Engineer & Founder",
  description:
    "Portfolio of Mikiyas Zenebe, AI engineer and founder building AI systems, LLM products, computer vision, and low-resource NLP.",
  metadataBase: new URL("https://mikile.tech"),
  keywords: [
    "Mikiyas Zenebe",
    "AI Engineer",
    "Python Developer",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Next.js",
    "portfolio",
    "mikilezen",
  ],
  authors: [{ name: "Mikiyas Zenebe", url: "https://github.com/mikilezen" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: "https://mikile.tech",
    title: "Mikiyas Zenebe | AI Engineer & Founder",
    description:
      "Portfolio of Mikiyas Zenebe, AI engineer and founder building AI systems, LLM products, computer vision, and low-resource NLP.",
    siteName: "Mikiyas Zenebe Portfolio",
    images: [
      {
        url: "/Screenshot 2026-01-23 020926.png",
        width: 1200,
        height: 630,
        alt: "Mikiyas Zenebe portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas Zenebe | AI Engineer & Founder",
    description:
      "Portfolio of Mikiyas Zenebe, AI engineer and founder building AI systems, LLM products, computer vision, and low-resource NLP.",
    images: ["/Screenshot 2026-01-23 020926.png"],
  },
  icons: {
    icon: "/Screenshot 2026-01-23 020926.png",
    shortcut: "/Screenshot 2026-01-23 020926.png",
  },
  alternates: {
    canonical: "https://mikile.tech",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="bg-[#0d0d0f] text-[#f4f1e8] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* {children} */}
      </body>
    </html>
  );
}

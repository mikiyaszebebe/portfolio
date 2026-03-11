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

export const metadata: Metadata = {
  title: "Mikiyas Zenebe | AI Engineer & Python Developer",
  description:
    "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions for your next project.",
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
    title: "Mikiyas Zenebe | AI Engineer & Python Developer",
    description:
      "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions for your next project.",
    siteName: "Mikiyas Zenebe Portfolio",
    images: [
      {
        url: "/mikiyas (1).jpg",
        width: 1200,
        height: 630,
        alt: "Mikiyas Zenebe Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas Zenebe | AI Engineer & Python Developer",
    description:
      "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions for your next project.",
    images: ["/mikiyas (1).jpg"],
  },
  icons: {
    icon: "/mikiyas (1).jpg",
    shortcut: "/mikiyas (1).jpg",
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
        {/* {children} */}
      </body>
    </html>
  );
}

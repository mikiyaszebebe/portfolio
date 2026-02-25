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
  metadataBase: new URL("https://mikile.tech"),
  title: "Mikiyas Zenebe | AI Engineer Portfolio",
  description:
    "Explore Mikiyas Zenebe's AI engineer portfolio featuring computer vision, NLP, and LLM projects, research, certifications, and competitive programming achievements.",
  icons: {
    icon: "/mikiyas (1).jpg",
    shortcut: "/mikiyas (1).jpg",
  },
  openGraph: {
    title: "Mikiyas Zenebe | AI Engineer Portfolio",
    description:
      "AI projects in computer vision, NLP, and LLM systems, plus research, certificates, and ICPC participation.",
    url: "https://mikile.tech",
    siteName: "Mikiyas Zenebe Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/-2147483648_-210083.jpg",
        width: 1200,
        height: 630,
        alt: "Mikiyas Zenebe - AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas Zenebe | AI Engineer Portfolio",
    description:
      "AI projects, research, certifications, and ICPC participation by Mikiyas Zenebe.",
    images: ["/-2147483648_-210083.jpg"],
  },
};
export const icons = {
  icon: "/unnamed (1).jpg",
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

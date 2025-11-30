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
title: "Mikiyas Zenebe | Full-Stack Developer & AI Enthusiast Portfolio",

description: "Explore Mikiyas Zenebe's professional portfolio showcasing web apps, AI projects, and software development expertise. Specializing in Next.js, Python, and innovative tech solutions for your next project.",

icons: {
    icon: "/mikiyas (1).jpg",
    shortcut: "/mikiyas (1).jpg",
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

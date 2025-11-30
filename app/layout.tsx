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
  title: "Mikiyas Zenebe Portfolio",
  description: "Welcome to Mikiyas Zenebe's professional portfolio website. Explore my projects, skills, and experience in software development and technology. Discover how I can contribute to your next big idea.  Let's build something amazing together!",
};
export const icons = {
  icon: "/images (1).png",
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

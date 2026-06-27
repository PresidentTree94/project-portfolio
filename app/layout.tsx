import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "remixicon/fonts/remixicon.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"]
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PresidentTree94's Project Portfolio",
  description: "A website detailing developer skills, education, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${firaCode.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <div className="bg-background/90 absolute inset-0"></div>
        <Navbar />
        {children}
        <footer className="bg-background/80 border-t border-border/40 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            <p className="text-sm">&copy; 2026 PresidentTree94</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/karly-sams-015889347/" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><i className="ri-linkedin-box-line text-xl"></i></a>
              <a href="https://github.com/PresidentTree94" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><i className="ri-github-line text-xl"></i></a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

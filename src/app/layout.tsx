import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coach Julio Diaz",
  description:
    "Training plans and coaching—educational content, not medical advice.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-neutral-200 flex flex-col`}
      >
        {/* Page content */}
        <div className="flex-1">{children}</div>

        {/* Single global footer */}
        <Footer brand="Coach Julio Diaz" />
      </body>
    </html>
  );
}

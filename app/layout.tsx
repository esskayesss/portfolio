import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const protoMono = localFont({
  src: "./fonts/ProtoMono.woff2",
  variable: "--font-proto-mono",
  weight: "400",
})

export const metadata: Metadata = {
  title: "esskayesss.",
  description: "saurabh sharma's personal website.",
  keywords: [
    "Saurabh",  "Saurabh Sharma", "esskayesss", "esskayesss_", 
    "SWE", "Portfolio", "Projects", "Technical Blog", "Programming",
  ],
  metadataBase: new URL("https://esskayesss.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark-mode`}>
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} ${protoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

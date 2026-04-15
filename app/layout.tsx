import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import EmailSignupCard from "./components/EmailSignupCard";
import JsonLd from "./components/JsonLd";
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
  title:
    "Alex Cipher | EVM Security Auditor | Smart Contract Audits & DeFi Security",
  description:
    "Smart contract security audits for EVM protocols. Specialized in DeFi and gambling dApp security. Experienced bug bounty hunter providing comprehensive security consultations for Web3 projects.",
  keywords:
    "smart contract audit, EVM security, DeFi security, Web3 auditor, solidity audit, security consultant, blockchain auditor",
  authors: [{ name: "Alex Cipher" }],
  creator: "Alex Cipher",
  publisher: "Alex Cipher",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexcipher.xyz",
    title: "Alex Cipher | EVM Security Auditor",
    description:
      "Smart contract security audits for EVM protocols. Specialized in DeFi and gambling dApp security.",
    siteName: "Alex Cipher",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alex Cipher | EVM Security Auditor",
    description: "Smart contract security audits for DeFi and Web3 projects",
    creator: "@alexcipher",
  },

  alternates: {
    canonical: "https://alexcipher.xyz",
  },

  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Alex Cipher",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <EmailSignupCard />
      </body>
    </html>
  );
}

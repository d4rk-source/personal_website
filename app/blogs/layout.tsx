import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Alex Cipher | Smart Contract Security Articles",
  description:
    "Read in-depth articles about smart contract security, Web3 auditing best practices, DeFi security, and blockchain security insights from Alex Cipher.",
  keywords:
    "smart contract blog, Web3 security, DeFi security, blockchain auditing, security articles, solidity security",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/blogs",
    title: "Blog | Alex Cipher",
    description: "Smart contract security articles and Web3 auditing insights",
    images: [
      {
        url: "https://alexcipher.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Cipher Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Alex Cipher",
    description: "Smart contract security articles and Web3 auditing insights",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

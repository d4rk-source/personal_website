import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Tips Newsletter | Smart Contract Security Insights",
  description:
    "Subscribe to monthly smart contract security tips, real audit lessons, and practical Web3 risk prevention guidance.",
  keywords:
    "security tips newsletter, smart contract security newsletter, web3 security tips, defi security insights, blockchain audit lessons",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/security-tips-newsletter",
    title: "Security Tips Newsletter | Smart Contract Security Insights",
    description:
      "Get practical smart contract security tips, audit lessons, and Web3 risk prevention insights in your inbox.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Tips Newsletter",
    description: "Monthly security tips and audit lessons for Web3 builders.",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/security-tips-newsletter",
  },
};

export default function SecurityTipsNewsletterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

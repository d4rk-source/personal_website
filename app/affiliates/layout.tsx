import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program | Alex Cipher | Earn Commission on Referrals",
  description:
    "Join the Alex Cipher affiliate program and earn commissions by referring Web3 projects for smart contract security audits. Apply now and grow your revenue.",
  keywords:
    "affiliate program, referral program, smart contract audits, commission, Web3 partnerships",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/affiliates",
    title: "Affiliate Program | Alex Cipher",
    description: "Join our affiliate program and earn commissions on referrals",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Program | Alex Cipher",
    description: "Join our affiliate program and earn commissions",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/affiliates",
  },
};

export default function AffiliatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

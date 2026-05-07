import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alex Cipher | Request a Security Audit",
  description:
    "Get in touch with Alex Cipher to discuss your gambling dApp and GameFi security audit needs, or Web3 gaming security services.",
  keywords:
    "contact, smart contract audit inquiry, security consultation, gambling dApp security, GameFi security, Web3 gaming",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/contact",
    title: "Contact | Alex Cipher",
    description:
      "Request a smart contract security audit or security consultation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Alex Cipher",
    description: "Request a smart contract security audit",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

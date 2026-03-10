import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Audit Readiness & Competition Prep | Alex Cipher",
  description:
    "Audit readiness service for smart contracts before formal audits, contests, and bug bounties. Identify and fix vulnerabilities early to improve outcomes and reduce rework.",
  keywords:
    "audit readiness service, smart contract audit readiness, pre audit smart contract review, audit competition prep, bug bounty prep for smart contracts, web3 pre-audit security review",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/audit-readiness-competition-prep",
    title: "Audit Readiness & Competition Prep | Alex Cipher",
    description:
      "Pre-audit vulnerability reduction and contest-focused hardening for Web3 protocols.",
    images: [
      {
        url: "https://alexcipher.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Audit Readiness and Competition Preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit Readiness & Competition Prep | Alex Cipher",
    description:
      "Prepare your protocol for stronger audit and bug bounty outcomes.",
  },
  alternates: {
    canonical:
      "https://alexcipher.xyz/services/audit-readiness-competition-prep",
  },
};

const deliverables = [
  {
    title: "Pre-Audit Vulnerability Scanning",
    description:
      "Identify security issues before formal auditors review your codebase.",
  },
  {
    title: "Bug Bounty Preparation",
    description:
      "Fortify contracts against common attack vectors before opening your bounty program.",
  },
  {
    title: "Contest Optimization",
    description:
      "Prioritize practical fixes and hardening steps that improve audit competition outcomes.",
  },
  {
    title: "Code Review & Fixes",
    description:
      "Guided remediation support to resolve identified issues with security-first implementation.",
  },
  {
    title: "Audit Timing Consultation",
    description:
      "Strategic advice on when to start official audits for best results and team readiness.",
  },
];

const methodology = [
  {
    title: "Vulnerability Scan",
    description:
      "Quick automated scan to identify common issues early, reducing avoidable audit friction.",
  },
  {
    title: "Code Quality Check",
    description:
      "Review documentation quality, test coverage, and code organization against auditor expectations.",
  },
  {
    title: "Priority Issue List",
    description:
      "Rank findings by impact so your team knows exactly what to fix before formal submission.",
  },
  {
    title: "Competition Strategy",
    description:
      "Hardening guidance for contests, reward-structure alignment, and timeline optimization.",
  },
  {
    title: "Fix Verification",
    description:
      "Confirm implemented fixes are complete and avoid introducing new vulnerabilities.",
  },
];

const pricingPlans = [
  {
    name: "Pre-Bug Bounty Prep",
    price: "$500–$2K",
    description:
      "Flat rate based on repo size and effort (e.g., monorepo setup, NatSpec comments, basic tooling). Bundle free with a Smart Contract Audit.",
  },
];

const pricingNotes = [
  "Includes pre-audit vulnerability scanning, bug bounty preparation, contest optimization, code review with fixes, and audit timing consultation.",
  "Primary goal: maximize your success in audit competitions and bug bounty programs by fixing issues before submission.",
  "Bundle this service free with a Smart Contract Audit for added value.",
];

const seoKeywords = [
  "smart contract audit readiness",
  "pre-audit smart contract review",
  "audit competition prep",
  "bug bounty prep for protocols",
  "web3 audit preparation service",
  "security hardening before audit",
];

const faqItems = [
  {
    question: "What is smart contract audit readiness?",
    answer:
      "Smart contract audit readiness is a pre-audit security review that finds and prioritizes vulnerabilities before your official audit or contest begins.",
  },
  {
    question: "How does audit competition prep help?",
    answer:
      "Competition prep focuses your team on high-impact fixes, improves overall code quality, and reduces avoidable findings that can hurt final audit outcomes.",
  },
  {
    question: "How is pre-audit review pricing calculated?",
    answer:
      "Pricing is a flat $500–$2K based on repo size and effort. Final rate is confirmed during the scoping phase.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Audit Readiness and Competition Preparation",
      provider: {
        "@type": "Person",
        name: "Alex Cipher",
      },
      areaServed: "Worldwide",
      serviceType: "Pre-Audit Smart Contract Security Review",
      url: "https://alexcipher.xyz/services/audit-readiness-competition-prep",
      description:
        "Pre-audit security service focused on vulnerability reduction before formal audits and contests.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function AuditReadinessCompetitionPrepPage() {
  return (
    <ServiceLandingPage
      eyebrow="Service"
      title="Audit Readiness & Competition Prep"
      description="Prepare your protocol for competitive audits and bug bounties with fewer surprises and stronger first-pass outcomes."
      summary="This service identifies and eliminates vulnerabilities before official audit submission, helping improve your chances of a successful security review."
      preselectedService="Audit Readiness & Competition Prep"
      idealFor={[
        "Teams planning to enter audit contests and wanting stronger first-round signal",
        "Protocols preparing a public bug bounty and aiming to reduce avoidable findings",
        "Founders who want to lower remediation churn before formal third-party audits",
        "Engineering teams that need a prioritized fix plan under tight launch timelines",
      ]}
      deliverables={deliverables}
      methodology={methodology}
      pricingPlans={pricingPlans}
      pricingNotes={pricingNotes}
      seoKeywords={seoKeywords}
      faqItems={faqItems}
      jsonLd={jsonLd}
    />
  );
}

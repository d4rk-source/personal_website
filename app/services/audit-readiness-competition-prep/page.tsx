import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Pre-Audit Smart Contract Review Service | Alex Cipher",
  description:
    "Pre-audit smart contract review service before formal audits, contests, and bug bounties. Reduce avoidable findings, improve submission quality, and increase audit contest success odds.",
  keywords:
    "pre audit smart contract review service, smart contract audit readiness service, audit contest prep for defi protocol, code4rena preparation service, bug bounty readiness smart contracts, web3 pre-audit security review checklist",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/audit-readiness-competition-prep",
    title: "Pre-Audit Smart Contract Review Service | Alex Cipher",
    description:
      "Pre-audit vulnerability reduction and contest-focused hardening for Web3 protocols and DeFi teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Audit Smart Contract Review Service | Alex Cipher",
    description:
      "Prepare your protocol for stronger audit contest and bug bounty outcomes.",
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
    title: "Findings Report Generation",
    description:
      "Generate a concise report of vulnerabilities found (if any), with severity and clear remediation notes.",
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

const faqItems = [
  {
    question: "What is a pre-audit smart contract review service?",
    answer:
      "Smart contract audit readiness is a pre-audit security review that finds and prioritizes vulnerabilities before your official audit or contest begins.",
  },
  {
    question: "How does audit contest prep for a DeFi protocol help?",
    answer:
      "Competition prep focuses your team on high-impact fixes, improves overall code quality, and reduces avoidable findings that can hurt final audit outcomes.",
  },
  {
    question: "Do you offer Code4rena preparation service support?",
    answer:
      "Yes. This service supports contest-focused hardening workflows similar to Code4rena preparation, including vulnerability cleanup, quality checks, and prioritized remediation before submission.",
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
      title="Pre-Audit Smart Contract Review & Competition Prep"
      description="Prepare your protocol for competitive audits and bug bounties with fewer surprises, fewer avoidable findings, and stronger first-pass outcomes."
      summary="This service identifies and eliminates vulnerabilities before official audit submission, helping improve your chances of a successful security review."
      preselectedService="Audit Readiness & Competition Prep"
      comparisonItems={[
        {
          title: "Best fit",
          description:
            "Teams that want a pre-audit smart contract review service before a formal audit, Code4rena-style contest, or bug bounty launch.",
        },
        {
          title: "Typical timeline",
          description:
            "This is usually the fastest engagement because the goal is to remove avoidable issues and improve submission quality before the main review starts.",
        },
        {
          title: "Service cost drivers",
          description:
            "Pricing is mostly shaped by repo size, cleanup effort, documentation quality, and how much hands-on remediation guidance the team wants.",
        },
      ]}
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
      faqItems={faqItems}
      jsonLd={jsonLd}
    />
  );
}

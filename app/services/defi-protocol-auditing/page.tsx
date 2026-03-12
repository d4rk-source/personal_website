import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "DeFi Protocol Smart Contract Audits | Alex Cipher",
  description:
    "DeFi protocol audit service for lending, staking, DEX, vault, and liquidity contracts. Reduce exploit risk with end-to-end EVM smart contract security auditing.",
  keywords:
    "defi protocol audit, lending protocol smart contract audit, staking smart contract audit, dex smart contract security audit, vault strategy contract audit, liquidity pool contract audit, EVM security review",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/defi-protocol-auditing",
    title: "DeFi Protocol Smart Contract Audits | Alex Cipher",
    description:
      "Comprehensive DeFi smart contract audits for lending, staking, swaps, and vault systems.",
    images: [
      {
        url: "https://alexcipher.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DeFi Smart Contract Auditing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Protocol Smart Contract Audits | Alex Cipher",
    description:
      "Secure your lending, staking, DEX, and vault contracts before deployment.",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/services/defi-protocol-auditing",
  },
};

const deliverables = [
  {
    title: "Static Analysis",
    description:
      "In-depth code review and automated security scanning for common and protocol-specific weakness patterns.",
  },
  {
    title: "Dynamic Testing",
    description:
      "Functional and gas testing across deposits, withdrawals, rebalancing, swapping, and liquidation flows.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Identification of critical DeFi risks including privilege misuse, accounting errors, and exploit pathways.",
  },
  {
    title: "Detailed Report",
    description:
      "Comprehensive findings report with severity ratings and practical remediation guidance for your engineering team.",
  },
  {
    title: "Post-Audit Support",
    description:
      "Support during fixes and follow-up checks to improve confidence before production deployment.",
  },
];

const methodology = [
  {
    title: "Initial Review",
    description:
      "Comprehensive architecture and business logic review to map protocol-critical trust and value flows.",
  },
  {
    title: "Automated Analysis",
    description:
      "Run Slither, Mythril, and custom scripts to identify broad vulnerability classes and anti-patterns.",
  },
  {
    title: "Manual Testing",
    description:
      "Deep manual analysis focused on state consistency, edge-case logic, and complex composability behavior.",
  },
  {
    title: "Exploitation Attempts",
    description:
      "Attempt practical exploit paths in test environments to validate issue severity and potential impact.",
  },
  {
    title: "Report Generation",
    description:
      "Deliver a clear report with reproducible findings and prioritized remediation recommendations.",
  },
  {
    title: "Post-Audit Support",
    description:
      "Review your fixes, answer implementation questions, and help finalize secure release readiness.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2K–$5K",
    description:
      "For protocols under 1K LOC with simpler DeFi logic. Includes full audit review, report, and post-audit support.",
  },
  {
    name: "Standard",
    price: "$5K–$15K",
    description:
      "For codebases of 1–3K LOC with moderate complexity. Covers the full audit scope, report, and remediation advice.",
  },
  {
    name: "Premium",
    price: "$15K+",
    description:
      "For complex, multi-contract systems. Full-depth engagement covering testing, comprehensive report, and remediation guidance.",
    badge: "FULL SCOPE",
  },
];

const pricingNotes = [
  "All audits include static analysis, dynamic testing, vulnerability assessment, comprehensive reporting, and remediation recommendations.",
  "Fixed tiers scope full deliverables — no per-LOC surprises. Final tier is confirmed during scoping.",
];

const faqItems = [
  {
    question: "What is included in a DeFi protocol audit?",
    answer:
      "A DeFi protocol audit includes static analysis, dynamic testing, manual review of accounting and privilege logic, exploit validation in test environments, and a detailed remediation report.",
  },
  {
    question: "Do you audit lending, staking, and DEX contracts?",
    answer:
      "Yes. This service is designed for lending markets, staking systems, DEX logic, vault strategies, and liquidity mechanisms running on EVM chains.",
  },
  {
    question: "How much does a DeFi smart contract audit cost?",
    answer:
      "Pricing uses fixed tiers by complexity: Starter ($2K–$5K for <1K LOC simple protocols), Standard ($5K–$15K for 1–3K LOC), and Premium ($15K+ for complex multi-contract systems). Final tier is confirmed during scoping.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "DeFi Protocol Smart Contract Auditing",
      provider: {
        "@type": "Person",
        name: "Alex Cipher",
      },
      areaServed: "Worldwide",
      serviceType: "Smart Contract Security Audit",
      url: "https://alexcipher.xyz/services/defi-protocol-auditing",
      description:
        "Security-focused DeFi protocol audit service for lending, staking, DEX, and vault systems.",
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

export default function DefiProtocolAuditingPage() {
  return (
    <ServiceLandingPage
      eyebrow="Service"
      title="Smart Contract Auditing for DeFi Protocols"
      description="Harden your lending, staking, DEX, and vault infrastructure before attackers do. This service targets complex value-moving systems where small bugs can become large losses."
      summary="Whether you're launching a DeFi protocol for lending, staking, or swapping, this audit process helps ensure your contracts are secure, efficient, and ready for production."
      preselectedService="Smart Contract Auditing"
      idealFor={[
        "Lending markets, staking systems, and DEXs with high TVL or rapid growth plans",
        "Teams introducing upgrades, integrations, or new modules with cross-contract dependencies",
        "Founders preparing for token generation events, listings, or institutional diligence",
        "Protocols needing independent security evidence to strengthen user and investor confidence",
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

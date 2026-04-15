import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title:
    "DeFi Protocol Audit Service for Lending, Staking, and DEXs | Alex Cipher",
  description:
    "Pre-launch DeFi protocol audit service for lending, staking, DEX, vault, and liquidity contracts. Get a practical security review, clear remediation guidance, and stronger launch readiness.",
  keywords:
    "defi protocol audit service, pre launch defi audit, lending protocol audit checklist, staking contract security review, dex smart contract audit cost, vault strategy contract audit, liquidity pool smart contract review, EVM security review service",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/defi-protocol-auditing",
    title:
      "DeFi Protocol Audit Service for Lending, Staking, and DEXs | Alex Cipher",
    description:
      "Pre-launch DeFi security audits for lending, staking, DEX, and vault systems with practical remediation guidance.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DeFi Protocol Audit Service for Lending, Staking, and DEXs | Alex Cipher",
    description:
      "Secure lending, staking, DEX, and vault contracts before launch with a focused DeFi audit service.",
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
    question: "What is included in a pre-launch DeFi protocol audit service?",
    answer:
      "A DeFi protocol audit includes static analysis, dynamic testing, manual review of accounting and privilege logic, exploit validation in test environments, and a detailed remediation report.",
  },
  {
    question:
      "Do you provide lending, staking, and DEX contract security reviews?",
    answer:
      "Yes. This service is designed for lending markets, staking systems, DEX logic, vault strategies, and liquidity mechanisms running on EVM chains.",
  },
  {
    question: "How much does a DEX smart contract audit cost?",
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
      title="DeFi Protocol Audit Service for Lending, Staking, and DEX Contracts"
      description="Harden your lending, staking, DEX, and vault infrastructure before attackers do. This pre-launch DeFi audit service focuses on real exploit paths in high-value systems."
      summary="Whether you're launching a DeFi protocol for lending, staking, or swapping, this audit process helps ensure your contracts are secure, efficient, and ready for production."
      preselectedService="Smart Contract Auditing"
      comparisonItems={[
        {
          title: "Best fit",
          description:
            "Teams launching lending markets, staking systems, DEXs, vaults, or liquidity-heavy contracts that need a focused DeFi protocol audit service.",
        },
        {
          title: "Typical timeline",
          description:
            "Smaller scopes can move quickly, while multi-contract systems with cross-protocol dependencies usually need a longer audit window and more review cycles.",
        },
        {
          title: "Service cost drivers",
          description:
            "Cost depends on contract count, accounting complexity, privilege model design, and how much remediation support you need after findings are delivered.",
        },
      ]}
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

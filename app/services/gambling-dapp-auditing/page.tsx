import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Provably Fair Smart Contract Audit for Crypto Casinos | Alex Cipher",
  description:
    "Provably fair smart contract audit service for crypto casinos, betting protocols, and on-chain games. Secure bankroll logic, payout flows, Chainlink VRF integrations, and user funds before launch.",
  keywords:
    "provably fair smart contract audit, crypto casino bankroll security audit, betting protocol payout logic audit, chainlink vrf gambling audit, on-chain casino smart contract review, web3 gambling security audit service, sports betting smart contract security review",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/gambling-dapp-auditing",
    title:
      "Provably Fair Smart Contract Audit for Crypto Casinos | Alex Cipher",
    description:
      "Security audits for crypto gambling products with a focus on provably fair logic, payouts, and bankroll safety.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Provably Fair Smart Contract Audit for Crypto Casinos | Alex Cipher",
    description:
      "Protect bankroll, payout, and randomness logic before mainnet launch.",
  },
  alternates: {
    canonical: "https://alexcipher.xyz/services/gambling-dapp-auditing",
  },
};

const deliverables = [
  {
    title: "Static Analysis",
    description:
      "In-depth code review and automated security scanning to catch vulnerable patterns before launch.",
  },
  {
    title: "Dynamic Testing",
    description:
      "Functional testing and gas optimization checks across gameplay, payouts, and settlement flows.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Identification of exploitable bugs, security risks, and logic weaknesses in high-value contract paths.",
  },
  {
    title: "Detailed Report",
    description:
      "Comprehensive findings with severity ratings, proof-of-concepts, and concrete remediation recommendations.",
  },
  {
    title: "Post-Audit Support",
    description:
      "Guidance while implementing fixes, plus verification support to confirm risk reduction before deployment.",
  },
];

const methodology = [
  {
    title: "Initial Review",
    description:
      "Comprehensive code walkthrough to understand architecture, business logic, and critical risk zones.",
  },
  {
    title: "Automated Analysis",
    description:
      "Use tools like Slither, Mythril, and custom scripts to detect common vulnerability classes.",
  },
  {
    title: "Manual Testing",
    description:
      "Deep manual analysis of access control, state transitions, edge cases, and game-specific logic.",
  },
  {
    title: "Exploitation Attempts",
    description:
      "Attempt real exploit scenarios in test environments to validate practical severity and impact.",
  },
  {
    title: "Report Generation",
    description:
      "Document every issue with reproducibility guidance and clear remediation steps for your developers.",
  },
  {
    title: "Post-Audit Support",
    description:
      "Review remediation patches, answer technical questions, and support secure release readiness.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2K–$5K",
    description:
      "For protocols under 1K LOC with simpler gambling logic. Includes full audit review, report, and post-audit support.",
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
    question: "What does a provably fair smart contract audit focus on?",
    answer:
      "A gambling dApp audit focuses on bankroll safety, payout correctness, game fairness logic, randomness integration, and privileged-role abuse risks. The goal is to prevent exploit paths that can drain funds or manipulate outcomes.",
  },
  {
    question: "How is a crypto casino bankroll security audit priced?",
    answer:
      "Pricing uses fixed tiers by complexity: Starter ($2K–$5K for <1K LOC), Standard ($5K–$15K for 1–3K LOC), and Premium ($15K+ for complex systems). Final tier is confirmed during the scoping phase.",
  },
  {
    question: "Do you audit Chainlink VRF and payout logic in gambling dApps?",
    answer:
      "Yes. Reviews include randomness integrations such as Chainlink VRF, payout and settlement paths, and exploitability under adversarial transaction conditions. Post-audit support includes fix verification before deployment.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Gambling dApp Smart Contract Auditing",
      provider: {
        "@type": "Person",
        name: "Alex Cipher",
      },
      areaServed: "Worldwide",
      serviceType: "Smart Contract Security Audit",
      url: "https://alexcipher.xyz/services/gambling-dapp-auditing",
      description:
        "Security-focused gambling dApp audit service for crypto casinos and betting protocols.",
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

export default function GamblingDappAuditingPage() {
  return (
    <ServiceLandingPage
      eyebrow="Service"
      title="Provably Fair Smart Contract Audits for Gambling dApps"
      description="Ship your gambling product with stronger security guarantees. This audit service is designed for payout-heavy systems where fairness, bankroll protection, and exploit resistance are mission critical."
      summary="Smart contract auditing is a comprehensive security review process that meticulously examines your blockchain code for vulnerabilities, inefficiencies, and potential exploits."
      preselectedService="Smart Contract Auditing"
      comparisonItems={[
        {
          title: "Best fit",
          description:
            "Crypto casinos, betting protocols, and on-chain games that need a provably fair smart contract audit with bankroll and payout review.",
        },
        {
          title: "Typical timeline",
          description:
            "Projects with tight payout logic can often be scoped quickly, but randomness, settlement, and treasury complexity usually extend review time.",
        },
        {
          title: "Service cost drivers",
          description:
            "Pricing is driven by bankroll exposure, VRF or commit-reveal design, transaction flow complexity, and the number of high-value edge cases to validate.",
        },
      ]}
      idealFor={[
        "On-chain casinos, prediction products, and betting protocols handling frequent user payouts",
        "Teams integrating randomness, settlement engines, treasury controls, and referral systems",
        "Projects preparing for launch, liquidity growth, or external audit publication",
        "Founders who want stronger trust signals for communities, partners, and investors",
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

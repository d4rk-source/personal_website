import type { Metadata } from "next";
import SaleBanner from "@/app/components/SaleBanner";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Fast Smart Contract Security Reviews | Alex Cipher",
  description:
    "Quick, practical smart contract security reviews for gambling dApps, GameFi mechanics, prediction markets, casinos, and sportsbooks. Catch vulnerabilities before launch at entry-level pricing.",
  keywords:
    "smart contract security review, fast smart contract audit, gambling dApp security, GameFi security, contract security review cost, EVM security review, Web3 contract audit, blockchain security review",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/fast-smart-contract-security-reviews",
    title: "Fast Smart Contract Security Reviews | Alex Cipher",
    description:
      "Practical smart contract security reviews designed to catch real vulnerabilities before they become costly problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Smart Contract Security Reviews | Alex Cipher",
    description:
      "Launch with confidence. Fast, affordable security reviews for Web3 projects of all types.",
  },
  alternates: {
    canonical:
      "https://alexcipher.xyz/services/fast-smart-contract-security-reviews",
  },
};

const deliverables = [
  {
    title: "Code Review",
    description:
      "Line-by-line analysis of your smart contract code for security issues, best practices, and potential vulnerabilities.",
  },
  {
    title: "Vulnerability Testing",
    description:
      "Functional testing and edge-case analysis to identify logic flaws and exploitation paths.",
  },
  {
    title: "Detailed Findings Report",
    description:
      "Clear report of all findings with severity levels, descriptions, and practical remediation recommendations.",
  },
  {
    title: "Follow-up Support",
    description:
      "Questions about findings and clarifications on recommended fixes. Help implementing security improvements.",
  },
];

const methodology = [
  {
    title: "Code Assessment",
    description:
      "Initial review of contract code structure, dependencies, and critical functionality.",
  },
  {
    title: "Vulnerability Research",
    description:
      "Systematic analysis for common smart contract vulnerabilities and protocol-specific attack vectors.",
  },
  {
    title: "Manual Testing",
    description:
      "Hands-on testing of contract behavior, edge cases, and state transitions.",
  },
  {
    title: "Report & Recommendations",
    description:
      "Deliver findings with clear severity ratings and actionable remediation steps.",
  },
  {
    title: "Follow-up Clarification",
    description:
      "Answer questions about findings and provide guidance on implementing fixes.",
  },
];

const pricingPlans = [
  {
    name: "Quick Security Review",
    // raised starting price (old $50 -> new $250 so 80% off gives $50)
    price: "$250",
    description:
      "Fast analysis to identify critical vulnerabilities before deployment.",
  },
  {
    name: "Deep Security Review",
    // old $150 -> new $750
    price: "$750",
    description:
      "More thorough review of contract logic, access control, and edge cases.",
    badge: "POPULAR",
  },
  {
    name: "Full Audit Review",
    // old $300 -> new $1500
    price: "$1500",
    description:
      "Comprehensive multi-contract analysis with structured reporting.",
  },
];

const pricingNotes = [
  "Code review, vulnerability testing, detailed findings report, and follow-up support on questions or clarifications.",
  "100% after report delivery. Zero payment risk—pay only when you have the complete security report.",
  "Exact pricing confirmed during initial consultation based on codebase size and complexity.",
];

const faqItems = [
  {
    question: "What is included in a smart contract security review?",
    answer:
      "Code review, vulnerability testing, a detailed findings report with remediation recommendations, and follow-up support to clarify findings or discuss fixes.",
  },
  {
    question: "How long does a security review take?",
    answer:
      "Typically 3–7 days depending on code size and complexity. Exact timeline is provided after initial scoping.",
  },
  {
    question: "What types of contracts do you review?",
    answer:
      "Gambling dApps and GameFi mechanics (prediction markets, casinos, sportsbooks, gaming tokens), governance systems, and any other Web3 smart contracts deployed on EVM networks.",
  },
  {
    question: "How much does a smart contract security review cost?",
    answer:
      "Pricing depends on scope: Quick Security Review ($250), Deep Security Review ($750), and Full Audit Review ($1500). Exact pricing confirmed during consultation. Current promotional pricing may apply.",
  },
  {
    question: "When do I pay?",
    answer:
      "100% after I deliver the security report. Zero payment risk—no money due until you have the complete findings report in hand.",
  },
  {
    question: "Do you provide follow-up support?",
    answer:
      "Yes. After delivery, I'm available to clarify findings, answer questions about remediation steps, and provide guidance on implementing security improvements.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Fast Smart Contract Security Reviews",
      provider: {
        "@type": "Person",
        name: "Alex Cipher",
      },
      areaServed: "Worldwide",
      serviceType: "Smart Contract Security Review",
      url: "https://alexcipher.xyz/services/fast-smart-contract-security-reviews",
      description:
        "Quick, practical smart contract security reviews designed to catch real vulnerabilities before launch.",
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

export default function FastSmartContractSecurityReviewsPage() {
  return (
    <>
      <SaleBanner />
      <ServiceLandingPage
      eyebrow="Service"
      title="Fast Smart Contract Security Reviews"
      description="Launch safely. I provide quick, practical security reviews to catch real vulnerabilities in your smart contracts before they become expensive problems."
      summary="Get your smart contracts reviewed by an experienced security researcher. I'll identify vulnerabilities, provide clear recommendations, and help you launch with confidence—at entry-level pricing."
      preselectedService="Fast Smart Contract Security Reviews"
      comparisonItems={[
        {
          title: "Best fit",
          description:
            "Teams ready to launch gambling dApps, GameFi mechanics, prediction markets, casinos, sportsbooks, or any gaming Web3 project where security matters but you need fast turnaround and affordable pricing.",
        },
        {
          title: "Typical timeline",
          description:
            "3–7 days depending on code size. Quick turnaround so you can fix issues and move toward launch without long delays.",
        },
        {
          title: "What you get",
          description:
            "Practical findings focused on real security issues, clear remediation steps, and direct support to help you understand and address any vulnerabilities.",
        },
      ]}
      idealFor={[
        "Gambling dApps (prediction markets, casinos, sportsbooks) launching soon",
        "GameFi mechanics and gaming tokens needing security validation",
        "Gaming Web3 projects ready to secure their codebase before launch",
        "Teams wanting affordable security review without enterprise audit complexity",
        "Projects preparing for bug bounties, competitions, or early user launch",
      ]}
      deliverables={deliverables}
      methodology={methodology}
      pricingPlans={pricingPlans}
      pricingNotes={pricingNotes}
      faqItems={faqItems}
      jsonLd={jsonLd}
      sale={{
        name: "May Security Be Affordable",
        start: "2026-05-01T00:00:00.000Z",
        end: "2026-05-31T23:59:59.000Z",
        discount: 0.8,
      }}
      />
    </>
  );
}

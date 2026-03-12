import type { Metadata } from "next";
import ServiceLandingPage from "@/app/components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Protocol Security Strategy & Incident Response | Alex Cipher",
  description:
    "Protocol security strategy service with past audit analysis, roadmap planning, and post-incident response playbooks for DeFi and Web3 teams.",
  keywords:
    "protocol security strategy, web3 incident response plan, smart contract security consultation, DeFi security roadmap, post hack response plan crypto, smart contract incident response service",
  openGraph: {
    type: "website",
    url: "https://alexcipher.xyz/services/protocol-security-incident-response",
    title: "Protocol Security Strategy & Incident Response | Alex Cipher",
    description:
      "Security roadmaps and incident response planning tailored to your protocol.",
    images: [
      {
        url: "https://alexcipher.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Protocol Security Strategy and Incident Response",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocol Security Strategy & Incident Response | Alex Cipher",
    description:
      "Deep protocol analysis, security roadmap, and optional incident response strategy.",
  },
  alternates: {
    canonical:
      "https://alexcipher.xyz/services/protocol-security-incident-response",
  },
};

const deliverables = [
  {
    title: "Comprehensive Past Audit Analysis",
    description:
      "Review of previous audit reports to understand your protocol's security history and recurring risk patterns.",
  },
  {
    title: "Full Security Roadmap",
    description:
      "Strategic timing for competitions, bug bounty recommendations, audit frequency planning, and key milestones.",
  },
  {
    title: "Optional Post-Incident Response Strategy",
    description:
      "Step-by-step incident planning, communication protocols, and recovery procedures.",
  },
  {
    title: "Detailed Written Reports",
    description:
      "One or two tailored strategy documents depending on your selected package.",
  },
  {
    title: "Consultation Call Included",
    description:
      "Direct walkthrough of recommendations, implementation priorities, and follow-up support.",
  },
];

const methodology = [
  {
    title: "Protocol Deep Dive",
    description:
      "Analyze architecture, codebase, and past audits to build an evidence-based view of your security posture.",
  },
  {
    title: "Risk Assessment",
    description:
      "Evaluate attack surfaces, current vulnerabilities, and likely threat vectors for your protocol type.",
  },
  {
    title: "Strategy Development",
    description:
      "Create a practical roadmap covering audit timing, bug bounty structure, security cadence, and milestones.",
  },
  {
    title: "Incident Response Planning",
    description:
      "Development of emergency procedures, communication flows, key contacts, and recovery paths.",
  },
  {
    title: "Report Delivery",
    description:
      "Provide actionable strategy report(s) with recommendations, timelines, and implementation guidance.",
  },
  {
    title: "Consultation Call",
    description:
      "Walk through all recommendations, answer questions, and align priorities with your team.",
  },
];

const pricingPlans = [
  {
    name: "Pre-Incident Security Strategy",
    price: "€1,000",
    description:
      "Comprehensive analysis of past audits and full security roadmap with a consultation call.",
  },
  {
    name: "Post-Incident Response Strategy",
    price: "€1,500",
    description:
      "Complete incident response plan with procedures, communication protocols, and recovery strategy guidance.",
  },
  {
    name: "Complete Strategy Package",
    price: "€2,500",
    description:
      "Both reports together: pre-incident security strategy plus post-incident response planning with one consolidated engagement.",
    badge: "BEST VALUE",
  },
];

const pricingNotes = [
  "All packages include in-depth protocol research, review of past audit reports, tailored written deliverables, and a consultation call.",
  "Deliverables are tailored to your protocol's architecture, risk profile, and operational constraints.",
];

const faqItems = [
  {
    question: "What is a protocol security strategy service?",
    answer:
      "It is a structured security planning engagement that reviews your past audits, current risk profile, and growth plans to build a practical roadmap for audits, bounties, and hardening cycles.",
  },
  {
    question: "Do you provide an incident response plan for Web3 protocols?",
    answer:
      "Yes. You can choose a dedicated post-incident response strategy package or combine it with the security strategy package for full coverage.",
  },
  {
    question: "What deliverables are included in this consultation service?",
    answer:
      "Every package includes tailored written report deliverables and a consultation call to walk through priorities, timelines, and implementation guidance.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Protocol Security Strategy and Incident Response",
      provider: {
        "@type": "Person",
        name: "Alex Cipher",
      },
      areaServed: "Worldwide",
      serviceType: "Smart Contract Security Consultation",
      url: "https://alexcipher.xyz/services/protocol-security-incident-response",
      description:
        "Comprehensive security roadmap and incident response planning service for Web3 protocols.",
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

export default function ProtocolSecurityIncidentResponsePage() {
  return (
    <ServiceLandingPage
      eyebrow="Service"
      title="Protocol Security Strategy & Incident Response"
      description="Go beyond one-off fixes with a strategic security partnership built around your protocol's real risk profile and growth plans."
      summary="This service combines deep analysis, practical security planning, and optional post-incident strategy so your team can operate with clearer priorities and stronger resilience."
      preselectedService="Smart Contract Security Consultations"
      idealFor={[
        "Protocols with multiple past audits that need a consolidated long-term security direction",
        "Teams scaling TVL and requiring better timing around audits, bounties, and hardening cycles",
        "Founders who want a documented security strategy for stakeholders and internal execution",
        "Projects that need incident preparedness before a critical event forces reactive decisions",
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

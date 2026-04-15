export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alex Cipher",
    url: "https://alexcipher.xyz",
    description:
      "Smart contract security audits and DeFi security consulting for EVM protocols",
    image: "https://alexcipher.xyz/profile.jpg",
    sameAs: ["https://x.com/_Alex_Cipher", "https://github.com/d4rk-source"],
    contactPoint: {
      "@type": "ContactPoint",
      url: "https://alexcipher.xyz/contact",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
    founder: {
      "@type": "Person",
      name: "Alex Cipher",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Smart Contract Security Audits",
    description:
      "Comprehensive smart contract audits for EVM-based protocols, DeFi platforms, and gambling dApps",
    url: "https://alexcipher.xyz",
    image: "https://alexcipher.xyz/profile.jpg",
    areaServed: ["US", "GB", "DE", "CA", "AU", "SG", "HK", "JP", "Global"],
    priceRange: "$$",
    serviceType: "Security Audit Service",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://alexcipher.xyz",
    name: "Alex Cipher",
    description: "EVM Security Auditor | Smart Contract Audits & DeFi Security",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

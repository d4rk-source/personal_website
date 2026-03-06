export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alex Cipher",
    url: "https://alexcipher.xyz",
    description:
      "Smart contract security audits and DeFi security consulting for EVM protocols",
    image: "https://alexcipher.xyz/og-image.jpg",
    sameAs: ["https://twitter.com/alexcipher", "https://github.com/alexcipher"],
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
    image: "https://alexcipher.xyz/og-image.jpg",
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://alexcipher.xyz/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alexcipher.xyz",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://alexcipher.xyz/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://alexcipher.xyz/contact",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

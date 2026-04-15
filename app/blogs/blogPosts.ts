export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  readTime: string;
  category: string;
  description: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "importance-of-external-audits-web3",
    title: "The Importance of External Audits in Web3 Development",
    excerpt:
      "Why external security audits are critical for protocol success and investor confidence.",
    date: "January 30, 2026",
    publishedAt: "2026-01-30T00:00:00.000Z",
    readTime: "6 min read",
    category: "Auditing",
    description:
      "Why external security audits are critical for protocol success and investor confidence in Web3 development.",
  },
  {
    slug: "working-with-a-good-auditor",
    title: "What It Means to Work with a Good Auditor",
    excerpt:
      "Understanding the qualities, practices, and benefits of partnering with a professional security auditor for your Web3 project.",
    date: "March 1, 2026",
    publishedAt: "2026-03-01T00:00:00.000Z",
    readTime: "8 min read",
    category: "Best Practices",
    description:
      "Understanding the qualities, practices, and benefits of partnering with a professional security auditor for your Web3 project.",
  },
  {
    slug: "gambling-dapp-security-guide",
    title: "Key Steps for Gambling dApp Security",
    excerpt:
      "Essential security measures and best practices for building and auditing gambling decentralized applications.",
    date: "March 5, 2026",
    publishedAt: "2026-03-05T00:00:00.000Z",
    readTime: "10 min read",
    category: "Security",
    description:
      "Essential security measures and best practices for building and auditing gambling decentralized applications.",
  },
];

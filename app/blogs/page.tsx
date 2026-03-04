"use client";

import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Common Smart Contract Vulnerabilities and How to Prevent Them",
      excerpt:
        "Explore the most common security vulnerabilities found in smart contracts and learn best practices to prevent them.",
      date: "February 20, 2026",
      readTime: "8 min read",
      category: "Security",
    },
    {
      id: 2,
      title: "Gas Optimization Techniques for Ethereum Smart Contracts",
      excerpt:
        "Learn how to optimize your smart contracts for gas efficiency without sacrificing security.",
      date: "February 15, 2026",
      readTime: "10 min read",
      category: "Optimization",
    },
    {
      id: 3,
      title: "Understanding the CERC20 Standard and Its Implications",
      excerpt:
        "Deep dive into the CERC20 token standard and what developers need to know about implementation.",
      date: "February 10, 2026",
      readTime: "7 min read",
      category: "Standards",
    },
    {
      id: 4,
      title: "Access Control Patterns: Ensuring Authorized Function Calls",
      excerpt:
        "A comprehensive guide to implementing robust access control in your smart contracts.",
      date: "February 5, 2026",
      readTime: "9 min read",
      category: "Best Practices",
    },
    {
      id: 5,
      title: "The Importance of External Audits in Web3 Development",
      excerpt:
        "Why external security audits are critical for protocol success and investor confidence.",
      date: "January 30, 2026",
      readTime: "6 min read",
      category: "Auditing",
    },
    {
      id: 6,
      title: "Reentrancy Attacks: Understanding and Defending Against Them",
      excerpt:
        "Learn how reentrancy attacks work and the multiple patterns to defend against them.",
      date: "January 25, 2026",
      readTime: "11 min read",
      category: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
          >
            Alex Cipher
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            Security Insights & Web3 Knowledge
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            Explore articles on smart contract security, best practices, and
            insights from real-world audits.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold mb-4 line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer">
                {post.title}
              </h2>

              <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <time className="text-sm text-gray-500">{post.date}</time>
                <Link
                  href={`/blogs/${post.id}`}
                  className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

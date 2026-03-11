"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      slug: "importance-of-external-audits-web3",
      title: "The Importance of External Audits in Web3 Development",
      excerpt:
        "Why external security audits are critical for protocol success and investor confidence.",
      date: "January 30, 2026",
      readTime: "6 min read",
      category: "Auditing",
    },
    {
      id: 2,
      slug: "working-with-a-good-auditor",
      title: "What It Means to Work with a Good Auditor",
      excerpt:
        "Understanding the qualities, practices, and benefits of partnering with a professional security auditor for your Web3 project.",
      date: "March 1, 2026",
      readTime: "8 min read",
      category: "Best Practices",
    },
    {
      id: 3,
      slug: "gambling-dapp-security-guide",
      title: "Key Steps for Gambling dApp Security",
      excerpt:
        "Essential security measures and best practices for building and auditing gambling decentralized applications.",
      date: "March 5, 2026",
      readTime: "10 min read",
      category: "Security",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation redirectToHomeForSections />

      {/* Header */}
      <section className="px-4 py-12 md:py-24 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 md:mb-8">
            Security Insights & Web3 Knowledge
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
            Explore articles on smart contract security, best practices, and
            insights from real-world audits.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 pb-14 md:pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-gray-900 to-gray-950 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-blue-500/10"
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
                  href={`/blogs/${post.slug}`}
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

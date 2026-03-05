import Link from "next/link";
import { notFound } from "next/navigation";
import ExternalAuditsArticle from "./articles/ExternalAuditsArticle";
import WorkingWithAuditorArticle from "./articles/WorkingWithAuditorArticle";
import GamblingDappSecurityArticle from "./articles/GamblingDappSecurityArticle";

const blogData: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    category: string;
    component: React.ComponentType;
  }
> = {
  "importance-of-external-audits-web3": {
    title: "The Importance of External Audits in Web3 Development",
    date: "January 30, 2026",
    readTime: "6 min read",
    category: "Auditing",
    component: ExternalAuditsArticle,
  },
  "working-with-a-good-auditor": {
    title: "What It Means to Work with a Good Auditor",
    date: "March 1, 2026",
    readTime: "8 min read",
    category: "Best Practices",
    component: WorkingWithAuditorArticle,
  },
  "gambling-dapp-security-guide": {
    title: "Key Steps for Gambling dApp Security",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "Security",
    component: GamblingDappSecurityArticle,
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

  const ArticleComponent = blog.component;

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
            href="/blogs"
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
            Back to Blogs
          </Link>
        </div>
      </nav>

      {/* Article Header */}
      <article className="px-4 py-16 max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>
          <time className="text-gray-400">{blog.date}</time>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <ArticleComponent />
        </div>

        {/* Back to Blogs CTA */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
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
            Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "importance-of-external-audits-web3" },
    { slug: "working-with-a-good-auditor" },
    { slug: "gambling-dapp-security-guide" },
  ];
}

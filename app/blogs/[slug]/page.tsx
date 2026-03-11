import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/app/components/Navigation";
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
    description: string;
    component: React.ComponentType;
  }
> = {
  "importance-of-external-audits-web3": {
    title: "The Importance of External Audits in Web3 Development",
    date: "January 30, 2026",
    readTime: "6 min read",
    category: "Auditing",
    description:
      "Why external security audits are critical for protocol success and investor confidence in Web3 development.",
    component: ExternalAuditsArticle,
  },
  "working-with-a-good-auditor": {
    title: "What It Means to Work with a Good Auditor",
    date: "March 1, 2026",
    readTime: "8 min read",
    category: "Best Practices",
    description:
      "Understanding the qualities, practices, and benefits of partnering with a professional security auditor for your Web3 project.",
    component: WorkingWithAuditorArticle,
  },
  "gambling-dapp-security-guide": {
    title: "Key Steps for Gambling dApp Security",
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "Security",
    description:
      "Essential security measures and best practices for building and auditing gambling decentralized applications.",
    component: GamblingDappSecurityArticle,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return {
      title: "Article Not Found | Alex Cipher",
      description: "The article you're looking for could not be found.",
    };
  }

  const url = `https://alexcipher.xyz/blogs/${slug}`;

  return {
    title: `${blog.title} | Alex Cipher`,
    description: blog.description,
    keywords: `${blog.category}, smart contract, audit, security, Web3, ${blog.title.toLowerCase()}`,
    authors: [{ name: "Alex Cipher" }],
    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.description,
      authors: ["Alex Cipher"],
      publishedTime: blog.date,
      tags: [blog.category, "Smart Contract", "Security", "Web3"],
      images: [
        {
          url: "https://alexcipher.xyz/og-image.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: "@alexcipher",
    },
    alternates: {
      canonical: url,
    },
  };
}

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
      <Navigation redirectToHomeForSections />

      {/* Article Header */}
      <article className="px-4 py-10 md:py-16 max-w-4xl mx-auto">
        <div className="mb-10 md:mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-5 md:mb-6">
            {blog.title}
          </h1>
          <time className="text-gray-400">{blog.date}</time>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert md:prose-lg max-w-none break-words">
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

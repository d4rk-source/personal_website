'use client';

import React from 'react';

interface Vouch {
  id: number;
  company: string;
  comment: string;
  author: string;
  role: string;
}

const vouches: Vouch[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    comment: "Outstanding work! Delivered our project ahead of schedule with exceptional quality.",
    author: "Sarah Johnson",
    role: "CTO"
  },
  {
    id: 2,
    company: "InnovateLabs",
    comment: "Professional, reliable, and incredibly skilled. Highly recommend for any complex project.",
    author: "Michael Chen",
    role: "Product Manager"
  },
  {
    id: 3,
    company: "Digital Dynamics",
    comment: "Transformed our vision into reality with elegant solutions. A true expert!",
    author: "Emily Rodriguez",
    role: "CEO"
  },
  {
    id: 4,
    company: "CloudScale Inc",
    comment: "Exceptional attention to detail and deep technical knowledge. Will work with again!",
    author: "David Park",
    role: "Engineering Lead"
  },
  {
    id: 5,
    company: "StartupHub",
    comment: "Best developer we've worked with. Clear communication and perfect execution.",
    author: "Lisa Thompson",
    role: "Founder"
  },
  {
    id: 6,
    company: "Enterprise Global",
    comment: "Solved complex challenges with innovative approaches. Absolutely top-tier work!",
    author: "James Wilson",
    role: "Director of Technology"
  }
];

export default function Vouches() {
  return (
    <section id="vouches" className="px-4 py-20 max-w-7xl mx-auto border-t border-gray-800 overflow-hidden scroll-mt-20">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Trusted by companies and protocols worldwide
        </p>
      </div>

      <div className="relative -mx-4">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-black from-20% to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-black from-20% to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll gap-0">
          {/* First set of vouches */}
          {vouches.map((vouch) => (
            <div
              key={`first-${vouch.id}`}
              className="flex-shrink-0 w-96 mx-4 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white">{vouch.company}</h3>
                  <p className="text-sm text-gray-500">
                    {vouch.author} · {vouch.role}
                  </p>
                </div>
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 italic">"{vouch.comment}"</p>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {vouches.map((vouch) => (
            <div
              key={`second-${vouch.id}`}
              className="flex-shrink-0 w-96 mx-4 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white">{vouch.company}</h3>
                  <p className="text-sm text-gray-500">
                    {vouch.author} · {vouch.role}
                  </p>
                </div>
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 italic">"{vouch.comment}"</p>
            </div>
          ))}

          {/* Third set for extra smooth coverage */}
          {vouches.map((vouch) => (
            <div
              key={`third-${vouch.id}`}
              className="flex-shrink-0 w-96 mx-4 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white">{vouch.company}</h3>
                  <p className="text-sm text-gray-500">
                    {vouch.author} · {vouch.role}
                  </p>
                </div>
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 italic">"{vouch.comment}"</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

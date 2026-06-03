"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Shield,
  Server,
  Network,
  Lock,
  Phone,
  Cable,
  Monitor,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const posts = [
  {
    title: "Why Every Business Needs a Managed Network in 2024",
    excerpt:
      "Unmanaged networks are a liability. We break down why proactive monitoring and managed infrastructure is no longer optional for growing businesses.",
    image: "/images/hero/cctv.jpg",
    icon: Wifi,
    category: "Networking",
    date: "12 May 2024",
    readTime: "5 min read",
    href: "/blog/why-every-business-needs-managed-network",
  },
  {
    title: "CCTV vs IP Cameras: Which is Right for Your Property?",
    excerpt:
      "Analog CCTV and IP cameras each have their place. We compare resolution, cost, scalability and remote access so you can make the right call.",
    image: "/images/hero/networking1.jpg",
    icon: Shield,
    category: "Security",
    date: "03 Apr 2024",
    readTime: "4 min read",
    href: "/blog/cctv-vs-ip-cameras",
  },
  {
    title: "Data Centre Power: UPS, PDU & What You Actually Need",
    excerpt:
      "Power failures cost businesses thousands. Here is a practical guide to UPS systems, PDUs and building a resilient power strategy for your data centre.",
    image: "/images/hero/voip.jpg",
    icon: Server,
    category: "Data Centre",
    date: "18 Mar 2024",
    readTime: "6 min read",
    href: "/blog/data-centre-power-ups-pdu-guide",
  },
  {
    title: "Access Control 101: Biometrics, Cards & What Works Best",
    excerpt:
      "From fingerprint scanners to proximity cards, we break down the pros and cons of each access control method to help you choose the right system.",
    image: "/images/hero/server.jpeg",
    icon: Lock,
    category: "Access Control",
    date: "05 Mar 2024",
    readTime: "5 min read",
    href: "/blog/access-control-biometrics-cards",
  },
  {
    title: "How Wireless Links Are Connecting Remote Sites in Africa",
    excerpt:
      "Fibre is not always an option. Discover how point-to-point and point-to-multipoint wireless links are bridging the connectivity gap across the continent.",
    image: "/images/blog/blog5.jpg",
    icon: Network,
    category: "Wireless",
    date: "20 Feb 2024",
    readTime: "7 min read",
    href: "/blog/wireless-links-remote-sites-africa",
  },
  {
    title: "VoIP vs Traditional PBX: The Real Cost Comparison",
    excerpt:
      "Thinking of switching to VoIP? We put the numbers side by side — setup costs, monthly bills, scalability and call quality — so you can decide with confidence.",
    image: "/images/blog/blog1.jpeg",
    icon: Phone,
    category: "VoIP",
    date: "08 Feb 2024",
    readTime: "5 min read",
    href: "/blog/voip-vs-traditional-pbx-cost-comparison",
  },
  {
    title: "Structured Cabling: Why It Matters More Than You Think",
    excerpt:
      "Bad cabling causes more downtime than most IT managers realise. Here is why investing in proper structured cabling pays off in reliability and speed.",
    image: "/images/blog/cctvblog.webp",
    icon: Cable,
    category: "Cabling",
    date: "25 Jan 2024",
    readTime: "4 min read",
    href: "/blog/structured-cabling-why-it-matters",
  },
  {
    title: "Top 5 Signs Your IT Infrastructure Needs an Upgrade",
    excerpt:
      "Slow speeds, frequent outages and patched-together systems are warning signs. Find out when it is time to stop fixing and start rebuilding your IT foundation.",
    image: "/images/projects/acess-contorl.webp",
    icon: Monitor,
    category: "IT Services",
    date: "10 Jan 2024",
    readTime: "6 min read",
    href: "/blog/signs-your-it-infrastructure-needs-upgrade",
  },
];

const categories = [
  "All",
  "Networking",
  "Security",
  "Data Centre",
  "Access Control",
  "Wireless",
  "VoIP",
  "Cabling",
  "IT Services",
];

export default function BlogPage() {
  return (
    <main className="bg-[#f5f6f7] min-h-screen">
      {/* <Navbar /> */}

      {/* ── Page Hero Banner ── */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/blog/blog-banner.jpg')] bg-cover bg-center opacity-30" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-[#7ac943] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7ac943]">Blog</span>
          </div>

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="text-3xl sm:text-4xl lg:text-5xl">Latest</span>
            <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
              Insights & News
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
            Tips, guides and industry news from the N.O.B.S Technologies team — helping you make smarter technology decisions.
          </p>
        </div>
      </section>

      {/* ── Category Filter Bar ── */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-md border transition-colors duration-200 ${
                  cat === "All"
                    ? "bg-[#7ac943] text-white border-[#7ac943]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#7ac943] hover:text-[#7ac943]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              All <span className="text-[#7ac943]">Articles</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">
              Browse all our technology guides, tips and project stories.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((post) => {
              const Icon = post.icon;
              return (
                <div
                  key={post.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-[#7ac943] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    {/* Green accent bar */}
                    <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#7ac943]" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center bg-white">
                        <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                      </span>
                      <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-tight pt-1">
                        {post.title}
                      </h3>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7ac943] inline-block" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7ac943] inline-block" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read More */}
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1.5 text-[#7ac943] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
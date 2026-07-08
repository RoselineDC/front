"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise Fiber Network",
    category: "Fiber Optic Infrastructure",
    description:
      "Complete fiber optic network deployment for a Fortune 500 financial institution across 15 office locations.",
    metrics: [
      { label: "Locations", value: "15" },
      { label: "Fiber Deployed", value: "450km" },
      { label: "Uptime", value: "99.99%" },
    ],
    tags: ["Fiber Optic", "Enterprise", "Multi-site"],
    year: 2024,
  },
  {
    id: 2,
    title: "Unified Communications Platform",
    category: "VoIP & PBX Systems",
    description:
      "Implementation of enterprise VoIP and unified communications system supporting 500+ users across distributed offices.",
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Call Quality", value: "HD Audio" },
      { label: "Integration", value: "CRM Ready" },
    ],
    tags: ["VoIP", "PBX", "Unified Comms"],
    year: 2024,
  },
  {
    id: 3,
    title: "Secure Data Center Cabling",
    category: "Structured Cabling",
    description:
      "Design and installation of Cat6A structured cabling infrastructure for a tier-3 data center facility.",
    metrics: [
      { label: "Ports", value: "2,400+" },
      { label: "Cable", value: "180km" },
      { label: "Redundancy", value: "Full N+1" },
    ],
    tags: ["Structured Cabling", "Data Center", "Cat6A"],
    year: 2023,
  },
  {
    id: 4,
    title: "Campus Wireless Network",
    category: "Wireless Infrastructure",
    description:
      "Large-scale WiFi 6 deployment covering 150,000 sqm university campus with seamless roaming.",
    metrics: [
      { label: "Coverage", value: "150k sqm" },
      { label: "APs", value: "280+" },
      { label: "Throughput", value: "1.2Gbps" },
    ],
    tags: ["Wireless", "WiFi 6", "Campus"],
    year: 2023,
  },
  {
    id: 5,
    title: "Integrated Security System",
    category: "Access Control & CCTV",
    description:
      "End-to-end security solution combining biometric access control with 4K IP camera network.",
    metrics: [
      { label: "Cameras", value: "180" },
      { label: "Access Points", value: "45" },
      { label: "Storage", value: "500TB" },
    ],
    tags: ["CCTV", "Access Control", "Security"],
    year: 2023,
  },
  {
    id: 6,
    title: "Point-to-Point Microwave Link",
    category: "Microwave Radio",
    description:
      "Long-distance microwave radio link connecting two data centers 85km apart with redundant paths.",
    metrics: [
      { label: "Distance", value: "85km" },
      { label: "Bandwidth", value: "1Gbps" },
      { label: "Latency", value: "<5ms" },
    ],
    tags: ["Microwave", "PtP", "Long Distance"],
    year: 2022,
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));
  const filteredProjects = selectedCategory
    ? PROJECTS.filter((p) => p.category === selectedCategory)
    : PROJECTS;

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-[#7ac943] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7ac943]">Projects</span>
          </div>

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="text-3xl sm:text-4xl lg:text-5xl">Delivered</span>
            <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
              Projects
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
            A portfolio of successfully completed network infrastructure, communication systems and security solutions across diverse industries and scales.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-white py-8 lg:py-10 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Filter by Category
          </span>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full border transition-colors duration-200 ${
                selectedCategory === null
                  ? "bg-[#7ac943] border-[#7ac943] text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#7ac943] hover:text-[#7ac943]"
              }`}
            >
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full border transition-colors duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#7ac943] border-[#7ac943] text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#7ac943] hover:text-[#7ac943]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="bg-[#f5f6f7] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col group hover:border-[#7ac943]/40 transition-colors duration-300"
            >
              {/* Year badge */}
              <span className="inline-block bg-[#7ac943]/10 text-[#7ac943] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">
                {project.year}
              </span>

              {/* Category */}
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-gray-900 leading-tight mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-5 pb-5 border-b border-gray-100">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-sm font-extrabold text-[#7ac943] leading-tight">
                      {m.value}
                    </p>
                    <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide leading-tight mt-1">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-1.5 text-[#7ac943] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
              >
                View Case Study <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-black py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
            Ready to <span className="text-[#7ac943]">Start Your Project?</span>
          </h2>
          <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
          <p className="text-white/60 text-sm max-w-xl leading-relaxed">
            Let&apos;s discuss how we can design and deploy the perfect network infrastructure solution for your organisation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
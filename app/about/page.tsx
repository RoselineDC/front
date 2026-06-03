"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Award,
  Zap,
  TrendingUp,
  ShieldCheck,
  Heart,
  Clock,
  Target,
  Eye,
} from "lucide-react";

/* ── Data ── */

const stats = [
  { icon: Users, value: "45+", label: "Team Members" },
  { icon: Award, value: "120+", label: "Certifications" },
  { icon: Zap, value: "1000+", label: "Projects Completed" },
  { icon: TrendingUp, value: "10+", label: "Years in Business" },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Excellence",
    description:
      "We deliver exceptional quality in every project, maintaining the highest standards of technical expertise and professionalism.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We stay ahead of technology trends, continuously adopting new solutions to provide cutting-edge network infrastructure.",
  },
  {
    icon: Heart,
    title: "Reliability",
    description:
      "Our clients depend on us for mission-critical infrastructure. We ensure maximum uptime and dedicated support.",
  },
  {
    icon: Clock,
    title: "Partnership",
    description:
      "We view our clients as long-term partners, investing time to understand their unique needs and delivering tailored solutions.",
  },
];

const timeline = [
  {
    year: "2013",
    title: "Founded",
    description:
      "N.O.B.S Technologies established with a vision to deliver reliable network and broadband solutions across South Africa.",
  },
  {
    year: "2015",
    title: "First Major Contract",
    description:
      "Secured an enterprise-level contract with a leading financial institution, cementing our reputation for excellence.",
  },
  {
    year: "2017",
    title: "Expansion",
    description:
      "Expanded our team and capabilities, adding fiber optic, wireless links and advanced security to our portfolio.",
  },
  {
    year: "2019",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001 certification, demonstrating our commitment to quality and continuous improvement.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Launched advanced monitoring and management platforms for real-time infrastructure visibility and proactive support.",
  },
  {
    year: "2024",
    title: "Present Day",
    description:
      "Serving 500+ happy clients across multiple sectors with cutting-edge network infrastructure solutions.",
  },
];

// const team = [
//   {
//     name: "John Mthembu",
//     role: "Chief Technology Officer",
//     expertise: "Network Architecture & Design",
//     image: "/images/team/john.jpg",
//   },
//   {
//     name: "Sarah Chen",
//     role: "Operations Director",
//     expertise: "Project Management & Delivery",
//     image: "/images/team/sarah.jpg",
//   },
//   {
//     name: "Thabo Nkosi",
//     role: "Senior Network Engineer",
//     expertise: "Fiber Optics & Infrastructure",
//     image: "/images/team/thabo.jpg",
//   },
//   {
//     name: "Emma Rodriguez",
//     role: "Solutions Architect",
//     expertise: "Enterprise Solutions & Integration",
//     image: "/images/team/emma.jpg",
//   },
// ];

const features = [
  "Experienced & Certified Team",
  "Quality Products & Solutions",
  "Tailored Solutions for Every Need",
  "Fast & Reliable Delivery",
  "Project & Installation Services",
  "After Sales Support",
];

/* ── Page ── */

export default function AboutPage() {
  return (
    <main className="bg-[#f5f6f7] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/about/about-banner.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-[#7ac943] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7ac943]">About Us</span>
          </div>

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="text-3xl sm:text-4xl lg:text-5xl">Who We</span>
            <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
              Are
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
            N.O.B.S Technologies — a leading provider of network infrastructure and broadband solutions, dedicated to connecting organisations with reliable, scalable and innovative technology.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center gap-3 group hover:border-[#7ac943]/40 transition-colors duration-300"
              >
                <span className="w-12 h-12 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <p className="text-3xl font-extrabold text-[#7ac943] leading-tight">{value}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are — two column ── */}
      <section className="bg-[#f5f6f7] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              About <span className="text-[#7ac943]">N.O.B.S</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">Smart solutions for a connected future.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Left */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col justify-between">
              <p className="text-[#7ac943] font-bold text-xs tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h3 className="text-[2rem] lg:text-[2.2rem] font-extrabold text-gray-900 leading-tight mb-4">
                Built to <span className="text-[#7ac943]">Connect & Protect</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Founded over a decade ago, N.O.B.S Technologies was built on a simple belief — every business deserves reliable, professional technology infrastructure. From a small team with big ambitions, we have grown into a trusted partner for businesses across South Africa.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                We provide expert, reliable and scalable technology solutions to businesses of all sizes. From infrastructure to support, we are committed to powering your success.
              </p>

              {/* Feature list */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#7ac943] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-[#7ac943]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Mission & Vision */}
            <div className="flex flex-col gap-5">

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">
                    Our <span className="text-[#7ac943]">Mission</span>
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To design, deploy and maintain world-class network infrastructure that empowers organisations to communicate, collaborate and compete effectively in an increasingly connected world — delivering solutions that are technically superior and tailored to each client.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide">
                    Our <span className="text-[#7ac943]">Vision</span>
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To be the most trusted and innovative network infrastructure partner in Southern Africa — recognised for technical excellence, reliability and commitment to customer success. We envision a future where every organisation has access to the connectivity they need to thrive.
                </p>
              </div>

              {/* Building image */}
              <div className="relative h-[180px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/building.jpeg"
                  alt="N.O.B.S Technologies Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              Our Core <span className="text-[#7ac943]">Values</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 group hover:border-[#7ac943]/40 transition-colors duration-300"
              >
                <span className="w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                </span>
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey / Timeline ── */}
      <section className="bg-[#f5f6f7] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              Our <span className="text-[#7ac943]">Journey</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">Over a decade of growth, innovation and impact.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {timeline.map(({ year, title, description }, idx) => (
              <div
                key={year}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-8 p-6 sm:p-8 ${
                  idx !== timeline.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {/* Year badge */}
                <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 sm:w-28">
                  <span className="inline-flex items-center justify-center bg-[#7ac943]/10 text-[#7ac943] text-sm font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md w-fit">
                    {year}
                  </span>
                  {/* Connector line on desktop */}
                  {idx !== timeline.length - 1 && (
                    <span className="hidden sm:block w-[2px] flex-1 bg-[#7ac943]/20 mt-3 ml-[22px]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1 w-7 h-7 rounded-full border-2 border-[#7ac943] flex items-center justify-center bg-white">
                    <svg className="w-3 h-3 text-[#7ac943]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      {/* <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              Our <span className="text-[#7ac943]">Team</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Our experienced leadership team brings decades of combined expertise in network infrastructure and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, expertise, image }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group"
              >
                {/* Photo *
                <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#7ac943]" />
                </div>

                {/* Info *
                <div className="p-5 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-[#7ac943] uppercase tracking-widest">
                    {role}
                  </span>
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-tight">
                    {name}
                  </h3>
                  <p className="text-xs text-gray-400">{expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA Banner ── */}
      <section className="bg-black py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
            Ready to <span className="text-[#7ac943]">Partner With Us?</span>
          </h2>
          <div className="flex justify-center">
            <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
          </div>
          <p className="text-white/60 text-sm max-w-xl leading-relaxed">
            Let's discuss how N.O.B.S Technologies can help transform your network infrastructure and drive your organisation's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 border border-[#7ac943] text-white hover:bg-[#7ac943] transition-colors text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md"
            >
              Our Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
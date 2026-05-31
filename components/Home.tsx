"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Video,
  Wifi,
  Lock,
  PhoneCall,
  Antenna,
  Server,
  ArrowRight,
 Users, 
 ShieldCheck, 
 Heart, 
 Clock,
 Camera, Network, Radio,  Phone, Cable, Monitor 
} from "lucide-react";

/* ---------------- SERVICES ---------------- */

const services = [
  { icon: Video, title: "CCTV & Security" },
  { icon: Wifi, title: "Networking" },
  { icon: Lock, title: "Access Control" },
  { icon: PhoneCall, title: "VoIP Systems" },
  { icon: Antenna, title: "Wireless Links" },
  { icon: Server, title: "Data Centre" },
];

/* ---------------- HERO ---------------- */

export function Hero() {
  return (
  <section className="relative overflow-hidden bg-black">
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

  <div className="relative z-20 max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 lg:grid-cols-2 min-h-[550px] lg:min-h-[720px] gap-4">

      {/* LEFT */}
      <div className="flex flex-col justify-center py-8 lg:py-20">

        <h1 className="text-white font-black leading-none tracking-tight">
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            Network Operations &
          </span>

          <span className="block text-[#7AC943] text-2xl sm:text-3xl md:text-6xl lg:text-6xl mt-1 lg:mt-2">
            Broadband
          </span>

          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl">
            Solutions
          </span>

          <span className="block text-[#7AC943] text-2xl sm:text-3xl md:text-6xl lg:text-6xl mt-1 lg:mt-2">
            Technologies.
          </span>
        </h1>

        <p className="mt-4 lg:mt-8 text-sm md:text-lg text-white/80 max-w-xl">
          Professional technology solutions designed to connect,
          protect and power your world.
        </p>

        {/* SERVICES */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mt-6 lg:mt-12">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <Icon className="text-[#7AC943] mb-2 w-5 h-5 md:w-7 md:h-7" />

                <span className="text-white text-[10px] md:text-xs uppercase">
                  {service.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* DESKTOP BUTTONS ONLY */}
        <div className="hidden lg:flex gap-4 mt-12">
          <Link
            href="/solutions"
            className="bg-[#7AC943] hover:bg-[#69b53a] text-white font-semibold px-8 py-4 rounded-md inline-flex items-center gap-2"
          >
            Explore Solutions
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="border border-[#7AC943] text-white hover:bg-[#7AC943] px-8 py-4 rounded-md font-semibold inline-flex items-center gap-2"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-start lg:items-center justify-end py-4 lg:py-10">
        <div className="w-full">

          <div className="relative w-full h-[240px] sm:h-[300px] md:h-[450px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero/hero5.png"
              alt="Technology Infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* MOBILE BUTTONS UNDER IMAGE */}
          <div className="lg:hidden flex flex-col gap-3 mt-4">
            <Link
              href="/solutions"
              className="bg-[#7AC943] hover:bg-[#69b53a] text-white font-semibold px-4 py-3 rounded-md flex items-center justify-center gap-2"
            >
              Explore Solutions
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="border border-[#7AC943] text-white hover:bg-[#7AC943] px-4 py-3 rounded-md font-semibold flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  );
}

// solutions 

const solutions = [
  {
    title: "CCTV & Surveillance",
    description: "Advanced CCTV systems for complete protection and peace of mind.",
    image: "/images/solutions/cctv.jpg",
    icon: Camera,
    href: "/solutions/cctv-surveillance",
  },
  {
    title: "Access Control",
    description: "Secure access control solutions for homes, businesses and enterprises.",
    image: "/images/solutions/access-control.jpg",
    icon: Lock,
    href: "/solutions/access-control",
  },
  {
    title: "Networking",
    description: "Reliable networking solutions including switches, routers and WiFi.",
    image: "/images/solutions/networking.jpg",
    icon: Network,
    href: "/solutions/networking",
  },
  {
    title: "Wireless Links",
    description: "High speed wireless connections for long distance and remote locations.",
    image: "/images/solutions/wireless.jpg",
    icon: Radio,
    href: "/solutions/wireless-links",
  },
  {
    title: "Data Centre & Power",
    description: "Power distribution, UPS, PDU, racks & more for critical infrastructure.",
    image: "/images/solutions/data-centre.jpg",
    icon: Server,
    href: "/solutions/data-centre-power",
  },
  {
    title: "VoIP & Communications",
    description: "Cost effective VoIP phone systems for seamless communication.",
    image: "/images/solutions/voip.jpg",
    icon: Phone,
    href: "/solutions/voip-communications",
  },
  {
    title: "Structured Cabling",
    description: "Professional cabling solutions for voice, data and network infrastructure.",
    image: "/images/solutions/cabling.jpg",
    icon: Cable,
    href: "/solutions/structured-cabling",
  },
  {
    title: "Managed IT Services",
    description: "Proactive monitoring and IT support to keep your business running.",
    image: "/images/solutions/managed-it.jpg",
    icon: Monitor,
    href: "/solutions/managed-it-services",
  },
];

export function Solutions() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
            Our <span className="text-[#7ac943]">Solutions</span>
          </h2>
          {/* Green underline bar */}
          <div className="flex justify-center mb-4">
            <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
          </div>
          <p className="text-gray-500 text-sm">
            End-to-end technology solutions for a connected world.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Green top-left accent bar */}
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#7ac943]" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Icon + Title row */}
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center bg-white">
                      <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                    </span>
                    <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-tight pt-1">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {solution.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-[#7ac943] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

const features = [
  "Experienced & Certified Team",
  "Quality Products & Solutions",
  "Tailored Solutions for Every Need",
  "Fast & Reliable Delivery",
  "Project & Installation Services",
  "After Sales Support",
];

const stats = [
  { icon: Users, value: "10+", label: "Years of Experience" },
  { icon: ShieldCheck, value: "1000+", label: "Projects Completed" },
  { icon: Heart, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Technical Support" },
];

const brands = [
  { name: "Cisco", logo: "/images/brands/Cisco-logo.jpg" },
  { name: "MikroTik", logo: "/images/brands/mikrotik.png" },
  { name: "Hikvision", logo: "/images/brands/hikvision.png" },
  // { name: "APC", logo: "/images/brands/apc.png" },
  { name: "Dell", logo: "/images/brands/dell-logo.jpg" },
  { name: "Fortinet", logo: "/images/brands/fortinet.jpg" },
  { name: "Ubiquiti", logo: "/images/brands/ubiquiti.jpg" }
];

export function About() {
  return (
    <section className="bg-[#f5f6f7] py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top Two-Column Grid ── */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── LEFT CARD ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col justify-between">
            {/* Label */}
            <p className="text-[#7ac943] font-bold text-xs tracking-widest uppercase mb-4">
              About N.O.B.S Technologies
            </p>

            {/* Heading */}
            <h2 className="text-[2rem] lg:text-[2.4rem] font-extrabold text-gray-900 leading-tight mb-4">
              Smart Solutions For A{" "}
              <span className="text-[#7ac943]">Connected Future</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We provide expert, reliable and scalable technology solutions
              to businesses of all sizes. From infrastructure to support,
              we are committed to powering your success.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  {/* Circle icon */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#7ac943] flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-[#7ac943]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-7 py-3.5 rounded-md"
              >
                Read More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* ── RIGHT CARD ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10 flex flex-col gap-6">
            {/* Why Choose heading */}
            <div>
              <h2 className="text-xl font-extrabold text-gray-900 uppercase tracking-wide">
                Why Choose{" "}
                <span className="text-[#7ac943]">N.O.B.S</span>?
              </h2>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  {/* Icon circle */}
                  <span className="w-12 h-12 rounded-full border-2 border-[#7ac943] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-[#7ac943] leading-tight">
                      {value}
                    </p>
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide leading-tight">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Building Image */}
            <div className="relative flex-1 min-h-[260px] rounded-xl overflow-hidden">
              <Image
                src="/images/home/building.jpeg"
                alt="N.O.B.S Technologies Building"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Brands Strip ── */}
        <div className="mt-12">
          {/* Section heading */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-[2px] w-10 bg-[#7ac943] rounded-full" />
            <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-widest">
              We Work With The{" "}
              <span className="text-[#7ac943]">Best Brands</span>
            </h3>
            <span className="h-[2px] w-10 bg-[#7ac943] rounded-full" />
          </div>

          {/* Logos row */}
          <div className="relative flex items-center">
            {/* Left arrow */}
            <button
              aria-label="Previous brands"
              className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#7ac943] hover:bg-[#7ac943] hover:text-white transition-colors mr-4"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Brand logos */}
            <div className="flex-1 grid grid-cols-4 sm:grid-cols-6 items-center gap-4">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 "
                >
                  <div className="relative h-10 w-24">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              aria-label="Next brands"
              className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#7ac943] hover:bg-[#7ac943] hover:text-white transition-colors ml-4"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
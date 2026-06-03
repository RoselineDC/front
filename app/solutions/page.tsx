"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Antenna, PhoneCall, Plug, Wifi, Video, Lock,
  Radio, Server, ArrowRight, CheckCircle2, ChevronDown,
  Camera, Network, Cable, Monitor,
} from "lucide-react";

/* ── Types ── */
interface Solution {
  id: string;
  icon: React.ElementType;
  category: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  image: string;
  href: string;
}

/* ── Data ── */
const SOLUTIONS: Solution[] = [
  {
    id: "fiber",
    icon: Antenna,
    category: "Connectivity",
    title: "Fiber Optic",
    tagline: "Light-speed backbone infrastructure",
    description:
      "End-to-end fiber optic deployment — from civil works and duct installation through to termination, fusion splicing and full OTDR certification. We design, install and maintain both single-mode and multi-mode networks for enterprise and ISP environments.",
    highlights: [
      "Fusion splicing & mechanical termination",
      "OTDR testing & full documentation",
      "Underground & aerial routes",
      "Patch panel & enclosure builds",
    ],
    specs: [
      { label: "Media", value: "SM / MM" },
      { label: "Standards", value: "TIA-568" },
      { label: "Testing", value: "OTDR + IL" },
      { label: "Scale", value: "Campus to WAN" },
    ],
    image: "/images/solutions/fiber.jpg",
    href: "/solutions/fiber-optic",
  },
  {
    id: "voip",
    icon: PhoneCall,
    category: "Communications",
    title: "VoIP & PBX",
    tagline: "Unified voice over modern IP",
    description:
      "Complete IP telephony design and deployment — from hosted cloud PBX to on-premise Asterisk / FreePBX, SIP trunking, hunt groups, IVR trees and full unified-communications integration with Microsoft Teams or Google Workspace.",
    highlights: [
      "Cloud PBX & on-premise systems",
      "SIP trunk provisioning",
      "IVR, call queues & hunt groups",
      "MS Teams & GWS integration",
    ],
    specs: [
      { label: "Protocol", value: "SIP / H.323" },
      { label: "Codecs", value: "G.711 / G.729" },
      { label: "HA", value: "Failover ready" },
      { label: "Ext.", value: "1 – 500+" },
    ],
    image: "/images/hero/voip.jpg",
    href: "/solutions/voip-communications",
  },
  {
    id: "cabling",
    icon: Cable,
    category: "Infrastructure",
    title: "Structured Cabling",
    tagline: "Clean, certified copper runs",
    description:
      "Certified structured cabling for new builds and retrofits. We handle full horizontal and vertical distribution — from patch panels and IDFs through to outlet faceplates — on Cat5e, Cat6 and Cat6A, all tested and documented to TIA-568 standards.",
    highlights: [
      "Cat5e / Cat6 / Cat6A installation",
      "Full Fluke certification & reports",
      "Cable management & labelling",
      "MDF / IDF room builds",
    ],
    specs: [
      { label: "Category", value: "5e · 6 · 6A" },
      { label: "Testing", value: "Fluke DSX" },
      { label: "Bandwidth", value: "Up to 10 Gbps" },
      { label: "Standards", value: "TIA / ISO" },
    ],
    image: "/images/hero/structure.jpeg",
    href: "/solutions/structured-cabling",
  },
  {
    id: "wireless",
    icon: Wifi,
    category: "Connectivity",
    title: "Wireless Networks",
    tagline: "Seamless coverage, zero dead zones",
    description:
      "Professional wireless design starting with a full RF site survey, heat-mapping and capacity planning. We deploy and configure enterprise access points (Ubiquiti, Cisco, Ruckus) with centralised controllers, guest VLANs and WPA3 security.",
    highlights: [
      "RF site surveys & heat-mapping",
      "Enterprise AP deployment",
      "Controller & SSID management",
      "Guest portals & captive WiFi",
    ],
    specs: [
      { label: "Standard", value: "Wi-Fi 6 / 6E" },
      { label: "Security", value: "WPA3 / 802.1X" },
      { label: "Brands", value: "Ubiquiti · Cisco" },
      { label: "Survey", value: "Ekahau / iBwave" },
    ],
    image: "/images/hero/wireless.jpg",
    href: "/solutions/wireless-links",
  },
  {
    id: "cctv",
    icon: Camera,
    category: "Security",
    title: "CCTV Surveillance",
    tagline: "Always watching, always recording",
    description:
      "Full-spectrum CCTV solutions from camera selection and pole/wall mounting through to NVR/DVR configuration, remote viewing setup and long-term storage planning. We support IP megapixel, PTZ and thermal imaging across indoor and outdoor environments.",
    highlights: [
      "IP megapixel & PTZ cameras",
      "NVR / DVR setup & storage",
      "Remote view (mobile & web)",
      "LPR & analytics-capable",
    ],
    specs: [
      { label: "Resolution", value: "Up to 4K" },
      { label: "Protocol", value: "ONVIF / RTSP" },
      { label: "Storage", value: "Local + Cloud" },
      { label: "Retention", value: "7 – 90 days" },
    ],
    image: "/images/hero/cctv.jpg",
    href: "/solutions/cctv-surveillance",
  },
  {
    id: "access",
    icon: Lock,
    category: "Security",
    title: "Access Control",
    tagline: "Intelligent entry management",
    description:
      "From single-door keypad locks to multi-site biometric access systems, we design and install complete access control infrastructure — including electric strikes, maglocks, turnstiles, time-attendance terminals and full integration with your HR software.",
    highlights: [
      "Biometric, card & PIN systems",
      "Electric strikes & maglocks",
      "Time & attendance integration",
      "Multi-site centralised management",
    ],
    specs: [
      { label: "Auth", value: "Face / Card / PIN" },
      { label: "Brands", value: "ZKTeco · HID" },
      { label: "Protocol", value: "Wiegand / OSDP" },
      { label: "Doors", value: "1 – Unlimited" },
    ],
    image: "/images/hero/hero-main.jpg",
    href: "/solutions/access-control",
  },
  {
    id: "microwave",
    icon: Radio,
    category: "Wireless Links",
    title: "Microwave Radio",
    tagline: "Long-haul links without fibre",
    description:
      "Licensed and unlicensed point-to-point microwave and millimetre-wave links for last-mile connectivity, campus bridging and ISP backhaul. We conduct full path analysis, frequency planning, link budget calculations and ICASA licence applications.",
    highlights: [
      "PtP & PtMP link design",
      "Path analysis & link budgets",
      "ICASA frequency licensing",
      "Dish alignment & monitoring",
    ],
    specs: [
      { label: "Frequency", value: "5 – 80 GHz" },
      { label: "Capacity", value: "Up to 10 Gbps" },
      { label: "Range", value: "Up to 50 km" },
      { label: "Availability", value: "99.99% SLA" },
    ],
    image: "/images/hero/wireless.jpg",
    href: "/solutions/wireless-links",
  },
  {
    id: "it",
    icon: Server,
    category: "IT Infrastructure",
    title: "IT Solutions",
    tagline: "Networks that scale with you",
    description:
      "Holistic IT infrastructure design and deployment — routers, layer 2/3 switches, firewall configuration, VLAN segmentation, SD-WAN, load balancing and server room builds. We support Cisco, MikroTik, Fortinet and Ubiquiti environments.",
    highlights: [
      "Router, switch & firewall setup",
      "VLAN, QoS & SD-WAN config",
      "Server room builds & UPS",
      "Network monitoring (PRTG / Zabbix)",
    ],
    specs: [
      { label: "Brands", value: "Cisco · MikroTik" },
      { label: "Firewalls", value: "Fortinet · pfSense" },
      { label: "Monitoring", value: "PRTG / Zabbix" },
      { label: "Scale", value: "SME to Enterprise" },
    ],
    image: "/images/hero/networking1.jpg",
    href: "/solutions/managed-it-services",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(SOLUTIONS.map((s) => s.category)))];

/* ── Solution Card ── */
function SolutionCard({ solution }: { solution: Solution }) {
  const [open, setOpen] = useState(false);
  const Icon = solution.icon;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group">

      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-[#7ac943] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {solution.category}
        </span>
        {/* Green accent bar */}
        <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#7ac943]" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-2">
          <span className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[#7ac943] flex items-center justify-center bg-white">
            <Icon className="w-5 h-5 text-[#7ac943]" strokeWidth={1.5} />
          </span>
          <div className="pt-1">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase leading-tight">
              {solution.title}
            </h3>
            <p className="text-[10px] text-[#7ac943] font-semibold mt-0.5">{solution.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-4">
          {solution.description}
        </p>

        {/* Spec pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {solution.specs.map((spec) => (
            <span
              key={spec.label}
              className="text-[10px] font-semibold bg-gray-50 border border-gray-100 rounded-md px-2 py-1 text-gray-500"
            >
              <span className="text-gray-400">{spec.label}:</span> {spec.value}
            </span>
          ))}
        </div>

        {/* Expandable highlights */}
        <div className="border-t border-gray-100 mb-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-between py-3 text-xs font-bold text-gray-700 uppercase tracking-wide hover:text-[#7ac943] transition-colors"
          >
            Key Features
            <ChevronDown
              size={14}
              className={`text-[#7ac943] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 pb-3">
              {solution.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7ac943] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-500 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learn More */}
        <Link
          href={solution.href}
          className="mt-auto inline-flex items-center gap-1.5 text-[#7ac943] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function SolutionsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? SOLUTIONS : SOLUTIONS.filter((s) => s.category === filter);

  return (
    <main className="bg-[#f5f6f7] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero/networking.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-widest font-semibold mb-6">
            <Link href="/" className="hover:text-[#7ac943] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7ac943]">Solutions</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <h1 className="text-white font-black leading-none tracking-tight">
                <span className="text-3xl sm:text-4xl lg:text-5xl">End-to-End</span>
                <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
                  Network Solutions
                </span>
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
                From fibre and wireless to voice, security and IT infrastructure — every solution is designed, installed and supported end-to-end by our team.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-7 py-4 rounded-md"
              >
                Book a Site Assessment <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats block */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "8", label: "Solutions" },
                { value: "100%", label: "End-to-End" },
                { value: "24/7", label: "Support" },
                { value: "SA-Wide", label: "Coverage" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-1"
                >
                  <p className="text-2xl font-extrabold text-[#7ac943] leading-tight">{value}</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-md border transition-colors duration-200 ${
                  filter === cat
                    ? "bg-[#7ac943] text-white border-[#7ac943]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#7ac943] hover:text-[#7ac943]"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto flex-shrink-0 text-[11px] font-semibold text-gray-400">
              {filtered.length} solution{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
              All <span className="text-[#7ac943]">Solutions</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
            </div>
            <p className="text-gray-500 text-sm">
              Professional technology solutions designed to connect, protect and power your world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-black py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#7ac943] rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-extrabold text-xl lg:text-2xl uppercase tracking-tight leading-tight">
                Not Sure Which Solution Fits?
                <span className="block font-normal text-white/80 text-sm mt-1 normal-case tracking-normal">
                  Our engineers will assess your site and recommend the right technology stack.
                </span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-white/10 transition-colors text-white text-sm font-bold tracking-wide uppercase px-7 py-4 rounded-md border border-white/20"
              >
                Book Assessment <ArrowRight size={16} />
              </Link>
              <Link
                href="mailto:info@nobstechnologies.co.za"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors text-white text-sm font-bold tracking-wide uppercase px-7 py-4 rounded-md"
              >
                Email Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Hikvision 4K Turret Camera",
    brand: "Hikvision",
    category: "CCTV & Surveillance",
    image: "/images/products/hikvision-turret.jpg",
    description:
      "4K resolution IP turret camera with built-in IR night vision up to 30m and weatherproof housing.",
    specs: ["8MP / 4K", "IP67 Rated", "30m IR Range"],
  },
  {
    id: 2,
    name: "Hikvision 32-Channel NVR",
    brand: "Hikvision",
    category: "CCTV & Surveillance",
    image: "/images/products/hikvision-nvr.jpg",
    description:
      "32-channel network video recorder with H.265+ compression for extended storage efficiency.",
    specs: ["32 Channels", "H.265+", "Up to 12MP/ch"],
  },
  {
    id: 3,
    name: "Ubiquiti UniFi Access Point",
    brand: "Ubiquiti",
    category: "Networking",
    image: "/images/products/unifi-ap.jpg",
    description:
      "WiFi 6 access point delivering high-density, high-throughput wireless coverage for offices and campuses.",
    specs: ["WiFi 6", "2.5 Gbps", "PoE+ Powered"],
  },
  {
    id: 4,
    name: "MikroTik CCR2004 Router",
    brand: "MikroTik",
    category: "Networking",
    image: "/images/products/mikrotik-ccr.jpg",
    description:
      "Cloud core router built for high-performance routing, firewalling and traffic shaping at scale.",
    specs: ["16-Core CPU", "10x Gigabit", "RouterOS v7"],
  },
  {
    id: 5,
    name: "Cisco Catalyst 24-Port Switch",
    brand: "Cisco",
    category: "Networking",
    image: "/images/products/cisco-catalyst.jpg",
    description:
      "Managed Layer 2/3 switch with PoE+ support, built for reliable enterprise network backbones.",
    specs: ["24 Ports", "PoE+", "Layer 2/3"],
  },
  {
    id: 6,
    name: "Fortinet FortiGate 60F Firewall",
    brand: "Fortinet",
    category: "Networking",
    image: "/images/products/fortigate-60f.jpg",
    description:
      "Next-generation firewall with integrated SD-WAN and advanced threat protection for growing networks.",
    specs: ["10 Gbps FW", "SD-WAN Ready", "NGFW"],
  },
  {
    id: 7,
    name: "Biometric Access Control Reader",
    brand: "N.O.B.S Select",
    category: "Access Control",
    image: "/images/products/biometric-reader.jpg",
    description:
      "Fingerprint and card-based access control terminal with anti-passback and visitor logging.",
    specs: ["Fingerprint + Card", "3,000 Users", "Anti-Passback"],
  },
  {
    id: 8,
    name: "Video Door Intercom Kit",
    brand: "Hikvision",
    category: "Access Control",
    image: "/images/products/video-intercom.jpg",
    description:
      "IP video intercom system with mobile app integration for remote visitor screening and entry.",
    specs: ["HD Video", "Mobile App", "2-Wire Install"],
  },
  {
    id: 9,
    name: "Yealink IP Desk Phone",
    brand: "Yealink",
    category: "VoIP & Communications",
    image: "/images/products/yealink-phone.jpg",
    description:
      "HD voice IP phone with PoE support, built for reliable day-to-day business communication.",
    specs: ["HD Voice", "PoE Powered", "Dual Gigabit"],
  },
  {
    id: 10,
    name: "PtP Wireless Radio Link",
    brand: "Ubiquiti",
    category: "Wireless Links",
    image: "/images/products/ptp-radio.jpg",
    description:
      "Point-to-point wireless bridge for long-distance, high-throughput links between sites.",
    specs: ["Up to 1 Gbps", "Long Range", "Weatherproof"],
  },
  {
    id: 11,
    name: "Dell PowerEdge Rack Server",
    brand: "Dell",
    category: "Data Centre & Power",
    image: "/images/products/dell-poweredge.jpg",
    description:
      "Enterprise rack server built for virtualisation, storage and demanding compute workloads.",
    specs: ["1U/2U Options", "Hot-Swap Drives", "Dual PSU"],
  },
  {
    id: 12,
    name: "Online UPS with PDU",
    brand: "N.O.B.S Select",
    category: "Data Centre & Power",
    image: "/images/products/ups-pdu.jpg",
    description:
      "Double-conversion online UPS paired with rack PDU for clean, uninterrupted critical power.",
    specs: ["Online Double-Conversion", "Rack PDU Included", "Network Card Ready"],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

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
            <span className="text-[#7ac943]">Products</span>
          </div>

          <h1 className="text-white font-black leading-none tracking-tight">
            <span className="text-3xl sm:text-4xl lg:text-5xl">Equipment We</span>
            <span className="block text-[#7ac943] text-4xl sm:text-5xl lg:text-6xl mt-1">
              Supply & Install
            </span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-white/70 max-w-xl">
            Enterprise-grade hardware from trusted global brands, supplied and installed by our certified team.
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
              All Products
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

      {/* ── Products Grid ── */}
      <section className="bg-[#f5f6f7] py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:border-[#7ac943]/40 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-[180px] w-full overflow-hidden bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#7ac943] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {product.brand}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  {product.category}
                </span>

                <h3 className="text-base font-extrabold text-gray-900 leading-tight mb-3">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-1.5 text-[#7ac943] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
                >
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-black py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#7ac943]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
            Not Sure What <span className="text-[#7ac943]">You Need?</span>
          </h2>
          <span className="h-[3px] w-14 bg-[#7ac943] rounded-full" />
          <p className="text-white/60 text-sm max-w-xl leading-relaxed">
            Talk to our team — we&apos;ll recommend the right equipment for your budget, scale and environment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7ac943] hover:bg-[#6ab535] transition-colors text-white text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-md"
          >
            Talk To Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Managed WiFi 6 Access Point",
    category: "Networking",
    price: "From R 2,800",
    description:
      "Enterprise-grade dual-band AP with centralised cloud management, ideal for offices and warehouses.",
    emoji: "📡",
  },
  {
    id: 2,
    name: "Mikrotik Core Router",
    category: "Networking",
    price: "From R 3,500",
    description:
      "High-throughput routing with full firewall, VPN and bandwidth management for medium to large sites.",
    emoji: "🔀",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Structured Cabling Bundle",
    category: "Networking",
    price: "Get a quote",
    description:
      "Cat6A patch panels, keystone jacks, face plates and cable management for a complete LAN rollout.",
    emoji: "🔌",
  },
  {
    id: 4,
    name: "IP CCTV Camera (4MP)",
    category: "Security",
    price: "From R 1,200",
    description:
      "Outdoor H.265 IP camera with night vision, PoE and ONVIF support. Works with any NVR.",
    emoji: "📷",
  },
  {
    id: 5,
    name: "8-Channel NVR Package",
    category: "Security",
    price: "From R 4,800",
    description:
      "Includes 8-ch NVR, 2TB HDD and four 4MP cameras. Plug-and-play with remote viewing app.",
    emoji: "🖥️",
    badge: "Bundle",
  },
  {
    id: 6,
    name: "Access Control Biometric Terminal",
    category: "Security",
    price: "From R 5,500",
    description:
      "Fingerprint + card + PIN terminal with attendance management software and TCP/IP connectivity.",
    emoji: "🔐",
  },
  {
    id: 7,
    name: "3kVA Inverter + Battery Kit",
    category: "Power",
    price: "From R 14,500",
    description:
      "Pure sine wave inverter with 200Ah lithium battery. Powers workstations and networking gear through load-shedding.",
    emoji: "🔋",
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "5kW Solar PV System",
    category: "Power",
    price: "Get a quote",
    description:
      "Grid-tied or off-grid solar system with panels, hybrid inverter and monitoring portal. Fully installed.",
    emoji: "☀️",
  },
  {
    id: 9,
    name: "Online UPS 1000VA",
    category: "Power",
    price: "From R 3,200",
    description:
      "True online double-conversion UPS protecting servers and network equipment from power fluctuations.",
    emoji: "⚡",
  },
  {
    id: 10,
    name: "Refurbished Business Desktop (i5)",
    category: "Hardware",
    price: "From R 4,500",
    description:
      "Dell/HP i5 Gen 8+, 8GB RAM, 256GB SSD, Win11 Pro. Tested and warranted for 6 months.",
    emoji: "🖥️",
  },
  {
    id: 11,
    name: "24-Port PoE Managed Switch",
    category: "Hardware",
    price: "From R 5,800",
    description:
      "Layer 2 managed switch with 24× PoE+ ports and 4× SFP uplinks. Ideal for IP cameras and APs.",
    emoji: "🔄",
  },
  {
    id: 12,
    name: "IT Support Contract (Monthly)",
    category: "Software",
    price: "From R 1,500/mo",
    description:
      "Remote and on-site support SLA covering up to 10 devices. Includes monitoring, patching and helpdesk.",
    emoji: "🛠️",
  },
  {
    id: 13,
    name: "Microsoft 365 Business (per user)",
    category: "Software",
    price: "From R 280/mo",
    description:
      "Licensed M365 Business Standard including Teams, OneDrive, Outlook and Office apps. Billed monthly.",
    emoji: "☁️",
  },
  {
    id: 14,
    name: "Fibre Business Line (10Mbps sym)",
    category: "Networking",
    price: "From R 1,900/mo",
    description:
      "Dedicated symmetric fibre with SLA, static IP and 24/7 NOC monitoring. Installation included.",
    emoji: "🌐",
  },
];
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Antenna, PhoneCall, Plug, Wifi, Video, Lock,
  Radio, Server, ArrowRight, CheckCircle2,
  Mail, Phone, Menu, X, ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Solution {
  id: string;
  icon: React.ElementType;
  category: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  accent: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
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
    accent: "#B8E0BA",
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
    accent: "#A8D5E2",
  },
  {
    id: "cabling",
    icon: Plug,
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
    accent: "#F0C9A0",
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
    accent: "#C9B8E8",
  },
  {
    id: "cctv",
    icon: Video,
    category: "Security",
    title: "CCTV Surveillance",
    tagline: "Always watching, always recording",
    description:
      "Full-spectrum CCTV solutions from camera selection and pole/wall mounting through to NVR/DVR configuration, remote viewing setup and long-term storage planning. We support IP megapixel, PTZ and thermal imaging across both indoor and outdoor environments.",
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
    accent: "#E8C8C8",
  },
  {
    id: "access",
    icon: Lock,
    category: "Security",
    title: "Access Control",
    tagline: "Intelligent entry management",
    description:
      "From single-door keypad locks to multi-site biometric access systems, we design and install complete access control infrastructure — including electric strikes, maglocks, turnstiles, time-attendance terminals and full integration with your HR or visitor-management software.",
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
    accent: "#E8E0B8",
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
    accent: "#B8D4E8",
  },
  {
    id: "it",
    icon: Server,
    category: "IT Infrastructure",
    title: "IT Solutions",
    tagline: "Networks that scale with you",
    description:
      "Holistic IT infrastructure design and deployment — routers, layer 2/3 switches, firewall configuration, VLAN segmentation, SD-WAN, load balancing and server room builds. We support Cisco, MikroTik, Fortinet and Ubiquiti environments, from SME to enterprise.",
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
    accent: "#B8E0BA",
  },
];

const NAV_LINKS = ["Services", "Solutions", "Projects", "About Us", "Contact"];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Solution card ────────────────────────────────────────────────────────────
function SolutionCard({ s, index }: { s: Solution; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView(0.1);
  const Icon = s.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity .6s cubic-bezier(.22,1,.36,1) ${index * 0.07}s, transform .6s cubic-bezier(.22,1,.36,1) ${index * 0.07}s`,
        background: "#fff",
        border: "1px solid #E2E2E0",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Coloured top bar */}
      <div style={{ height: 4, background: s.accent }} />

      {/* Header */}
      <div style={{ padding: "1.5rem 1.5rem 1.25rem" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <div style={{
              width: 44, height: 44, borderRadius: ".65rem",
              background: s.accent + "30",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Icon size={20} color={s.accent === "#B8E0BA" ? "#3a7d44" : "#3a5f7d"} />
            </div>
            <div>
              <div style={{ fontSize: ".65rem", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", marginBottom: ".2rem" }}>{s.category}</div>
              <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--ink)", letterSpacing: "-.02em" }}>{s.title}</div>
            </div>
          </div>
          <span style={{
            fontSize: ".65rem", fontFamily: "var(--font-mono)", background: s.accent + "30",
            color: "var(--ink)", padding: ".25rem .6rem", borderRadius: "2rem",
            whiteSpace: "nowrap", flexShrink: 0, alignSelf: "flex-start",
          }}>{s.tagline}</span>
        </div>

        <p style={{ marginTop: "1rem", fontSize: ".825rem", lineHeight: 1.7, color: "var(--muted)" }}>
          {s.description}
        </p>
      </div>

      {/* Spec pills */}
      <div style={{ padding: "0 1.5rem", display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
        {s.specs.map(spec => (
          <div key={spec.label} style={{
            fontSize: ".68rem", fontFamily: "var(--font-mono)",
            background: "#F7F7F5", border: "1px solid #E2E2E0",
            borderRadius: ".4rem", padding: ".3rem .65rem",
            color: "var(--ink)", display: "flex", gap: ".35rem", alignItems: "center",
          }}>
            <span style={{ color: "var(--muted)" }}>{spec.label}:</span>
            <span style={{ fontWeight: 500 }}>{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Expandable highlights */}
      <div style={{ marginTop: "1rem", borderTop: "1px solid #F0F0EE" }}>
        <button
          onClick={() => setOpen(v => !v)}
          style={{
            width: "100%", padding: ".9rem 1.5rem",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: ".78rem", fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          Key Features
          <ChevronDown size={15} style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform .25s",
            color: "var(--muted)",
          }} />
        </button>

        <div style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height .35s cubic-bezier(.22,1,.36,1)",
        }}>
          <div style={{ padding: ".25rem 1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: ".6rem" }}>
            {s.highlights.map(h => (
              <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem" }}>
                <CheckCircle2 size={14} style={{ color: s.accent === "#B8E0BA" ? "#3a7d44" : "#3a5f7d", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 1.5rem 1.5rem", marginTop: "auto" }}>
        <a href="#contact" style={{
          display: "inline-flex", alignItems: "center", gap: ".4rem",
          fontSize: ".78rem", fontWeight: 700, color: "var(--ink)",
          textDecoration: "none",
          borderBottom: `2px solid ${s.accent}`,
          paddingBottom: "2px",
          transition: "opacity .15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = ".7")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Enquire about this solution <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
}

// ─── Category filter pill ─────────────────────────────────────────────────────
function FilterPill({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "var(--font-mono)", fontSize: ".72rem", letterSpacing: ".06em",
      textTransform: "uppercase", padding: ".5rem 1.1rem", borderRadius: "2rem",
      border: active ? "2px solid var(--ink)" : "1px solid #D0D0CE",
      background: active ? "var(--ink)" : "#fff",
      color: active ? "#fff" : "var(--muted)",
      cursor: "pointer", transition: "all .2s",
    }}>
      {label}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SolutionsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("All");
  const { ref: heroRef, visible: heroVisible } = useInView(0.05);

  useEffect(() => { setMounted(true); }, []);

  const categories = ["All", ...Array.from(new Set(SOLUTIONS.map(s => s.category)))];
  const filtered = filter === "All" ? SOLUTIONS : SOLUTIONS.filter(s => s.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:       #F7F7F5;
          --ink:      #0D0D0D;
          --sage:     #B8E0BA;
          --panel:    #111111;
          --muted:    #6B6B6B;
          --border:   #E2E2E0;
          --font-sans: 'DM Sans', sans-serif;
          --font-mono: 'DM Mono', monospace;
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-sans);
          background: var(--bg);
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .fu { opacity:0; }
        .fu.go { animation: fadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .d1{animation-delay:.08s} .d2{animation-delay:.18s}
        .d3{animation-delay:.28s} .d4{animation-delay:.38s}

        .nav-link {
          font-size:.875rem; font-weight:500; color:var(--muted);
          text-decoration:none; transition:color .15s; white-space:nowrap;
        }
        .nav-link:hover { color:var(--ink); }
        .nav-link.active { color:var(--ink); font-weight:700; }

        .mobile-menu {
          position:fixed; inset:0; z-index:200;
          background:var(--bg);
          display:flex; flex-direction:column;
          padding:5rem 2rem 2rem; gap:2rem;
          transform:translateX(100%);
          transition:transform .3s cubic-bezier(.22,1,.36,1);
        }
        .mobile-menu.open { transform:translateX(0); }
        .mobile-menu .nav-link { font-size:1.5rem; font-weight:700; color:var(--ink); }

        @media(max-width:768px){
          .desk-nav  { display:none!important; }
          .burger    { display:flex!important; }
        }
        @media(min-width:769px){
          .burger { display:none!important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
             <Navbar />
    

      {/* ── HERO BANNER ── */}
      <section style={{
        background:"var(--ink)", color:"#fff",
        padding:"5.5rem 1.5rem 4.5rem",
        position:"relative", overflow:"hidden",
      }}>
        {/* Background grid texture */}
        <div style={{
          position:"absolute", inset:0, opacity:.04,
          backgroundImage:"linear-gradient(var(--sage) 1px, transparent 1px), linear-gradient(90deg, var(--sage) 1px, transparent 1px)",
          backgroundSize:"48px 48px",
          pointerEvents:"none",
        }}/>
        {/* Sage glow blob */}
        <div style={{
          position:"absolute", right:"-5%", top:"10%",
          width:500, height:500, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(184,224,186,.12) 0%, transparent 65%)",
          pointerEvents:"none",
        }}/>

        <div ref={heroRef} style={{ maxWidth:1200, margin:"0 auto", position:"relative" }}>
          {/* Breadcrumb */}
          <div className={`fu d1${heroVisible && mounted ? " go" : ""}`} style={{
            display:"flex", alignItems:"center", gap:".5rem",
            marginBottom:"1.5rem",
          }}>
            <a href="/" style={{ fontSize:".75rem", fontFamily:"var(--font-mono)", color:"rgba(255,255,255,.4)", textDecoration:"none" }}>Home</a>
            <span style={{ color:"rgba(255,255,255,.3)", fontSize:".7rem" }}>/</span>
            <span style={{ fontSize:".75rem", fontFamily:"var(--font-mono)", color:"var(--sage)" }}>Solutions</span>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"2rem", alignItems:"end" }}
               className="hero-inner">
            <style>{`@media(max-width:700px){.hero-inner{grid-template-columns:1fr!important}}`}</style>
            <div>
              <div className={`fu d1${heroVisible && mounted ? " go" : ""}`}>
                <span style={{
                  display:"inline-flex", alignItems:"center", gap:".5rem",
                  fontSize:".7rem", fontFamily:"var(--font-mono)",
                  color:"var(--sage)", textTransform:"uppercase", letterSpacing:".12em",
                  marginBottom:"1rem",
                }}>
                  <span style={{ width:24, height:1, background:"var(--sage)", display:"inline-block" }}/>
                  What we offer
                </span>
              </div>
              <h1 className={`fu d2${heroVisible && mounted ? " go" : ""}`} style={{
                fontSize:"clamp(2.6rem,6vw,4.8rem)",
                fontWeight:900, lineHeight:1.0,
                letterSpacing:"-.03em",
              }}>
                End-to-end<br/>
                <span style={{ color:"var(--sage)" }}>network</span><br/>
                solutions.
              </h1>
              <p className={`fu d3${heroVisible && mounted ? " go" : ""}`} style={{
                marginTop:"1.25rem",
                fontSize:".95rem", color:"rgba(255,255,255,.55)",
                lineHeight:1.7, maxWidth:500,
              }}>
                From fibre and wireless to voice, security and IT infrastructure —
                every solution is designed, installed and supported end-to-end by our team.
              </p>
            </div>

            {/* Stat block */}
            <div className={`fu d4${heroVisible && mounted ? " go" : ""}`} style={{
              display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1px",
              background:"rgba(255,255,255,.08)", borderRadius:".75rem",
              overflow:"hidden", flexShrink:0,
            }}>
              {[
                ["8", "Solutions"],
                ["100%", "End-to-end"],
                ["24 / 7", "Support"],
                ["SA-wide", "Coverage"],
              ].map(([v, l]) => (
                <div key={l} style={{
                  padding:"1.1rem 1.4rem",
                  background:"rgba(255,255,255,.04)",
                  display:"flex", flexDirection:"column", gap:".2rem",
                }}>
                  <div style={{ fontSize:"1.4rem", fontWeight:900, letterSpacing:"-.03em", color:"#fff" }}>{v}</div>
                  <div style={{ fontSize:".65rem", fontFamily:"var(--font-mono)", color:"rgba(255,255,255,.4)", textTransform:"uppercase", letterSpacing:".08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{
        background:"#fff",
        borderBottom:"1px solid var(--border)",
        position:"sticky", top:62, zIndex:50,
      }}>
        <div style={{
          maxWidth:1200, margin:"0 auto",
          padding:".9rem 1.5rem",
          display:"flex", gap:".6rem", flexWrap:"wrap", alignItems:"center",
        }}>
          <span style={{ fontSize:".7rem", fontFamily:"var(--font-mono)", color:"var(--muted)", textTransform:"uppercase", letterSpacing:".1em", marginRight:".25rem" }}>
            Filter:
          </span>
          {categories.map(c => (
            <FilterPill key={c} label={c} active={filter === c} onClick={() => setFilter(c)} />
          ))}
          <span style={{ marginLeft:"auto", fontSize:".72rem", fontFamily:"var(--font-mono)", color:"var(--muted)" }}>
            {filtered.length} solution{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── SOLUTIONS GRID ── */}
      <section id="solutions" style={{ padding:"4rem 1.5rem 5rem", background:"var(--bg)" }}>
        <div style={{
          maxWidth:1200, margin:"0 auto",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",
          gap:"1.5rem",
        }}>
          {filtered.map((s, i) => (
            <SolutionCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{
        background:"var(--sage)", padding:"4rem 1.5rem",
        position:"relative", overflow:"hidden",
      }}>
        <div style={{
          position:"absolute", left:"-3%", top:"-40%",
          width:400, height:400, borderRadius:"50%",
          background:"rgba(255,255,255,.2)",
          pointerEvents:"none",
        }}/>
        <div style={{
          maxWidth:1200, margin:"0 auto",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          gap:"2rem", flexWrap:"wrap",
        }}>
          <div>
            <h2 style={{ fontSize:"clamp(1.6rem,3.5vw,2.4rem)", fontWeight:900, color:"var(--ink)", letterSpacing:"-.02em" }}>
              Not sure which solution fits?
            </h2>
            <p style={{ marginTop:".5rem", fontSize:".9rem", color:"rgba(13,13,13,.65)" }}>
              Our engineers will assess your site and recommend the right technology stack.
            </p>
          </div>
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              background:"var(--ink)", color:"#fff",
              fontFamily:"var(--font-sans)", fontWeight:700, fontSize:".875rem",
              padding:".85rem 1.75rem", borderRadius:".55rem",
              textDecoration:"none", transition:"opacity .15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity=".85")}
            onMouseLeave={e => (e.currentTarget.style.opacity="1")}
            >
              Book a Site Assessment <ArrowRight size={15}/>
            </a>
            <a href="mailto:info@nobstech.co.za" style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              background:"rgba(255,255,255,.6)", color:"var(--ink)",
              fontFamily:"var(--font-sans)", fontWeight:700, fontSize:".875rem",
              padding:".85rem 1.75rem", borderRadius:".55rem",
              textDecoration:"none", transition:"background .15s",
              border:"none",
            }}
            onMouseEnter={e => (e.currentTarget.style.background="rgba(255,255,255,.85)")}
            onMouseLeave={e => (e.currentTarget.style.background="rgba(255,255,255,.6)")}
            >
              <Mail size={15}/> info@nobstech.co.za
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" style={{ background:"var(--ink)", color:"#fff", padding:"3.5rem 1.5rem 2rem" }}>
        <div style={{
          maxWidth:1200, margin:"0 auto",
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"2.5rem",
        }}>
          <div>
            <div style={{ fontWeight:900, fontSize:"1.05rem", letterSpacing:".06em" }}>N.O.B.S Technologies</div>
            <div style={{ fontSize:".7rem", color:"rgba(255,255,255,.45)", fontFamily:"var(--font-mono)", marginTop:".3rem" }}>
              Network Operations & Broadband Solutions
            </div>
            <div style={{ marginTop:"1.2rem", display:"flex", flexDirection:"column", gap:".6rem" }}>
              {[
                { Icon:Mail,  text:"info@nobstech.co.za" },
                { Icon:Phone, text:"nobstech.co.za" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:".5rem", fontSize:".75rem", color:"rgba(255,255,255,.55)" }}>
                  <Icon size={12} color="var(--sage)"/>{text}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontWeight:700, fontSize:".8rem", letterSpacing:".06em", textTransform:"uppercase", marginBottom:"1rem" }}>Quick Links</div>
            {NAV_LINKS.map(l => (
              <a key={l} href={`/#${l.toLowerCase().replace(" ","-")}`}
                 style={{ display:"block", fontSize:".8rem", color:"rgba(255,255,255,.55)", marginBottom:".5rem", textDecoration:"none", transition:"color .15s" }}
                 onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
                 onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,.55)")}
              >{l}</a>
            ))}
          </div>
          <div>
            <div style={{ fontWeight:700, fontSize:".8rem", letterSpacing:".06em", textTransform:"uppercase", marginBottom:"1rem" }}>Get Started</div>
            <p style={{ fontSize:".8rem", color:"rgba(255,255,255,.55)", lineHeight:1.6, marginBottom:"1.25rem" }}>
              Ready to transform your network infrastructure?
            </p>
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              background:"var(--sage)", color:"var(--ink)",
              fontFamily:"var(--font-sans)", fontWeight:700, fontSize:".8rem",
              padding:".65rem 1.3rem", borderRadius:".45rem",
              textDecoration:"none",
            }}>
              Request a Quote <ArrowRight size={13}/>
            </a>
          </div>
        </div>
        <div style={{
          borderTop:"1px solid rgba(255,255,255,.08)",
          marginTop:"2.5rem", paddingTop:"1.5rem",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:".75rem",
        }}>
          <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.3)", fontFamily:"var(--font-mono)" }}>
            © 2026 N.O.B.S Technologies. All rights reserved.
          </span>
          <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.2)", fontFamily:"var(--font-mono)" }}>
            Real Networks · Real Solutions
          </span>
        </div>
      </footer>
    </>
  );
}
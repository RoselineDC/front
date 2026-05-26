"use client";

import { useState, useEffect } from "react";
import {
  Wifi,
  Radio,
  Lock,
  Video,
  Server,
  Plug,
  PhoneCall,
  Antenna,
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "./Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
// Primary:   #0D0D0D  (near-black)
// Accent:    #B8E0BA  (sage green – matches the screenshot nodes)
// Surface:   #F7F7F5  (warm off-white)
// Mid:       #1E1E1E  (dark panel bg)
// ──────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Antenna,   label: "Fiber Optic",        sub: "Installation, termination & fusion splicing" },
  { icon: PhoneCall, label: "VoIP & PBX",          sub: "IP telephony & unified communications" },
  { icon: Plug,      label: "Structured Cabling",  sub: "UTP/STP Cat5e, Cat6 & Cat6A" },
  { icon: Wifi,      label: "Wireless",             sub: "Access points, surveys & controllers" },
  { icon: Video,     label: "CCTV",                 sub: "IP & analog cameras, NVR/DVR setup" },
  { icon: Lock,      label: "Access Control",       sub: "Biometric, card & keypad systems" },
  { icon: Radio,     label: "Microwave Radio",      sub: "Long distance & PtP wireless links" },
  { icon: Server,    label: "IT Solutions",         sub: "Routers, switches & network design" },
];




const STRIP_ITEMS = [
  "Fiber", "VoIP & PBX", "Structured Cabling", "Wireless",
  "CCTV", "Access Control", "Microwave Radio", "PtP Links",
  "IT Solutions", "Network Points",
];

// ─── Network SVG (dark panel) ─────────────────────────────────────────────────
function NetworkDiagram() {
  const cx = 160, cy = 155;

  const nodes = [
    { x: 80,  y: 68,  label: "Fiber",  labelDy: -12 },
    { x: 240, y: 68,  label: "VoIP",   labelDy: -12 },
    { x: 55,  y: 210, label: "CCTV",   labelDy: 18  },
    { x: 265, y: 210, label: "PtP",    labelDy: 18  },
    { x: 160, y: 38,  label: "WiFi",   labelDy: -12 },
    { x: 160, y: 270, label: "Access", labelDy: 18  },
  ];

  return (
    <div
      style={{
        background: "#111",
        borderRadius: "1.25rem",
        padding: "2rem",
        boxShadow: "0 32px 80px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.06)",
        width: "100%",
        maxWidth: 380,
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="0 0 320 310"
        width="100%"
        style={{ display: "block", overflow: "visible" }}
      >
        {/* Pulse rings */}
        {[72, 52, 34].map((r, i) => (
          <circle
            key={i}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#B8E0BA"
            strokeWidth={i === 2 ? 1.5 : 0.8}
            opacity={0.18 + i * 0.14}
          />
        ))}

        {/* Spoke lines */}
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={n.x} y2={n.y}
            stroke="#B8E0BA"
            strokeWidth={0.8}
            opacity={0.4}
            strokeDasharray="4 4"
          />
        ))}

        {/* Centre dot */}
        <circle cx={cx} cy={cy} r={9} fill="#B8E0BA" opacity={0.95} />
        <circle cx={cx} cy={cy} r={5} fill="#fff" opacity={0.9} />

        {/* Outer nodes + labels */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={7} fill="#B8E0BA" opacity={0.9} />
            <circle cx={n.x} cy={n.y} r={3.5} fill="#fff" opacity={0.85} />
            <text
              x={n.x}
              y={n.y + n.labelDy}
              textAnchor="middle"
              fontSize="10"
              fontFamily="'DM Mono', 'Courier New', monospace"
              fill="#B8E0BA"
              opacity={0.85}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Small caption */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          color: "rgba(184,224,186,.5)",
          marginTop: "1rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Network Topology
      </p>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HeroPage() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [mounted, setMounted]     = useState(false);
  const [hovered, setHovered]     = useState<number | null>(null);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      {/* ── Google Font import (DM Sans + DM Mono) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:      #F7F7F5;
          --ink:     #0D0D0D;
          --sage:    #B8E0BA;
          --panel:   #111111;
          --muted:   #6B6B6B;
          --border:  #E2E2E0;
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

        /* ── Fade-up animation ── */
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0);    }
        }
        .fade-up { opacity:0; }
        .fade-up.ready { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
        .delay-1 { animation-delay: .1s; }
        .delay-2 { animation-delay: .22s; }
        .delay-3 { animation-delay: .34s; }
        .delay-4 { animation-delay: .46s; }
        .delay-5 { animation-delay: .58s; }

        /* ── Marquee strip ── */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 28s linear infinite; }

        /* ── Service card hover ── */
        .svc-card {
          border: 1px solid var(--border);
          border-radius: .75rem;
          padding: 1.4rem 1.2rem;
          background: #fff;
          cursor: default;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .svc-card:hover {
          border-color: var(--sage);
          box-shadow: 0 8px 28px rgba(0,0,0,.07);
          transform: translateY(-3px);
        }

        /* ── Button styles ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--ink); color: #fff;
          font-family: var(--font-sans); font-size: .875rem; font-weight: 600;
          padding: .8rem 1.6rem; border-radius: .5rem; border: none;
          cursor: pointer; letter-spacing: .01em;
          transition: background .2s, transform .15s;
          text-decoration: none;
        }
        .btn-primary:hover { background: #2a2a2a; transform: translateY(-1px); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: .5rem;
          background: transparent; color: var(--ink);
          font-family: var(--font-sans); font-size: .875rem; font-weight: 600;
          padding: .8rem 1.6rem; border-radius: .5rem;
          border: 2px solid var(--ink); cursor: pointer; letter-spacing: .01em;
          transition: background .2s, color .2s, transform .15s;
          text-decoration: none;
        }
        .btn-outline:hover {
          background: var(--ink); color: #fff; transform: translateY(-1px);
        }

        /* ── Nav link ── */
        .nav-link {
          font-size: .875rem; font-weight: 500; color: var(--muted);
          text-decoration: none; transition: color .15s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--ink); }

        /* ── Mobile menu ── */
        .mobile-menu {
          position: fixed; inset: 0; z-index: 200;
          background: var(--bg);
          display: flex; flex-direction: column;
          padding: 5rem 2rem 2rem;
          gap: 2rem;
          transform: translateX(100%);
          transition: transform .3s cubic-bezier(.22,1,.36,1);
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu .nav-link { font-size: 1.5rem; font-weight: 700; color: var(--ink); }

        /* ── Utilities ── */
        .sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); }
      `}</style>

      {/* ── NAVBAR ── */}
         <Navbar />


      {/* ── HERO ── */}
      <section id="home" style={{
        background: "var(--bg)",
        padding: "5rem 1.5rem 4rem",
        overflow: "hidden",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
        >
          <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important}}`}</style>

          {/* Left text */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1.5rem" }}>
            {/* Eyebrow */}
            <div className={`fade-up delay-1${mounted ? " ready" : ""}`}
                 style={{ display:"inline-flex", alignItems:"center", gap:".5rem" }}>
              <span style={{
                display:"inline-block", width:8, height:8, borderRadius:"50%",
                background:"var(--sage)",
              }} />
              <span style={{ fontSize:".75rem", fontFamily:"var(--font-mono)", color:"var(--muted)", letterSpacing:".1em", textTransform:"uppercase" }}>
                Network Operations & Broadband Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className={`fade-up delay-2${mounted ? " ready" : ""}`} style={{
              fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-.02em",
              color: "var(--ink)",
            }}>
              N.O.B.S<br />
              <span style={{ color: "var(--ink)" }}>Technologies</span>
            </h1>

            {/* Body */}
            <p className={`fade-up delay-3${mounted ? " ready" : ""}`} style={{
              fontSize: ".975rem", lineHeight: 1.7, color: "var(--muted)", maxWidth: 480,
            }}>
              Professional, reliable and end-to-end network infrastructure, fiber,
              wireless, security and IT solutions tailored to your needs.
            </p>

            {/* Tagline */}
            <p className={`fade-up delay-4${mounted ? " ready" : ""}`} style={{
              fontFamily:"var(--font-mono)", fontSize:".85rem", color:"var(--muted)",
              fontStyle:"italic",
            }}>
              "Real Networks. Real Solutions."
            </p>

            {/* CTAs */}
            <div className={`fade-up delay-5${mounted ? " ready" : ""}`}
                 style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              <a href="#services" className="btn-primary">
                Our Services <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>

            {/* Stats row */}
            <div className={`fade-up delay-5${mounted ? " ready" : ""}`}
                 style={{ display:"flex", gap:"2.5rem", paddingTop:".5rem", flexWrap:"wrap" }}>
              {[["8+", "Services"], ["100%", "Reliable"], ["24/7", "Support"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div style={{ fontSize:"1.5rem", fontWeight:900, color:"var(--ink)", letterSpacing:"-.03em" }}>{val}</div>
                  <div style={{ fontSize:".7rem", fontFamily:"var(--font-mono)", color:"var(--muted)", textTransform:"uppercase", letterSpacing:".08em" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dark network panel */}
          <div className={`fade-up delay-3${mounted ? " ready" : ""}`}>
            <NetworkDiagram />
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{
        borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
        background: "#fff", overflow: "hidden", padding: ".9rem 0",
      }}>
        <div className="marquee-track" style={{ display:"flex", gap:"2rem", width:"max-content" }}>
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((item, i) => (
            <span key={i} style={{
              fontSize:".7rem", fontFamily:"var(--font-mono)", color:"var(--muted)",
              textTransform:"uppercase", letterSpacing:".12em", whiteSpace:"nowrap",
            }}>
              {item}
              <span style={{ marginLeft:"2rem", color:"var(--sage)" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding:"5rem 1.5rem", background:"var(--bg)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:900, letterSpacing:"-.02em", color:"var(--ink)" }}>
              Our Services
            </h2>
            <div style={{ width:40, height:3, borderRadius:4, background:"var(--sage)", margin:"1rem auto 0" }} />
          </div>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",
            gap:"1.25rem",
          }}>
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="svc-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ position:"relative", overflow:"hidden" }}
                >
                  {/* Sage glow on hover */}
                  <div style={{
                    position:"absolute", inset:0,
                    background: `radial-gradient(circle at 20% 20%, rgba(184,224,186,.18) 0%, transparent 70%)`,
                    opacity: hovered === i ? 1 : 0,
                    transition:"opacity .3s",
                    pointerEvents:"none",
                  }} />
                  <div style={{ position:"relative", display:"flex", flexDirection:"column", gap:".75rem" }}>
                    <div style={{
                      width:40, height:40, borderRadius:".6rem",
                      background: hovered === i ? "var(--sage)" : "#F0F7F0",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      transition:"background .2s",
                    }}>
                      <Icon size={18} color={hovered === i ? "var(--ink)" : "#4A7C50"} />
                    </div>
                    <div style={{ fontWeight:700, fontSize:".875rem", color:"var(--ink)" }}>{s.label}</div>
                    <div style={{ fontSize:".75rem", color:"var(--muted)", lineHeight:1.6 }}>{s.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" style={{ background:"var(--ink)", color:"#fff", padding:"3.5rem 1.5rem 2rem" }}>
        <div style={{
          maxWidth:1200, margin:"0 auto",
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
          gap:"2.5rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontWeight:900, fontSize:"1.05rem", letterSpacing:".06em" }}>N.O.B.S Technologies</div>
            <div style={{ fontSize:".7rem", color:"rgba(255,255,255,.5)", fontFamily:"var(--font-mono)", marginTop:".3rem" }}>
              Network Operations & Broadband Solutions
            </div>
            <div style={{ marginTop:"1.2rem", display:"flex", flexDirection:"column", gap:".6rem" }}>
              {[
                { Icon:Mail,  text:"info@nobstech.co.za" },
                { Icon:Phone, text:"nobstech.co.za" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:".5rem", fontSize:".75rem", color:"rgba(255,255,255,.6)" }}>
                  <Icon size={12} color="var(--sage)" />{text}
                </div>
              ))}
            </div>
          </div> 

          {/* CTA */}
          <div>
            <div style={{ fontWeight:700, fontSize:".8rem", letterSpacing:".06em", textTransform:"uppercase", marginBottom:"1rem" }}>Get Started</div>
            <p style={{ fontSize:".8rem", color:"rgba(255,255,255,.6)", lineHeight:1.6, marginBottom:"1.25rem" }}>
              Ready to transform your network infrastructure?
            </p>
            <a href="#contact" style={{
              display:"inline-flex", alignItems:"center", gap:".5rem",
              background:"var(--sage)", color:"var(--ink)",
              fontFamily:"var(--font-sans)", fontWeight:700, fontSize:".8rem",
              padding:".65rem 1.3rem", borderRadius:".45rem",
              textDecoration:"none", transition:"opacity .15s",
            }}
            onMouseEnter={e=>(e.currentTarget.style.opacity=".85")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}
            >
              Request a Quote <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div style={{
          borderTop:"1px solid rgba(255,255,255,.1)",
          marginTop:"2.5rem", paddingTop:"1.5rem",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          flexWrap:"wrap", gap:".75rem",
        }}>
          <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.35)", fontFamily:"var(--font-mono)" }}>
            © 2026 N.O.B.S Technologies. All rights reserved.
          </span>
          <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.25)", fontFamily:"var(--font-mono)" }}>
            Real Networks · Real Solutions
          </span>
        </div>
      </footer>
    </>
  );
}
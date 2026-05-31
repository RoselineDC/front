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
  CheckCircle,
  Users,
  Award,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
} from "lucide-react";
import Navbar from "./Navbar";

// ─── Design tokens ────────────────────────────────────────────────────────────
// Primary:   #0D0D0D  (near-black)
// Accent:    #7AC943  (bright green)
// Surface:   #FFFFFF  (white)
// Dark:      #1A1A1A  (dark hero bg)
// ──────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Video,
    label: "CCTV & SURVEILLANCE",
    description: "Advanced CCTV systems for complete protection and peace of mind.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Lock,
    label: "ACCESS CONTROL",
    description: "Secure access control solutions for offices, businesses and enterprises.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Wifi,
    label: "NETWORKING",
    description: "Reliable networking solutions including switches, routers and WiFi.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Antenna,
    label: "WIRELESS LINKS",
    description: "High speed wireless connections for long distance and remote locations.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Server,
    label: "DATA CENTRE & POWER",
    description: "Power distribution units, UPS and more for critical infrastructure.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: PhoneCall,
    label: "VOIP & COMMUNICATIONS",
    description: "Cost effective VoIP phone systems for seamless communication.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Plug,
    label: "STRUCTURED CABLING",
    description: "Professional cabling solutions for voice, data and network infrastructure.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
  {
    icon: Radio,
    label: "MANAGED IT SERVICES",
    description: "Proactive monitoring and IT support to keep your business running.",
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
  },
];

const FEATURES = [
  { icon: CheckCircle, text: "Experienced & Certified Team" },
  { icon: CheckCircle, text: "Quality Products & Solutions" },
  { icon: CheckCircle, text: "Tailored Solutions for Every Need" },
  { icon: CheckCircle, text: "Fast & Reliable Delivery" },
  { icon: CheckCircle, text: "Project & Installation Services" },
  { icon: CheckCircle, text: "After Sales Support" },
];

const STATS = [
  { value: "10+", label: "YEARS OF EXPERIENCE", icon: Award },
  { value: "1000+", label: "PROJECTS COMPLETED", icon: CheckCircle },
  { value: "500+", label: "HAPPY CLIENTS", icon: Users },
  { value: "24/7", label: "TECHNICAL SUPPORT", icon: Headphones },
];

const BRANDS = [
  "Cisco",
  "Mikrotik",
  "Hikvision",
  "APC",
  "Dell",
  "Fortinet",
  "Ubiquiti",
  "Aihua",
];

const PROJECTS = [
  { title: "Data Centre Installation", location: "Cape Town" },
  { title: "Warehouse Surveillance System", location: "Johannesburg" },
  { title: "Access Control Installation", location: "Sandton" },
  { title: "Wireless Link Setup", location: "Midrand" },
  { title: "Office Network Infrastructure", location: "Pretoria" },
];

const TESTIMONIALS = [
  {
    name: "David M.",
    role: "Operations Manager",
    rating: 3,
    text: "N.O.B.S Technologies provided excellent service from start to finish. Their team is professional, knowledgeable and always goes the extra mile.",
  },
  {
    name: "Sarah K.",
    role: "IT Manager",
    rating: 5,
    text: "Reliable, efficient and great after-sales support. We highly recommend N.O.B.S for any IT infrastructure needs.",
  },
  {
    name: "Johan V.",
    role: "Facility Manager",
    rating: 3,
    text: "The installation was seamless and the team's attention to detail is unmatched. Thank you N.O.B.S Technologies!",
  },
];

const HERO_ICONS = [
  { icon: Video, label: "CCTV & SECURITY" },
  { icon: Wifi, label: "NETWORKING" },
  { icon: Lock, label: "ACCESS CONTROL" },
  { icon: PhoneCall, label: "VOIP SYSTEMS" },
  { icon: Antenna, label: "WIRELESS LINKS" },
  { icon: Server, label: "DATA CENTRE" },
];

export default function HeroPage() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── Google Font import ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg:      #FFFFFF;
          --ink:     #0D0D0D;
          --accent:  #7AC943;
          --dark:    #1A1A1A;
          --muted:   #666666;
          --border:  #E5E5E5;
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

        /* ── Button styles ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--accent); color: #fff;
          font-family: var(--font-sans); font-size: .875rem; font-weight: 700;
          padding: .85rem 1.8rem; border-radius: .4rem; border: none;
          cursor: pointer; letter-spacing: .01em;
          transition: background .2s, transform .15s;
          text-decoration: none;
          text-transform: uppercase;
        }
        .btn-primary:hover { background: #6ba835; transform: translateY(-2px); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: .5rem;
          background: transparent; color: #fff;
          font-family: var(--font-sans); font-size: .875rem; font-weight: 700;
          padding: .85rem 1.8rem; border-radius: .4rem;
          border: 2px solid #fff; cursor: pointer; letter-spacing: .01em;
          transition: background .2s, color .2s, transform .15s;
          text-decoration: none;
          text-transform: uppercase;
        }
        .btn-outline:hover {
          background: #fff; color: var(--dark); transform: translateY(-2px);
        }

        .btn-dark {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--ink); color: #fff;
          font-family: var(--font-sans); font-size: .875rem; font-weight: 700;
          padding: .85rem 1.8rem; border-radius: .4rem; border: none;
          cursor: pointer; letter-spacing: .01em;
          transition: background .2s, transform .15s;
          text-decoration: none;
          text-transform: uppercase;
        }
        .btn-dark:hover { background: #333; transform: translateY(-2px); }

        /* ── Service card ── */
        .svc-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: .75rem;
          overflow: hidden;
          transition: border-color .2s, box-shadow .2s, transform .2s;
          cursor: pointer;
        }
        .svc-card:hover {
          border-color: var(--accent);
          box-shadow: 0 12px 32px rgba(0,0,0,.08);
          transform: translateY(-4px);
        }
        .svc-card-image {
          width: 100%; height: 160px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .svc-card-content {
          padding: 1.5rem;
          display: flex; flex-direction: column; gap: .75rem;
        }
        .svc-icon {
          width: 40px; height: 40px; border-radius: .5rem;
          background: #F0F7F0;
          display: flex; align-items: center; justify-content: center;
          color: #4A7C50;
        }
        .svc-card:hover .svc-icon {
          background: var(--accent);
          color: #fff;
        }

        /* ── Responsive ── */
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important}
          .services-grid{grid-template-columns:repeat(2,1fr)!important}
          .hero-icons{flex-wrap:wrap!important}
        }
        @media(max-width:640px){
          .services-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:repeat(2,1fr)!important}
          .projects-grid{grid-template-columns:1fr!important}
          .hero-icons{flex-wrap:wrap!important; gap: 1rem!important}
        }
      `}</style>

      {/* ── TOP HEADER BAR ── */}
      <div style={{
        background: "var(--dark)",
        color: "#fff",
        padding: ".75rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: ".8rem",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <Phone size={14} color="var(--accent)" />
            <a href="tel:0100230378" style={{ color: "#fff", textDecoration: "none" }}>
              010 023 0378
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <Mail size={14} color="var(--accent)" />
            <a href="mailto:info@nobstechnologies.co.za" style={{ color: "#fff", textDecoration: "none" }}>
              info@nobstechnologies.co.za
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <MapPin size={14} color="var(--accent)" />
            <span>Unit 5, Gateway Business Park, Midrand, South Africa</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {["f", "📷", "in", "🐦"].map((social, i) => (
            <a key={i} href="#" style={{ color: "rgba(255,255,255,.6)", textDecoration: "none", fontSize: ".75rem" }}>
              {social}
            </a>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)",
          color: "#fff",
          padding: "4rem 1.5rem 3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Headline */}
            <h1
              className={`fade-up delay-1${mounted ? " ready" : ""}`}
              style={{
                fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-.02em",
              }}
            >
              SMART SOLUTIONS.
              <br />
              <span style={{ color: "var(--accent)" }}>SECURE CONNECTIONS.</span>
            </h1>

            {/* Body */}
            <p
              className={`fade-up delay-2${mounted ? " ready" : ""}`}
              style={{
                fontSize: ".975rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,.7)",
                maxWidth: 480,
              }}
            >
              Professional technology solutions designed to connect, protect and power your world.
            </p>

            {/* Icon Row */}
            <div
              className={`fade-up delay-3${mounted ? " ready" : ""} hero-icons`}
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "1rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(122, 201, 67, .2)",
              }}
            >
              {HERO_ICONS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem" }}>
                    <Icon size={24} color="var(--accent)" />
                    <span style={{ fontSize: ".65rem", color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".05em", textAlign: "center", width: "80px" }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              className={`fade-up delay-4${mounted ? " ready" : ""}`}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a href="#services" className="btn-primary">
                EXPLORE SOLUTIONS <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-outline">
                CONTACT US <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right: Tech imagery */}
          <div
            className={`fade-up delay-3${mounted ? " ready" : ""}`}
            style={{
              background: "linear-gradient(135deg, rgba(122, 201, 67, .1) 0%, rgba(122, 201, 67, .05) 100%)",
              borderRadius: "1rem",
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(122, 201, 67, .3)",
              position: "relative",
              overflow: "hidden",
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient id=%22grid%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgba(122,201,67,0.1);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgba(122,201,67,0.05);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')",
            }}
          >
            <div style={{ textAlign: "center", zIndex: 1 }}>
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🖥️</div>
              <div style={{ color: "rgba(122, 201, 67, .5)", fontSize: ".9rem", fontWeight: 600 }}>
                Technology Infrastructure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="services" style={{ padding: "5rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-.02em",
                color: "var(--ink)",
              }}
            >
              OUR <span style={{ color: "var(--accent)" }}>SOLUTIONS</span>
            </h2>
            <p
              style={{
                fontSize: ".95rem",
                color: "var(--muted)",
                marginTop: "1rem",
              }}
            >
              End-to-end technology solutions for a connected world.
            </p>
          </div>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="svc-card"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="svc-card-image">
                    <Icon size={32} color="rgba(122, 201, 67, .4)" />
                  </div>
                  <div className="svc-card-content">
                    <div className="svc-icon">
                      <Icon size={18} />
                    </div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: ".85rem",
                        color: "var(--ink)",
                        textTransform: "uppercase",
                        letterSpacing: ".05em",
                      }}
                    >
                      {s.label}
                    </h3>
                    <p
                      style={{
                        fontSize: ".75rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.description}
                    </p>
                    <a
                      href="#"
                      style={{
                        fontSize: ".75rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: ".05em",
                        marginTop: ".5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: ".3rem",
                      }}
                    >
                      LEARN MORE <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: ".85rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  marginBottom: ".5rem",
                }}
              >
                ABOUT N.O.B.S TECHNOLOGIES
              </h3>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  color: "var(--ink)",
                }}
              >
                SMART SOLUTIONS FOR A CONNECTED FUTURE
              </h2>
              <p
                style={{
                  fontSize: ".95rem",
                  lineHeight: 1.8,
                  color: "var(--muted)",
                  marginBottom: "2rem",
                }}
              >
                We provide expert, reliable and scalable technology solutions to businesses of all sizes.
                From infrastructure to support, we are committed to powering your success.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                      <Icon size={20} color="var(--accent)" style={{ marginTop: ".2rem", flexShrink: 0 }} />
                      <span style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--ink)" }}>
                        {f.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <a href="#" className="btn-dark">
                READ MORE ABOUT US <ArrowRight size={15} />
              </a>
            </div>

            {/* Stats */}
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      padding: "2rem",
                      borderRadius: ".75rem",
                      border: "1px solid var(--border)",
                      textAlign: "center",
                    }}
                  >
                    <Icon size={32} color="var(--accent)" style={{ margin: "0 auto 1rem" }} />
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: 900,
                        color: "var(--accent)",
                        marginBottom: ".5rem",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: ".7rem",
                        fontWeight: 700,
                        color: "var(--muted)",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ padding: "4rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h3
            style={{
              fontSize: ".85rem",
              fontWeight: 700,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              marginBottom: "2rem",
            }}
          >
            WE WORK WITH THE BEST BRANDS
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {BRANDS.map((brand, i) => (
              <div
                key={i}
                style={{
                  fontSize: ".85rem",
                  fontWeight: 700,
                  color: "var(--muted)",
                  opacity: 0.6,
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: "5rem 1.5rem", background: "#FAFAFA" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-.02em",
                color: "var(--ink)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>FEATURED</span> PROJECTS
            </h2>
          </div>

          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "1.5rem",
            }}
          >
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#1a1a1a",
                  borderRadius: ".75rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div
                  style={{
                    height: 200,
                    background: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "rgba(122, 201, 67, .3)", fontSize: "2rem" }}>📷</span>
                </div>
                <div style={{ padding: "1.25rem", color: "#fff" }}>
                  <h4 style={{ fontSize: ".85rem", fontWeight: 700, marginBottom: ".3rem" }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: ".75rem", color: "rgba(255,255,255,.5)" }}>
                    {p.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-.02em",
                color: "var(--ink)",
              }}
            >
              WHAT OUR <span style={{ color: "var(--accent)" }}>CLIENTS</span> SAY
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: ".75rem",
                  padding: "2rem",
                }}
              >
                <div style={{ display: "flex", gap: ".25rem", marginBottom: "1rem" }}>
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={j < t.rating ? "var(--accent)" : "#ddd"}
                      color={j < t.rating ? "var(--accent)" : "#ddd"}
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: ".9rem",
                    lineHeight: 1.8,
                    color: "var(--muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: ".85rem",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".85rem", color: "var(--ink)" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" style={{ background: "var(--dark)", color: "#fff", padding: "4rem 1.5rem 2rem" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: ".06em", marginBottom: "1rem" }}>
              QUICK LINKS
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {["Home", "About Us", "Services", "Products", "Projects", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: ".85rem",
                      color: "rgba(255,255,255,.6)",
                      textDecoration: "none",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: ".06em", marginBottom: "1rem" }}>
              SOLUTIONS
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".75rem" }}>
              {[
                "CCTV & Surveillance",
                "Access Control",
                "Networking",
                "Wireless Links",
                "Data Centre & Power",
                "VoIP & Communications",
                "Structured Cabling",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: ".85rem",
                      color: "rgba(255,255,255,.6)",
                      textDecoration: "none",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: ".06em", marginBottom: "1rem" }}>
              CONTACT US
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: ".75rem" }}>
                <MapPin size={16} color="var(--accent)" style={{ marginTop: ".2rem", flexShrink: 0 }} />
                <div style={{ fontSize: ".85rem", color: "rgba(255,255,255,.7)", lineHeight: 1.6 }}>
                  Unit 5, Gateway Business Park, Midrand, South Africa
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <Phone size={16} color="var(--accent)" />
                <a
                  href="tel:0100230378"
                  style={{
                    fontSize: ".85rem",
                    color: "rgba(255,255,255,.7)",
                    textDecoration: "none",
                  }}
                >
                  010 023 0378
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                <Mail size={16} color="var(--accent)" />
                <a
                  href="mailto:info@nobstechnologies.co.za"
                  style={{
                    fontSize: ".85rem",
                    color: "rgba(255,255,255,.7)",
                    textDecoration: "none",
                  }}
                >
                  info@nobstechnologies.co.za
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <div style={{ fontWeight: 900, fontSize: "1.1rem", letterSpacing: ".06em", marginBottom: "1rem" }}>
              GET IN TOUCH
            </div>
            <p style={{ fontSize: ".85rem", color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Ready to transform your network infrastructure? Contact us today.
            </p>
            <a href="#" className="btn-primary">
              SEND MESSAGE
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,.35)" }}>
            © 2026 N.O.B.S Technologies. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Facebook", "Instagram", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: ".75rem",
                  color: "rgba(255,255,255,.35)",
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
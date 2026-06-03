"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

/**
 * DESIGN TOKENS (matching your home page):
 * Primary:   #0D0D0D  (near-black)
 * Accent:    #B8E0BA  (sage green)
 * Surface:   #F7F7F5  (warm off-white)
 * Fonts:     DM Sans (body), DM Mono (accents)
 */

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise Fiber Network",
    category: "Fiber Optic Infrastructure",
    description: "Complete fiber optic network deployment for a Fortune 500 financial institution across 15 office locations.",
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
    description: "Implementation of enterprise VoIP and unified communications system supporting 500+ users across distributed offices.",
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
    description: "Design and installation of Cat6A structured cabling infrastructure for a tier-3 data center facility.",
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
    description: "Large-scale WiFi 6 deployment covering 150,000 sqm university campus with seamless roaming.",
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
    description: "End-to-end security solution combining biometric access control with 4K IP camera network.",
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
    description: "Long-distance microwave radio link connecting two data centers 85km apart with redundant paths.",
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
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = Array.from(new Set(PROJECTS.map(p => p.category)));
  const filteredProjects = selectedCategory
    ? PROJECTS.filter(p => p.category === selectedCategory)
    : PROJECTS;

  return (
    <>
      {/* HEADER */}
      <section style={{
        background: "#F7F7F5",
        padding: "5rem 1.5rem 3rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: "2rem",
        }}>
          {/* Eyebrow */}
          <div className={`fade-up delay-1${mounted ? " ready" : ""}`}
               style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", width: "fit-content" }}>
            <span style={{
              display: "inline-block", width: 8, height: 8, borderRadius: "50%",
              background: "#B8E0BA",
            }} />
            <span style={{ fontSize: ".75rem", fontFamily: "'DM Mono', monospace", color: "#6B6B6B", letterSpacing: ".1em", textTransform: "uppercase" }}>
              Our Work
            </span>
          </div>

          {/* Headline */}
          <h1 className={`fade-up delay-2${mounted ? " ready" : ""}`} style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            color: "#0D0D0D",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Delivered Projects
          </h1>

          {/* Description */}
          <p className={`fade-up delay-3${mounted ? " ready" : ""}`} style={{
            fontSize: ".975rem", lineHeight: 1.7, color: "#6B6B6B", maxWidth: 600,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Explore our portfolio of successfully completed network infrastructure, communication systems, and security solutions across diverse industries and scales.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section style={{
        background: "#F7F7F5",
        padding: "2.5rem 1.5rem",
        borderBottom: "1px solid #E2E2E0",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          <div style={{ fontSize: ".875rem", fontWeight: 600, color: "#6B6B6B", letterSpacing: ".05em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>
            Filter by Category
          </div>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: ".75rem",
          }}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`filter-btn${selectedCategory === null ? " active" : ""}`}
            >
              All Projects
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`filter-btn${selectedCategory === cat ? " active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{
        background: "#F7F7F5",
        padding: "4rem 1.5rem",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "2rem",
        }}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card fade-up${mounted ? " ready" : ""}`}
              style={{
                animationDelay: `${0.1 + idx * 0.12}s`,
              }}
            >
              {/* Year badge */}
              <div style={{
                display: "inline-block",
                background: "rgba(184,224,186,.15)",
                color: "#B8E0BA",
                fontSize: ".7rem",
                padding: ".4rem .8rem",
                borderRadius: ".35rem",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: ".05em",
                marginBottom: "1rem",
              }}>
                {project.year}
              </div>

              {/* Category */}
              <div style={{
                fontSize: ".75rem", color: "#6B6B6B", fontFamily: "'DM Mono', monospace",
                letterSpacing: ".05em", textTransform: "uppercase", marginBottom: ".5rem",
              }}>
                {project.category}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "1.4rem", fontWeight: 700, color: "#0D0D0D",
                lineHeight: 1.2, marginBottom: "1rem", fontFamily: "'DM Sans', sans-serif",
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: ".9rem", lineHeight: 1.6, color: "#6B6B6B",
                marginBottom: "1.5rem", fontFamily: "'DM Sans', sans-serif",
              }}>
                {project.description}
              </p>

              {/* Metrics */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem", marginBottom: "1.5rem",
                paddingBottom: "1.5rem", borderBottom: "1px solid #E2E2E0",
              }}>
                {project.metrics.map((m, i) => (
                  <div key={i} className="metric-item">
                    <div className="metric-value">{m.value}</div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1.5rem",
              }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* CTA */}
              <button style={{
                display: "inline-flex", alignItems: "center", gap: ".5rem",
                background: "transparent", border: "none",
                color: "#B8E0BA", fontFamily: "'DM Sans', sans-serif",
                fontSize: ".875rem", fontWeight: 600, cursor: "pointer",
                transition: "gap .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = "1rem")}
              onMouseLeave={e => (e.currentTarget.style.gap = ".5rem")}
              >
                View Case Study <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        background: "#0D0D0D",
        padding: "5rem 1.5rem",
        color: "#fff",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          textAlign: "center",
          display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center",
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 900, lineHeight: 1.2,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            fontSize: ".975rem", lineHeight: 1.7, color: "rgba(255,255,255,.7)",
            maxWidth: 600, fontFamily: "'DM Sans', sans-serif",
          }}>
            Let's discuss how we can design and deploy the perfect network infrastructure solution for your organization.
          </p>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            background: "#B8E0BA", color: "#0D0D0D",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: ".875rem",
            padding: ".8rem 1.6rem", borderRadius: ".5rem",
            textDecoration: "none", transition: "opacity .2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = ".85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
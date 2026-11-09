import Link from "next/link";
import { site, stats } from "@/lib/site";
import { ArrowIcon } from "./icons/arrow-icon";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden text-[var(--hero-fg)]"
      style={{ background: "var(--hero-bg)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 90% 0%, rgba(120, 200, 90, 0.35), transparent 55%), radial-gradient(ellipse 50% 45% at 0% 100%, rgba(60, 120, 70, 0.2), transparent 50%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="mb-5 inline-block rounded-full border border-white/20 px-3.5 py-1 text-xs font-semibold tracking-widest text-white/80 uppercase">
            Software · Telecom · AI
          </p>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {site.name} builds what operators run in production.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-bright)]"
            >
              Explore services
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our products
            </Link>
          </div>
          <dl className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-lg font-semibold text-white">{s.value}</dt>
                <dd className="mt-1 text-sm text-white/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <svg
      viewBox="0 0 420 360"
      className="w-full max-w-md drop-shadow-2xl"
      role="img"
      aria-label="Connected stack: mobile apps, telecom core, AI layer"
    >
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9ee07a" />
          <stop offset="100%" stopColor="#4a7a3d" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d6b8a" />
          <stop offset="100%" stopColor="#1a3344" />
        </linearGradient>
      </defs>
      <rect x="24" y="40" width="120" height="88" rx="12" fill="url(#g2)" opacity="0.95" />
      <text x="84" y="78" textAnchor="middle" fill="#dce8f0" fontSize="11" fontWeight="700">
        Web &amp; Mobile
      </text>
      <text x="84" y="96" textAnchor="middle" fill="#9bb8d0" fontSize="9" fontFamily="monospace">
        APIs · UX
      </text>
      <rect x="150" y="130" width="120" height="100" rx="12" fill="url(#g1)" />
      <text x="210" y="172" textAnchor="middle" fill="#0d120c" fontSize="12" fontWeight="700">
        SigWay Core
      </text>
      <text x="210" y="190" textAnchor="middle" fill="#1a2418" fontSize="9" fontFamily="monospace">
        USSD · SMS · MFS
      </text>
      <rect x="276" y="220" width="120" height="88" rx="12" fill="#2a2f28" stroke="#6bc85a" strokeWidth="1.5" />
      <text x="336" y="258" textAnchor="middle" fill="#c5e4b8" fontSize="11" fontWeight="700">
        AI Layer
      </text>
      <text x="336" y="276" textAnchor="middle" fill="#8faa7e" fontSize="9" fontFamily="monospace">
        automate · assist
      </text>
      <path
        d="M144 84 C165 110, 185 125, 210 130 M270 180 C290 195, 310 210, 330 220"
        stroke="#c5e4a8"
        strokeWidth="2"
        strokeDasharray="6 8"
        fill="none"
      />
      <circle cx="210" cy="130" r="5" fill="#fff" fillOpacity="0.9" />
      <circle cx="330" cy="220" r="4" fill="#9ee07a" />
    </svg>
  );
}

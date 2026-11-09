import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon } from "./icons/arrow-icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent-soft)] blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--ink)] text-balance md:text-5xl lg:text-[3.1rem] lg:leading-[1.1]">
            Software you can run on a <span className="text-[var(--accent-dark)]">live network</span>.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--muted)]">{site.tagline}</p>
          <p className="mt-3 max-w-lg text-[var(--muted)]">
            From subscriber-facing apps to USSD and AI behind the scenes—we help teams ship and keep it running.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-dark)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink)]"
            >
              Start a conversation
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)]"
            >
              See our products
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <MotionFigure />
        </div>
      </div>
    </section>
  );
}

function MotionFigure() {
  return (
    <div className="relative rounded-3xl border border-[var(--line)] bg-white p-8 shadow-[0_24px_80px_rgba(13,18,12,0.08)] md:p-10">
      <Image
        src="/logo.jpg"
        alt={site.name}
        width={360}
        height={90}
        className="h-auto w-full max-w-[320px] object-contain"
        priority
      />
      <ul className="mt-8 space-y-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)]">
        <li className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          Mobile &amp; web products
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          Telecom platforms in production
        </li>
        <li className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          AI woven into real workflows
        </li>
      </ul>
    </div>
  );
}

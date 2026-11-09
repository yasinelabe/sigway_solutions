import Image from "next/image";
import { partners } from "@/lib/site";

export function PartnersSection() {
  const track = [...partners, ...partners];

  return (
    <section id="partners" className="border-y border-[var(--line)] bg-[var(--paper)] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--ink)]">Partners &amp; customers</h2>
        <p className="mt-2 text-[var(--muted)]">
          Operators who run SigWay and related platforms in production.
        </p>
      </div>
      <div
        className="partners-marquee relative mt-10 overflow-hidden"
        role="region"
        aria-label="Partner logos"
      >
        <ul className="partners-track flex w-max items-center gap-0">
          {track.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-2 px-12 py-4"
              aria-hidden={i >= partners.length ? true : undefined}
            >
              <Image
                src={p.logo}
                alt={i < partners.length ? p.name : ""}
                width={p.width}
                height={p.height}
                className="h-12 w-auto max-w-[200px] object-contain"
              />
              <span className="text-xs font-semibold tracking-wide text-[var(--muted)] uppercase">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

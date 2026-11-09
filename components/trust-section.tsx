import { partners } from "@/lib/site";
import Image from "next/image";

export function TrustSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)] py-10">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-sm font-medium text-[var(--muted)]">
          Trusted by operators running our software every day
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {partners.map((p) => (
            <li key={p.name} className="flex flex-col items-center gap-2">
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-11 w-auto max-w-[180px] object-contain"
              />
              <span className="text-xs font-medium text-[var(--muted)]">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

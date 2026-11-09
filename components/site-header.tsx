import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt={site.name}
            width={220}
            height={52}
            className="h-10 w-auto max-w-[min(220px,50vw)] object-contain"
            priority
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[var(--muted)]">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--accent-dark)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--surface)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[var(--ink)]">{site.name}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">Mobile · Web · Telecom · AI</p>
        </div>
        <p className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
          <Link href="/privacy" className="hover:text-[var(--accent-dark)]">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[var(--accent-dark)]">
            Terms
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-[var(--accent-dark)]">
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}

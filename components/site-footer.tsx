import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center text-sm text-[var(--muted)]">
        <p>
          <strong className="text-[var(--ink)]">{site.name}</strong> — mobile, web, telecom &amp; AI
          software
        </p>
        <p className="flex flex-wrap justify-center gap-3">
          <Link href="/privacy" className="hover:text-[var(--accent-dark)]">
            Privacy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/terms" className="hover:text-[var(--accent-dark)]">
            Terms
          </Link>
        </p>
        <p>© {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

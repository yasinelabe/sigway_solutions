import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold text-[var(--ink)]">Terms of use</h1>
      <p className="mt-4 text-[var(--muted)] leading-relaxed">
        This site is provided by {site.name} for general information about our software and services.
        Content is indicative and does not constitute a binding offer. Product names, roadmaps, and pricing
        are subject to change and formal agreement.
      </p>
      <p className="mt-4 text-[var(--muted)] leading-relaxed">
        By using this website you agree not to misuse it or attempt to disrupt its operation. Software
        licenses and support are governed by separate commercial agreements.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-[var(--accent-dark)]">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}

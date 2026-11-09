import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 prose prose-neutral">
      <h1 className="text-3xl font-bold text-[var(--ink)]">Privacy policy</h1>
      <p className="mt-4 text-[var(--muted)] leading-relaxed">
        {site.name} respects your privacy. We collect only information you provide when contacting us
        (email, phone, message content) to respond to inquiries and deliver services. We do not sell
        personal data. Data may be processed on infrastructure used to host our website and communications
        tools.
      </p>
      <p className="mt-4 text-[var(--muted)] leading-relaxed">
        For questions or data requests, contact{" "}
        <a href={`mailto:${site.email}`} className="text-[var(--accent-dark)] font-medium">
          {site.email}
        </a>
        .
      </p>
      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-[var(--accent-dark)]">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}

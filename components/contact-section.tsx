import Link from "next/link";
import { site } from "@/lib/site";
import { ChatIcon } from "./icons/chat-icon";
import { MailIcon } from "./icons/mail-icon";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-[var(--line)] bg-[var(--accent-soft)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <ContactIntro />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href={site.whatsapp}
            className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-8 transition hover:border-[var(--accent)] hover:shadow-md"
          >
            <ChatIcon className="h-9 w-9 text-[var(--accent-dark)]" />
            <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">WhatsApp</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">Usually the quickest way to reach us</p>
            <span className="mt-4 font-semibold text-[var(--accent-dark)] group-hover:underline">
              {site.phone}
            </span>
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="group flex flex-col rounded-2xl border border-[var(--line)] bg-white p-8 transition hover:border-[var(--accent)] hover:shadow-md"
          >
            <MailIcon className="h-9 w-9 text-[var(--accent-dark)]" />
            <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">Email</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">Specs, proposals, or security reviews</p>
            <span className="mt-4 break-all font-semibold text-[var(--accent-dark)] group-hover:underline">
              {site.email}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactIntro() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        Tell us what you&apos;re building
      </h2>
      <p className="mt-4 max-w-xl text-lg text-[var(--muted)]">
        A few sentences are enough. We&apos;ll reply with next steps—not a generic sales script.
      </p>
    </>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { ChatIcon } from "./icons/chat-icon";
import { MailIcon } from "./icons/mail-icon";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--hero-bg)] py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight">Contact us</h2>
        <p className="mt-3 max-w-xl text-white/80">
          Demos, RFPs, integration reviews, and deployment planning for telecom and software programs.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
            <ChatIcon className="mx-auto h-10 w-10 text-[var(--accent-bright)]" />
            <h3 className="mt-4 text-lg font-semibold">WhatsApp</h3>
            <p className="mt-1 text-sm text-white/70">Fast questions and scheduling</p>
            <Link
              href={site.whatsapp}
              className="mt-4 inline-block text-lg font-semibold text-[var(--accent-bright)] hover:underline"
            >
              {site.phone}
            </Link>
            <div className="mt-6">
              <Link
                href={site.whatsapp}
                className="inline-flex rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)]"
              >
                Message on WhatsApp
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
            <MailIcon className="mx-auto h-10 w-10 text-[var(--accent-bright)]" />
            <h3 className="mt-4 text-lg font-semibold">Email</h3>
            <p className="mt-1 text-sm text-white/70">Proposals and technical deep-dives</p>
            <Link
              href={`mailto:${site.email}`}
              className="mt-4 inline-block break-all text-lg font-semibold text-[var(--accent-bright)] hover:underline"
            >
              {site.email}
            </Link>
            <div className="mt-6">
              <Link
                href={`mailto:${site.email}`}
                className="inline-flex rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              >
                Send email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { services } from "@/lib/site";
import { ServiceIcon } from "./icons/service-icon";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--paper)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">What we build</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          End-to-end delivery: discovery, architecture, implementation, deployment, and long-running support
          for mission-critical channels.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition hover:border-[var(--accent)]/40 hover:shadow-md"
            >
              <ServiceIcon
                name={s.icon}
                className="h-12 w-12 text-[var(--accent-dark)] transition group-hover:text-[var(--accent)]"
              />
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

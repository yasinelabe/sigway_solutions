import { services } from "@/lib/site";
import { ServiceIcon } from "./icons/service-icon";

export function ServicesSection() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent-dark)] uppercase">What we do</p>
        <h2 className="mt-2 max-w-xl text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
          One team from idea to production
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          You get engineers who understand both product craft and the realities of telecom—not a handoff
          between agencies.
        </p>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-[var(--line)] bg-white p-7 transition hover:shadow-md"
            >
              <ServiceIcon name={s.icon} className="h-11 w-11 text-[var(--accent-dark)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[var(--muted)]">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

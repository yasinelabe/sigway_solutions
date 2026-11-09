import { audiences } from "@/lib/site";

export function AudiencesSection() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">Who we work with</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <li key={a.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--ink)]">{a.title}</h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">{a.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">Common questions</h2>
        <dl className="mt-10 space-y-8">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-[var(--line)] pb-8 last:border-0">
              <dt className="text-lg font-semibold text-[var(--ink)]">{item.q}</dt>
              <dd className="mt-2 leading-relaxed text-[var(--muted)]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

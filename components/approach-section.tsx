export function ApproachSection() {
  const items = [
    {
      title: "Production first",
      body: "We ship for real traffic: observability, rollback paths, and runbooks—not slideware.",
    },
    {
      title: "Telecom depth",
      body: "SS7, USSD, charging, and wallet integrations are first-class, not outsourced side quests.",
    },
    {
      title: "Modern delivery",
      body: "SSR web, native mobile, APIs, and AI features with CI/CD and security reviews built in.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">How we work</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Small senior team, direct access to engineers who built the stack—not a ticket queue.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <span className="text-sm font-bold text-[var(--accent)]">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

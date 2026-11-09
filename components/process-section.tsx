import { process } from "@/lib/site";

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-[var(--line)] bg-[var(--ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How a project with us feels</h2>
        <p className="mt-4 max-w-xl text-white/75">
          No mystery phases or black-box delivery—you see progress early and often.
        </p>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {process.map((step, i) => (
            <li key={step.step} className="border-l-2 border-[var(--accent)] pl-6 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6">
              <span className="text-sm font-bold text-[var(--accent-bright)]">Step {i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{step.step}</h3>
              <p className="mt-2 leading-relaxed text-white/70">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

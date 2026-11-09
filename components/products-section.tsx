import Link from "next/link";
import { products } from "@/lib/site";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold tracking-wide text-[var(--accent-dark)] uppercase">Products</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
          Our own platforms—battle-tested
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">
          Alongside client work, we maintain SigWay: tooling born on real operator networks, not lab demos.
        </p>
        <ul className="mt-12 space-y-6">
          {products.map((p, i) => (
            <li
              key={p.title}
              className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-dark)]">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-[var(--ink)]">{p.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-[var(--muted)]">{p.description}</p>
                <p className="mt-3 text-sm font-medium text-[var(--accent-dark)]">{p.status}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[var(--muted)]">
          Want pricing or technical detail?{" "}
          <Link href="#contact" className="font-semibold text-[var(--accent-dark)] underline-offset-2 hover:underline">
            We&apos;ll walk you through it on a call.
          </Link>
        </p>
      </div>
    </section>
  );
}

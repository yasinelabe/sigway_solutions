import Link from "next/link";
import { products } from "@/lib/site";
import { ArrowIcon } from "./icons/arrow-icon";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--ink)]">Flagship products</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">
          Telecom platforms we build and operate—plus custom software around them for operators and
          integrators.
        </p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <li
              key={p.title}
              className={`flex flex-col rounded-2xl border p-6 ${
                p.badgeVariant === "soon"
                  ? "border-dashed border-[var(--line)] bg-[var(--accent-soft)]/40"
                  : "border-[var(--line)] bg-[var(--surface)] shadow-sm"
              }`}
            >
              <span
                className={`mb-3 w-fit rounded-md px-2.5 py-1 text-[0.65rem] font-bold tracking-wide uppercase ${
                  p.badgeVariant === "live"
                    ? "bg-[var(--accent-dark)] text-white"
                    : "bg-[var(--accent-soft)] text-[var(--accent-dark)]"
                }`}
              >
                {p.badge}
              </span>
              <h3 className="text-xl font-semibold text-[var(--ink)]">{p.title}</h3>
              <p className="mt-2 flex-1 text-[var(--muted)] leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-dark)] hover:text-[var(--accent)]"
                  >
                    {l.label}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

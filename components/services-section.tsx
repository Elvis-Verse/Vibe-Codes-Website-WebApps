import Link from 'next/link'
import { Lightbulb, Building2, Home, ClipboardCheck, ArrowUpRight } from 'lucide-react'
import { serviceGroups } from '@/lib/site'
import { Reveal } from '@/components/reveal'

const icons: Record<string, typeof Lightbulb> = {
  lighting: Lightbulb,
  commercial: Building2,
  residential: Home,
  compliance: ClipboardCheck,
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            What we do
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A full-service electrical contractor
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We are lighting specialists &mdash; repairing, installing and refurbishing lighting
            equipment &mdash; and experienced electricians handling a wide range of commercial and
            residential work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {serviceGroups.map((group, i) => {
            const Icon = icons[group.id] ?? Lightbulb
            return (
              <Reveal
                key={group.id}
                as="article"
                delay={i * 80}
                className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-accent-foreground"
                >
                  Get help with this service
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            View all services
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

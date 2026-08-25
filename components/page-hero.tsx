import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string
  title: string
  description: string
  crumb: string
}) {
  return (
    <section className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-charcoal-foreground">{crumb}</span>
        </nav>
        <span className="mt-6 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-charcoal-muted">{description}</p>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Phone, ArrowRight, Clock } from 'lucide-react'
import { site } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-accent-foreground sm:text-4xl">
              Ready to get the job done right?
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-accent-foreground/80">
              Whether it&apos;s a commercial lighting conversion or residential wiring, E.N.E.L.
              Electrical is ready to help. Free estimates on all residential work.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {site.emergencyNote}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-charcoal px-6 py-4 text-sm font-bold uppercase tracking-wide text-charcoal-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm border-2 border-charcoal px-6 py-4 text-sm font-bold uppercase tracking-wide text-charcoal transition-colors hover:bg-charcoal hover:text-charcoal-foreground"
            >
              Request Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

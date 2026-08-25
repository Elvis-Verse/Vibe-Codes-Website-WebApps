import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Licensed &middot; Bonded &middot; Insured
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Electrical &amp; lighting done right{' '}
            <span className="text-accent">across the five boroughs.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-charcoal-muted sm:text-lg">
            E.N.E.L. Electrical Corp. is a commercial and residential electrical contractor and
            lighting specialist serving New York City. The right contractor means the job is done
            right, up to code, and within your budget.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-wide text-charcoal-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-charcoal-muted">Serving</dt>
              <dd className="mt-1 text-lg font-bold text-charcoal-foreground">5 Boroughs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-charcoal-muted">Clients</dt>
              <dd className="mt-1 text-lg font-bold text-charcoal-foreground">Commercial &amp; Residential</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-charcoal-muted">Emergency</dt>
              <dd className="mt-1 text-lg font-bold text-charcoal-foreground">24 / 7</dd>
            </div>
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
            <Image
              src="/images/hero-electrician-panel.png"
              alt="E.N.E.L. electrician working on a commercial electrical distribution panel"
              width={1024}
              height={1024}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-md bg-charcoal/85 px-4 py-3 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-sm font-medium text-charcoal-foreground">
                Free estimates on residential work &mdash; call to schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

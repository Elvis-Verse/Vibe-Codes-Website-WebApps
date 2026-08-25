import type { Metadata } from 'next'
import { Lightbulb, Building2, Home, ClipboardCheck, Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { PageHero } from '@/components/page-hero'
import { FeaturedService } from '@/components/featured-service'
import { FinalCta } from '@/components/final-cta'
import { Reveal } from '@/components/reveal'
import { serviceGroups, capabilities } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Commercial and residential electrical and lighting services from E.N.E.L. Electrical Corp. — area lighting, emergency lighting, warehouse and retail wiring, retro-fitting, violation removal, Title 24 compliance and more across the five boroughs.',
  alternates: { canonical: '/services' },
}

const icons = {
  lighting: Lightbulb,
  commercial: Building2,
  residential: Home,
  compliance: ClipboardCheck,
} as const

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-14 lg:pb-0">
        <PageHero
          crumb="Services"
          eyebrow="What we do"
          title="Electrical & lighting services for every kind of space"
          description="As lighting specialists and experienced electricians, we repair, install and refurbish electrical and lighting systems for commercial and residential clients throughout New York City."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {serviceGroups.map((group, i) => {
                const Icon = icons[group.id as keyof typeof icons] ?? Lightbulb
                return (
                  <Reveal
                    key={group.id}
                    as="article"
                    delay={i * 80}
                    className="flex flex-col rounded-lg border border-border bg-card p-8"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-md bg-charcoal text-charcoal-foreground">
                        <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{group.summary}</p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <FeaturedService />

        <section className="bg-secondary/50 py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                Full capabilities
              </span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Everything we handle
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                A complete list of the electrical and lighting work E.N.E.L. Electrical takes on. Not
                sure if your project fits? Reach out and ask.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-center gap-3 border-b border-border py-3 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}

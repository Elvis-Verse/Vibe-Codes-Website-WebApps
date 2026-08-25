import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const benefits = [
  {
    title: 'More light, lower bills',
    body: 'Convert existing systems to energy-efficient lighting for more light at a lower operating cost.',
  },
  {
    title: 'On-site demonstration',
    body: 'We can run tests on your lighting and install a sample grid of fixtures so you see the results first.',
  },
  {
    title: 'A clear report',
    body: 'You receive a report of our findings, so the savings are documented before any full conversion.',
  },
]

export function FeaturedService() {
  return (
    <section className="bg-charcoal py-20 text-charcoal-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last overflow-hidden rounded-lg border border-white/10 lg:order-first">
          <Image
            src="/images/warehouse-led-lighting.png"
            alt="Energy-efficient LED high-bay lighting installed across a commercial warehouse"
            width={1024}
            height={768}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured &mdash; Save Energy
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Energy-efficient lighting that pays you back
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-charcoal-muted">
            Is your electric bill climbing every month? Let us convert your systems to energy-efficient
            lighting. Every wasted energy dollar is money that could stay in your pocket.
          </p>

          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-3.5 w-3.5 text-accent-foreground" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-charcoal-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-muted">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Schedule a demonstration
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

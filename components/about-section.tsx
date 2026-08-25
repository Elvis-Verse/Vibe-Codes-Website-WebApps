import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            About us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Three decades of doing electrical work the right way
          </h2>
          <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              When it comes to electrical work, you have to choose carefully. The right contractor is
              the difference between a job done right &mdash; up to code and within budget &mdash; and
              one done poorly by cutting corners and creating dangerous situations.
            </p>
            <p>
              For 30 years, our President, John Dituri, has met and exceeded his clients&apos;
              expectations, and offers to do the same for you. Focusing on commercial and residential
              clients, we are right at home handling any and all electrical and lighting work for chain
              stores, factories and residential homes.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Led by</dt>
              <dd className="mt-1 text-lg font-bold text-foreground">John Dituri, President</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Focus</dt>
              <dd className="mt-1 text-lg font-bold text-foreground">Commercial &amp; Residential</dd>
            </div>
          </dl>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:text-accent-foreground"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-lg border border-border shadow-sm">
            <Image
              src="/images/electrical-panel-detail.png"
              alt="Neatly wired and labeled electrical breaker panel completed by E.N.E.L. Electrical"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-md border border-border bg-card px-5 py-4 shadow-lg sm:left-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">Experience</p>
            <p className="text-2xl font-extrabold text-foreground">
              30 Years<span className="text-accent-foreground">.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from '@/components/reveal'

export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              Service areas
            </span>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Lighting up the five boroughs of New York
            </h2>
            <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              From Brooklyn to the Bronx, we bring commercial and residential electrical expertise
              across all of New York City.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.boroughs.map((borough) => (
                <li
                  key={borough}
                  className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                  {borough}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-md border border-accent/40 bg-accent/10 px-5 py-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <p className="text-sm font-medium text-foreground">
                Based at {site.address.street}, {site.address.city}, {site.address.state}{' '}
                {site.address.zip}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-lg border border-border shadow-sm">
            <Image
              src="/images/parking-lot-lighting.png"
              alt="A commercial parking lot illuminated at dusk by newly installed pole lighting"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

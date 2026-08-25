import { BadgeCheck } from 'lucide-react'
import { site } from '@/lib/site'

export function Credentials() {
  return (
    <section aria-label="Licenses and credentials" className="bg-charcoal py-16 text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Credentials
            </span>
            <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              Fully licensed, bonded &amp; insured
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal-muted">
            Licensed across New York City and the surrounding tri-state region &mdash; your assurance
            that the work meets code.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.licenses.map((license) => (
            <li
              key={license.number}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-charcoal-foreground">{license.authority}</p>
                <p className="font-mono text-xs text-charcoal-muted">{license.number}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

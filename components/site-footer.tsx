import Link from 'next/link'
import { Phone, Mail, MapPin, Printer, Zap } from 'lucide-react'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent">
                <Zap className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold tracking-tight">E.N.E.L. Electrical Corp.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-muted">
              {site.tagline} Commercial and residential electrical work. {site.credentials}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-charcoal-muted">
              {site.yearsInBusinessNote}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/" className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#service-areas" className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-charcoal-foreground/80">
                  {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={site.phoneHref} className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-charcoal-foreground/80">Fax {site.fax}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={site.emailHref} className="text-charcoal-foreground/80 transition-colors hover:text-accent">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-charcoal-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} E.N.E.L. Electrical Corp. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed">
            {site.credentials} NYC DOB License #12069 &middot; NJ Permit #16992 &middot; Westchester #1577 &middot;
            Suffolk #35605-ME &middot; Nassau #2170E
          </p>
        </div>
      </div>
    </footer>
  )
}

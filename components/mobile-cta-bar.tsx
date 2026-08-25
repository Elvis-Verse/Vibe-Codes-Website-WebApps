import Link from 'next/link'
import { Phone, Wrench } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-wide text-foreground"
      >
        <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-accent py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground"
      >
        <Wrench className="h-4 w-4" aria-hidden="true" />
        Request Service
      </Link>
    </div>
  )
}

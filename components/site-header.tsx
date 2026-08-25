'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Zap } from 'lucide-react'
import { site } from '@/lib/site'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/#service-areas' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Zap className="h-5 w-5 text-accent" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-extrabold tracking-tight text-foreground">
              E.N.E.L.
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Electrical Corp.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent-foreground"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Request Service
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 py-6 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-lg font-semibold text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-sm bg-accent px-4 py-3.5 text-base font-bold uppercase tracking-wide text-accent-foreground"
            >
              Request Service
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-3.5 text-base font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { site } from '@/lib/site'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: `We serve all five boroughs of New York — Manhattan, Brooklyn, Queens, the Bronx and Staten Island — from our base at ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}.`,
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We provide free estimates on all residential work so you know the scope and cost before we begin.',
  },
  {
    q: 'Do you handle emergencies?',
    a: `${site.emergencyNote} If you have an urgent electrical problem, call us any time at ${site.phone}.`,
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. E.N.E.L. Electrical Corp. is fully licensed, bonded and insured, with licenses across New York City, New Jersey, Westchester, Suffolk and Nassau counties.',
  },
  {
    q: 'Do you work with both businesses and homeowners?',
    a: 'We do. We handle commercial and residential work — from chain stores, factories and warehouses to residential homes.',
  },
  {
    q: 'What are your hours?',
    a: `${site.hours.map((h) => `${h.day}: ${h.time}`).join('. ')}. ${site.holidaysNote}`,
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-foreground sm:text-lg">{faq.q}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

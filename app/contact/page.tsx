import type { Metadata } from 'next'
import { Phone, Printer, Mail, MapPin, Clock, Briefcase } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact E.N.E.L. Electrical Corp. for commercial and residential electrical and lighting work across the five boroughs. Call 718-252-7036, request a free residential estimate, or send a service request. 24/7 emergency service.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-14 lg:pb-0">
        <PageHero
          crumb="Contact"
          eyebrow="Get in touch"
          title="Request service or a free estimate"
          description="Tell us about your electrical or lighting project and we'll get right back to you. For urgent problems, call us any time — emergency service is available 24/7."
        />

        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact details</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Reach E.N.E.L. Electrical Corp. directly, or use the form and we&apos;ll follow up.
              </p>

              <ul className="mt-8 space-y-4">
                <ContactRow icon={Phone} label="Phone">
                  <a href={site.phoneHref} className="font-semibold text-foreground hover:text-accent-foreground">
                    {site.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={Printer} label="Fax">
                  <span className="font-semibold text-foreground">{site.fax}</span>
                </ContactRow>
                <ContactRow icon={Mail} label="Email">
                  <a href={site.emailHref} className="font-semibold text-foreground hover:text-accent-foreground">
                    {site.email}
                  </a>
                </ContactRow>
                <ContactRow icon={MapPin} label="Address">
                  <span className="font-semibold text-foreground">
                    {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </ContactRow>
              </ul>

              <div className="mt-10 rounded-lg border border-border bg-card p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground">
                  <Clock className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
                  Hours
                </h3>
                <dl className="mt-4 space-y-2.5 text-sm">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex items-center justify-between gap-4">
                      <dt className="text-muted-foreground">{h.day}</dt>
                      <dd className="font-semibold text-foreground">{h.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-border pt-4 text-xs font-medium text-accent-foreground">
                  {site.emergencyNote}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{site.holidaysNote}</p>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-6">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-foreground">Careers</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Interested in joining the team? Send your resume to{' '}
                    <a
                      href={`mailto:${site.careersEmail}`}
                      className="font-semibold text-foreground underline decoration-accent underline-offset-2 hover:text-accent-foreground"
                    >
                      {site.careersEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">Send a request</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Free estimates on all residential work.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone
  label: string
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-foreground">
        <Icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
      </span>
      <div className="pt-0.5">
        <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  )
}

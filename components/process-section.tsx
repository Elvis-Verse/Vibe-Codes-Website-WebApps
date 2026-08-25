import { PhoneCall, ClipboardList, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: PhoneCall,
    title: 'Reach out',
    body: 'Call us or send a request describing the electrical or lighting work you need. Emergency help is available 24/7.',
  },
  {
    icon: ClipboardList,
    title: 'Estimate & plan',
    body: 'We assess the job and provide an estimate — free on all residential work — so the scope and budget are clear up front.',
  },
  {
    icon: Wrench,
    title: 'Done right, to code',
    body: 'Our licensed electricians complete the work up to code and within budget, without cutting corners.',
  },
]

export function ProcessSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Straightforward from first call to final inspection
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal
                key={step.title}
                as="li"
                delay={i * 90}
                className="relative rounded-lg border border-border bg-card p-7"
              >
                <span className="font-mono text-sm font-bold text-accent-foreground">
                  0{i + 1}
                </span>
                <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-md bg-charcoal text-charcoal-foreground">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

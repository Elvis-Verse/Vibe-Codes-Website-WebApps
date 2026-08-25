import { ShieldCheck, Clock, FileCheck2, Building2 } from 'lucide-react'

const items = [
  { icon: ShieldCheck, label: 'Licensed, bonded & insured' },
  { icon: Clock, label: '24/7 emergency service' },
  { icon: FileCheck2, label: 'Free estimates on residential work' },
  { icon: Building2, label: 'Commercial & residential' },
]

export function TrustBar() {
  return (
    <section aria-label="Why clients trust E.N.E.L. Electrical" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border border-x border-b border-border sm:grid-cols-4 sm:divide-y-0">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 px-5 py-6">
            <Icon className="h-6 w-6 shrink-0 text-accent-foreground" aria-hidden="true" />
            <span className="text-sm font-semibold leading-tight text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

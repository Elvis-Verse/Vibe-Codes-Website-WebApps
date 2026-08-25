'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = { status: 'idle', message: '' }

const services = [
  'Lighting installation or repair',
  'Energy-efficient lighting conversion',
  'Commercial electrical',
  'Residential wiring',
  'Emergency service',
  'Violation removal / compliance',
  'Other',
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? 'Sending…' : 'Send request'}
      {!pending && (
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-accent/40 bg-accent/10 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <CheckCircle2 className="h-6 w-6 text-accent-foreground" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-bold text-foreground">Request received</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const err = state.errors ?? {}

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === 'error' && (
        <div className="flex items-center gap-2.5 rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {state.message}
        </div>
      )}

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={err.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="form-input"
          />
        </Field>
        <Field id="phone" label="Phone" error={err.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="form-input"
          />
        </Field>
      </div>

      <Field id="email" label="Email" error={err.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="form-input"
        />
      </Field>

      <Field id="service" label="What do you need?" error={err.service}>
        <select id="service" name="service" defaultValue="" className="form-input">
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Project details" error={err.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="form-input resize-y"
          placeholder="Tell us about the electrical or lighting work you need, and the location."
        />
      </Field>

      <SubmitButton />
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

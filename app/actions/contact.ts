'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  // Honeypot field — should stay empty for real users.
  const company = String(formData.get('company') ?? '').trim()

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!isEmail(email)) errors.email = 'Please enter a valid email address.'
  if (phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a valid phone number.'
  if (message.length < 10) errors.message = 'Please tell us a bit more about the work you need.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  // Silently drop obvious spam submissions.
  if (company) {
    return {
      status: 'success',
      message: 'Thanks — your request has been received. We will be in touch shortly.',
    }
  }

  // NOTE: Wire this up to an email provider (e.g. Resend) or database to
  // deliver the request. For now the submission is validated and acknowledged.
  console.log('[v0] Contact request received:', { name, email, phone, service })

  return {
    status: 'success',
    message: 'Thanks — your request has been received. We will be in touch shortly.',
  }
}

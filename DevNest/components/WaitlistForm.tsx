'use client'

import { useState, useRef, useCallback } from 'react'
import { insertWaitlistEmail } from '@/lib/supabase'

type ModalState = { open: boolean; email: string; duplicate: boolean }

export default function WaitlistForm() {
  const [loading, setLoading]   = useState(false)
  const [modal, setModal]       = useState<ModalState>({ open: false, email: '', duplicate: false })
  const [btnError, setBtnError] = useState(false)
  const submittedEmails         = useRef(new Set<string>())
  const inputRef                = useRef<HTMLInputElement>(null)

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = inputRef.current?.value.trim().toLowerCase() ?? ''
    if (!email) return

    // Block duplicate in-session submissions
    if (submittedEmails.current.has(email)) {
      setModal({ open: true, email, duplicate: true })
      return
    }

    setLoading(true)

    try {
      const result = await insertWaitlistEmail(email)
      submittedEmails.current.add(email)
      setModal({ open: true, email, duplicate: result.duplicate })
      if (inputRef.current) inputRef.current.value = ''
    } catch (err) {
      console.error('Waitlist error:', err)
      setBtnError(true)
      setTimeout(() => setBtnError(false), 2500)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <form className="form-wrap" onSubmit={handleSubmit} aria-label="Waitlist signup">
        <label className="email-field" htmlFor="emailInput">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M2 7l10 7 10-7"/>
          </svg>
          <input
            ref={inputRef}
            type="email"
            id="emailInput"
            placeholder="you@example.com"
            required
            autoComplete="email"
            aria-label="Email address"
          />
        </label>
        <button
          type="submit"
          className="btn-join"
          disabled={loading}
          style={btnError ? { background: '#ef4444' } : undefined}
        >
          {loading ? (
            <>
              <SpinnerIcon />
              Joining…
            </>
          ) : btnError ? (
            'Try again'
          ) : (
            <>
              Join the Nest
              <ArrowIcon />
            </>
          )}
        </button>
      </form>

      {modal.open && (
        <div
          className="dn-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={modal.duplicate ? 'Already registered' : 'Successfully joined waitlist'}
          onClick={(e) => { if (e.target === e.currentTarget) setModal(m => ({ ...m, open: false })) }}
        >
          <div className="dn-dialog">
            <strong>{modal.duplicate ? 'Already on the list ✓' : "You're on the list 🎉"}</strong>
            <p>
              {modal.duplicate
                ? <>
                    <strong>{modal.email}</strong> is already registered. We&apos;ll reach out when we&apos;re ready to let you in.
                  </>
                : <>
                    We&apos;ll reach out to <strong>{modal.email}</strong> when we&apos;re ready to let you in. Expect early bounty access at launch.
                  </>
              }
            </p>
            <button className="dn-close" onClick={() => setModal(m => ({ ...m, open: false }))}>
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function SpinnerIcon() {
  return (
    <svg className="spinner" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

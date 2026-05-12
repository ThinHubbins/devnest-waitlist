'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'What is DevNest?',
    a: 'DevNest is a developer creator-economy platform where you learn, build projects, and earn real money through a dual-currency system — Gold Tokens (withdrawable) and EXP (for reputation and rank).',
  },
  {
    q: 'How do Gold Tokens work?',
    a: "Gold Tokens are DevNest's hard currency. You earn them by completing bounties and premium challenges. They're withdrawable to real money (minimum $10) with a flat 10% platform fee on exit.",
  },
  {
    q: 'What is EXP used for?',
    a: "EXP is the soft currency that powers community reputation. Spend it to boost other creators' Nests and improve their algorithmic rank. EXP cannot be withdrawn — it's purely for status and influence within the platform.",
  },
  {
    q: 'Who is DevNest for?',
    a: 'Developers, technical creators, educators, and learners who want to grow — and get rewarded — for their contributions to a developer community.',
  },
  {
    q: 'When does DevNest launch?',
    a: "We're currently building the first version and onboarding early users through this waitlist. Waitlist members get priority access and early bounty allocations at launch.",
  },
  {
    q: 'Will it be free?',
    a: 'DevNest has a free Explorer tier (earn EXP, no withdrawals) and a paid Builder tier with access to bounty drops and Gold Token withdrawals. Master tier is reputation-gated.',
  },
]

const ChevronIcon = () => (
  <svg className="faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section aria-label="Frequently asked questions">
      <div className="faq-header">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-grid">
        {FAQS.map((faq, i) => (
          <details
            key={i}
            className="faq"
            open={openIndex === i}
            onClick={(e) => {
              e.preventDefault()
              setOpenIndex(openIndex === i ? null : i)
            }}
          >
            <summary>
              <ChevronIcon />
              <span>{faq.q}</span>
            </summary>
            <p className="faq-body">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

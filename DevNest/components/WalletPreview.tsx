'use client'

import { useState } from 'react'

type View = 'total' | 'withdrawable'

export default function WalletPreview() {
  const [view, setView] = useState<View>('total')
  const isW = view === 'withdrawable'

  return (
    <div className="wallet-preview" aria-label="Sample wallet interface preview">
      <div className="wallet-header">
        <span className="wallet-title">MY WALLET</span>
        <div className="wallet-toggle" role="group" aria-label="Balance view toggle">
          <button
            className={`toggle-btn${!isW ? ' active' : ''}`}
            onClick={() => setView('total')}
          >
            Total
          </button>
          <button
            className={`toggle-btn${isW ? ' active' : ''}`}
            onClick={() => setView('withdrawable')}
          >
            Withdrawable
          </button>
        </div>
      </div>

      <div className="wallet-balances">
        <div className="bal-card bal-card--gold">
          <div className="bal-label">GOLD TOKENS</div>
          <div className="bal-amount">{isW ? '$43.38' : '$48.20'}</div>
          <div className="bal-sub">
            {isW ? 'After 10% platform fee' : 'Hard currency · withdrawable'}
          </div>
        </div>
        <div className="bal-card bal-card--blue">
          <div className="bal-label">EXP</div>
          <div className="bal-amount">3,840</div>
          <div className="bal-sub">
            {isW ? 'Non-withdrawable' : 'Soft currency · rank only'}
          </div>
        </div>
      </div>

      <p className="wallet-note">
        10% platform fee applies on withdrawal · Min withdrawal <span>$10.00</span> · EXP cannot be withdrawn
      </p>
    </div>
  )
}

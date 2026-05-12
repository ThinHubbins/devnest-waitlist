'use client'

import { useState, useEffect } from 'react'

const MILESTONES = [
  { label: 'Core platform architecture',   done: true  },
  { label: 'Dual wallet system',           done: true  },
  { label: 'Bounty engine & submissions',  done: true  },
  { label: 'Learning paths & EXP system',  done: false  },
  { label: 'Reputation & Nest ranking',    done: false  },
  { label: 'Live collaboration tools',     done: false },
  { label: 'Creator monetization & payouts', done: false },
  { label: 'Public launch 🚀',             done: false },
]

const PROGRESS = 45

export default function BuildProgress() {
  const [open, setOpen] = useState(false)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (open) {
      // slight delay so CSS transition fires after mount
      const t = setTimeout(() => setAnimated(true), 30)
      return () => clearTimeout(t)
    } else {
      setAnimated(false)
    }
  }, [open])

  return (
    <>
      {/* ── Trigger button — drop this anywhere on the page ── */}
      <button className="progress-trigger" onClick={() => setOpen(true)} aria-label="View build progress">
        <span className="progress-trigger-bar">
          <span className="progress-trigger-fill" />
        </span>
        <span className="progress-trigger-label">
          <span className="progress-trigger-pct">{PROGRESS}%</span>
          <span className="progress-trigger-text">built — see progress</span>
        </span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>

      {/* ── Overlay ── */}
      {open && (
        <div
          className={`bp-overlay${animated ? ' bp-visible' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="DevNest build progress"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className={`bp-dialog${animated ? ' bp-dialog-visible' : ''}`}>

            {/* Header */}
            <div className="bp-header">
              <div className="bp-header-left">
                <div className="bp-tag">
                  <span className="bp-tag-dot" aria-hidden="true" />
                  In development
                </div>
                <h2 className="bp-title">We're {PROGRESS}% there.</h2>
                <p className="bp-subtitle">Here's exactly where we are — no fluff.</p>
              </div>
              <button className="bp-close" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="bp-bar-wrap" aria-label={`${PROGRESS}% complete`}>
              <div className="bp-bar-track">
                <div
                  className="bp-bar-fill"
                  style={{ width: animated ? `${PROGRESS}%` : '0%' }}
                />
                <div
                  className="bp-bar-pulse"
                  style={{ left: animated ? `${PROGRESS}%` : '0%' }}
                  aria-hidden="true"
                />
              </div>
              <div className="bp-bar-labels">
                <span className="bp-bar-pct">{PROGRESS}% complete</span>
                <span className="bp-bar-eta">Est. launch: Q2 2026</span>
              </div>
            </div>

            {/* Milestones */}
            <ul className="bp-milestones" role="list">
              {MILESTONES.map((m, i) => (
                <li key={i} className={`bp-milestone${m.done ? ' bp-milestone--done' : ''}`}>
                  <span className="bp-milestone-icon" aria-hidden="true">
                    {m.done
                      ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      : <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6"/></svg>
                    }
                  </span>
                  <span className="bp-milestone-label">{m.label}</span>
                  {!m.done && <span className="bp-milestone-soon">soon</span>}
                </li>
              ))}
            </ul>

            {/* Footer CTA */}
            <div className="bp-footer">
              <p className="bp-footer-text">Want early access when we ship?</p>
              <button
                className="bp-footer-btn"
                onClick={() => {
                  setOpen(false)
                  // scroll to waitlist form
                  document.getElementById('emailInput')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  setTimeout(() => document.getElementById('emailInput')?.focus(), 600)
                }}
              >
                Join the waitlist
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}

      <style>{`
        /* ── Trigger ── */
        .progress-trigger {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 100px; padding: 8px 16px 8px 12px;
          cursor: pointer; transition: border-color 0.2s;
          font-family: var(--mono); font-size: 12px; color: var(--text-2);
          text-decoration: none;
        }
        .progress-trigger:hover { border-color: var(--accent-border); }
        .progress-trigger-bar {
          width: 48px; height: 4px; border-radius: 2px;
          background: rgba(255,255,255,0.08); overflow: hidden; flex-shrink: 0;
        }
        .progress-trigger-fill {
          display: block; width: ${PROGRESS}%; height: 100%;
          background: var(--accent); border-radius: 2px;
        }
        .progress-trigger-label { display: flex; align-items: center; gap: 5px; }
        .progress-trigger-pct { color: var(--accent); font-weight: 500; }
        .progress-trigger-text { color: var(--text-3); }

        /* ── Overlay ── */
        .bp-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.72);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; opacity: 0; transition: opacity 0.2s;
          padding: 20px;
        }
        .bp-overlay.bp-visible { opacity: 1; }

        /* ── Dialog ── */
        .bp-dialog {
          background: var(--surface); border: 1px solid var(--border-hover);
          border-radius: 18px; padding: 28px;
          width: 100%; max-width: 440px;
          transform: scale(0.94) translateY(10px);
          transition: transform 0.25s cubic-bezier(0.34,1.4,0.64,1), opacity 0.2s;
          opacity: 0; max-height: 90vh; overflow-y: auto;
        }
        .bp-dialog.bp-dialog-visible { transform: scale(1) translateY(0); opacity: 1; }

        /* ── Header ── */
        .bp-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px; margin-bottom: 24px;
        }
        .bp-header-left { display: flex; flex-direction: column; gap: 6px; }
        .bp-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: var(--mono); font-size: 11px; color: var(--accent);
          background: var(--accent-dim); border: 1px solid var(--accent-border);
          border-radius: 100px; padding: 4px 10px; width: fit-content;
        }
        .bp-tag-dot {
          width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
          animation: pulse 2s ease-in-out infinite;
        }
        .bp-title {
          font-family: var(--display); font-size: 22px; font-weight: 800;
          letter-spacing: -0.02em; color: var(--text);
          margin: 0; animation: none;
        }
        .bp-subtitle { font-family: var(--mono); font-size: 12px; color: var(--text-3); margin: 0; }
        .bp-close {
          background: transparent; border: 1px solid var(--border);
          border-radius: 8px; padding: 6px; cursor: pointer; color: var(--text-3);
          transition: border-color 0.15s, color 0.15s; flex-shrink: 0;
          display: grid; place-items: center;
        }
        .bp-close:hover { border-color: var(--border-hover); color: var(--text); }

        /* ── Bar ── */
        .bp-bar-wrap { margin-bottom: 24px; }
        .bp-bar-track {
          position: relative; height: 6px; border-radius: 3px;
          background: rgba(255,255,255,0.07); overflow: visible; margin-bottom: 8px;
        }
        .bp-bar-fill {
          height: 100%; border-radius: 3px; background: var(--accent);
          transition: width 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .bp-bar-pulse {
          position: absolute; top: 50%; transform: translate(-50%, -50%);
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-dim);
          transition: left 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .bp-bar-labels {
          display: flex; justify-content: space-between;
          font-family: var(--mono); font-size: 11px;
        }
        .bp-bar-pct { color: var(--accent); }
        .bp-bar-eta { color: var(--text-3); }

        /* ── Milestones ── */
        .bp-milestones {
          list-style: none; display: flex; flex-direction: column;
          gap: 2px; margin-bottom: 24px;
        }
        .bp-milestone {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px; border-radius: 8px;
          transition: background 0.15s;
        }
        .bp-milestone:hover { background: rgba(255,255,255,0.03); }
        .bp-milestone-icon {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          display: grid; place-items: center;
          background: rgba(255,255,255,0.06);
          color: var(--text-3);
        }
        .bp-milestone--done .bp-milestone-icon {
          background: var(--accent-dim); color: var(--accent);
          border: 1px solid var(--accent-border);
        }
        .bp-milestone-label {
          flex: 1; font-size: 13px; color: var(--text-3); line-height: 1.4;
        }
        .bp-milestone--done .bp-milestone-label { color: var(--text); }
        .bp-milestone-soon {
          font-family: var(--mono); font-size: 10px; color: var(--gold);
          background: var(--gold-dim); border: 1px solid var(--gold-border);
          border-radius: 100px; padding: 2px 8px;
        }

        /* ── Footer ── */
        .bp-footer {
          border-top: 1px solid var(--border);
          padding-top: 20px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
        .bp-footer-text { font-size: 13px; color: var(--text-2); }
        .bp-footer-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: var(--accent); color: #030f06;
          font-family: var(--body); font-size: 13px; font-weight: 500;
          border: none; border-radius: 8px; padding: 10px 18px;
          cursor: pointer; white-space: nowrap;
          transition: opacity 0.2s;
        }
        .bp-footer-btn:hover { opacity: 0.88; }

        @media (max-width: 480px) {
          .bp-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  )
}

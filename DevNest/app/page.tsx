import WaitlistForm from '@/components/WaitlistForm'
import WalletPreview from '@/components/WalletPreview'
import FaqSection from '@/components/FaqSection'
import BuildProgress from '@/components/BuildProgress'

export default function Home() {
  return (
    <>
      {/* Background orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <div className="page">

        {/* ── Logo ── */}
        <div className="logo-strip">
          <div className="logo-mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span className="logo-text">DevNest</span>
        </div>

        {/* ── Hero ── */}
        <main className="hero">
          <div className="badge">
            <span className="badge-dot" aria-hidden="true" />
            Now in early access — join the waitlist
          </div>

          {/* ── Build progress trigger — sits right under the badge ── */}
          {/* Option 1 — wrap with margin */}
<div style={{ marginTop: 12, marginBottom: 20 }}>
  <BuildProgress />
</div>

          <h1>
            Learn. Build.<br />
            <span className="hi">Earn while you grow.</span>
          </h1>

          <p className="subtext">
            DevNest is a creator-economy platform for developers. Climb ranks, unlock bounties,
            and get rewarded — in real money — for the skills you bring to the community.
          </p>

          <div className="econ-pills" aria-label="Token economy overview">
            <span className="pill pill-gold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="8"/>
                <path d="M12 8v4l2 2"/>
              </svg>
              Gold Tokens — real withdrawable value
            </span>
            <span className="pill pill-blue">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              EXP — rank up your Nest
            </span>
          </div>

          {/* Waitlist form — client component */}
          <WaitlistForm />

          <div className="trust">
            <div className="avatars" aria-hidden="true">
              <span className="avatar" style={{ background: '#1a3a26', color: '#4ade80' }}>JD</span>
              <span className="avatar" style={{ background: '#1e2540', color: '#7b8ac4' }}>MK</span>
              <span className="avatar" style={{ background: '#2e1f40', color: '#c084fc' }}>SL</span>
              <span className="avatar" style={{ background: '#1a3026', color: '#6ee7a0' }}>RJ</span>
              <span className="avatar avatar-more">+242</span>
            </div>
            <p className="trust-text">
              Joined by <strong>246+ developers</strong> already on the waitlist
            </p>
          </div>
        </main>

        {/* ── Features ── */}
        <p className="section-label">What&apos;s inside</p>
        <section className="features" aria-label="Platform features">
          <article className="feat">
            <div className="feat-icon feat-icon--green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <line x1="12" y1="6" x2="12" y2="12"/><line x1="9" y1="9" x2="15" y2="9"/>
              </svg>
            </div>
            <h3>Curated Learning Paths</h3>
            <p>Structured tracks from fundamentals to advanced, built by seasoned engineers. Earn EXP as you progress.</p>
          </article>
          <article className="feat">
            <div className="feat-icon feat-icon--gold" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <h3>Bounty Drops</h3>
            <p>Weekend bounty pools funded by the platform. Complete challenges to earn Gold Tokens — withdrawable as real cash.</p>
          </article>
          <article className="feat">
            <div className="feat-icon feat-icon--blue" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Nest Reputation</h3>
            <p>Your Nest rank is calculated from subscribers, daily activity, and community EXP boosts — giving creators real algorithmic reach.</p>
          </article>
          <article className="feat">
            <div className="feat-icon feat-icon--green" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <h3>Live Collaboration</h3>
            <p>Pair-program, review code, and ship projects together in real time. Earn EXP for every contribution.</p>
          </article>
          <article className="feat">
            <div className="feat-icon feat-icon--gold" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3>Dual Wallet</h3>
            <p>Track your Gold Tokens and EXP separately. Withdraw Gold (min $10) anytime — EXP fuels your rank inside the platform.</p>
          </article>
          <article className="feat">
            <div className="feat-icon feat-icon--blue" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              </svg>
            </div>
            <h3>One-Click Deploy</h3>
            <p>Push your projects live with integrated CI/CD. Shipped projects qualify for higher-tier bounty pools.</p>
          </article>
        </section>

        {/* ── Platform Preview ── */}
        <p className="section-label" style={{ marginTop: 80 }}>Platform preview</p>
        <section className="preview-section" aria-label="Platform screenshots">
          <div className="preview-grid">
            <div className="preview-card preview-card--wide">
              <img src="/dashboard.png" alt="DevNest dashboard" className="preview-img" />
              <div className="preview-label">
                <span className="preview-dot preview-dot--green" />
                Dashboard
              </div>
            </div>
            <div className="preview-card">
              <img src="/bounty.png" alt="Bounties screen" className="preview-img" />
              <div className="preview-label">
                <span className="preview-dot preview-dot--gold" />
                Bounties
              </div>
            </div>
            <div className="preview-card">
              <img src="/nests.png" alt="Ongoing Nest Class screen" className="preview-img" />
              <div className="preview-label">
                <span className="preview-dot preview-dot--blue" />
                Ongoing Nest Class
              </div>
            </div>
          </div>
        </section>

        {/* ── Access Tiers ── */}
        <p className="section-label" style={{ marginTop: 60 }}>Access tiers</p>
        <section className="tiers" aria-label="Access tiers">
          <article className="tier">
            <div className="tier-badge tb-free">Free</div>
            <h3>Explorer</h3>
            <ul>
              <li>Access to beginner bounties — earn EXP on every submission</li>
              <li>Spend EXP to unlock premium content &amp; boost your favourite Nests</li>
              <li>Full access to community discussions and learning paths</li>
              <li>EXP is not withdrawable — it&apos;s your platform currency</li>
            </ul>
          </article>
          <article className="tier">
            <div className="tier-badge tb-paid">Paid</div>
            <h3>Builder</h3>
            <ul>
              <li>Everything in Explorer</li>
              <li>Access to intermediate bounties — earn both EXP and Gold Tokens</li>
              <li>Trade Gold Tokens for real money, anytime above $10</li>
              <li>Use EXP to access premium content alongside your Gold balance</li>
              <li>Priority submission review within 48 hours</li>
            </ul>
          </article>
          <article className="tier">
            <div className="tier-badge tb-master">Master</div>
            <h3>Master</h3>
            <ul>
              <li>Gated by reputation — earned, not bought</li>
              <li>Access to all bounty tiers including high-stakes Master challenges</li>
              <li>2 months of free Builder access granted on entry</li>
              <li>Highest EXP and Gold Token multipliers on every submission</li>
              <li>Early access to new bounty pools before public release</li>
              <li>Creator monetization tools and featured Nest placement</li>
              <li>Direct line to the DevNest core team</li>
            </ul>
          </article>
        </section>

        {/* ── Wallet Preview ── */}
        <p className="section-label" style={{ marginTop: 60 }}>Wallet preview</p>
        <WalletPreview />

        {/* ── Why Section ── */}
        <section className="why-section" aria-label="Why DevNest exists">
          <div className="why-inner">
            <div className="why-left">
              <div className="why-tag">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Why we built this
              </div>
              <h2 className="why-title">
                The dev industry is breaking.<br />
                <span className="why-title-accent">We&apos;re building the fix.</span>
              </h2>
              <p className="why-body">
                Software developer job postings have hit a five-year low — down over 33% from 2020. More than 500,000 tech workers have been laid off since 2022. The &qout;learn to code and you&apos;ll be fine&qout; promise that an entire generation was sold has quietly been broken.
              </p>
              <p className="why-body">
                New developers hit the wall immediately — you need experience to get a job, but a job to get experience. Seniors with years of hard-earned skill are rewriting portfolios for the tenth time, learning yet another framework because the market shifted again, doing unpaid take-home tests for companies that ghost them.
              </p>
              <p className="why-body">
                DevNest exists because there is no fair system that rewards developers for what they actually know and contribute — outside of getting hired. We&apos;re building that system.
              </p>
              <div className="why-signature">
                <div className="why-sig-line" />
                <span>The DevNest Team</span>
              </div>
            </div>

            <div className="why-right">
              <div className="why-stat-card">
                <div className="why-stat-num">500k+</div>
                <div className="why-stat-label">tech workers laid off since 2022</div>
                <div className="why-stat-sub">Flooding the market with experienced devs competing for fewer roles</div>
              </div>
              <div className="why-stat-card">
                <div className="why-stat-num">33%</div>
                <div className="why-stat-label">drop in developer job postings since 2020</div>
                <div className="why-stat-sub">A five-year low, while CS enrolment keeps rising</div>
              </div>
              <div className="why-stat-card">
                <div className="why-stat-num">6.1%</div>
                <div className="why-stat-label">CS graduate unemployment in 2025</div>
                <div className="why-stat-sub">Nearly double the rate of philosophy and arts majors</div>
              </div>
              <div className="why-stat-card">
                <div className="why-stat-num">$0</div>
                <div className="why-stat-label">earned by most devs for their community contributions</div>
                <div className="why-stat-sub">Answers, tutorials, open source — given freely, never rewarded</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── FAQ ── */}
        <FaqSection />

        {/* ── Contact ── */}
        <section className="contact" aria-label="Contact us">
          <div className="contact-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <h2>Still have questions?</h2>
          <p>Reach out and we&apos;ll get back to you within 24 hours.</p>
          <a href="mailto:dev.n3st@gmail.com" className="btn-mail">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            dev.n3st@gmail.com
          </a>
        </section>

        <footer>
          &copy; <strong>DevNest</strong> &mdash; Built by developers, for developers.
        </footer>

      </div>
    </>
  )
}

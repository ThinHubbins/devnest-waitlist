import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DevNest — Learn. Build. Earn.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',            // ✅ must be explicit
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#090c10', // use backgroundColor instead of background
          width: '100%',
          height: '100%',
          padding: '80px',
        }}
      >
        {/* Green accent top bar */}
        <div
          style={{
            display: 'flex',          // ✅ add display here too
            width: 48,
            height: 4,
            backgroundColor: '#4ade80',
            borderRadius: 2,
            marginBottom: 40,
          }}
        />

        <div
          style={{
            display: 'flex',          // ✅ add display
            fontSize: 64,
            fontWeight: 800,
            color: '#f0f4f8',
            lineHeight: 1.1,
            marginBottom: 24,
            flexDirection: 'column',
          }}
        >
          Learn. Build.
          <span style={{ color: '#4ade80' }}>Earn while you grow.</span>
        </div>

        <div
          style={{
            display: 'flex',          // ✅ add display
            fontSize: 24,
            color: '#8b95a1',
            maxWidth: 700,
          }}
        >
          A creator-economy platform for developers. Climb ranks, unlock bounties, and get rewarded in real money.
        </div>

        {/* Bottom logo row */}
        <div
          style={{
            display: 'flex',          // ✅ add display
            alignItems: 'center',
            gap: 12,
            marginTop: 60,
          }}
        >
          <div
            style={{
              display: 'flex',        // ✅ add display
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: 'rgba(74,222,128,0.12)',
              border: '1px solid rgba(74,222,128,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              color: '#4ade80',
            }}
          >
            ⌂
          </div>
          <span
            style={{
              display: 'flex',        // ✅ add display
              fontSize: 22,
              fontWeight: 800,
              color: '#f0f4f8',
            }}
          >
            DevNest
          </span>
        </div>
      </div>
    ),
    size
  )
}

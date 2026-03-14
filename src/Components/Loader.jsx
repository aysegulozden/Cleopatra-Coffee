import { useEffect, useState } from 'react'

const WORD1 = 'CLEOPATRA'
const WORD2 = 'COFFEE'

function randomPos() {
  const angle = Math.random() * 2 * Math.PI
  const dist = 400 + Math.random() * 300
  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    rotate: (Math.random() - 0.5) * 720,
    opacity: 0,
  }
}

function Loader() {
  const [phase, setPhase] = useState('scatter')  
  const [hidden, setHidden] = useState(false)

  const [positions1] = useState(() => WORD1.split('').map(() => randomPos()))
  const [positions2] = useState(() => WORD2.split('').map(() => randomPos()))

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('assemble'), 300)
    const t2 = setTimeout(() => setPhase('glow'), 1800)
    const t3 = setTimeout(() => setPhase('fade'), 2800)
    const t4 = setTimeout(() => setHidden(true), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  if (hidden) return null

  const assembled = phase === 'assemble' || phase === 'glow' || phase === 'fade'
  const glowing = phase === 'glow' || phase === 'fade'
  const fading = phase === 'fade'

  return (
    <div
  className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
  style={{
    backgroundColor: '#1B3A2D',
    opacity: fading ? 0 : 1,
    transition: fading ? 'opacity 0.6s ease-in' : 'none',
  }}
>
      {glowing && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ animation: 'none' }}
        >
          <div
            className="rounded-full"
            style={{
              width: '500px',
              height: '200px',
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      )}

      <div className="relative flex items-center justify-center" style={{ height: '90px' }}>
        {WORD1.split('').map((letter, i) => {
          const pos = positions1[i]
          return (
            <span
              key={i}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '3.5rem',
                fontWeight: 800,
                color: glowing ? '#FFD700' : '#D4AF37',
                textShadow: glowing
                  ? '0 0 20px rgba(212,175,55,0.9), 0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3)'
                  : 'none',
                letterSpacing: assembled ? '6px' : '0px',
                display: 'inline-block',
                transform: assembled
                  ? 'translate(0px, 0px) rotate(0deg)'
                  : `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
                opacity: assembled ? 1 : 0,
                transition: assembled
                  ? `transform ${0.9 + i * 0.05}s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s,
                     opacity ${0.5}s ease ${i * 0.06}s,
                     color 0.5s ease,
                     text-shadow 0.5s ease,
                     letter-spacing 1s ease`
                  : 'none',
              }}
            >
              {letter}
            </span>
          )
        })}
      </div>

      <div className="relative flex items-center justify-center" style={{ height: '50px' }}>
        {WORD2.split('').map((letter, i) => {
          const pos = positions2[i]
          return (
            <span
              key={i}
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: glowing ? 'rgba(245,245,220,1)' : 'rgba(245,245,220,0.8)',
                textShadow: glowing
                  ? '0 0 15px rgba(245,245,220,0.6)'
                  : 'none',
                letterSpacing: assembled ? '12px' : '0px',
                display: 'inline-block',
                transform: assembled
                  ? 'translate(0px, 0px) rotate(0deg)'
                  : `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
                opacity: assembled ? 1 : 0,
                transition: assembled
                  ? `transform ${0.9 + i * 0.07}s cubic-bezier(0.22, 1, 0.36, 1) ${0.2 + i * 0.07}s,
                     opacity 0.5s ease ${0.2 + i * 0.07}s,
                     color 0.5s ease,
                     text-shadow 0.5s ease,
                     letter-spacing 1s ease`
                  : 'none',
              }}
            >
              {letter}
            </span>
          )
        })}
      </div>

      <div
        style={{
          marginTop: '16px',
          width: glowing ? '200px' : '0px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
          transition: 'width 0.8s ease 0.3s',
        }}
      />

      <p
        style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '0.7rem',
          letterSpacing: '6px',
          color: 'rgba(212,175,55,0.7)',
          marginTop: '12px',
          opacity: glowing ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}
      >
        MERSİN · ERDEMLİ
      </p>
    </div>
  )
}

export default Loader
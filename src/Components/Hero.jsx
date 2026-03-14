import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 3,
}))

const words = ['Modern Lezzet', 'Antik Büyü', 'Kraliyet Deneyimi']

function TypeWriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <span className="text-gold italic">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(27,58,45,0.97), rgba(15,36,25,0.85)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80') center/cover`,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -80, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute w-[650px] h-[650px] border border-gold/10 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60" />
      </motion.div>

      <motion.div
        className="absolute w-[480px] h-[480px] border border-gold/15 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] border border-gold/20 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-24 left-10 text-gold/20 text-5xl"
        animate={{ rotate: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <i className="fas fa-ankh" />
      </motion.div>
      <motion.div
        className="absolute top-24 right-10 text-gold/20 text-5xl"
        animate={{ rotate: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <i className="fas fa-ankh" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-10 text-gold/20 text-4xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <i className="fas fa-eye" />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-10 text-gold/20 text-4xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      >
        <i className="fas fa-eye" />
      </motion.div>

      <motion.div
        className="z-10 max-w-4xl px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="font-cinzel text-gold tracking-[10px] text-xs mb-6 opacity-90"
        >
          ✦ MERSİN · ERDEMLİ ✦
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-playfair text-6xl md:text-7xl font-semibold mb-6 leading-tight text-cream drop-shadow-lg"
        >
          Antik Büyü,
          <br />
          <TypeWriter />
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />

        <motion.p
          variants={itemVariants}
          className="text-lg mb-10 font-light leading-relaxed text-cream/80"
        >
          Cleopatra'nın zarafetini her yudumda hissettiren
          <br />
          eşsiz kahve deneyimi
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-5 justify-center flex-wrap"
        >
          <motion.a
            href="#menu"
            className="px-10 py-4 border-2 border-gold text-gold font-cinzel text-xs tracking-widest relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 group-hover:text-primary transition-colors duration-300">MENÜYÜ KEŞFEDİN</span>
            <span className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-10 py-4 bg-gold text-primary font-cinzel text-xs tracking-widest relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">BİZE ULAŞIN</span>
            <span className="absolute inset-0 bg-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-cinzel text-[10px] tracking-widest">KEŞFET</span>
        <i className="fas fa-chevron-down" />
      </motion.div>
    </section>
  )
}

export default Hero
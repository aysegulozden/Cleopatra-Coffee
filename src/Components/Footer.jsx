import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const marqueeText = '✦ CLEOPATRA COFFEE ✦ MERSİN ERDEMLİ ✦ ANTİK MISIR BÜYÜSÜ ✦ MODERN LEZZET ✦ KRALİYET DENEYİMİ ✦ '

function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const links = [
    { href: '#home', label: 'Ana Sayfa' },
    { href: '#about', label: 'Hakkımızda' },
    { href: '#menu', label: 'Menü' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#contact', label: 'İletişim' },
  ]

  return (
    <footer className="bg-[#0f2419] border-t border-gold/25 relative overflow-hidden">
     
      <div className="border-b border-gold/15 py-3 overflow-hidden bg-gold/5">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="font-cinzel text-gold/60 text-xs tracking-widest shrink-0">
            {marqueeText.repeat(6)}
          </span>
        </div>
      </div>

      <div className="py-12 px-8">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.a
            href="#home"
            className="font-cinzel text-xl font-black text-gold flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.i
              className="fas fa-crown"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            CLEOPATRA COFFEE
          </motion.a>

          <p className="text-cream/55 mb-8 font-light text-sm tracking-wide">
            Antik Mısır'ın büyüsü, modern kahve kültürüyle buluşuyor.
          </p>

          <div className="flex justify-center gap-8 flex-wrap mb-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-cream/55 hover:text-gold transition-colors duration-300 text-xs tracking-widest font-cinzel relative group"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mb-6" />

          <p className="text-cream/30 text-xs tracking-wider">
            © 2026 Cleopatra Coffee. Tüm hakları saklıdır. | Mersin Erdemli
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
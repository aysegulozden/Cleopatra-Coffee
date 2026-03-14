import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.jpeg'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home', 'about', 'menu', 'gallery', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Ana Sayfa', id: 'home' },
    { href: '#about', label: 'Hakkımızda', id: 'about' },
    { href: '#menu', label: 'Menü', id: 'menu' },
    { href: '#gallery', label: 'Galeri', id: 'gallery' },
    { href: '#contact', label: 'İletişim', id: 'contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg transition-all duration-500 border-b border-gold/20
        ${scrolled ? 'py-1 bg-primary/98 shadow-lg shadow-black/30' : 'py-3 bg-primary/80'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <img
            src={logo}
            alt="Cleopatra Coffee"
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
          />
        </motion.a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={link.href}
                className={`font-medium text-sm tracking-wider relative group transition-colors duration-300
                  ${activeSection === link.id ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300
                  ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          className="md:hidden text-gold text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-gold/20 px-8 py-6 flex flex-col gap-5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-cream hover:text-gold transition-colors duration-300 font-medium tracking-wider"
                onClick={() => setMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const infos = [
    { icon: 'fa-map-marker-alt', title: 'Adres', content: 'Merkez Mahallesi, 2001. Sokak No: 3\nErdemli, Mersin, Türkiye' },
    { icon: 'fa-clock', title: 'Çalışma Saatleri', content: 'Pazartesi - Perşembe: 09:00 - 23:00\nCuma - Cumartesi: 09:00 - 00:00' },
    { icon: 'fa-phone', title: 'Telefon', content: '+90 (324) XXX XXXX\nRezervasyon için arayabilirsiniz' },
    { icon: 'fa-envelope', title: 'E-posta', content: 'info@cleopatracoffee.com\nİşbirlikleri için' },
  ]

  const socials = [
    { icon: 'fa-instagram', href: 'https://instagram.com/cleopatracoffe.tr', label: 'Instagram' },
    { icon: 'fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fa-whatsapp', href: 'https://wa.me/90XXXXXXXXXX', label: 'WhatsApp' },
  ]

  return (
    <section id="contact" className="py-32 px-8 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-cinzel text-gold tracking-widest text-xs mb-4">✦ ULAŞIN ✦</p>
          <h2 className="font-playfair text-5xl font-semibold mb-6 text-cream">İletişim</h2>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <motion.h3
              className="font-cinzel text-gold text-lg mb-8 tracking-widest"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bize Ulaşın
            </motion.h3>

            <div className="flex flex-col gap-7 mb-10">
              {infos.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                >
                  <motion.div
                    className="w-11 h-11 border border-gold/40 rounded-full flex items-center justify-center shrink-0 bg-secondary/60 group-hover:bg-gold group-hover:border-gold transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <i className={`fas ${item.icon} text-gold text-sm group-hover:text-primary transition-colors duration-300`} />
                  </motion.div>
                  <div>
                    <h4 className="font-cinzel text-gold text-xs tracking-widest mb-2">{item.title}</h4>
                    <p className="text-cream/75 leading-relaxed whitespace-pre-line text-sm">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-cinzel text-xs tracking-wider"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                >
                  <i className={`fab ${s.icon} text-sm`} />
                  <span className="hidden sm:inline">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="w-full h-96 border border-gold/20 overflow-hidden relative group"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ borderColor: 'rgba(212,175,55,0.5)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.5!2d34.3104041!3d36.606044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d822623d9d75ab%3A0xe956438fe889c163!2sMerkez%2C%202001.%20Sk.%20No%3A3%2C%2033730%20Erdemli%2FMersin!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              title="Cleopatra Coffee Konum"
              style={{ border: 0, filter: 'grayscale(30%) sepia(20%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function SectionTitle({ label, title }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <p className="font-cinzel text-gold tracking-widest text-xs mb-4">{label}</p>
      <h2 className="font-playfair text-5xl font-semibold mb-6 text-cream">{title}</h2>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
        initial={{ width: 0 }}
        animate={inView ? { width: 128 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
      />
    </motion.div>
  )
}

function About() {
  const features = [
    { icon: 'fa-crown', title: 'Kraliyet Deneyimi', desc: "Cleopatra'nın zarafetinden ilham alan eşsiz atmosfer" },
    { icon: 'fa-coffee', title: 'Özel Kahveler', desc: 'Dünyanın dört bir yanından seçilmiş en kaliteli çekirdekler' },
    { icon: 'fa-star', title: 'Lüks Ortam', desc: 'Antik Mısır temasıyla tasarlanmış büyüleyici dekor' },
  ]

  const imgRef = useRef(null)
  const imgInView = useInView(imgRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <SectionTitle label="✦ BİZİM HİKAYEMİZ ✦" title="Hakkımızda" />

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection delay={0.1}>
            <p className="text-cream/85 text-lg leading-relaxed mb-6">
              Cleopatra Coffee, Mersin Erdemli'nin kalbinde, antik Mısır'ın büyüsünü modern kahve kültürüyle buluşturan eşsiz bir deneyim sunar.
            </p>
            <p className="text-cream/85 text-lg leading-relaxed mb-8">
              Her fincan, Kraliçe Cleopatra'nın zarafetinden ilham alarak özenle hazırlanır. Sizleri tarihin derinliklerine götürecek bir yolculuğa davet ediyoruz.
            </p>
            <motion.a
              href="#menu"
              className="inline-block px-8 py-3 border-2 border-gold text-gold font-cinzel text-xs tracking-widest relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">MENÜYÜ İNCELE</span>
              <span className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          </AnimatedSection>

          <motion.div
            ref={imgRef}
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80"
                alt="Cleopatra Coffee"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/40 -z-10"
              animate={{ borderColor: ['rgba(212,175,55,0.4)', 'rgba(212,175,55,0.8)', 'rgba(212,175,55,0.4)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                className="text-center p-8 border border-gold/25 bg-primary/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ borderColor: 'rgba(212,175,55,0.7)', y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="w-16 h-16 border-2 border-gold/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`fas ${f.icon} text-gold text-xl group-hover:text-primary transition-all duration-300`} />
                </motion.div>
                <h3 className="font-cinzel text-gold text-sm mb-3 tracking-wider">{f.title}</h3>
                <p className="text-cream/70 leading-relaxed text-sm">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
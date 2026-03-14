import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Kahve' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80', alt: 'Latte Art' },
  { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80', alt: 'Kahve Çekirdekleri' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80', alt: 'Kafe' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', alt: 'Atmosfer' },
  { src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=80', alt: 'Tatlılar' },
]

function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="py-32 px-8 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-cinzel text-gold tracking-widest text-xs mb-4">✦ FOTOĞRAFLAR ✦</p>
          <h2 className="font-playfair text-5xl font-semibold mb-6 text-cream">Galeri</h2>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group aspect-square border border-gold/10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ borderColor: 'rgba(212,175,55,0.5)', zIndex: 1 }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                initial={{ opacity: 0, background: 'rgba(27,58,45,0)' }}
                whileHover={{ opacity: 1, background: 'rgba(27,58,45,0.65)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.i
                  className="fas fa-expand text-gold text-2xl mb-2"
                  initial={{ scale: 0, rotate: -90 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="font-cinzel text-gold text-xs tracking-widest">{img.alt}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} className="w-full max-h-[80vh] object-contain" />
              <div className="text-center mt-3">
                <span className="font-cinzel text-gold text-sm tracking-widest">{selected.alt}</span>
              </div>
              <button
                className="absolute top-3 right-3 w-10 h-10 border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
                onClick={() => setSelected(null)}
              >
                <i className="fas fa-times" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
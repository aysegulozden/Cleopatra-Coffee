import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const menuData = {
  kahveler: [
    { name: 'Cleopatra Espresso', desc: 'Yoğun ve güçlü, kraliyet usulü demleme', price: '45₺', tag: 'En Popüler', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80' },
    { name: 'Nil Latte', desc: 'Kadifemsi süt köpüğü ile yumuşak ve zarif lezzet', price: '65₺', tag: null, img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80' },
    { name: 'Altın Cappuccino', desc: 'Gerçek altın tozu ile süslenmiş özel cappuccino', price: '70₺', tag: 'Özel', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80' },
    { name: 'Mısır Mocha', desc: 'Çikolata ve espresso\'nun muhteşem uyumu', price: '75₺', tag: null, img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80' },
  ],
  tatlilar: [
    { name: 'Firavun Cheesecake', desc: 'Bal ve incirle zenginleştirilmiş kraliyet tatlısı', price: '85₺', tag: 'Şef\'in Seçimi', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80' },
    { name: 'Kleopatra Tatlısı', desc: 'Efsanevi tarife dayanan, unutulmaz bir lezzet', price: '90₺', tag: 'Imza', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80' },
    { name: 'Piramit Brownie', desc: 'Sıcak çikolata sos ve dondurmayla servis', price: '75₺', tag: null, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80' },
  ],
  sogukicecekler: [
    { name: 'İced Nil Latte', desc: 'Soğuk demleme tekniğiyle hazırlanmış, ferahlatıcı', price: '70₺', tag: 'Yaz Favori', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80' },
    { name: 'Mango Frappe', desc: 'Taze mango ve kremsi doku, tropik bir deneyim', price: '80₺', tag: null, img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80' },
    { name: 'Limon Buzlu Çay', desc: 'Ev yapımı limon şurubu ile taze demlenmiş çay', price: '55₺', tag: null, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80' },
  ],
}

const tabs = [
  { key: 'kahveler', label: 'Kahveler', icon: 'fa-coffee', color: 'from-amber-900/30' },
  { key: 'tatlilar', label: 'Tatlılar', icon: 'fa-cake-candles', color: 'from-rose-900/30' },
  { key: 'sogukicecekler', label: 'Soğuk İçecekler', icon: 'fa-ice-cream', color: 'from-sky-900/30' },
]

function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group"
      style={{ borderRadius: 2 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2D] via-[#1B3A2D]/20 to-transparent" />

        {item.tag && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gold text-primary font-cinzel text-[10px] tracking-widest">
            {item.tag}
          </div>
        )}

        <motion.div
          className="absolute top-3 right-3 font-cinzel text-gold text-lg font-bold"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {item.price}
        </motion.div>
      </div>

      <div className="bg-[#1f4232] border border-gold/15 group-hover:border-gold/50 transition-colors duration-400 p-5 relative">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold origin-bottom"
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <h3 className="font-cinzel text-gold text-sm tracking-wider mb-2 group-hover:text-gold-light transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-cream/60 text-xs leading-relaxed">{item.desc}</p>

        <motion.div
          className="flex items-center gap-2 mt-4 text-gold/0 group-hover:text-gold/80 transition-colors duration-300"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-cinzel text-[10px] tracking-widest">DETAYLAR</span>
          <i className="fas fa-arrow-right text-[10px]" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Menu({ onOpenFullMenu }) {
  const [active, setActive] = useState('kahveler')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const activeTab = tabs.find(t => t.key === active)

  return (
    <section id="menu" className="py-32 px-8 bg-[#1B3A2D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${activeTab.color} to-transparent transition-all duration-700`} />
        <motion.div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 7, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-cinzel text-gold tracking-widest text-xs mb-4">✦ LEZZETLER ✦</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-semibold mb-4 text-cream">
            Menümüz
          </h2>
          <p className="text-cream/50 text-sm font-light tracking-wider mb-6 max-w-md mx-auto">
            Kleopatra'nın krallığından ilham alan, özenle seçilmiş lezzetler
          </p>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          />
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative px-7 py-3 font-cinzel tracking-widest text-xs flex items-center gap-2.5 transition-all duration-300 overflow-hidden
                ${active === tab.key
                  ? 'text-primary'
                  : 'border border-gold/30 text-cream/70 hover:border-gold/60 hover:text-gold'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {active === tab.key && (
                <motion.div
                  className="absolute inset-0 bg-gold"
                  layoutId="activeTab"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2.5">
                <i className={`fas ${tab.icon}`} />
                {tab.label}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {menuData[active].map((item, i) => (
              <MenuCard key={`${active}-${i}`} item={item} index={i} />
            ))}

            <motion.div
              className="border border-gold/20 border-dashed flex flex-col items-center justify-center p-8 text-center group hover:border-gold/50 transition-colors duration-300 h-full min-h-[320px] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: menuData[active].length * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={onOpenFullMenu}
            >
              <motion.div
                className="w-14 h-14 border border-gold/40 rounded-full flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
              >
                <i className="fas fa-book-open text-gold text-sm group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <p className="font-cinzel text-gold/80 text-xs tracking-widest mb-2">TAM MENÜYÜ GÖR</p>
              <p className="text-cream/40 text-xs mb-4">Tüm ürünleri, görselleri ve malzemeleri keşfet</p>
              <motion.div
                className="px-5 py-2 border border-gold/40 text-gold font-cinzel text-[10px] tracking-widest group-hover:bg-gold group-hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.04 }}
              >
                MENÜYÜ AÇ →
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Menu
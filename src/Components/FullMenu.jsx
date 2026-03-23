import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fullMenuData = [
  {
    category: 'Kahveler',
    icon: 'fa-coffee',
    items: [
      {
        name: 'Cleopatra Espresso',
        desc: 'Yoğun ve güçlü, kraliyet usulü demleme',
        price: '45₺',
        tag: 'En Popüler',
        img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80',
        ingredients: ['Arabika Espresso Çekirdeği', 'Filtreli Su', 'Özel Kavrum Karışımı'],
        calories: '5 kcal',
        allergens: 'Kafein içerir',
      },
      {
        name: 'Nil Latte',
        desc: 'Kadifemsi süt köpüğü ile yumuşak ve zarif lezzet',
        price: '65₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80',
        ingredients: ['Çift Shot Espresso', 'Buharda Isıtılmış Süt', 'İnce Süt Köpüğü', 'İsteğe Bağlı Şeker'],
        calories: '120 kcal',
        allergens: 'Süt ürünü içerir',
      },
      {
        name: 'Altın Cappuccino',
        desc: 'Gerçek altın tozu ile süslenmiş özel cappuccino',
        price: '70₺',
        tag: 'Özel',
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
        ingredients: ['Espresso', 'Buharda Isıtılmış Süt', 'Yoğun Süt Köpüğü', 'Yenilebilir Altın Tozu'],
        calories: '110 kcal',
        allergens: 'Süt ürünü içerir',
      },
      {
        name: 'Mısır Mocha',
        desc: "Çikolata ve espresso'nun muhteşem uyumu",
        price: '75₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=800&q=80',
        ingredients: ['Espresso', 'Ev Yapımı Çikolata Sosu', 'Buharda Isıtılmış Süt', 'Vanilin', 'Krema'],
        calories: '210 kcal',
        allergens: 'Süt ürünü, gluten içerebilir',
      },
      {
        name: 'Horus Türk Kahvesi',
        desc: 'Geleneksel usuldeki aromalı Türk kahvesi',
        price: '40₺',
        tag: 'Geleneksel',
        img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
        ingredients: ['İnce Çekilmiş Türk Kahvesi', 'Filtreli Su', 'İsteğe Bağlı Şeker', 'Kakule'],
        calories: '10 kcal',
        allergens: 'Kafein içerir',
      },
      {
        name: 'Kraliçe Filtre',
        desc: 'Yavaş demleme yöntemiyle hazırlanan premium filtre kahve',
        price: '50₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
        ingredients: ['Yöresel Seçim Kahve Çekirdeği', 'Filtreli Su', 'Pour-Over Demlemesi'],
        calories: '5 kcal',
        allergens: 'Kafein içerir',
      },
    ],
  },
  {
    category: 'Soğuk İçecekler',
    icon: 'fa-ice-cream',
    items: [
      {
        name: 'İced Nil Latte',
        desc: 'Soğuk demleme tekniğiyle hazırlanmış, ferahlatıcı',
        price: '70₺',
        tag: 'Yaz Favori',
        img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
        ingredients: ['Cold Brew Kahve', 'Süt', 'Buz', 'Vanilya Şurubu'],
        calories: '130 kcal',
        allergens: 'Süt ürünü içerir',
      },
      {
        name: 'Mango Frappe',
        desc: 'Taze mango ve kremsi doku, tropik bir deneyim',
        price: '80₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80',
        ingredients: ['Taze Mango Püresi', 'Süt', 'Buz', 'Krema', 'Mango Sosu'],
        calories: '280 kcal',
        allergens: 'Süt ürünü içerir',
      },
      {
        name: 'Limon Buzlu Çay',
        desc: 'Ev yapımı limon şurubu ile taze demlenmiş çay',
        price: '55₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
        ingredients: ['Earl Grey Çayı', 'Taze Limon Suyu', 'Ev Yapımı Limon Şurubu', 'Buz', 'Nane'],
        calories: '80 kcal',
        allergens: 'Kafein içerir',
      },
      {
        name: 'Sfenks Smoothie',
        desc: 'Taze meyvelerle hazırlanan vitamin deposu',
        price: '75₺',
        tag: 'Yeni',
        img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80',
        ingredients: ['Çilek', 'Muz', 'Yoğurt', 'Bal', 'Taze Portakal Suyu', 'Buz'],
        calories: '195 kcal',
        allergens: 'Süt ürünü içerir',
      },
    ],
  },
  {
    category: 'Tatlılar',
    icon: 'fa-cake-candles',
    items: [
      {
        name: 'Firavun Cheesecake',
        desc: 'Bal ve incirle zenginleştirilmiş kraliyet tatlısı',
        price: '85₺',
        tag: "Şef'in Seçimi",
        img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80',
        ingredients: ['Krem Peynir', 'Bisküvi Tabanı', 'Taze İncir', 'Çiçek Balı', 'Vanilin', 'Yumurta'],
        calories: '420 kcal',
        allergens: 'Gluten, süt ürünü, yumurta içerir',
      },
      {
        name: 'Kleopatra Tatlısı',
        desc: 'Efsanevi tarife dayanan, unutulmaz bir lezzet',
        price: '90₺',
        tag: 'İmza',
        img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
        ingredients: ['Katmer Hamuru', 'Antep Fıstığı', 'Gül Suyu Şerbeti', 'Tereyağı', 'Pudra Şekeri'],
        calories: '380 kcal',
        allergens: 'Gluten, süt ürünü, fındık içerir',
      },
      {
        name: 'Piramit Brownie',
        desc: 'Sıcak çikolata sos ve dondurmayla servis',
        price: '75₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80',
        ingredients: ['Bitter Çikolata', 'Tereyağı', 'Yumurta', 'Un', 'Kakao', 'Vanilya Dondurması'],
        calories: '490 kcal',
        allergens: 'Gluten, süt ürünü, yumurta içerir',
      },
      {
        name: 'Nil Profiterol',
        desc: 'Çikolata sosuyla sunulan kremli profiterol',
        price: '80₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=800&q=80',
        ingredients: ['Choux Hamuru', 'Vanilyalı Krema', 'Sıcak Çikolata Sosu', 'Pudra Şekeri'],
        calories: '350 kcal',
        allergens: 'Gluten, süt ürünü, yumurta içerir',
      },
      {
        name: 'Altın Tiramisu',
        desc: 'Altın varak ile süslenmiş geleneksel tiramisu',
        price: '95₺',
        tag: 'Lüks',
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
        ingredients: ['Mascarpone', 'Espresso Islatmalı Bisküvi', 'Yumurta', 'Kakao', 'Marsala', 'Altın Varak'],
        calories: '440 kcal',
        allergens: 'Gluten, süt ürünü, yumurta içerir',
      },
    ],
  },
  {
    category: 'Aperatifler & Sandviçler',
    icon: 'fa-bread-slice',
    items: [
      {
        name: 'Kleopatra Tost',
        desc: 'Özel soslu, bol malzemeli kahvaltılık tost',
        price: '70₺',
        tag: 'Günaydın',
        img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80',
        ingredients: ['Ekşi Mayalı Ekmek', 'Kaşar Peyniri', 'Domates', 'Avokado', 'Özel Baharat Sosu'],
        calories: '350 kcal',
        allergens: 'Gluten, süt ürünü içerir',
      },
      {
        name: 'Firavun Tabağı',
        desc: 'Zengin içerikli kahvaltı tabağı',
        price: '120₺',
        tag: 'Doyurucu',
        img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80',
        ingredients: ['Beyaz Peynir', 'Kaşar', 'Zeytin', 'Domates', 'Salatalık', 'Bal', 'Tereyağı', 'Ekmek'],
        calories: '580 kcal',
        allergens: 'Gluten, süt ürünü içerir',
      },
      {
        name: 'Mısır Krokan',
        desc: 'Çıtır hamurlu, taze malzemeli atıştırmalık',
        price: '55₺',
        tag: null,
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
        ingredients: ['Brioche Ekmek', 'Mozzarella', 'Domates Sosu', 'Taze Fesleğen', 'Zeytinyağı'],
        calories: '290 kcal',
        allergens: 'Gluten, süt ürünü içerir',
      },
    ],
  },
]

function IngredientBadge({ text }) {
  return (
    <span className="inline-block px-2 py-0.5 bg-[#1B3A2D] border border-gold/20 text-gold/70 text-[10px] font-cinzel tracking-wide rounded-sm mr-1.5 mb-1.5">
      {text}
    </span>
  )
}

function FullMenuCard({ item, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden bg-[#1f4232] border border-gold/15 hover:border-gold/40 transition-all duration-400"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{ borderRadius: 2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f4232] via-[#1B3A2D]/30 to-transparent" />
        {item.tag && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gold text-primary font-cinzel text-[9px] tracking-widest">
            {item.tag}
          </div>
        )}
        <div className="absolute top-3 right-3 font-cinzel text-gold text-base font-bold">
          {item.price}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-cinzel text-gold text-sm tracking-wider mb-1.5 group-hover:text-amber-300 transition-colors">
          {item.name}
        </h3>
        <p className="text-cream/55 text-xs leading-relaxed mb-4">{item.desc}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-[10px] font-cinzel tracking-widest text-gold/60 hover:text-gold transition-colors duration-200 mb-3"
        >
          <i className={`fas fa-chevron-${expanded ? 'up' : 'down'} text-[9px]`} />
          {expanded ? 'GİZLE' : 'MALZEMELERİ GÖR'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gold/15 pt-3 mb-3">
                <p className="text-[10px] font-cinzel text-gold/50 tracking-widest mb-2">MALZEMELER</p>
                <div className="flex flex-wrap">
                  {item.ingredients.map((ing, i) => (
                    <IngredientBadge key={i} text={ing} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-cream/40">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-fire-flame-curved text-gold/40" />
                  {item.calories}
                </span>
                <span className="text-right text-[9px] italic">{item.allergens}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function FullMenu({ onClose }) {
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const displayed = activeCategory
    ? fullMenuData.filter(c => c.category === activeCategory)
    : fullMenuData

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col"
      style={{ background: '#0f2318' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 border-b border-gold/15 bg-[#0f2318]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="font-cinzel text-gold tracking-widest text-[10px] mb-0.5">✦ KLEOPATRA COFFEE ✦</p>
            <h1 className="font-playfair text-3xl text-cream font-semibold">Tam Menü</h1>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-1.5 font-cinzel text-[10px] tracking-widest transition-all duration-200 border
                ${activeCategory === null ? 'bg-gold text-primary border-gold' : 'border-gold/30 text-cream/60 hover:border-gold/60 hover:text-gold'}`}
            >
              TÜMÜ
            </button>
            {fullMenuData.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
                className={`px-4 py-1.5 font-cinzel text-[10px] tracking-widest transition-all duration-200 border flex items-center gap-1.5
                  ${activeCategory === cat.category ? 'bg-gold text-primary border-gold' : 'border-gold/30 text-cream/60 hover:border-gold/60 hover:text-gold'}`}
              >
                <i className={`fas ${cat.icon} text-[9px]`} />
                {cat.category.toUpperCase()}
              </button>
            ))}
          </div>

          <motion.button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 border border-gold/40 text-gold font-cinzel text-[10px] tracking-widest hover:bg-gold hover:text-primary transition-all duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <i className="fas fa-times" />
            <span className="hidden sm:inline">KAPAT</span>
          </motion.button>
        </div>

        <div className="md:hidden flex gap-2 overflow-x-auto px-6 pb-4 scrollbar-none">
          <button
            onClick={() => setActiveCategory(null)}
            className={`flex-shrink-0 px-4 py-1.5 font-cinzel text-[10px] tracking-widest border transition-all
              ${activeCategory === null ? 'bg-gold text-primary border-gold' : 'border-gold/30 text-cream/60'}`}
          >
            TÜMÜ
          </button>
          {fullMenuData.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category === activeCategory ? null : cat.category)}
              className={`flex-shrink-0 px-4 py-1.5 font-cinzel text-[10px] tracking-widest border transition-all flex items-center gap-1.5
                ${activeCategory === cat.category ? 'bg-gold text-primary border-gold' : 'border-gold/30 text-cream/60'}`}
            >
              <i className={`fas ${cat.icon} text-[9px]`} />
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {displayed.map((section) => (
            <div key={section.category}>
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-10 h-10 border border-gold/40 rounded-full flex items-center justify-center">
                  <i className={`fas ${section.icon} text-gold text-sm`} />
                </div>
                <div>
                  <h2 className="font-cinzel text-gold text-xl tracking-wider">{section.category}</h2>
                  <div className="h-px w-24 bg-gradient-to-r from-gold/60 to-transparent mt-1" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent ml-2" />
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {section.items.map((item, i) => (
                  <FullMenuCard key={`${section.category}-${i}`} item={item} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold/15 text-center">
          <p className="font-cinzel text-gold/40 text-[10px] tracking-widest mb-2">✦ KLEOPATRA COFFEE ✦</p>
          <p className="text-cream/30 text-xs">Tüm fiyatlara KDV dahildir. Alerjen bilgisi için personelimizle görüşebilirsiniz.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default FullMenu

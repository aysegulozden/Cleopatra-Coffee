import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FullMenu from './Components/FullMenu'


function App() {
  const [showFullMenu, setShowFullMenu] = useState(false)

  return (
    <div className="bg-primary font-montserrat text-cream overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Menu onOpenFullMenu={() => setShowFullMenu(true)} />
      <Gallery />
      <Contact />
      <Footer />

      <AnimatePresence>
        {showFullMenu && (
          <FullMenu onClose={() => setShowFullMenu(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
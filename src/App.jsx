import Loader from './Components/Loader'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="bg-primary font-montserrat text-cream overflow-x-hidden">
      <Loader />
     <Navbar/>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Destinations from './components/Destinations'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  )
}
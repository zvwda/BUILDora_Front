import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ServicesSection from "./components/ServicesSection"
import PortfolioSection from "./components/PortfolioSection"
import WhyBuildSection from "./components/WhyBuildSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import bgImage from "./assets/bg.jpg"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover flex flex-col w-full min-h-screen">
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <WhyBuildSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage

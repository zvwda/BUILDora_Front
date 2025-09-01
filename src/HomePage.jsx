import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhyBuildSection from "./components/WhyBuildSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import bgImage from "./assets/bg.jpg";
import SplashPage from "./SplashPage";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;

    img.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      {loading ? (
        <SplashPage />
      ) : (
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-cover flex flex-col w-full min-h-screen"
        >
          <Navbar />
          <Hero />
          <ServicesSection />
          <PortfolioSection />
          <WhyBuildSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default HomePage;

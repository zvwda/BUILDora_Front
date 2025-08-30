import { PiPaintBrushHouseholdDuotone, PiCodeDuotone, PiChartBarDuotone, PiShoppingCartDuotone } from "react-icons/pi"
import { Link } from "react-router-dom" // Added React Router Link import
import "./ServicesSection.css"

const services = [
  {
    icon: <PiPaintBrushHouseholdDuotone className="text-cyan-400 text-6xl" />,
    title: "UI/UX Design",
    description: "User-first, visually sharp.",
    backText: "We craft modern interfaces that are intuitive, scalable, and beautifully aligned with your goals.",
  },
  {
    icon: <PiCodeDuotone className="text-cyan-400 text-6xl" />,
    title: "Custom Websites",
    description: "Crafted from scratch to fit your brand.",
    backText: "We design and build responsive websites — no templates, just unique code built for you.",
  },
  {
    icon: <PiChartBarDuotone className="text-cyan-400 text-6xl" />,
    title: "Dashboards & Admin Panels",
    description: "Powerful tools for internal use.",
    backText: "We create clean, functional dashboards and internal tools customized for your business flow.",
  },
  {
    icon: <PiShoppingCartDuotone className="text-cyan-400 text-6xl" />,
    title: "E-commerce Solutions",
    description: "Sell online with confidence.",
    backText: "From product pages to payment integration, we build secure and scalable online stores.",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="text-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-14 tracking-wide">Our Services</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flip-card group">
            <div className="flip-inner rounded-2xl shadow-lg group-hover:shadow-cyan-500/30">
              {/* Front */}
              <div className="flip-front flex flex-col justify-center items-center p-8 border border-slate-700 rounded-2xl">
                {service.icon}
                <h3 className="text-cyan-400 text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-slate-300 text-sm mt-2">{service.description}</p>
              </div>

              {/* Back */}
              <div className="flip-back flex flex-col justify-between p-8 border border-cyan-400 rounded-2xl bg-transparent text-white">
                <p className="text-sm leading-relaxed">{service.backText}</p>
                <div className="text-center mt-8">
                  <Link to="/projects">
                    <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0A1C3C] transition duration-300">
                      See our work
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

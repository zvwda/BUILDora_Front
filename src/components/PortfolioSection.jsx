import imageForPortfolio from "../assets/portfolio img.png";
import { Link } from "react-router-dom"; // Added React Router Link import

export default function PortfolioSection() {
  return (
    <div className="relative py-20 px-6 lg:px-20">
      <h2 className="text-white text-3xl lg:text-4xl mb-16 font-semibold text-center">
        Portfolio
      </h2>

      {/* ✅ Version without background (only small and medium screens) */}
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto lg:hidden">
        <div className="text-white text-center max-w-2xl">
          <p className="text-xl sm:text-2xl mb-6 font-light leading-relaxed">
            From sketches to systems
            <br />
            these are some of the builds we’re proud of.
          </p>
          <div className="text-center">
            <Link to="/projects">
              <button className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-[#0A1C3C] transition duration-300">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Version with background (only large screens and up) */}
      <div
        className="hidden lg:flex flex-col md:flex-row items-center justify-between bg-cover h-250 rounded-lg p-10 max-w-6xl mx-auto"
        style={{ backgroundImage: `url(${imageForPortfolio})` }}
      >
        <div className=" p-6 rounded-md text-center  mb-120 md:text-left max-w-xl">
          <p className="text-white text-xl sm:text-2xl mb-4 font-light leading-relaxed">
            From sketches to systems
            <br />
            these are some of the builds we’re proud of.
          </p>
          <div className="text-center">
            <Link to="/projects">
              <button className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-[#0A1C3C] transition duration-300">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

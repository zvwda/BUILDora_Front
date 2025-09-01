export default function Hero() {
  return (
    <section className="relative text-white px-6 md:px-5 py-20 md:py-70">
      <div className="relative z-10 max-w-6xl mx-auto md:ml-30 text-center md:text-left">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight font-extrabold leading-tight text-[#00CFFF] font-space-grotesk">
          Design. Code. Launch. Flawlessly.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-xl sm:text-2xl md:text-[26px] text-white/80 font-normal max-w-3xl mx-auto md:mx-0 font-space-grotesk">
          From design to code — Bulldora helps startups, creators, and local
          businesses go online with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            className="bg-white text-[#0B0E29] font-medium px-8 py-2 rounded-md hover:bg-gray-300 transition font-inter text-[18px]"
            style={{ padding: "8px 32px" }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Building
          </button>
          <button
            className="border border-[#00CFFF] text-[#00CFFF] font-medium px-8 py-2 rounded-md hover:bg-[#00CFFF] hover:text-[#0B0E29] transition font-inter text-[18px]"
            style={{ padding: "8px 32px" }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Add font imports in your global CSS file */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@500&display=swap");

        .font-space-grotesk {
          font-family: "Space Grotesk", sans-serif;
        }

        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </section>
  );
}

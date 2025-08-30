export default function Hero() {
  return (
    <section className="relative text-white px-6 md:px-5 md:py-15 ">
      <div className="relative z-10 max-w-6xl mx-auto ml-0 mt-30 mb-30 md:ml-30 text-center md:text-left">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#00CFFF]">
          Buildora – Your Software House for Web, Mobile & AI Solutions
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto md:mx-0">
          We design, build, and launch custom software tailored to your business
          needs. Whether you’re a startup, enterprise, or local business,
          Buildora helps you transform ideas into scalable web apps, mobile
          apps, and AI-powered solutions.
        </p>

        {/* Secondary Text (SEO-friendly) */}
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
          Our team specializes in <strong>web development</strong>,{" "}
          <strong>mobile applications</strong>,<strong> cloud platforms</strong>
          , and <strong>AI-driven tools</strong> to help businesses innovate,
          grow, and stay ahead of competition.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            className="bg-white text-[#0B0E29] font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Start Your Project
          </button>
          <a
            href="https://wa.me/201029057739"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#00CFFF] text-[#00CFFF] font-semibold px-8 py-3 rounded-md hover:bg-[#00CFFF] hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

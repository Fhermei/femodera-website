export default function Hero({ onGetStarted }) {
  return (
    <section id="home" className="pt-[200px] md:pt-[120px] pb-20 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1D2B49] leading-tight max-w-4xl mx-auto">
          Building the Future of
          <span className="block text-[#D94801]">Technology & Innovation</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#1D2B49]/70 leading-relaxed max-w-2xl mx-auto">
          Fera Digital Solutions delivers innovative software, AI solutions, 
          and academic research support for organizations and individuals ready 
          to make an impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors"
          >
            Start Your Project
          </button>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#1D2B49] border border-[#1D2B49]/20 rounded-lg hover:bg-gray-50 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
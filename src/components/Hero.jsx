export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D2B49] leading-tight">
            Building the Future of
            <span className="block text-[#D94801]">Technology</span>
          </h1>

          <p className="mt-6 text-lg text-[#1D2B49]/70 leading-relaxed max-w-xl">
            Fera Digital Solutions delivers innovative software, AI solutions, 
            and academic research support for organizations and individuals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#1D2B49] border border-[#1D2B49]/20 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function GlobalReach({ onGetStarted }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      ref={sectionRef}
      id="reach"
      className="relative mt-[60px] mb-[120px] w-full overflow-hidden bg-black font-['Libre_Baskerville',serif] md:mt-[100px] lg:mt-[140px] lg:h-[min(35.97vw,518px)]"
    >
      {/* Map image: background on mobile/iPad, right side on desktop (runs to the right edge) */}
      <img
        src="/global/global.png"
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right transition-opacity duration-1000 motion-reduce:transition-none lg:w-[64%] ${
          isVisible ? 'opacity-90' : 'opacity-0'
        }`}
      />

      {/* Dark fade so the text stays readable over the map */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 lg:from-black lg:from-35% lg:via-black/30 lg:to-transparent" />

      {/* Text: same container as the navbar, so it starts where the navbar starts on the left */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[573px] items-center px-4 py-16 md:max-w-[1292px] md:px-6 md:py-24 lg:py-0 xl:px-0">
        {/* Wrapper is wider than half the section, so the paragraph passes the centre on every screen */}
        <div className="w-full md:max-w-[640px] lg:max-w-[min(54vw,780px)]">
          <span
            className={`block text-[8px] font-bold uppercase leading-[20px] tracking-[0.16em] text-white md:text-[10px] lg:text-[12px] lg:leading-[38px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Our Reach
          </span>

          <h2
            className={`mt-3 text-[22px] font-bold leading-[28px] text-white md:mt-4 md:text-[34px] md:leading-[42px] lg:mt-5 lg:text-[36px] lg:leading-[44px] xl:text-[48px] xl:leading-[57px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            Research &amp; Technology
            <br />
            Without Borders
          </h2>

          {/* Mobile: full width, so it runs through the centre. Desktop: runs past the centre over the map */}
          <p
            className={`mt-5 w-full text-[8px] font-normal leading-[14px] text-white/80 md:mt-7 md:text-[14px] md:leading-[22px] lg:mt-8 lg:text-[15px] lg:leading-[24px] xl:text-[18px] xl:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            We support clients globally, using technology to make research and digital solutions
            accessible, reliable and impactful.
          </p>

          <button
            onClick={onGetStarted}
            className={`group mt-8 inline-flex h-[40px] w-[168px] items-center justify-center gap-1 rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.4)] active:translate-y-0 active:scale-[0.98] md:mt-10 md:h-[44px] lg:mt-12 lg:w-[190px] lg:text-[14px] ${reveal(
              'delay-[450ms]'
            )}`}
          >
            Get started
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
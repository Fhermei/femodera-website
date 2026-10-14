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
      className="mt-[60px] mb-[80px] w-full overflow-hidden bg-black font-['Libre_Baskerville',serif] md:mt-[100px] md:mb-[100px] lg:mt-[140px] lg:mb-[120px]"
    >
      {/* Max width wrapper: the design stops growing at 1440px and stays centred when zoomed out */}
      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[min(35.97vw,518px)]">
        {/* Map image: background on mobile/iPad, right side on desktop */}
        <img
          src="/global/global.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right transition-opacity duration-1000 motion-reduce:transition-none lg:w-[64%] ${
            isVisible ? 'opacity-90' : 'opacity-0'
          }`}
        />

        {/* Dark fade so the text stays readable over the map (stronger on phones) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30 md:via-black/60 md:to-black/10 lg:from-black lg:from-35% lg:via-black/30 lg:to-transparent" />

        {/* Soft fade on the far right so the map blends into the black when the screen is wider than 1440px */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black to-transparent lg:block" />

        {/* Text: same container as the navbar, so it starts where the navbar starts on the left */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[573px] items-center px-4 py-16 md:max-w-[1292px] md:px-6 md:py-24 lg:py-0 xl:px-0">
          {/* Wrapper is wider than half the section, so the paragraph passes the centre on every screen */}
          <div className="w-full md:max-w-[640px] lg:max-w-[min(54vw,780px)]">
            <span
              className={`block text-[11px] font-bold uppercase leading-[20px] tracking-[0.16em] text-white md:text-[12px] lg:text-[12px] lg:leading-[38px] xl:text-[14px] ${reveal(
                'delay-[100ms]'
              )}`}
            >
              Our Reach
            </span>

            <h2
              className={`mt-3 text-[28px] font-bold leading-[35px] text-white md:mt-4 md:text-[38px] md:leading-[46px] lg:mt-5 lg:text-[36px] lg:leading-[44px] xl:text-[48px] xl:leading-[57px] ${reveal(
                'delay-[200ms]'
              )}`}
            >
              Research &amp; Technology
              <br />
              Without Borders
            </h2>

            {/* Mobile: full width, so it runs through the centre. Desktop: runs past the centre over the map */}
            <p
              className={`mt-4 w-full text-[14px] font-normal leading-[23px] text-white/85 md:mt-6 md:text-[15px] md:leading-[26px] lg:mt-8 lg:text-[15px] lg:leading-[24px] lg:text-white/80 xl:text-[18px] xl:leading-[28px] ${reveal(
                'delay-[300ms]'
              )}`}
            >
              We support clients globally, using technology to make research and digital solutions
              accessible, reliable and impactful.
            </p>

            <button
              onClick={onGetStarted}
              className={`group mt-7 inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#D44B08] px-7 text-[13px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.4)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 focus-visible:ring-offset-black active:translate-y-0 active:scale-[0.98] md:mt-9 md:h-[46px] md:px-8 md:text-[14px] lg:mt-12 lg:h-[48px] lg:w-[190px] lg:px-0 ${reveal(
                'delay-[450ms]'
              )}`}
            >
              Get started
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
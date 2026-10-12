import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    img: '/about/1.png',
    title: 'Software & Web Development',
    desc: 'Custom websites, web applications, SaaS platforms, mobile apps, and enterprise software solutions built with modern technologies.',
  },
  {
    img: '/about/2.png',
    title: 'Data Collection & Analysis',
    desc: 'Reliable data collection, cleaning, statistical analysis and clear reporting for research and business decisions.',
  },
  {
    img: '/about/3.png',
    title: 'Academic Research & Writing',
    desc: 'Expert research support and academic writing for final year, PGD, Masters, PhD and journal projects.',
  },
]

// 1,2,3  ->  2,3,1  ->  3,2,1  ->  back to 1,2,3
const orders = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 1, 0],
]

// 0 = big card, 1 = first small, 2 = second small
const posClasses = [
  'left-0 w-[71.7%] md:w-[58.4%]',
  'left-[73.9%] w-[11.9%] md:left-[60.3%] md:w-[18.9%]',
  'left-[88.1%] w-[11.9%] md:left-[81.1%] md:w-[18.9%]',
]

export default function About({ onGetStarted }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || paused) return
    const id = setInterval(() => setStep((s) => (s + 1) % orders.length), 4000)
    return () => clearInterval(id)
  }, [isVisible, paused])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      ref={sectionRef}
      id="services"
      className="mt-[300px] bg-white px-4 pb-12 font-['Libre_Baskerville',serif] md:px-8 md:pb-16 xl:px-0"
    >
      <div className="mx-auto flex w-full max-w-[573px] flex-col items-center md:max-w-[1236px] md:flex-row md:items-center">
        {/* LEFT: text */}
        <div className="relative z-20 flex w-full flex-col items-center text-center md:w-[30%] md:shrink-0 md:items-start md:text-left">
          <span
            className={`text-[8px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:leading-[38px] lg:text-[18px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Our Services
          </span>

          {/* More space between "Our Services" and "What We Do" */}
          <h2
            className={`mt-3 text-[22px] font-bold leading-[30px] text-[#091E4C] md:mt-6 md:text-[32px] md:leading-[38px] lg:mt-8 lg:text-[48px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            What We Do
          </h2>

          {/* Desktop/tablet: white background reaches the centre of the first image, 75px top margin on desktop */}
          <p
            className={`mt-4 w-full text-[11px] leading-[16px] text-black/70 md:mt-12 md:w-[172%] md:bg-white md:py-4 md:pr-[8%] md:text-[12px] md:leading-[20px] lg:mt-[75px] lg:text-[18px] lg:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            From research and academic support to modern digital system, we help individuals,
            organizations and institutions turn ideas into impact.
          </p>

          {/* Learn more (tablet + desktop only) */}
          <a
            href="#about"
            className={`group mt-6 hidden h-[40px] w-[130px] items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[12px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] active:scale-[0.98] md:inline-flex lg:mt-10 lg:h-[48px] lg:w-[190px] lg:text-[14px] ${reveal(
              'delay-[400ms]'
            )}`}
          >
            Learn more
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
          </a>
        </div>

        {/* RIGHT: animated carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`relative mt-8 aspect-[361/197] w-full md:mt-0 md:aspect-[841/716] md:flex-1 ${reveal(
            'delay-[500ms]'
          )}`}
        >
          {slides.map((s, i) => {
            const pos = orders[step].indexOf(i)
            const isActive = pos === 0
            return (
              <div
                key={s.title}
                onClick={() => setStep(i)}
                className={`absolute top-0 h-full cursor-pointer overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${posClasses[pos]}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
                    isActive ? 'scale-100' : 'scale-110'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* BIG CARD CONTENT */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col items-start p-2 transition-all duration-700 md:p-5 lg:p-7 ${
                    isActive
                      ? 'translate-y-0 opacity-100 delay-500'
                      : 'pointer-events-none translate-y-4 opacity-0 delay-0'
                  }`}
                >
                  <h3 className="max-w-[90%] text-left text-[11px] font-normal leading-[13px] text-white md:text-[20px] md:leading-[22px] lg:text-[28px] lg:leading-[26px]">
                    {s.title}
                  </h3>
                  <p className="mt-1 max-w-[95%] text-left text-[7px] font-medium leading-[9px] text-white/80 md:mt-2 md:text-[11px] md:leading-[15px] lg:mt-3 lg:text-[16px] lg:leading-[20px]">
                    {s.desc}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onGetStarted?.()
                    }}
                    className="mt-3 hidden h-[34px] w-[130px] items-center justify-center rounded-full bg-white text-[12px] font-semibold text-[#091E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D44B08] hover:text-white active:scale-[0.98] md:inline-flex lg:mt-5 lg:h-[40px] lg:w-[180px] lg:text-[14px]"
                  >
                    Start Project
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onGetStarted?.()
                    }}
                    className="mt-1 inline-flex items-center gap-1 text-[9px] font-medium text-white md:hidden"
                  >
                    Start Project
                    <ArrowRight className="h-[9px] w-[9px]" />
                  </button>
                </div>

                {/* SMALL CARD ROTATED LABEL */}
                <span
                  className={`absolute bottom-3 left-1/2 -translate-x-1/2 rotate-180 whitespace-pre-line text-left text-[8px] font-normal leading-[10px] text-white transition-all duration-700 [writing-mode:vertical-rl] md:bottom-6 md:text-[14px] md:leading-[16px] lg:text-[22px] lg:leading-[24px] ${
                    isActive ? 'pointer-events-none opacity-0 delay-0' : 'opacity-100 delay-500'
                  }`}
                >
                  {s.title.replace(' & ', ' &\n')}
                </span>
              </div>
            )
          })}
        </div>

        {/* Mobile: Start Project button (168 x 36, left, rounded) */}
        <button
          onClick={onGetStarted}
          className={`group mt-8 inline-flex h-[36px] w-[168px] items-center justify-center gap-1 self-start rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#B93F06] active:scale-[0.98] md:hidden ${reveal(
            'delay-[600ms]'
          )}`}
        >
          Start Project
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
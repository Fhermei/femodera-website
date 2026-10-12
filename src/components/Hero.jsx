import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const timeline = [
  { n: 1, title: 'Final year', time: '2 to 7 days' },
  { n: 2, title: 'PGD', time: '3 to 7 days' },
  { n: 3, title: 'MSc/Masters', time: '4 to 10 days' },
  { n: 4, title: 'PhD', time: '4 to 10 Days' },
  { n: 5, title: 'Data Collection & Analysis', time: '3 to 7 days' },
  { n: 6, title: 'Article/Journal', time: '3 to 7 days' },
  { n: 7, title: 'Computer sci (Implementation)', time: '3 to 7 days' },
]

// Mobile sizes first, then desktop sizes (scaled with vw between md and 1440px, capped at Figma size)
const logos = [
  { n: 1, c: 'w-[58px] h-[14px] md:w-[min(9.375vw,135px)] md:h-[min(2.215vw,31.9px)]' },
  { n: 2, c: 'w-[46px] h-[41px] md:w-[min(10.278vw,148px)] md:h-[min(5.694vw,82px)]' },
  { n: 3, c: 'w-[23px] h-[23px] md:w-[min(5.139vw,74px)] md:h-[min(5.139vw,74px)]' },
  { n: 4, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 5, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 6, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 7, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 8, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 9, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 10, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 11, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 12, c: 'w-[40px] h-[20px] md:w-[min(4.792vw,69px)] md:h-[min(4.236vw,61px)]' },
  { n: 13, c: 'w-[23px] h-[23px] md:w-[min(3.681vw,53px)] md:h-[min(3.681vw,53px)]' },
  { n: 14, c: 'w-[23px] h-[10px] md:w-[min(6.806vw,98px)] md:h-[min(2.847vw,41px)]' },
]

function Logo({ n, c }) {
  return (
    <img
      src={`/${n}.png`}
      alt={`Partner logo ${n}`}
      className={`shrink-0 object-contain md:min-w-0 md:shrink ${c}`}
    />
  )
}

export default function Hero({ onGetStarted }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Fade-up on load. Pass a literal delay class, e.g. 'delay-[300ms]'
  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section id="home" className="font-['Libre_Baskerville',serif]">
      {/* Background image (covers navbar area + hero + timeline) */}
      <div className="bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
        {/* Main content */}
        <div className="flex flex-col items-center px-4 pb-[48px] pt-[130px] text-center md:px-8 md:pb-[64px] md:pt-[170px]">
          {/* Badge */}
          <div className={reveal('delay-[100ms]')}>
            <span className="mb-[4px] mt-[10px] inline-flex items-center justify-center rounded-full bg-white px-[14px] text-[6px] font-bold uppercase leading-[20px] tracking-[0.16em] text-black md:px-[30px] md:text-[11px] md:leading-[38px] lg:text-[14px]">
              Research &amp; Development Workspace
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-[14px] font-normal leading-[1] text-white md:mt-[19px]">
            <span className={`block leading-[1] md:leading-[0.95] ${reveal('delay-[250ms]')}`}>
              <span className="text-[32px] md:text-[48px] lg:text-[64px]">Better </span>
              <span className="font-['Mogra',cursive] text-[36px] md:text-[56px] lg:text-[75px]">Research</span>
              <span className="text-[36px] md:hidden">,</span>
            </span>
            <span className={`block leading-[1] md:-mt-1 md:leading-[0.95] lg:-mt-2 ${reveal('delay-[400ms]')}`}>
              <span className="text-[36px] md:text-[56px] lg:text-[75px]">Digital </span>
              <span className="font-['Mogra',cursive] text-[42px] md:text-[64px] lg:text-[87px]">Solutions</span>
              <span className="text-[42px] md:text-[64px] lg:text-[87px]">.</span>
            </span>
          </h1>

          {/* Paragraph (same text on mobile + desktop, 60% white) */}
          <p
            className={`mt-[14px] max-w-[290px] text-[9px] leading-[14px] text-white/60 md:mt-[18px] md:max-w-[560px] md:text-[14px] md:leading-[22px] lg:max-w-[780px] lg:text-[18px] lg:leading-[28px] ${reveal(
              'delay-[550ms]'
            )}`}
          >
            We support your academic goals and digital vision with expert research, academic writing, data
            analysis and software development.
          </p>

          {/* Divider (60% white) */}
          <div
            className={`mt-[29px] h-px w-full max-w-[335px] bg-white/60 md:mt-[24px] md:max-w-[760px] ${reveal(
              'delay-[650ms]'
            )}`}
          />

          {/* Buttons */}
          <div
            className={`mt-[40px] flex items-center justify-center gap-[17px] md:gap-5 ${reveal('delay-[750ms]')}`}
          >
            <button
              onClick={onGetStarted}
              className="group inline-flex h-[36px] w-[168px] items-center justify-center gap-1 rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.4)] active:translate-y-0 active:scale-[0.98] md:h-[52px] md:w-[250px] md:text-[13px] lg:h-[58px] lg:w-[337px] lg:text-[14px]"
            >
              Start Project
              <ArrowRight className="h-[12px] w-[12px] transition-transform duration-300 group-hover:translate-x-1 md:h-4 md:w-4" />
            </button>

            <a
              href="#contact"
              className="group inline-flex h-[36px] w-[168px] items-center justify-center gap-1 rounded-full border border-white text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#08214D] hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)] active:translate-y-0 active:scale-[0.98] md:h-[52px] md:w-[250px] md:text-[13px] lg:h-[58px] lg:w-[337px] lg:text-[14px]"
            >
              Build a solution
              <ArrowRight className="h-[12px] w-[12px] transition-transform duration-300 group-hover:translate-x-1 md:h-4 md:w-4" />
            </a>
          </div>
        </div>

        {/* Timeline bar */}
        <div
          className={`flex min-h-[168px] w-full flex-col items-center justify-center border-t border-white bg-[#071E4D]/70 px-4 py-5 md:min-h-[200px] xl:h-[176px] xl:min-h-0 xl:py-0 ${reveal(
            'delay-[900ms]'
          )}`}
        >
          <h2 className="text-center text-[11px] font-normal uppercase leading-[20px] text-white md:text-[14px] lg:text-[18px]">
            Writing Service &amp; Delivery Timeline
          </h2>

          <div className="mt-[14px] grid grid-flow-col grid-rows-4 gap-x-[48px] gap-y-[10px] sm:gap-x-[72px] md:mt-[28px] md:gap-x-[120px] md:gap-y-4 xl:mt-[53px] xl:flex xl:items-start xl:gap-x-5 min-[1440px]:gap-x-6">
            {timeline.map((t) => (
              <div key={t.n} className="flex items-center gap-[6px] md:gap-2">
                <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-[0.5px] border-white/70 text-[8px] italic text-white md:h-[26px] md:w-[26px] md:text-[12px] xl:h-[30px] xl:w-[30px] xl:text-[14px] min-[1440px]:h-[32px] min-[1440px]:w-[32px] min-[1440px]:text-[16px]">
                  {t.n}
                </span>
                <div className="flex flex-col gap-[2px] text-left md:gap-2">
                  <span className="whitespace-nowrap text-[8px] leading-tight text-white md:text-[13px] xl:text-[14px] min-[1440px]:text-[18px]">
                    {t.title}
                  </span>
                  <span className="whitespace-nowrap text-[6px] italic leading-tight text-white/80 md:text-[10px] xl:text-[11px] min-[1440px]:text-[14px]">
                    {t.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo strip (left/right padding on tablet + desktop) */}
      <div
        className={`flex w-full flex-col bg-[#F5F5F5] pb-[3px] md:h-[min(5.417vw,78px)] md:flex-row md:items-center md:justify-center md:gap-[min(2.222vw,32px)] md:px-4 md:pb-0 lg:px-10 ${reveal(
          'delay-[1050ms]'
        )}`}
      >
        <div className="flex items-center justify-between px-6 py-[3px] md:contents">
          {logos.slice(0, 7).map((l) => (
            <Logo key={l.n} {...l} />
          ))}
        </div>
        <div className="flex items-center justify-between px-10 py-[3px] md:contents">
          {logos.slice(7).map((l) => (
            <Logo key={l.n} {...l} />
          ))}
        </div>
      </div>
    </section>
  )
}
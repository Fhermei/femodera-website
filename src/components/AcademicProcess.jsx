import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: '01', title: 'Introduction', desc: 'Sets the background, context and research focus' },
  { n: '02', title: 'Literature Review', desc: 'Explores existing work and identifies the gap' },
  { n: '03', title: 'Methodology', desc: 'Shows how the research was conducted' },
  { n: '04', title: 'Data Analysis', desc: 'Presents and interprets the findings' },
  { n: '05', title: 'Conclusion & Recommendation', desc: 'Summarises key findings and suggests next step' },
  { n: '06', title: 'References', desc: 'Lists all sources in proper academic format' },
]

export default function AcademicProcess({ onGetStarted }) {
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
      id="process"
      className="w-full overflow-hidden bg-[#F8F8F8] font-['Libre_Baskerville',serif]"
    >
      {/* Max width wrapper: the whole design stops growing at 1440px and stays centred when zoomed out */}
      <div className="mx-auto w-full max-w-[1440px] lg:flex lg:h-[min(71.94vw,1036px)]">
        {/* LEFT image (desktop): 426 x 739, flush to the left edge of the wrapper */}
        <div className={`hidden w-[29.58%] shrink-0 lg:flex lg:items-center ${reveal('delay-[100ms]')}`}>
          <img
            src="/writing/writing.png"
            alt="Academic writing"
            className="aspect-[426/739] w-full object-cover"
          />
        </div>

        {/* CENTER content (max 837px) */}
        <div className="flex flex-1 items-center justify-center px-4 py-14 md:px-8 md:py-20 lg:px-[3.5%] lg:py-0">
          <div className="w-full max-w-[573px] md:max-w-[700px] lg:max-w-[837px]">
            {/* Heading block */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span
                className={`text-[11px] font-bold uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] lg:text-[13px] lg:leading-[38px] xl:text-[16px] ${reveal(
                  'delay-[100ms]'
                )}`}
              >
                The Academic Process
              </span>

              <h2
                className={`mt-2 text-[28px] font-bold leading-[34px] text-[#091E4C] md:text-[38px] md:leading-[46px] lg:mt-3 lg:text-[36px] lg:leading-[46px] xl:text-[48px] xl:leading-[59px] ${reveal(
                  'delay-[200ms]'
                )}`}
              >
                Academic Writing,
                <br />
                Structured by Chapters
              </h2>

              <p
                className={`mt-4 max-w-[360px] text-[14px] font-normal leading-[22px] text-black/70 md:max-w-[580px] md:text-[15px] md:leading-[26px] lg:mt-4 lg:max-w-none lg:text-[15px] lg:leading-[24px] xl:text-[18px] xl:leading-[28px] ${reveal(
                  'delay-[300ms]'
                )}`}
              >
                A clear, organized and professional approach to help you create structured research work,
                from the first chapter to the final reference.
              </p>
            </div>

            {/* Mobile + tablet image */}
            <img
              src="/writing/writing.png"
              alt="Academic writing"
              className={`mt-6 aspect-[356/241] w-full object-cover md:mt-8 md:aspect-[700/340] lg:hidden ${reveal(
                'delay-[400ms]'
              )}`}
            />

            {/* Cards: 2 per row on mobile, 3 per row on iPad + desktop */}
            <div className="mt-5 grid grid-cols-2 gap-[10px] md:mt-6 md:grid-cols-3 md:gap-[14px] lg:mt-8 lg:gap-[18px] xl:mt-10">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  style={{ transitionDelay: isVisible ? `${400 + i * 100}ms` : '0ms' }}
                  className={`flex min-h-[150px] flex-col items-start justify-start gap-2 bg-white p-4 text-left shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out hover:-translate-y-1 motion-reduce:transition-none md:min-h-[190px] md:gap-2 md:p-5 lg:aspect-[267/211] lg:min-h-0 lg:gap-[6px] lg:p-[10px] lg:shadow-none xl:gap-[8px] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <span className="text-[22px] font-bold leading-[26px] tracking-[0.12em] text-[#D94801] md:text-[28px] md:leading-[32px] lg:text-[22px] lg:leading-[30px] xl:text-[30px] xl:leading-[36px]">
                    {s.n}
                  </span>
                  <span className="text-[14px] font-bold leading-[19px] text-[#091E4C] md:text-[17px] md:leading-[23px] lg:text-[15px] lg:leading-[22px] xl:text-[20px] xl:leading-[26px]">
                    {s.title}
                  </span>
                  <span className="text-[11px] font-normal leading-[16px] text-black/70 md:text-[13px] md:leading-[19px] lg:text-[11px] lg:leading-[16px] xl:text-[16px] xl:leading-[24px]">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Start Project: centred on mobile + tablet, left-aligned under the cards on desktop */}
            <div className={`mt-8 flex justify-center lg:mt-10 lg:justify-start ${reveal('delay-[900ms]')}`}>
              <button
                onClick={onGetStarted}
                className="group inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#D94801] px-7 text-[13px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(217,72,1,0.35)] focus-visible:ring-2 focus-visible:ring-[#D94801] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:h-[46px] md:px-8 md:text-[14px] lg:h-[48px] lg:w-[190px] lg:px-0"
              >
                Start Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT orange bar (desktop): 68 x 1036 */}
        <div className="hidden w-[4.72%] shrink-0 bg-[#D94801] lg:block" />
      </div>
    </section>
  )
}
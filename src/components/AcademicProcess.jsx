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

  const button = (extra = '') => (
    <button
      onClick={onGetStarted}
      className={`group inline-flex h-[36px] w-[168px] items-center justify-center gap-1 rounded-full bg-[#D94801] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(217,72,1,0.35)] active:translate-y-0 active:scale-[0.98] lg:h-[44px] lg:w-[190px] lg:text-[14px] ${extra}`}
    >
      Start Project
      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
    </button>
  )

  return (
    <section
      ref={sectionRef}
      id="process"
      className="w-full overflow-hidden bg-[#F8F8F8] font-['Libre_Baskerville',serif] lg:flex lg:h-[min(71.94vw,1036px)]"
    >
      {/* LEFT image (desktop): 426 x 739, flush to the left edge */}
      <div className={`hidden w-[29.58%] shrink-0 lg:flex lg:items-center ${reveal('delay-[100ms]')}`}>
        <img
          src="/writing/writing.png"
          alt="Academic writing"
          className="aspect-[426/739] w-full object-cover"
        />
      </div>

      {/* CENTER content (max 837px). On mobile it uses the same side padding and max width as the navbar */}
      <div className="flex flex-1 items-center justify-center px-4 py-14 md:px-8 md:py-20 lg:px-[3.5%] lg:py-0">
        <div className="w-full max-w-[573px] md:max-w-[700px] lg:max-w-[837px]">
          {/* Heading block */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className={`text-[8px] font-bold uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] lg:text-[13px] lg:leading-[38px] xl:text-[16px] ${reveal(
                'delay-[100ms]'
              )}`}
            >
              The Academic Process
            </span>

            <h2
              className={`mt-2 text-[22px] font-bold leading-[28px] text-[#091E4C] md:text-[34px] md:leading-[42px] lg:mt-3 lg:text-[36px] lg:leading-[46px] xl:text-[48px] xl:leading-[59px] ${reveal(
                'delay-[200ms]'
              )}`}
            >
              Academic Writing,
              <br />
              Structured by Chapters
            </h2>

            <p
              className={`mt-3 max-w-[340px] text-[11px] font-normal leading-[16px] text-black/70 md:max-w-[560px] md:text-[14px] md:leading-[22px] lg:mt-4 lg:max-w-none lg:text-[15px] lg:leading-[24px] xl:text-[18px] xl:leading-[28px] ${reveal(
                'delay-[300ms]'
              )}`}
            >
              A clear, organized and professional approach to help you create structured research work,
              from the first chapter to the final reference.
            </p>
          </div>

          {/* Mobile image: full navbar width, 356 x 241 ratio */}
          <img
            src="/writing/writing.png"
            alt="Academic writing"
            className={`mt-6 aspect-[356/241] w-full object-cover md:mt-8 lg:hidden ${reveal(
              'delay-[400ms]'
            )}`}
          />

          {/* Cards: 18px below the image on mobile, 2 per row with a small gap; 3 per row on desktop (18px gap) */}
          <div className="mt-[18px] grid grid-cols-2 gap-[6px] md:gap-[10px] lg:mt-8 lg:grid-cols-3 lg:gap-[18px] xl:mt-10">
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{ transitionDelay: isVisible ? `${400 + i * 100}ms` : '0ms' }}
                className={`flex min-h-[130px] flex-col items-start justify-start gap-[6px] bg-white p-3 text-left shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-700 ease-out hover:-translate-y-1 motion-reduce:transition-none md:min-h-[150px] md:gap-2 md:p-5 lg:aspect-[267/211] lg:min-h-0 lg:gap-[6px] lg:p-[10px] lg:shadow-none xl:gap-[10px] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <span className="text-[20px] font-bold leading-[24px] tracking-[0.16em] text-[#D94801] md:text-[26px] md:leading-[30px] lg:text-[22px] lg:leading-[30px] xl:text-[30px] xl:leading-[38px]">
                  {s.n}
                </span>
                <span className="text-[13px] font-bold leading-[16px] text-[#091E4C] md:text-[18px] md:leading-[22px] lg:text-[15px] lg:leading-[22px] xl:text-[20px] xl:leading-[38px]">
                  {s.title}
                </span>
                <span className="text-[8px] font-normal leading-[11px] text-black/70 md:text-[12px] md:leading-[16px] lg:text-[11px] lg:leading-[16px] xl:text-[18px] xl:leading-[28px]">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Start Project: centred on mobile, left-aligned under the cards on desktop */}
          <div className={`mt-8 flex justify-center lg:mt-10 lg:justify-start ${reveal('delay-[900ms]')}`}>
            {button()}
          </div>
        </div>
      </div>

      {/* RIGHT orange bar (desktop): 68 x 1036 */}
      <div className="hidden w-[4.72%] shrink-0 bg-[#D94801] lg:block" />
    </section>
  )
}
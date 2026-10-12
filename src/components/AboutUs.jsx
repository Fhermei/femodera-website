import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

// Folder name has a space ("about new"), so it is written as %20 in the URL
const img = {
  main: '/about%20new/1.png',
  second: '/about%20new/2.png',
  third: '/about%20new/3.png',
}

export default function AboutUs({ onGetStarted }) {
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

  const body =
    'text-[12px] font-normal leading-[22px] text-black/70 md:text-[14px] md:leading-[26px] lg:text-[15px] lg:leading-[28px] xl:text-[18px] xl:leading-[38px]'

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white px-4 py-16 font-['Libre_Baskerville',serif] md:px-8 md:py-24 xl:px-0"
    >
      <div className="mx-auto grid w-full max-w-[573px] grid-cols-1 md:max-w-[760px] lg:max-w-[1292px] lg:grid-cols-[48%_1fr] lg:gap-[5%]">
        {/* LEFT (desktop only): image 1 (620x821) + framed image 2 (483x270) */}
        <div
          className={`relative hidden aspect-[620/1037] w-full lg:block ${reveal('delay-[100ms]')}`}
        >
          <img
            src={img.main}
            alt="Researcher reading in a library"
            className="aspect-[620/821] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-[77.9%] bg-white p-[3.2%]">
            <img
              src={img.second}
              alt="Team working together"
              className="aspect-[443/233] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: all text (children use `order` so mobile and desktop read in the right order) */}
        <div className="flex flex-col items-center text-center lg:items-start lg:justify-center lg:text-left">
          <span
            className={`order-1 text-[6px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:leading-[38px] lg:text-[16px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Know Us
          </span>

          <h2
            className={`order-2 mt-2 text-[22px] font-bold leading-[30px] text-[#091E4C] md:mt-3 md:text-[34px] md:leading-[38px] lg:text-[48px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            About Us
          </h2>

          {/* Mobile only: image 1 */}
          <img
            src={img.main}
            alt="Researcher reading in a library"
            className={`order-3 mt-6 aspect-[335/160] w-full rounded-[16px] object-cover lg:hidden ${reveal(
              'delay-[300ms]'
            )}`}
          />

          <p className={`order-4 mt-6 ${body} ${reveal('delay-[300ms]')}`}>
            <span className="font-bold text-[#091E4C]">Fera Digital Solutions</span> is a technology
            innovation and research lab dedicated to solving complex problems through software
            engineering, artificial intelligence, and academic rigor.
          </p>

          <p className={`order-5 mt-6 ${body} ${reveal('delay-[400ms]')}`}>
            Founded by <span className="font-bold text-[#091E4C]">Oyewole Oluwafemi David</span>, we
            bring together deep expertise in software development, machine learning, data science, and
            academic research to deliver impactful solutions for clients across industries from
            startups and enterprises to academic institutions and research organizations.
          </p>

          {/* Desktop: framed image 3 beside the "Our approach" paragraph. Mobile: paragraph comes after the button */}
          <div
            className={`order-7 mt-6 flex items-center gap-6 lg:order-6 ${reveal('delay-[500ms]')}`}
          >
            <div className="hidden w-[46%] shrink-0 bg-white p-[3%] lg:block">
              <img
                src={img.third}
                alt="Clients and team"
                className="aspect-[635/633] w-full object-cover"
              />
            </div>
            <p className={body}>
              Our approach combines technical excellence with research integrity, ensuring every
              project is built on sound methodology, clean code, and verifiable results. We don&apos;t
              believe in shortcuts. we believe in thoughtful engineering that delivers lasting value.
            </p>
          </div>

          <button
            onClick={onGetStarted}
            className={`group order-6 mt-8 inline-flex h-[36px] w-[168px] items-center justify-center gap-1 rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] active:translate-y-0 active:scale-[0.98] lg:order-7 lg:h-[48px] lg:w-[190px] lg:text-[14px] ${reveal(
              'delay-[600ms]'
            )}`}
          >
            Start Project
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
          </button>

          {/* Stats */}
          <div
            className={`order-8 mt-10 flex items-start justify-center gap-12 lg:justify-start lg:gap-16 ${reveal(
              'delay-[700ms]'
            )}`}
          >
            <div className="text-center">
              <p className="text-[24px] font-bold leading-none text-[#081F4C] lg:text-[32px]">100 +</p>
              <p className="mt-2 text-[10px] italic text-[#081F4C]/80 lg:text-[14px]">
                Projects Delivered
              </p>
            </div>
            <div className="text-center">
              <p className="text-[24px] font-bold leading-none text-[#081F4C] lg:text-[32px]">70 +</p>
              <p className="mt-2 text-[10px] italic text-[#081F4C]/80 lg:text-[14px]">
                Clients Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
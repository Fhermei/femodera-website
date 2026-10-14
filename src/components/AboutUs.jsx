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
    'max-w-[560px] text-[14px] font-normal leading-[24px] text-black/70 md:max-w-[620px] md:text-[15px] md:leading-[28px] lg:max-w-none lg:text-[15px] lg:leading-[28px] xl:text-[18px] xl:leading-[34px]'

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white px-4 py-16 font-['Libre_Baskerville',serif] md:px-8 md:py-24 xl:px-0"
    >
      <div className="mx-auto grid w-full max-w-[573px] grid-cols-1 md:max-w-[760px] lg:max-w-[1292px] lg:grid-cols-[48%_1fr] lg:gap-[5%]">
        {/* LEFT (desktop only): 620 x 1037 box */}
        <div
          className={`relative z-10 hidden aspect-[620/1037] w-full lg:block ${reveal('delay-[100ms]')}`}
        >
          {/* Image 1: 620 x 821 */}
          <img
            src={img.main}
            alt="Researcher reading in a library"
            className="absolute left-0 top-0 aspect-[620/821] w-full object-cover"
          />

          {/* Image 2 frame: starts at the centre of image 1 and crosses into the text area */}
          <div className="absolute left-1/2 top-[46%] w-[77.9%] bg-white p-[3.2%]">
            <img
              src={img.second}
              alt="Team working together"
              className="aspect-[443/233] w-full object-cover"
            />
          </div>

          {/* Image 3 frame: same size as image 2, at the left below image 1 */}
          <div className="absolute bottom-0 left-0 w-[77.9%] bg-white p-[3.2%]">
            <img
              src={img.third}
              alt="Clients and team"
              className="aspect-[443/233] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: everything centred in the right side */}
        <div className="flex flex-col items-center text-center lg:justify-center lg:pl-[18%]">
          <span
            className={`order-1 text-[11px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:leading-[30px] lg:text-[16px] lg:leading-[38px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            Know Us
          </span>

          <h2
            className={`order-2 mt-2 text-[28px] font-bold leading-[34px] text-[#091E4C] md:mt-3 md:text-[38px] md:leading-[44px] lg:mt-4 lg:text-[48px] lg:leading-[54px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            About Us
          </h2>

          {/* Mobile + tablet only: image 1 */}
          <img
            src={img.main}
            alt="Researcher reading in a library"
            className={`order-3 mt-6 aspect-[335/190] w-full rounded-[16px] object-cover md:aspect-[760/340] md:rounded-[20px] lg:hidden ${reveal(
              'delay-[300ms]'
            )}`}
          />

          <p className={`order-4 mt-6 lg:mt-10 ${body} ${reveal('delay-[300ms]')}`}>
            <span className="font-bold text-[#091E4C]">Fera Digital Solutions</span> is a technology
            innovation and research lab dedicated to solving complex problems through software
            engineering, artificial intelligence, and academic rigor.
          </p>

          <p className={`order-5 mt-5 lg:mt-8 ${body} ${reveal('delay-[400ms]')}`}>
            Founded by <span className="font-bold text-[#091E4C]">Oyewole Oluwafemi David</span>, we
            bring together deep expertise in software development, machine learning, data science, and
            academic research to deliver impactful solutions for clients across industries from
            startups and enterprises to academic institutions and research organizations.
          </p>

          {/* "Our approach": BELOW the button on mobile (order-7), ABOVE the button on desktop (lg:order-6) */}
          <p className={`order-7 mt-6 lg:order-6 lg:mt-8 ${body} ${reveal('delay-[500ms]')}`}>
            Our approach combines technical excellence with research integrity, ensuring every
            project is built on sound methodology, clean code, and verifiable results. We
            don&apos;t believe in shortcuts. we believe in thoughtful engineering that delivers
            lasting value.
          </p>

          {/* Button: order-6 on mobile (above the paragraph), lg:order-7 on desktop (below the paragraph) */}
          <button
            onClick={onGetStarted}
            className={`group order-6 mt-7 inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#D44B08] px-7 text-[13px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:h-[46px] md:px-8 md:text-[14px] lg:order-7 lg:mt-10 lg:h-[48px] lg:w-[190px] lg:px-0 ${reveal(
              'delay-[600ms]'
            )}`}
          >
            Start Project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 lg:h-4 lg:w-4" />
          </button>

          {/* Stats */}
          <div
            className={`order-8 mt-10 flex items-start justify-center gap-0 lg:mt-12 ${reveal(
              'delay-[700ms]'
            )}`}
          >
            <div className="px-8 text-center md:px-10 lg:px-8">
              <p className="text-[30px] font-bold leading-none text-[#081F4C] md:text-[34px] lg:text-[32px]">
                100 +
              </p>
              <p className="mt-2 text-[12px] italic text-[#081F4C]/80 md:text-[13px] lg:text-[14px]">
                Projects Delivered
              </p>
            </div>
            <div className="border-l border-[#081F4C]/15 px-8 text-center md:px-10 lg:px-8">
              <p className="text-[30px] font-bold leading-none text-[#081F4C] md:text-[34px] lg:text-[32px]">
                70 +
              </p>
              <p className="mt-2 text-[12px] italic text-[#081F4C]/80 md:text-[13px] lg:text-[14px]">
                Clients Served
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
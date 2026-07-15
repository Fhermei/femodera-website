import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-[#D94801] uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D2B49]">
            Driven by Innovation, Guided by Excellence
          </h2>
          <div className="mt-4 w-16 h-1 bg-[#1D2B49] mx-auto rounded-full"></div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#1D2B49]/80 leading-relaxed">
            <span className="font-semibold text-[#1D2B49]">Fera Digital Solutions</span> is a technology innovation 
            and research lab dedicated to solving complex problems through 
            software engineering, artificial intelligence, and academic rigor.
          </p>

          <div className="mt-8 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-[#1D2B49]/80 leading-relaxed">
              Founded by <span className="font-semibold text-[#1D2B49]">Oyewole Oluwafemi David</span>, 
              we bring together deep expertise in <span className="font-medium text-[#1D2B49]">software development</span>, 
              <span className="font-medium text-[#1D2B49]"> machine learning</span>, 
              <span className="font-medium text-[#1D2B49]"> data science</span>, and 
              <span className="font-medium text-[#1D2B49]"> academic research</span> 
              to deliver impactful solutions for clients across industries from startups 
              and enterprises to academic institutions and research organizations.
            </p>
          </div>
          
          <p className="mt-8 text-[#1D2B49]/70 leading-relaxed">
            Our approach combines <span className="font-medium text-[#1D2B49]">technical excellence</span> with 
            <span className="font-medium text-[#1D2B49]"> research integrity</span>, 
            ensuring every project is built on sound methodology, clean code, 
            and verifiable results. We don't believe in shortcuts. we believe in 
            <span className="font-medium text-[#1D2B49]"> thoughtful engineering</span> that 
            delivers lasting value.
          </p>

          <div className="mt-10 flex items-center justify-center gap-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xl font-bold text-[#1D2B49]">100+</p>
              <p className="text-xs text-[#1D2B49]/60 mt-0.5">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#1D2B49]">50+</p>
              <p className="text-xs text-[#1D2B49]/60 mt-0.5">Clients Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
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
      <div className="container-custom">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-[#D94801] uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D2B49]">
            Driven by Innovation, Guided by Excellence
          </h2>
        </div>

        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-[#1D2B49]/80 leading-relaxed">
            <span className="font-semibold text-[#1D2B49]">Fera Digital Solutions</span> is a technology innovation 
            and research lab dedicated to solving complex problems through 
            software engineering, artificial intelligence, and academic rigor.
          </p>
          
          <p className="mt-4 text-[#1D2B49]/70 leading-relaxed">
            Founded by <span className="font-semibold text-[#1D2B49]">Oyewole Oluwafemi David</span>, 
            we bring together expertise in software development, machine learning, 
            data science, and academic research to deliver impactful solutions 
            for clients across industries.
          </p>

          <p className="mt-4 text-[#1D2B49]/70 leading-relaxed">
            Our approach combines technical excellence with research integrity, 
            ensuring every project is built on sound methodology, clean code, 
            and verifiable results.
          </p>
        </div>
      </div>
    </section>
  )
}
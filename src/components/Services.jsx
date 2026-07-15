import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Software & Web Development',
    description: 'Custom websites, web applications, SaaS platforms, mobile apps, and enterprise software solutions built with modern technologies.'
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent automation, predictive analytics, computer vision, NLP, and deep learning solutions for complex business problems.'
  },
  {
    title: 'Data Science & Analytics',
    description: 'Data collection, preprocessing, statistical analysis, visualization, and business intelligence for data-driven decision making.'
  },
  {
    title: 'Academic Research Support',
    description: 'Comprehensive research assistance for ND, HND, BSc, MSc, and PhD projects with proper methodology and documentation.'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design, wireframing, prototyping, and visual design for digital products that deliver exceptional experiences.'
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Cloud infrastructure, CI/CD pipelines, containerization, and deployment strategies for scalable and reliable applications.'
  }
]

export default function Services() {
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
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-[#D94801] uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D2B49]">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-[#1D2B49]/70 leading-relaxed">
            Comprehensive technology and research solutions designed to help 
            you innovate, grow, and succeed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#D94801]/30 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-[#1D2B49] mb-2">
                {service.title}
              </h3>
              <p className="text-[#1D2B49]/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
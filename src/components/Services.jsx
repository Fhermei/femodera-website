import { useEffect, useRef, useState } from "react";

export default function Services() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && cardObserver.observe(card));

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-brand uppercase bg-gray-100 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
            Our Services
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Serious support for serious academic work
          </h2>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            We don't offer shortcuts or generic templates.
            Femodera partners with students and researchers to deliver
            academically sound, technically accurate, and professionally
            structured work.
          </p>
          
          <div className="mt-6 md:mt-8 w-16 h-1 bg-brand rounded-full"></div>
        </div>

        {/* CARDS */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out group"
          >
            <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Academic & Research Support
                  </h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Academic assistance built on real research
                  methodology, proper documentation, and university expectations.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Projects (ND • HND • BSc • MSc • PhD)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Research design & documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Seminar papers & powerpoints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out group"
          >
            <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Data & Analytics
                  </h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Accurate data handling and analysis designed to produce
                  meaningful insights — not misleading charts or surface-level
                  statistics.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Data collection & preprocessing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Statistical & analytical modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Data visualization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out group"
          >
            <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Software & Engineering Projects
                  </h3>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Intelligent systems and software solutions developed with
                  engineering discipline, clean architecture, and research
                  relevance.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Machine & deep learning systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Computer vision & prediction tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Custom software (Website, App & GUI)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* FOOT NOTE */}
        <div className={`mt-16 md:mt-20 pt-6 border-t border-gray-200 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-sm md:text-base text-gray-500 text-center">
            Available for all academic disciplines and research fields.
          </p>
        </div>

      </div>
    </section>
  );
}
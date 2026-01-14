import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
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
      id="about"
      className="relative bg-gray-50 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-brand uppercase bg-gray-100 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
            About Femodera
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Built on research integrity, technical depth, and real outcomes
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT — MAIN STORY */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Femodera is an academic and technology support lab dedicated to
              helping students, researchers, and professionals solve real
              academic and engineering problems — properly, ethically, and
              effectively.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We believe academic work should be grounded in sound methodology,
              clear reasoning, and verifiable results. Every project we support
              is treated as serious intellectual work — not a shortcut.
            </p>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Verified Expertise</p>
                  <p className="text-sm text-gray-600 mt-1">
                    All projects delivered with academic rigor and technical precision
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TRUST BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out group"
            >
              <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand"></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Research-first approach
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our work is guided by proper academic standards, peer-reviewed
                    practices, and structured problem-solving — not guesswork.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 delay-150 ease-out group"
            >
              <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand"></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Ethical & transparent
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We prioritize originality, clarity, and academic honesty in
                    every engagement. No recycled content. No false claims.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out group"
            >
              <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand"></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Technical depth
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    From data analytics to machine learning and software systems,
                    we approach problems with engineering discipline and rigor.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 delay-450 ease-out group"
            >
              <div className="relative h-full rounded-xl bg-white border border-gray-200 hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand"></div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Student-centered delivery
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We communicate clearly, respect deadlines, and focus on outcomes
                    that genuinely support academic success.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER STATS */}
        <div className={`mt-16 md:mt-20 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600 mt-2">Academic Fields</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600 mt-2">Satisfaction Rating</div>
          </div>
        </div>

      </div>
    </section>
  );
}
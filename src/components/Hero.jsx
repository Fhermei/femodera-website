export default function Hero() {
  return (
    <section
      id="home"
      className="bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — CONTENT (PRIMARY) */}
          <div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Academic & Research Support
              <span className="block mt-3 text-brand">
                Built on Clarity, Not Shortcuts.
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Femodera partners with students, researchers, and technical
              professionals to deliver structured academic guidance,
              data-driven research, and engineering-grade software solutions —
              with integrity and precision.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2347061754538"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand hover:bg-brand/90 px-8 py-3 text-base font-semibold text-white transition-colors duration-200"
              >
                <span>Start a Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 hover:border-gray-400 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>View Recent Work</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="mt-1 text-sm text-gray-600">
                      ND • HND • BSc • MSc • PhD
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="mt-1 text-sm text-gray-600">
                      Analyze • Virtualize • Research
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div>
                    <p className="mt-1 text-sm text-gray-600">
                      ML • Systems • Software
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — DESKTOP ONLY VISUAL */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg p-8 overflow-hidden">
              
              {/* Floating 3D Elements */}
              <div className="absolute top-4 right-4 w-12 h-12">
                {/* Floating Cube */}
                <div className="relative w-12 h-12 transform rotate-45">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-blue-400/20 rounded-lg shadow-sm border border-brand/10"></div>
                  <div className="absolute top-1 left-1 w-full h-full bg-gradient-to-br from-brand/10 to-blue-400/10 rounded-lg -z-10"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 w-10 h-10 transform rotate-12">
                {/* Floating Pyramid */}
                <svg className="w-full h-full" viewBox="0 0 40 40">
                  <polygon points="20,5 35,35 5,35" fill="white" stroke="#93c5fd" strokeWidth="1.5"/>
                  <polygon points="20,5 10,35 5,35" fill="#e0f2fe" stroke="#93c5fd" strokeWidth="1.5"/>
                  <circle cx="20" cy="15" r="2" fill="#3B82F6"/>
                </svg>
              </div>

              {/* Main Composition */}
              <div className="relative w-full h-[400px]">
                
                {/* Engineering Blueprint Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-48 h-48 border border-gray-300 rounded-lg"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-gray-300 rounded-full"></div>
                  <div className="absolute top-1/3 right-1/3 w-64 h-0.5 bg-gray-300 transform rotate-45"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-64 h-0.5 bg-gray-300 transform -rotate-45"></div>
                </div>

                {/* 3D Neural Network Visualization */}
                <div className="absolute top-8 left-16 w-48 h-48">
                  <div className="relative w-full h-full">
                    {/* Network nodes */}
                    {[
                      [50, 30], [30, 70], [70, 70], // Input layer
                      [40, 40], [60, 40], [30, 60], [70, 60], // Hidden layer
                      [50, 20], [35, 80], [65, 80] // Output layer
                    ].map(([x, y], i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className={`w-4 h-4 rounded-full ${i < 3 ? 'bg-brand/30' : i < 7 ? 'bg-blue-400/30' : 'bg-indigo-400/30'} border ${i < 3 ? 'border-brand/50' : i < 7 ? 'border-blue-400/50' : 'border-indigo-400/50'}`}></div>
                      </div>
                    ))}
                    
                    {/* Connecting lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="50%" y1="30%" x2="40%" y2="40%" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3"/>
                      <line x1="50%" y1="30%" x2="60%" y2="40%" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3"/>
                      <line x1="30%" y1="70%" x2="30%" y2="60%" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3"/>
                      <line x1="70%" y1="70%" x2="70%" y2="60%" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3"/>
                      <line x1="40%" y1="40%" x2="50%" y2="20%" stroke="#a5b4fc" strokeWidth="1"/>
                      <line x1="60%" y1="40%" x2="35%" y2="80%" stroke="#a5b4fc" strokeWidth="1"/>
                      <line x1="30%" y1="60%" x2="65%" y2="80%" stroke="#a5b4fc" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>

                {/* Floating Educational Elements */}
                <div className="absolute top-12 right-24 transform rotate-3">
                  {/* Open Book */}
                  <div className="relative w-24 h-16">
                    <div className="absolute left-0 w-12 h-16 bg-white border border-gray-300 rounded-r-lg shadow-sm">
                      <div className="p-2 space-y-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="h-1 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute right-0 w-12 h-16 bg-gray-50 border border-gray-200 rounded-l-lg shadow-sm"></div>
                    <div className="absolute inset-0 w-24 h-16 bg-gradient-to-r from-white via-white to-gray-50 rounded-lg"></div>
                  </div>
                </div>

                {/* Software Development Mockup */}
                <div className="absolute bottom-24 left-24">
                  <div className="relative">
                    {/* Monitor */}
                    <div className="w-40 h-28 bg-gradient-to-b from-gray-100 to-white border-2 border-gray-300 rounded-lg shadow-md">
                      {/* Screen content */}
                      <div className="p-3">
                        {/* Code editor mockup */}
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-16 h-1.5 bg-gray-300 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 ml-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 ml-5">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-10 h-1.5 bg-gray-300 rounded"></div>
                          </div>
                          <div className="flex items-center gap-2 ml-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div className="w-14 h-1.5 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Graph in corner */}
                        <div className="absolute bottom-2 right-2 w-12 h-8">
                          <svg viewBox="0 0 48 32" className="w-full h-full">
                            <polyline points="4,28 12,20 20,24 28,16 36,12 44,8" 
                                     fill="none" stroke="#3B82F6" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Monitor stand */}
                    <div className="mx-auto w-8 h-2 bg-gray-400 rounded-b"></div>
                    <div className="mx-auto w-12 h-1 bg-gray-500 rounded-b"></div>
                  </div>
                </div>

                {/* Data Visualization Element */}
                <div className="absolute bottom-16 right-16 w-32 h-20 transform -rotate-6">
                  <div className="relative w-full h-full bg-white/80 border border-gray-200 rounded-lg shadow-sm p-2">
                    {/* Bar chart */}
                    <div className="flex items-end justify-between h-12 px-2">
                      {[30, 50, 70, 40, 60, 35].map((height, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div 
                            className={`w-3 rounded-t ${i % 2 === 0 ? 'bg-brand/40' : 'bg-blue-400/40'}`}
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    {/* Chart baseline */}
                    <div className="h-0.5 bg-gray-300 mt-2"></div>
                  </div>
                </div>

                {/* Engineering Diagram */}
                <div className="absolute top-32 right-32 w-16 h-16">
                  <svg className="w-full h-full" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
                    <circle cx="32" cy="32" r="16" fill="none" stroke="#64748b" strokeWidth="1.5"/>
                    <line x1="32" y1="8" x2="32" y2="56" stroke="#cbd5e1" strokeWidth="1"/>
                    <line x1="8" y1="32" x2="56" y2="32" stroke="#cbd5e1" strokeWidth="1"/>
                    <circle cx="32" cy="32" r="3" fill="#3B82F6"/>
                  </svg>
                </div>

                {/* Floating Concepts */}
                <div className="absolute top-20 left-8">
                  <div className="text-xs font-semibold text-gray-600 bg-white/80 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                    AI/ML
                  </div>
                </div>
                
                <div className="absolute bottom-32 right-8">
                  <div className="text-xs font-semibold text-gray-600 bg-white/80 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                    Research
                  </div>
                </div>
                
                <div className="absolute top-36 right-8">
                  <div className="text-xs font-semibold text-gray-600 bg-white/80 px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                    Data Science
                  </div>
                </div>

              </div>

              {/* Connecting Arrows */}
              <div className="absolute top-1/2 left-1/4 w-16">
                <svg className="w-full" viewBox="0 0 64 16">
                  <path d="M0,8 L56,8 L48,0 M56,8 L48,16" stroke="#cbd5e1" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 w-16 transform rotate-180">
                <svg className="w-full" viewBox="0 0 64 16">
                  <path d="M0,8 L56,8 L48,0 M56,8 L48,16" stroke="#cbd5e1" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>

            </div>
            
            {/* Background glow effect */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
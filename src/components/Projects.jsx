import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { projects, filterProjects } from './projectsData'

// Left collage: your own images from /public/project
const collage = ['/project/1.png', '/project/2.png', '/project/3.png']

const HOME_COUNT = 6

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = useMemo(() => filterProjects(projects, active, query), [active, query])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-white px-4 pb-16 pt-[80px] font-['Libre_Baskerville',serif] md:px-8 md:pb-24 md:pt-[110px] xl:px-0"
    >
      <div className="mx-auto w-full max-w-[573px] md:max-w-[1292px]">
        {/* Header: 33px gap between the three on desktop */}
        <div className="mx-auto flex flex-col items-center gap-[14px] text-center md:gap-[33px]">
          <span
            className={`text-[8px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:font-bold md:leading-[38px] lg:text-[16px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            <span className="md:hidden">Our Projects</span>
            <span className="hidden md:inline">Featured Work</span>
          </span>

          <h2
            className={`text-[22px] font-bold leading-[1.2] text-[#091E4C] md:text-[34px] lg:text-[48px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            <span className="block md:inline">Real Projects.</span>{' '}
            <span className="block md:inline">Measurable Impact.</span>
          </h2>

          <p
            className={`max-w-[330px] text-[11px] font-normal leading-[16px] text-black/70 md:max-w-[560px] md:text-[14px] md:leading-[22px] lg:max-w-[660px] lg:text-[18px] lg:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            A selection of our recent projects across software development, AI/ML, data science, and
            academic research.
          </p>
        </div>

        {/* Body */}
        <div
          className={`mt-[32px] flex flex-col gap-6 md:mt-[56px] lg:flex-row lg:items-start lg:justify-between ${reveal(
            'delay-[450ms]'
          )}`}
        >
          {/* LEFT collage (desktop only): 484x574 on top, two 232x565 below, 20px gaps */}
          <div className="hidden w-[37.46%] shrink-0 flex-col gap-5 lg:flex">
            <img
              src={collage[0]}
              alt="Research and writing"
              loading="lazy"
              className="aspect-[484/574] w-full object-cover"
            />
            <div className="grid grid-cols-2 gap-5">
              <img
                src={collage[1]}
                alt="Academic work"
                loading="lazy"
                className="aspect-[232/565] w-full object-cover"
              />
              <img
                src={collage[2]}
                alt="Software and data"
                loading="lazy"
                className="aspect-[232/565] w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: filters + search + cards */}
          <div className="w-full min-w-0 lg:w-[54.8%]">
            <ProjectFilters
              active={active}
              setActive={setActive}
              query={query}
              setQuery={setQuery}
            />

            {/* Cards: 1 per row on mobile, 2 per row on iPad + desktop, 16px gap */}
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2" aria-live="polite">
              {filtered.slice(0, HOME_COUNT).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  run={isVisible}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="mt-10 flex flex-col items-center gap-4 text-center">
                <p className="text-[12px] italic text-black/60 md:text-[14px]">
                  No projects match your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActive('All')
                    setQuery('')
                  }}
                  className="inline-flex h-[36px] items-center justify-center rounded-full border border-[#08214D] px-6 text-[12px] font-semibold text-[#08214D] transition hover:bg-[#08214D] hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Load more -> opens the full projects page */}
            {filtered.length > HOME_COUNT && (
              <div className="mt-10 flex justify-center">
                <a
                  href="#projects-all"
                  className="group inline-flex h-[40px] w-[137px] items-center justify-center gap-1 rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] active:translate-y-0 active:scale-[0.98]"
                >
                  Load more
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
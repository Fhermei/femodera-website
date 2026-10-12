import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import ProjectModal from './ProjectModal'
import ProjectCard from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { projects, filterProjects } from './projectsData'

export default function AllProjects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => filterProjects(projects, active, query), [active, query])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  return (
    <section
      id="projects-all"
      className="min-h-screen bg-white px-4 pb-16 pt-[130px] font-['Libre_Baskerville',serif] md:px-8 md:pb-24 md:pt-[170px] xl:px-0"
    >
      <div className="mx-auto w-full max-w-[573px] md:max-w-[1292px]">
        {/* Header */}
        <div className="mx-auto flex flex-col items-center gap-[14px] text-center md:gap-[33px]">
          <span
            className={`text-[8px] font-normal uppercase leading-[20px] tracking-[0.16em] text-[#D94801] md:text-[12px] md:font-bold md:leading-[38px] lg:text-[16px] ${reveal(
              'delay-[100ms]'
            )}`}
          >
            All Projects
          </span>

          <h1
            className={`text-[22px] font-bold leading-[1.2] text-[#091E4C] md:text-[34px] lg:text-[48px] ${reveal(
              'delay-[200ms]'
            )}`}
          >
            <span className="block md:inline">Real Projects.</span>{' '}
            <span className="block md:inline">Measurable Impact.</span>
          </h1>

          <p
            className={`max-w-[330px] text-[11px] font-normal leading-[16px] text-black/70 md:max-w-[560px] md:text-[14px] md:leading-[22px] lg:max-w-[660px] lg:text-[18px] lg:leading-[28px] ${reveal(
              'delay-[300ms]'
            )}`}
          >
            Every project we have delivered across software development, AI/ML, data science, and
            academic research.
          </p>
        </div>

        {/* Filters + search */}
        <div className={`mx-auto mt-[32px] max-w-[760px] md:mt-[48px] ${reveal('delay-[450ms]')}`}>
          <ProjectFilters
            active={active}
            setActive={setActive}
            query={query}
            setQuery={setQuery}
          />
        </div>

        {/* All cards: 1 per row on mobile, 2 on iPad, 3 on small desktop, 4 on wide desktop */}
        <div
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          aria-live="polite"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              run={mounted}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

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

        {/* Back */}
        <div className="mt-12 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex h-[40px] w-[168px] items-center justify-center gap-2 rounded-full border border-[#08214D] text-[12px] font-semibold text-[#08214D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08214D] hover:text-white active:translate-y-0 active:scale-[0.98]"
          >
            <ArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </a>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
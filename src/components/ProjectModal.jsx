import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5 text-[#1D2B49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <span className="inline-flex px-3 py-1 text-xs font-medium text-[#D94801] bg-[#D94801]/10 rounded-full mb-4">
            {project.category}
          </span>

          <h2 className="text-2xl font-bold text-[#1D2B49] mb-4">
            {project.title}
          </h2>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[#1D2B49]/60 uppercase tracking-wider mb-2">
              Project Description
            </h4>
            <p className="text-[#1D2B49]/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-[#1D2B49]/60 uppercase tracking-wider mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-[#1D2B49] bg-gray-100 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors w-full"
          >
            View Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
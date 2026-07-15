import { useEffect } from 'react'
import { X } from 'lucide-react'
import {
  SiDjango,
  SiReact,
  SiPostgresql,
  SiJsonwebtokens,
  SiDocker,
  SiFlask,
  SiTensorflow,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiJavascript,
  SiSupabase,
  SiVercel,
  SiStreamlit,
  SiOpencv,
  SiBootstrap,
} from 'react-icons/si'

// Map technology names to their icons and colors
const techIconMap = {
  'Django': { icon: SiDjango, color: '#092E20' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'JWT': { icon: SiJsonwebtokens, color: '#000000' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'React Native': { icon: SiReact, color: '#61DAFB' },
  'Flask': { icon: SiFlask, color: '#000000' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00' },
  'CNN': { icon: SiTensorflow, color: '#FF6F00' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'PyTorch': { icon: SiPytorch, color: '#EE4C2C' },
  'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  'NumPy': { icon: SiNumpy, color: '#013243' },
  'Pandas': { icon: SiPandas, color: '#150458' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
  'Vercel': { icon: SiVercel, color: '#000000' },
  'Streamlit': { icon: SiStreamlit, color: '#FF4B4B' },
  'OpenCV': { icon: SiOpencv, color: '#5C3EE8' },
  'Bootstrap': { icon: SiBootstrap, color: '#7952B3' },
  'Ethereum': { icon: SiPython, color: '#3C3C3D' },
  'SHA-256': { icon: SiPython, color: '#3C3C3D' },
  'Data Analytics': { icon: SiPython, color: '#3776AB' },
  'Research': { icon: SiPython, color: '#3776AB' },
  'Data Analysis': { icon: SiPython, color: '#3776AB' },
  'Economics': { icon: SiPython, color: '#3776AB' },
  'SPSS': { icon: SiPython, color: '#3776AB' },
  'Machine Learning': { icon: SiPython, color: '#3776AB' },
  'Computer Vision': { icon: SiPython, color: '#3776AB' },
  'NLP': { icon: SiPython, color: '#3776AB' },
  'NLTK': { icon: SiPython, color: '#3776AB' },
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    // Only prevent scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      // Restore scroll when modal closes
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  // Get tech icons with colors for modal
  const techIcons = project.technologies.map(tech => {
    const techData = techIconMap[tech]
    return techData ? { ...techData, name: tech } : null
  }).filter(Boolean)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-[#1D2B49]" />
        </button>

        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <span className="inline-flex px-3 py-1 text-xs font-medium text-[#1D2B49] bg-[#1D2B49]/10 rounded-full mb-4">
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
            <h4 className="text-sm font-semibold text-[#1D2B49]/60 uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech) => {
                const Icon = tech.icon
                return (
                  <div 
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <Icon className="text-base" style={{ color: tech.color }} size={16} />
                    <span className="text-sm font-medium text-[#1D2B49]">{tech.name}</span>
                  </div>
                )
              })}
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
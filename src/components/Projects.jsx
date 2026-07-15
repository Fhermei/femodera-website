import { useState, useEffect, useRef } from 'react'
import ProjectModal from './ProjectModal'
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

const projects = [
  {
    id: 1,
    title: 'EduFlow | School Management System',
    category: 'Software Development',
    description: 'A comprehensive multi-tenant school management system with Django REST Framework, React, and PostgreSQL.',
    technologies: ['Django', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    link: 'https://eduflow-frontend-self.vercel.app/'
  },
  {
    id: 2,
    title: 'Concord | School Management System',
    category: 'Software Development',
    description: 'A complete school management system with backend API built with Django REST Framework, featuring student enrollment, results, attendance tracking, and administrative tools for Concord Tutors School.',
    technologies: ['Django', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    link: 'https://concordtutorschool.com/'
  },
  {
    id: 3,
    title: 'DeepFake Detection App',
    category: 'AI/ML',
    description: 'AI-powered mobile application that detects whether a video is REAL or DEEPFAKE using a trained deep learning model.',
    technologies: ['React Native', 'Flask', 'TensorFlow', 'CNN'],
    link: 'https://github.com/Fhermei/DeepFake-Detection'
  },
  {
    id: 4,
    title: 'Blockchain Student Result Management',
    category: 'Research & Development',
    description: 'Blockchain-based student result management system ensuring data integrity, transparency, and security using Ethereum.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Ethereum', 'SHA-256'],
    link: 'https://result-frontend-six.vercel.app/'
  },
  {
    id: 5,
    title: 'EO Survey | Research Data Collection',
    category: 'Data Science',
    description: 'Complete survey system for collecting and analyzing research data with Supabase database and CSV export.',
    technologies: ['React', 'Supabase', 'Vercel', 'Data Analytics'],
    link: 'https://your-project.vercel.app/'
  },
  {
    id: 6,
    title: 'Air Object Detection System',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 7,
    title: 'Tourist Destination Recommender',
    category: 'AI/ML',
    description: 'Machine learning based personalized tourist attraction recommendation system using content filtering and personality modeling.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 8,
    title: 'Fake News Prediction System',
    category: 'AI/ML',
    description: 'Web application leveraging NLP and machine learning to predict whether news articles are real or fake.',
    technologies: ['Python', 'Django', 'NLTK', 'Machine Learning'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 9,
    title: 'Hospital Management System with AI',
    category: 'Software Development',
    description: 'Intelligent hospital management system integrating AI capabilities for patient data handling and predictive analytics.',
    technologies: ['Python', 'Django', 'Scikit-learn', 'Bootstrap'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 10,
    title: 'Pavement Distress Detection',
    category: 'AI/ML',
    description: 'Deep learning based pavement anomaly detection system using ResNet18 for 12 distress types classification.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 11,
    title: 'Diphtheria Prediction System',
    category: 'AI/ML',
    description: 'Machine learning framework for diphtheria detection using patient records and clinical symptoms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 12,
    title: 'Coastal Resources Economics Study',
    category: 'Academic Research',
    description: 'Research on coastal resource economics and livelihood diversification in Ondo State\'s blue economy context.',
    technologies: ['Research', 'Data Analysis', 'Economics', 'SPSS'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 13,
    title: 'Multimodal Air Object Detection',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'PyTorch', 'Computer Vision', 'CNN'],
    link: 'https://wa.me/2348106108753'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [visible, setVisible] = useState(6)
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
    <section ref={sectionRef} id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm font-semibold text-[#D94801] uppercase tracking-wider">
            Our Projects
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D2B49]">
            Featured Work
          </h2>
          <p className="mt-4 text-lg text-[#1D2B49]/70 leading-relaxed">
            A selection of our recent projects across software development, 
            AI/ML, data science, and academic research.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visible).map((project, index) => {
            // Get tech icons with colors - show up to 5 icons
            const techIcons = project.technologies.slice(0, 5).map(tech => {
              const techData = techIconMap[tech]
              return techData ? { ...techData, name: tech } : null
            }).filter(Boolean)

            return (
              <div
                key={project.id}
                className={`group cursor-pointer bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-flex px-3 py-1 text-xs font-medium text-[#1D2B49] bg-[#1D2B49]/10 rounded-full">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-[#1D2B49]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#1D2B49] mb-2 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-[#1D2B49]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
                  {techIcons.map((tech) => {
                    const Icon = tech.icon
                    return (
                      <div 
                        key={tech.name} 
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        title={tech.name}
                      >
                        <Icon className="text-base" style={{ color: tech.color }} size={18} />
                      </div>
                    )
                  })}
                  {project.technologies.length > 5 && (
                    <span className="text-xs text-[#1D2B49]/40 ml-1">+{project.technologies.length - 5}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {visible < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible(visible + 6)}
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-[#1D2B49] border border-[#1D2B49]/20 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
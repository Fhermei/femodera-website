import { useState, useEffect, useRef } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 1,
    title: 'EduFlow — School Management System',
    category: 'Software Development',
    description: 'A comprehensive multi-tenant school management system with Django REST Framework, React, and PostgreSQL.',
    technologies: ['Django', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    link: 'https://eduflow-frontend-self.vercel.app/',
    image: null
  },
  {
    id: 2,
    title: 'DeepFake Detection App',
    category: 'AI/ML',
    description: 'AI-powered mobile application that detects whether a video is REAL or DEEPFAKE using a trained deep learning model.',
    technologies: ['React Native', 'Flask', 'TensorFlow', 'CNN'],
    link: 'https://github.com/Fhermei/DeepFake-Detection'
  },
  {
    id: 3,
    title: 'Blockchain Student Result Management',
    category: 'Research & Development',
    description: 'Blockchain-based student result management system ensuring data integrity, transparency, and security using Ethereum.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Ethereum', 'SHA-256'],
    link: 'https://result-frontend-six.vercel.app/'
  },
  {
    id: 4,
    title: 'EO Survey — Research Data Collection',
    category: 'Data Science',
    description: 'Complete survey system for collecting and analyzing research data with Supabase database and CSV export.',
    technologies: ['React', 'Supabase', 'Vercel', 'Data Analytics'],
    link: 'https://your-project.vercel.app/'
  },
  {
    id: 5,
    title: 'Air Object Detection System',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 6,
    title: 'Tourist Destination Recommender',
    category: 'AI/ML',
    description: 'Machine learning-based personalized tourist attraction recommendation system using content filtering and personality modeling.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 7,
    title: 'Fake News Prediction System',
    category: 'AI/ML',
    description: 'Web application leveraging NLP and machine learning to predict whether news articles are real or fake.',
    technologies: ['Python', 'Django', 'NLTK', 'Machine Learning'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 8,
    title: 'Hospital Management System with AI',
    category: 'Software Development',
    description: 'Intelligent hospital management system integrating AI capabilities for patient data handling and predictive analytics.',
    technologies: ['Python', 'Django', 'Scikit-learn', 'Bootstrap'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 9,
    title: 'Pavement Distress Detection',
    category: 'AI/ML',
    description: 'Deep learning based pavement anomaly detection system using ResNet18 for 12 distress types classification.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 10,
    title: 'Diphtheria Prediction System',
    category: 'AI/ML',
    description: 'Machine learning framework for diphtheria detection using patient records and clinical symptoms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 11,
    title: 'Coastal Resources Economics Study',
    category: 'Academic Research',
    description: 'Research on coastal resource economics and livelihood diversification in Ondo State\'s blue economy context.',
    technologies: ['Research', 'Data Analysis', 'Economics', 'SPSS'],
    link: 'https://wa.me/2348106108753'
  },
  {
    id: 12,
    title: 'Multimodal Air Object Detection',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'CNN', 'PyTorch', 'Computer Vision'],
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
      <div className="container-custom">
        <div className={`max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
          {projects.slice(0, visible).map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#D94801]/30 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="inline-flex px-3 py-1 text-xs font-medium text-[#D94801] bg-[#D94801]/10 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#1D2B49] mb-2 line-clamp-2">
                {project.title}
              </h3>

              <p className="text-[#1D2B49]/70 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-[#1D2B49]/50 bg-gray-50 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-[#1D2B49]/50">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          ))}
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
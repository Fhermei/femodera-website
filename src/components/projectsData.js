// Placeholder card images (swap the URLs later; each project has an `img` field)
export const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`

export const filters = [
  'All',
  'Academic Writing',
  'Thesis',
  'Article',
  'Softwares',
  'Comp Sci Projects',
  'ML/AI Projects',
  'Others',
]

// Card flip colours (literal classes so Tailwind can detect them)
export const flipColors = [
  'bg-[#091F4B]/90',
  'bg-[#0B3B4A]/90',
  'bg-[#2A1A4F]/90',
  'bg-[#4A1E0A]/90',
  'bg-[#0B3A2E]/90',
]

export const projects = [
  {
    id: 1,
    title: 'EduFlow | School Management System',
    category: 'Software Development',
    description: 'A comprehensive multi-tenant school management system with Django REST Framework, React, and PostgreSQL.',
    technologies: ['Django', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    link: 'https://eduflow-frontend-self.vercel.app/',
    filters: ['Softwares', 'Comp Sci Projects'],
    img: unsplash('photo-1522202176988-66273c2fd55f'),
  },
  {
    id: 2,
    title: 'Concord | School Management System',
    category: 'Software Development',
    description: 'A complete school management system with backend API built with Django REST Framework, featuring student enrollment, results, attendance tracking, and administrative tools for Concord Tutors School.',
    technologies: ['Django', 'React', 'PostgreSQL', 'JWT', 'Docker'],
    link: 'https://concordtutorschool.com/',
    filters: ['Softwares', 'Comp Sci Projects'],
    img: unsplash('photo-1501504905252-473c47e087f8'),
  },
  {
    id: 3,
    title: 'DeepFake Detection App',
    category: 'AI/ML',
    description: 'AI-powered mobile application that detects whether a video is REAL or DEEPFAKE using a trained deep learning model.',
    technologies: ['React Native', 'Flask', 'TensorFlow', 'CNN'],
    link: 'https://github.com/Fhermei/DeepFake-Detection',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1555949963-aa79dcee981c'),
  },
  {
    id: 4,
    title: 'Blockchain Student Result Management',
    category: 'Research & Development',
    description: 'Blockchain-based student result management system ensuring data integrity, transparency, and security using Ethereum.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Ethereum', 'SHA-256'],
    link: 'https://result-frontend-six.vercel.app/',
    filters: ['Comp Sci Projects', 'Others'],
    img: unsplash('photo-1454165804606-c3d57bc86b40'),
  },
  {
    id: 5,
    title: 'EO Survey | Research Data Collection',
    category: 'Data Science',
    description: 'Complete survey system for collecting and analyzing research data with Supabase database and CSV export.',
    technologies: ['React', 'Supabase', 'Vercel', 'Data Analytics'],
    link: 'https://your-project.vercel.app/',
    filters: ['Softwares', 'Others'],
    img: unsplash('photo-1551288049-bebda4e38f71'),
  },
  {
    id: 6,
    title: 'Air Object Detection System',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Streamlit'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1531482615713-2afd69097998'),
  },
  {
    id: 7,
    title: 'Tourist Destination Recommender',
    category: 'AI/ML',
    description: 'Machine learning based personalized tourist attraction recommendation system using content filtering and personality modeling.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Streamlit'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1573164713988-8665fc963095'),
  },
  {
    id: 8,
    title: 'Fake News Prediction System',
    category: 'AI/ML',
    description: 'Web application leveraging NLP and machine learning to predict whether news articles are real or fake.',
    technologies: ['Python', 'Django', 'NLTK', 'Machine Learning'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1504384308090-c894fdcc538d'),
  },
  {
    id: 9,
    title: 'Hospital Management System with AI',
    category: 'Software Development',
    description: 'Intelligent hospital management system integrating AI capabilities for patient data handling and predictive analytics.',
    technologies: ['Python', 'Django', 'Scikit-learn', 'Bootstrap'],
    link: 'https://wa.me/2348106108753',
    filters: ['Softwares', 'ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1581091226825-a6a2a5aee158'),
  },
  {
    id: 10,
    title: 'Pavement Distress Detection',
    category: 'AI/ML',
    description: 'Deep learning based pavement anomaly detection system using ResNet18 for 12 distress types classification.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Streamlit'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1517694712202-14dd9538aa97'),
  },
  {
    id: 11,
    title: 'Diphtheria Prediction System',
    category: 'AI/ML',
    description: 'Machine learning framework for diphtheria detection using patient records and clinical symptoms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1551288049-bebda4e38f71'),
  },
  {
    id: 12,
    title: 'Coastal Resources Economics Study',
    category: 'Academic Research',
    description: "Research on coastal resource economics and livelihood diversification in Ondo State's blue economy context.",
    technologies: ['Research', 'Data Analysis', 'Economics', 'SPSS'],
    link: 'https://wa.me/2348106108753',
    filters: ['Academic Writing', 'Thesis', 'Article'],
    img: unsplash('photo-1456513080510-7bf3a84b82f8'),
  },
  {
    id: 13,
    title: 'Multimodal Air Object Detection',
    category: 'AI/ML',
    description: 'Multimodal learning system for autonomous detection and classification of drones, birds, balloons, and aircraft.',
    technologies: ['Python', 'PyTorch', 'Computer Vision', 'CNN'],
    link: 'https://wa.me/2348106108753',
    filters: ['ML/AI Projects', 'Comp Sci Projects'],
    img: unsplash('photo-1531482615713-2afd69097998'),
  },
]

// Filter + live search (title, category, description, technologies, tags)
export function filterProjects(list, active, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  return list.filter((p) => {
    if (active !== 'All' && !p.filters.includes(active)) return false
    if (!words.length) return true
    const haystack = [p.title, p.category, p.description, ...p.technologies, ...p.filters]
      .join(' ')
      .toLowerCase()
    return words.every((w) => haystack.includes(w))
  })
}
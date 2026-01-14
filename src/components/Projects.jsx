import { useState, useEffect, useRef } from "react";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    title: "DEVELOPMENT OF A PREDICTIVE SYSTEM FOR DIPHTHERIA DISEASE IN AFRICA",
    image: "/projects/diphteria.png",
    abstract: "This project presents an intelligent machine learning framework designed to predict academic performance outcomes using supervised learning techniques. The system leverages structured student data and applies rigorous preprocessing, including categorical encoding, missing value handling, and feature relevance assessment, to ensure robustness and generalizability. Multiple classification models—including Decision Tree, Support Vector Machine (SVM), and Naïve Bayes—were implemented to balance interpretability, accuracy, and reliability in performance prediction. Model evaluation was conducted using precision, recall, F1-score, ROC-AUC, and confusion matrix analysis to ensure consistent and explainable results. To enhance usability and real-world applicability, an interactive graphical user interface (GUI) was developed, enabling users to input student-related parameters and receive predictive outputs accompanied by confidence metrics. The system delivers human-readable insights, identifying potential academic risk or satisfactory performance levels while providing probability-based explanations. This study demonstrates the effectiveness of machine learning in educational analytics, offering a scalable, interpretable, and decision-support-driven approach for early academic intervention and performance monitoring.",
    description: "This project developed an end-to-end predictive framework for diphtheria detection using a real-world dataset of 7,202 patient records containing clinical symptoms, demographics, immunization history, sanitation status, toxin levels, antibiotic resistance, and genetic diversity features. Extensive preprocessing was performed, including encoding categorical variables, handling missing values, feature assessment, and normalization to ensure robustness and generalizability. Three supervised learning models—Decision Tree, Support Vector Machine (SVM), and Naïve Bayes—were trained and evaluated to balance interpretability and predictive accuracy. The Decision Tree model achieved a ROC AUC score of 1.0, demonstrating exceptional performance, while SVM and Naïve Bayes were used to reduce false negatives through tiered confirmation. Model performance was evaluated using precision, recall, F1-score, confusion matrices, and ROC analysis. A user-friendly graphical interface was implemented using CustomTkinter, allowing users to input patient data and receive clear diagnostic predictions with confidence metrics. The system outputs human-readable results such as 'Diphtheria Detected' or 'No Diphtheria Detected,' making the solution practical, interpretable, and deployable for public health surveillance.",
    technologies: "Python, Scikit-learn, Pandas, NumPy",
    link: "https://wa.me/2347061754538",
  },
  {
    title: "DEEP LEARNING BASED PAVEMENT DISTRESS DETECTION",
    image: "/projects/pavement.png",
    abstract: "The accelerated degradation of road conditions due to traffic, environmental conditions, and aging poses a challenge related to road safety and maintenance. This paper proposes a smart pavement anomaly detection and predictive maintenance system using deep learning models. Specifically, ResNet18 classification model fine tuned on a set of 12 pavement distress types, including alligator cracks, potholes, bleeding, shoving, patching, and depressions, was employed in this work for automated classification of pavement anomalies from images. The set of 12 pavement distress types, including alligator cracks, potholes, bleeding, shoving, patching, and depressions, with 12,000 images for training and evaluation, respectively, used in this work were preprocessed and data augmentation techniques were employed in this work for improvement of pavement distress classification in different lighting conditions as well as pavement distress types. High classification accuracy measured using accuracy, precision, recall, F1, and confusion matrices, respectively, was obtained in this work. This pavement distress classification model in this work has been integrated with Streamlit, which has been used for automated pavement distress classification from a user-uploaded pavement distress image, paved way for automated pavement distress classification in this direction.",
    description: "This project presents an intelligent pavement anomaly detection and predictive maintenance framework using a fine-tuned ResNet18 deep learning model. The system was trained and evaluated on a dataset of 12,000 pavement images covering 12 distinct distress types, including alligator cracks, potholes, bleeding, shoving, patching, and depressions. Extensive preprocessing and data augmentation techniques were applied to improve robustness across varying lighting conditions and pavement surfaces. Model performance was assessed using accuracy, precision, recall, F1-score, and confusion matrices, achieving high classification accuracy across distress categories. The trained model was deployed using Streamlit, allowing users to upload pavement images and receive real-time automated distress classification, demonstrating a practical and scalable solution for road condition monitoring.",
    technologies: "Python, OpenCV, TensorFlow",
    link: "https://wa.me/2347061754538",
  },
  {
    title: "PERSONALIZED TOURIST ATTRACTION RECOMMENDATION SYSTEM",
    image: "/projects/travel.png",
    abstract: "Tourism is one of the most significant drivers of national development through cultural exchange, economic diversification, and social interaction. However, the selection of suitable tourist attractions remains a major issue for visitors because most existing recommendation systems in use are primarily founded on general behavior, which ignore individual variations and environmental factors. This work presents a machine learning recommendation model for suggesting tourist attractions aimed at proposing personalized tourist attractions based on users interests and environmental factors within the Nigerian tourism industry. The system integrates a number of intelligent strategies content filtering and personality modeling adaptation to deliver holistic and accurate recommendations. Destination descriptions were translated to numerical features using TF-IDF (Term Frequency Inverse Document Frequency) and cosine similarity for similarity computation. User mood, weather, price constraint, and personality characteristics were additional features added to enhance contextual sensitivity. Implementation was carried out using Python with libraries such as Scikit-learn, NumPy, Pandas, and TextBlob as the implementation platform, whereas Streamlit served as the interactive deployment platform. Performance of the model was tested based on precision, recall, F1-score, and accuracy, wherein results confirmed the effectiveness of the system in generating relevant and specific recommendations. This study moves smart tourism technology forward by integrating machine learning, natural language processing, and psychology in an integrated recommendation model.",
    description: "This project developed a personalized tourist attraction recommendation system using machine learning and natural language processing. Destination descriptions were converted to numerical features using TF-IDF and cosine similarity, while user mood, weather, price constraints, and personality traits were incorporated to enhance contextual sensitivity. The system combines content filtering and personality modeling adaptation to generate accurate recommendations. Implementation used Python with Scikit-learn, NumPy, Pandas, and TextBlob, and deployment was done via Streamlit for an interactive user experience. Model performance was evaluated using precision, recall, F1-score, and accuracy, demonstrating effective, relevant, and personalized tourist suggestions, advancing smart tourism technology in Nigeria.",
    technologies: "Python",
    link: "https://wa.me/2347061754538",
  },
  {
    title: "FAKE NEWS PREDICTION USING MACHINE LEARNING",
    image: "/projects/news.png",
    abstract: "A web application leveraging NLP and machine learning to predict whether news articles are real or fake, providing users with a reliable tool to assess news authenticity.",
    description: "This project developed a web-based fake news detection system using Python, Django, and machine learning. Users can input news articles, which are preprocessed using NLP techniques with NLTK, and classified as FAKE or REAL using a trained machine learning model. The backend, built with Django, serves the model and integrates with a responsive Bootstrap interface for seamless user interaction. Data preprocessing, feature extraction, and model training ensure accurate predictions, while the system demonstrates the practical application of AI in combating misinformation.",
    technologies: "Python",
    link: "https://wa.me/2347061754538",
  },
  {
    title: "HOSPITAL MANAGEMENT SYSTEM WITH AI INTEGRATION",
    image: "/projects/hospital.png",
    abstract: "An intelligent hospital management system integrating AI capabilities for patient data handling, predictive analytics, and optimized clinical workflows.",
    description: "This project developed a comprehensive hospital management system combining traditional patient and staff management functionalities with AI-powered predictive modules. Features include patient registration, appointment scheduling, medical history tracking, and real-time monitoring of health parameters. AI integration enables predictive insights, automated alerts, and decision support for clinical staff. Built with Python and Django for the backend, the system utilizes Pandas and NumPy for data processing, Scikit-learn for predictive modeling, and a Bootstrap interface for a responsive and user-friendly experience. The application streamlines hospital operations while leveraging AI to enhance patient care and administrative efficiency.",
    technologies: "Python",
    link: "https://wa.me/2347061754538",
  },
  {
    title: "MULTIMODAL LEARNING SYSTEM FOR AUTONOMUS AIR OBJECT DETECTION",
    image: "/projects/air.png",
    abstract: "A multimodal deep learning system for autonomous detection and classification of aerial objects including drones, birds, balloons, and aircraft, enhancing shared airspace safety and operational efficiency.",
    description: "This project developed a multimodal learning system for autonomous air object detection and avoidance in shared airspace environments. Leveraging a large and diverse dataset of aerial RGB imagery, the system combines convolutional neural network (CNN)–based visual feature extraction with motion and temporal cues for robust classification of drones, birds, balloons, and aircraft. Preprocessing techniques, including resizing, normalization, and data augmentation (rotation, flip, brightness/contrast adjustments), improve model robustness under varying environmental conditions and lighting scenarios. The CNN architecture employs hierarchical feature extraction with convolution, pooling, dropout, and fully connected layers, outputting confidence-weighted predictions through softmax and thresholding mechanisms. A web-based interface supports interactive deployment, allowing users to upload aerial images, receive predictions, and provide feedback for continuous model retraining. Model performance is evaluated using accuracy, precision, recall, F1-score, and confusion matrices, ensuring scalable, adaptive, and reliable operation for real-world airspace monitoring, UAV management, and collision avoidance.",
    technologies: "Python",
    link: "https://wa.me/2347061754538",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(3);
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to truncate abstract to approximately 3 lines (150 characters)
  const truncateAbstract = (text) => {
    const maxLength = 150;
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`max-w-3xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-brand bg-brand/10 rounded-full uppercase tracking-wider mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Research-driven work, delivered professionally
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A curated selection of academic and engineering projects demonstrating
            depth, rigor, and real-world relevance.
          </p>
          <div className="mt-8 w-16 h-1 bg-gradient-to-r from-brand to-blue-400 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {PROJECTS.slice(0, visible).map((project, i) => (
            <div 
              key={i}
              className="group relative cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-blue-400/5 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"></div>
              
              <article className="relative h-full rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-brand/20">
                
                {/* Image Container */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-brand rounded-full"></div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Project</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {truncateAbstract(project.abstract)}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-500 mb-1">Technologies</p>
                      <p className="text-sm text-gray-700 truncate">{project.technologies}</p>
                    </div>
                    <button className="flex-shrink-0 ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 text-brand hover:bg-brand/20 transition-colors duration-300 group/btn">
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visible < PROJECTS.length && (
          <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300"
            >
              <span>Load more projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
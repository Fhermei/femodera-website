import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import AboutUs from './components/AboutUs'
import AcademicProcess from './components/AcademicProcess'
import Testimonials from './components/Testimonials'
import GlobalReach from './components/GlobalReach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GetStartedModal from './components/GetStartedModal'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import SuccessPage from './components/SuccessPage'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [showSuccess, setShowSuccess] = useState(false)

  // Handle hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'privacy') {
        setCurrentPage('privacy')
        window.scrollTo(0, 0)
      } else if (hash === 'terms') {
        setCurrentPage('terms')
        window.scrollTo(0, 0)
      } else if (hash === 'projects-all') {
        setCurrentPage('projects-all')
        window.scrollTo(0, 0)
      } else {
        setCurrentPage('home')
        // Coming back from another page: jump to the section after the home page renders
        if (hash) {
          setTimeout(() => document.getElementById(hash)?.scrollIntoView(), 60)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Handle successful form submission
  const handleFormSuccess = () => {
    setShowSuccess(true)
    window.scrollTo(0, 0)
  }

  const handleBackHome = () => {
    setShowSuccess(false)
    window.location.hash = ''
    window.scrollTo(0, 0)
  }

  // If showing success page - NO NAVBAR
  if (showSuccess) {
    return (
      <>
        <SuccessPage onBackHome={handleBackHome} />
        <Footer />
      </>
    )
  }

  // Privacy Policy page
  if (currentPage === 'privacy') {
    return (
      <>
        <PrivacyPolicy />
        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleFormSuccess}
        />
      </>
    )
  }

  // Terms of Service page
  if (currentPage === 'terms') {
    return (
      <>
        <TermsOfService />
        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleFormSuccess}
        />
      </>
    )
  }

  // All projects page (opened by "Load more")
  if (currentPage === 'projects-all') {
    return (
      <>
        <Navbar onGetStarted={() => setIsModalOpen(true)} />
        <AllProjects />
        <Footer />
        <GetStartedModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleFormSuccess}
        />
      </>
    )
  }

  // Home page
  return (
    <>
      <Navbar onGetStarted={() => setIsModalOpen(true)} />
      <Hero onGetStarted={() => setIsModalOpen(true)} />
      <Services />
      <Projects />
      <AboutUs onGetStarted={() => setIsModalOpen(true)} />
      <AcademicProcess onGetStarted={() => setIsModalOpen(true)} />
      <Testimonials />
      <GlobalReach onGetStarted={() => setIsModalOpen(true)} />
      <Contact onSuccess={handleFormSuccess} />
      <Footer />
      <GetStartedModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleFormSuccess}
      />
    </>
  )
}
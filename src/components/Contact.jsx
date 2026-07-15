import { useState } from 'react'

export default function Contact({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Validation function
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Full name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else {
      const emailValue = formData.email.trim()
      if (!emailValue.includes('@') || !emailValue.includes('.')) {
        newErrors.email = 'Please enter a valid email address (e.g., name@domain.com)'
      } else {
        const parts = emailValue.split('@')
        if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
          newErrors.email = 'Please enter a valid email address'
        }
      }
    }

    if (formData.phone && formData.phone.trim()) {
      const phoneValue = formData.phone.trim().replace(/\s/g, '')
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      if (!phoneRegex.test(phoneValue)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setErrors({})
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const formElement = e.target
      const formDataObj = new FormData(formElement)

      // Use environment variable - NO HARDCODING
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
      
      if (!endpoint) {
        setSubmitError('Form configuration error. Please contact support.')
        setIsSubmitting(false)
        return
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' })
        if (onSuccess) {
          onSuccess()
        }
      } else {
        const data = await response.json()
        setSubmitError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (_error) {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[#D94801] uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D2B49]">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-[#1D2B49]/70 leading-relaxed">
            Have a project in mind? We'd love to hear from you.
          </p>
          <div className="mt-4 w-16 h-1 bg-[#1D2B49] mx-auto rounded-full"></div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-[#1D2B49] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-white focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-[#1D2B49] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-white focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-[#1D2B49] mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} bg-white focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                placeholder="+234 810 610 8753"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#1D2B49] mb-1.5">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} bg-white focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none resize-none`}
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {submitError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#D94801] rounded-lg hover:bg-[#D94801]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
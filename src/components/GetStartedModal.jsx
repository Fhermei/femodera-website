import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function GetStartedModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

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
        onClose()
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-[#1D2B49]" />
        </button>

        <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#1D2B49]">Start Your Project</h2>
            <p className="text-sm text-[#1D2B49]/60 mt-1">Tell us about your project and we'll get back to you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-[#1D2B49] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-[#1D2B49] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-sm font-medium text-[#1D2B49] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none`}
                placeholder="+234 810 610 8753"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-[#1D2B49] mb-1">
                Message *
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:border-[#D94801] focus:ring-2 focus:ring-[#D94801]/20 transition-all outline-none resize-none`}
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
                'Send Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
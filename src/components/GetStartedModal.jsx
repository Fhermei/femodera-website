import { useState, useEffect, useRef } from 'react'
import { X, ArrowRight } from 'lucide-react'

// The inner modal mounts fresh every time it opens, so it fades in
// and the form always starts empty.
function ModalContent({ onClose, onSuccess }) {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const closeRef = useRef(onClose)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    closeRef.current = onClose
  }, [onClose])

  // Fade-in, Escape to close, lock page scroll while open
  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true))
    const focusTimer = setTimeout(() => firstFieldRef.current?.focus(), 250)
    const onKey = (e) => e.key === 'Escape' && closeRef.current()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [])

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
      const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
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
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // 16px text on phones stops iPhones from zooming in when a field is tapped
  const fieldClass = (hasError) =>
    `w-full rounded-[10px] border bg-white px-4 text-[16px] text-[#091E4C] outline-none transition placeholder:text-black/35 focus:border-[#D44B08] focus:ring-2 focus:ring-[#D44B08]/20 md:text-[14px] ${
      hasError ? 'border-red-500' : 'border-black/15'
    }`

  const labelClass = 'mb-1.5 block text-[13px] font-medium text-[#091E4C]'
  const errorClass = 'mt-1.5 text-[12px] leading-[16px] text-red-600'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="get-started-title"
      onClick={onClose}
      className={`fixed inset-0 z-[70] flex items-end justify-center bg-[#071E4D]/60 font-['Libre_Baskerville',serif] backdrop-blur-[2px] transition-opacity duration-300 sm:items-center sm:p-6 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Panel: bottom sheet on phones, centered card on tablet/desktop */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] bg-white shadow-[0_20px_60px_rgba(7,30,77,0.3)] transition-all duration-300 ease-out motion-reduce:transition-none sm:max-h-[90dvh] sm:max-w-[520px] sm:rounded-[28px] ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        {/* Grab handle (phones only) */}
        <span
          aria-hidden="true"
          className="mx-auto mt-2 h-1 w-10 shrink-0 rounded-full bg-black/15 sm:hidden"
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F5] text-[#091E4C] outline-none transition-colors duration-300 hover:bg-[#D44B08] hover:text-white focus-visible:ring-2 focus-visible:ring-[#D44B08] sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable content (scrollbar hidden) */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:p-8">
          <div className="pr-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#D94801]">
              Get Started
            </span>
            <h2
              id="get-started-title"
              className="mt-2 text-[24px] font-bold leading-[1.2] text-[#091E4C] md:text-[28px]"
            >
              Start Your Project
            </h2>
            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#D44B08]" />
            <p className="mt-3 text-[14px] leading-[22px] text-black/60">
              Tell us about your project and we&apos;ll get back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="modal-name" className={labelClass}>
                Full Name <span className="text-[#D44B08]">*</span>
              </label>
              <input
                ref={firstFieldRef}
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'modal-name-error' : undefined}
                className={`h-[48px] ${fieldClass(errors.name)}`}
              />
              {errors.name && (
                <p id="modal-name-error" className={errorClass}>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-email" className={labelClass}>
                Email Address <span className="text-[#D44B08]">*</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'modal-email-error' : undefined}
                className={`h-[48px] ${fieldClass(errors.email)}`}
              />
              {errors.email && (
                <p id="modal-email-error" className={errorClass}>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-phone" className={labelClass}>
                Phone Number <span className="text-[12px] font-normal text-black/40">(optional)</span>
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="+234 810 610 8753"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'modal-phone-error' : undefined}
                className={`h-[48px] ${fieldClass(errors.phone)}`}
              />
              {errors.phone && (
                <p id="modal-phone-error" className={errorClass}>
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-message" className={labelClass}>
                Message <span className="text-[#D44B08]">*</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'modal-message-error' : undefined}
                className={`min-h-[110px] resize-none py-3 ${fieldClass(errors.message)}`}
              />
              {errors.message && (
                <p id="modal-message-error" className={errorClass}>
                  {errors.message}
                </p>
              )}
            </div>

            {submitError && (
              <div
                role="alert"
                className="rounded-[10px] border border-red-200 bg-red-50 p-3 text-[13px] leading-[19px] text-red-700"
              >
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-1 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[15px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none md:text-[14px]"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Request
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function GetStartedModal({ isOpen, onClose, onSuccess }) {
  if (!isOpen) return null
  return <ModalContent onClose={onClose} onSuccess={onSuccess} />
}
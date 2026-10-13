import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Contact({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const reveal = (delay) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`

  // Validation function (unchanged)
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

  const fieldClass = (hasError) =>
    `w-full rounded-[8px] border bg-transparent px-4 text-[12px] text-white outline-none transition placeholder:text-white/40 focus:border-[#D44B08] focus:ring-2 focus:ring-[#D44B08]/30 md:text-[13px] ${
      hasError ? 'border-red-400' : 'border-white/60'
    }`

  const labelClass = 'mb-2 block text-[12px] font-normal text-white md:text-[12px] xl:text-[14px]'
  const errorClass = 'mt-1.5 text-[11px] text-red-300'

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full overflow-hidden bg-[#021230] font-['Libre_Baskerville',serif] lg:flex lg:min-h-[min(73.6vw,1060px)]"
    >
      {/* LEFT: heading + form. Starts where the navbar starts on the left */}
      <div className="flex w-full items-center px-4 py-14 md:px-8 md:py-20 lg:w-[52.1%] lg:shrink-0 lg:px-6 lg:py-16 lg:pl-[max(24px,calc((100vw_-_1292px)/2))] lg:pr-10">
        <div className="mx-auto w-full max-w-[573px] md:max-w-[640px] lg:mx-0 lg:max-w-[520px]">
          {/* Heading block */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className={`text-[6px] font-bold uppercase leading-[20px] tracking-[0.16em] text-white md:text-[10px] lg:text-[12px] lg:leading-[38px] xl:text-[16px] ${reveal(
                'delay-[100ms]'
              )}`}
            >
              Contact Us
            </span>

            <h2
              className={`mt-3 text-[22px] font-bold leading-[30px] text-white md:text-[34px] md:leading-[42px] lg:mt-4 lg:text-[36px] lg:leading-[46px] xl:text-[48px] xl:leading-[59px] ${reveal(
                'delay-[200ms]'
              )}`}
            >
              <span className="lg:hidden">Review from Our Clients</span>
              <span className="hidden lg:inline">
                Have a Project in
                <br />
                Mind?
              </span>
            </h2>

            {/* Mobile only: image (kept short so it doesn't dominate the screen) */}
            <img
              src="/contact/contact.png"
              alt="Researcher working in a library"
              className={`mt-6 aspect-[335/170] w-full rounded-[16px] object-cover object-[center_28%] md:mt-8 md:aspect-[640/280] lg:hidden ${reveal(
                'delay-[300ms]'
              )}`}
            />

            <p
              className={`mt-5 max-w-[300px] text-[11px] font-normal leading-[16px] text-white/80 md:mt-6 md:max-w-[480px] md:text-[14px] md:leading-[22px] lg:mt-6 lg:max-w-none lg:text-[15px] lg:leading-[24px] xl:text-[18px] xl:leading-[28px] ${reveal(
                'delay-[300ms]'
              )}`}
            >
              <span className="lg:hidden">
                Have a project in mind? We&apos;d love to hear from you.
              </span>
              <span className="hidden lg:inline">
                Send us a message and let&apos;s discuss how we can help you achieve your goals.
              </span>
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`mt-8 flex flex-col gap-[18px] lg:mt-10 xl:mt-12 xl:gap-[22px] ${reveal(
              'delay-[450ms]'
            )}`}
          >
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Full Name <span className="text-[#D44B08]">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className={`h-[44px] xl:h-[45px] ${fieldClass(errors.name)}`}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email Address <span className="text-[#D44B08]">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@gmail.com"
                className={`h-[44px] xl:h-[45px] ${fieldClass(errors.email)}`}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClass}>
                Phone Number <span className="text-[#D44B08]">*</span>
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 111 111 0000"
                className={`h-[44px] xl:h-[45px] ${fieldClass(errors.phone)}`}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message <span className="text-[#D44B08]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project ...."
                className={`min-h-[88px] resize-none py-3 ${fieldClass(errors.message)}`}
              />
              {errors.message && <p className={errorClass}>{errors.message}</p>}
            </div>

            {submitError && (
              <div
                role="alert"
                className="rounded-[8px] border border-red-400/40 bg-red-500/10 p-3 text-[12px] text-red-200"
              >
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-2 inline-flex h-[40px] w-full items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[12px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.4)] active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none xl:h-[44px] xl:text-[14px]"
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
                  Send Message
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 xl:h-4 xl:w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Orange bar (desktop): 67 x 1060 */}
      <div className="hidden w-[4.65%] shrink-0 bg-[#D94801] lg:block" />

      {/* Image (desktop): fills the rest and runs to the right edge */}
      <div className="relative hidden flex-1 lg:block">
        <img
          src="/contact/contact.png"
          alt="Researcher working in a library"
          className={`absolute inset-0 h-full w-full object-cover object-[60%_center] transition-opacity duration-1000 motion-reduce:transition-none ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </section>
  )
}
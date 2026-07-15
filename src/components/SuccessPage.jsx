import { useEffect } from 'react'
import { CheckCircle, Mail, ArrowLeft, Home, Clock, Sparkles } from 'lucide-react'

export default function SuccessPage({ onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-180 flex items-center justify-center">
      <div className="max-w-lg w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Message Sent Successfully!
          </h1>

          {/* Message */}
          <p className="text-sm sm:text-base text-gray-500 mb-1">
            Thank you for reaching out to us.
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            We've received your message and will get back to you within 24 hours.
          </p>

          {/* Info Cards */}
          <div className="mt-6 space-y-3 text-left">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail size={18} className="text-[#D94801] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">What's Next?</p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  Our team will review your message and respond within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock size={18} className="text-[#D94801] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Response Time</p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <Sparkles size={18} className="text-[#D94801] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Quick Tip</p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  While you wait, feel free to explore our projects and services.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBackHome}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#D94801] rounded-lg hover:bg-[#C24000] transition-all duration-200 flex-1 justify-center"
            >
              <Home size={14} /> Go Home
            </button>
            <button
              onClick={onBackHome}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 flex-1 justify-center"
            >
              <ArrowLeft size={14} /> Back
            </button>
          </div>

          <p className="text-[9px] sm:text-[10px] text-gray-400 mt-6">
            A confirmation has been sent to your email inbox.
          </p>
        </div>
      </div>
    </div>
  )
}
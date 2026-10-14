import { useEffect } from 'react'
import { CheckCircle, Mail, Home, Clock, Sparkles } from 'lucide-react'

const info = [
  {
    Icon: Mail,
    title: "What's Next?",
    text: 'Our team will review your message and respond within 24 hours.',
  },
  {
    Icon: Clock,
    title: 'Response Time',
    text: 'We typically respond within 24 hours during business days.',
  },
  {
    Icon: Sparkles,
    title: 'Quick Tip',
    text: 'While you wait, feel free to explore our projects and services.',
  },
]

export default function SuccessPage({ onBackHome }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-white px-4 pb-16 pt-[110px] font-['Libre_Baskerville',serif] md:pt-[130px]">
      <div className="w-full max-w-[560px]">
        <div className="rounded-[28px] border border-black/5 bg-white p-6 text-center shadow-[0_10px_40px_rgba(9,30,76,0.08)] md:p-10">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-green-100 md:h-[84px] md:w-[84px]">
            <CheckCircle size={40} className="text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-[24px] font-bold leading-[1.25] text-[#091E4C] md:text-[32px]">
            Message Sent Successfully!
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#D44B08]" />

          {/* Message */}
          <p className="mt-4 text-[15px] leading-[24px] text-black/70 md:text-[16px] md:leading-[26px]">
            Thank you for reaching out to us. We&apos;ve received your message and will get back to
            you within 24 hours.
          </p>

          {/* Info cards */}
          <ul className="mt-7 flex flex-col gap-3 text-left">
            {info.map(({ Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3 rounded-[16px] bg-[#F5F5F5] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon size={18} className="text-[#D94801]" />
                </span>
                <div>
                  <p className="text-[14px] font-bold leading-[20px] text-[#091E4C]">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-[20px] text-black/65">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Action */}
          <button
            onClick={onBackHome}
            className="group mt-8 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#D44B08] text-[15px] font-semibold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B93F06] hover:shadow-[0_8px_20px_rgba(212,75,8,0.35)] focus-visible:ring-2 focus-visible:ring-[#D44B08] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] sm:w-auto sm:px-12 md:text-[14px]"
          >
            <Home size={16} />
            Back to Home
          </button>

          <p className="mt-6 text-[12px] leading-[18px] text-black/45">
            A confirmation has been sent to your email inbox.
          </p>
        </div>
      </div>
    </div>
  )
}
import { ArrowLeft } from 'lucide-react'
import logo from '../assets/logo.png'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Fera Digital Solutions" className="h-10 w-auto" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#1D2B49] border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B49] mb-2">Privacy Policy</h1>
        <p className="text-[#1D2B49]/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-6 text-[#1D2B49]/80 leading-relaxed">
          <p>
            At Fera Digital Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and any other information you voluntarily provide to us through contact forms, project inquiries, or email communications.</li>
              <li><strong>Project Information:</strong> Details about your project requirements, academic research needs, or technical specifications you share with us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device type.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries, questions, and project requests</li>
              <li>To process project submissions and deliver completed work</li>
              <li>To send you updates, project confirmations, and service-related communications</li>
              <li>To understand how users interact with our website and improve user experience</li>
              <li>To comply with legal obligations and enforce our terms of service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">3. Information Sharing and Disclosure</h2>
            <p className="mb-2">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving you, provided they agree to keep this information confidential.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your personal information may be transferred to the new entity.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">6. Your Rights</h2>
            <p className="mb-2">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to legal obligations.</li>
              <li><strong>Restriction:</strong> You may request that we restrict processing of your personal information.</li>
              <li><strong>Portability:</strong> You may request a copy of your data in a structured, machine-readable format.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand how you use our site. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the site may not function properly without cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to remove such information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2 text-[#1D2B49]/60">
              <p>Email: femoderalab@gmail.com</p>
              <p>Phone: +234 810 610 8753</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
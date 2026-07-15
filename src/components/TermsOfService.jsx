import { ArrowLeft } from 'lucide-react'
import logo from '../assets/logo.png'

export default function TermsOfService() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D2B49] mb-2">Terms of Service</h1>
        <p className="text-[#1D2B49]/60 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-6 text-[#1D2B49]/80 leading-relaxed">
          <p>
            Welcome to Fera Digital Solutions. By using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Service carefully before using our services. If you do not agree to these terms, please do not use our website or services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Fera Digital Solutions website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">2. Description of Services</h2>
            <p>
              Fera Digital Solutions provides software development, AI/ML solutions, data science, academic research support, UI/UX design, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">3. User Responsibilities</h2>
            <p className="mb-2">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate and complete information when engaging our services</li>
              <li>Maintain the confidentiality of any project-related information</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or fraudulent purpose</li>
              <li>Not interfere with or disrupt the operation of our website or services</li>
              <li>Not attempt to gain unauthorized access to any part of our systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">4. Intellectual Property</h2>
            <p className="mb-2">All content on our website, including text, graphics, logos, and software, is the property of Fera Digital Solutions and is protected by copyright and intellectual property laws.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Our Work:</strong> The code, designs, and deliverables we create for you are licensed to you upon full payment, subject to the terms of our project agreement.</li>
              <li><strong>Your Content:</strong> You retain ownership of any content, data, or materials you provide to us for the purpose of delivering our services.</li>
              <li><strong>Third-Party Rights:</strong> We respect intellectual property rights. If you believe any content on our site infringes your rights, please contact us.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">5. Project Engagement and Payment</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Project Scope:</strong> All projects will be defined with a clear scope of work, deliverables, and timeline agreed upon before commencement.</li>
              <li><strong>Payment Terms:</strong> Payment terms will be specified in the project agreement. We may require a deposit before commencing work.</li>
              <li><strong>Changes:</strong> Any changes to the project scope may result in additional costs and timeline adjustments.</li>
              <li><strong>Revisions:</strong> Revisions are included as specified in the project agreement. Additional revisions may incur extra charges.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">6. Confidentiality</h2>
            <p>
              We treat your project information and business details as confidential. We will not share your proprietary information with third parties without your consent, except as required by law or as necessary to deliver our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">7. Limitations of Liability</h2>
            <p>
              To the maximum extent permitted by law, Fera Digital Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your use or inability to use our services</li>
              <li>Any conduct or content of any third party on our site</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or secure. We do not warrant the accuracy, completeness, or reliability of any content provided through our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Fera Digital Solutions and its employees, contractors, and affiliates from any claims, damages, losses, liabilities, and expenses arising from your use of our services or your violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">10. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach these terms. Upon termination, your right to use our services will immediately cease.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Nigeria. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">12. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of our services after any changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1D2B49] mb-3">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
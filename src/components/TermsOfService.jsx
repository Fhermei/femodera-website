import LegalLayout from './LegalLayout'

// Change this date whenever you edit the terms
const UPDATED = 'October 14, 2026'

const sections = [
  {
    id: 'about',
    title: 'About these terms',
    blocks: [
      'These terms are the agreement between you and Fera Digital Solutions (“Fera”, “we”, “us”), a research and technology lab based in Nigeria. They apply when you use our website or ask us to work on a project.',
      'By using our website, sending us a project request or paying for our services, you confirm that you have read and accepted these terms. If you do not agree, please do not use our services. If you are using our services for a company or organisation, you confirm that you can accept these terms on its behalf.',
    ],
  },
  {
    id: 'services',
    title: 'What we offer',
    blocks: [
      'We provide three kinds of service:',
      {
        list: [
          { lead: 'Academic research and writing support.', text: 'Help with final year projects, PGD, Masters and PhD work, and journal articles, including research guidance, structuring, writing support, editing and referencing.' },
          { lead: 'Data collection and analysis.', text: 'Data gathering, cleaning, statistical analysis and clear reporting of the results.' },
          { lead: 'Software and web development.', text: 'Websites, web applications, mobile apps, systems and software implementation, including computer science project implementation.' },
        ],
      },
      'The delivery times shown on our website (for example, 2 to 7 days for a final year project) are estimates. The actual time for your project is confirmed with you before work starts and depends on size, complexity and how quickly you give us what we need.',
    ],
  },
  {
    id: 'academic-integrity',
    title: 'Academic work and integrity',
    blocks: [
      'Our academic services are a form of professional support, like tutoring, editing or consultancy. They are meant to help you understand, plan and produce your own research.',
      {
        list: [
          'You are responsible for following your school, supervisor and examiner rules on how outside help may be used. Please check them before you order.',
          'Work we deliver should be used as guidance, a model, a draft or learning material, and developed, understood and submitted properly by you.',
          'We do not help with exams, tests or live assessments, impersonation, or falsified data or results.',
          'We do not guarantee any grade, approval, publication or acceptance. Marks, supervisor decisions and journal outcomes are outside our control.',
          'We may decline or stop any request that we believe breaks these rules, and we will tell you why.',
        ],
      },
      {
        note: 'We write every piece of academic work from scratch, with real sources that you can check. If you need a similarity (plagiarism) report, tell us at the start so we can plan for it.',
      },
    ],
  },
  {
    id: 'starting',
    title: 'Starting a project',
    blocks: [
      'To start, send us your request through the Get Started form, WhatsApp or email. We will reply with questions if needed, and then with a scope (what we will do), a price and a delivery time.',
      'A project begins once you have confirmed the scope in writing (a WhatsApp or email message is enough) and paid any deposit. What we both agreed in that message is the project agreement. If it conflicts with these terms, the written project agreement comes first for that project.',
    ],
  },
  {
    id: 'your-part',
    title: 'What we need from you',
    blocks: [
      {
        list: [
          'Give us accurate and complete information, and the materials we ask for, on time.',
          'Reply to questions and give feedback within a reasonable time. If you are slow to respond, the delivery date moves back by the same amount.',
          'Tell us about changes as early as you can. Changes to the agreed scope may change the price and the delivery time, and we will agree this with you before we continue.',
          'Make sure you have the right to share everything you send us, including any data about other people.',
        ],
      },
    ],
  },
  {
    id: 'payment',
    title: 'Prices and payment',
    blocks: [
      {
        list: [
          { lead: 'Prices.', text: 'We quote a price for each project before it starts. Prices are in Nigerian naira unless we agree otherwise, and the price does not change unless the scope changes.' },
          { lead: 'Deposit.', text: 'We may ask for a deposit before we start. This reserves our time and covers the first stage of the work.' },
          { lead: 'Balance.', text: 'The remaining balance is due as agreed in the quote, and in any case before we hand over the final files, source code or access.' },
          { lead: 'Late payment.', text: 'If a payment is late, we may pause work until it is made. Pausing may move the delivery date.' },
        ],
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery and revisions',
    blocks: [
      'We deliver by email, WhatsApp, a shared folder or another method we agree with you. Please check what we deliver soon after you receive it.',
      'Your price includes reasonable revisions that stay within the agreed scope. Please send revision requests within 7 days of delivery, unless we agreed another period. New requirements, a change of topic or direction, or large changes after sign-off count as new work and may be charged.',
    ],
  },
  {
    id: 'refunds',
    title: 'Cancellations and refunds',
    blocks: [
      {
        list: [
          { lead: 'Before work starts:', text: 'you can cancel and we will refund your deposit in full, less any payment fees.' },
          { lead: 'After work has started:', text: 'you can cancel at any time. We will refund the part of your payment that does not cover the work already done and costs already spent, and we will give you a fair account of both.' },
          { lead: 'After delivery:', text: 'payments are not refundable, because the work has been done. The exception is where we did not deliver what we agreed and could not fix it after a fair chance to do so. In that case we will refund the affected part.' },
        ],
      },
      'Refunds are paid within a reasonable time using the same method as your payment, wherever possible.',
    ],
  },
  {
    id: 'ownership',
    title: 'Who owns the work',
    blocks: [
      {
        list: [
          { lead: 'Your materials.', text: 'You keep ownership of everything you give us, including your ideas, data and content.' },
          { lead: 'Finished work.', text: 'When you have paid in full, the final deliverables made specially for you belong to you (or you receive a full licence to use them), and you can use them for the purpose they were made for.' },
          { lead: 'Our tools.', text: 'We keep ownership of our own pre-existing tools, templates, code libraries, methods and know-how, and of any open-source or third-party components. You may use them as part of your deliverable under their own licences.' },
          { lead: 'Portfolio.', text: 'We may mention a completed software or web project in our portfolio. We will only do this with your permission, and never for confidential academic work.' },
          { lead: 'Our website.', text: 'The text, design, logos and images on our website belong to Fera. Please do not copy them without our written permission.' },
        ],
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    blocks: [
      'We keep your project details, files, data and business information confidential. We share them only with people who need them to deliver your project and who agree to keep them confidential, or where the law requires it.',
      'This duty continues after the project ends. It does not apply to information that is already public or that you make public yourself. How we handle your personal information is explained in our Privacy Policy.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    blocks: [
      'When you use our website or services, please do not:',
      {
        list: [
          'Use them for anything unlawful, fraudulent or harmful, or ask us to produce content that is.',
          'Send us material you do not have the right to share, or that contains malware.',
          'Try to break into, overload or interfere with our website or systems.',
          'Pretend to be someone else, or give us false information.',
          'Abuse, threaten or harass our team.',
        ],
      },
    ],
  },
  {
    id: 'third-parties',
    title: 'Third-party services',
    blocks: [
      'Some projects use third-party services, such as hosting, domain names, payment gateways, app stores, APIs and open-source libraries. These have their own terms, prices and availability. We will tell you about them where they affect your project, but we do not control them and are not responsible for their changes or outages.',
      'Costs for these services (for example, hosting or domain renewals) are separate from our fee unless the quote says otherwise.',
    ],
  },
  {
    id: 'no-guarantees',
    title: 'What we cannot promise',
    blocks: [
      'We work carefully and aim for high quality, but we cannot promise particular results. In particular, we do not guarantee academic grades, approvals, publication, business results, or that software will work without any errors or interruptions in every environment.',
      'Our website and any free information on it are provided “as is”, without warranties of any kind, to the extent the law allows.',
    ],
  },
  {
    id: 'liability',
    title: 'Limits on our liability',
    blocks: [
      'To the extent the law allows, Fera is not responsible for indirect or consequential losses, such as lost profits, lost opportunities or lost data, that come from using our services.',
      'Our total responsibility to you for any claim connected to a project is limited to the amount you paid us for that project. Nothing in these terms limits any responsibility that cannot legally be limited.',
      'You agree to cover losses and claims that Fera suffers because you gave us material you had no right to share, or because you broke these terms or the law.',
    ],
  },
  {
    id: 'ending',
    title: 'Ending our services',
    blocks: [
      'You can stop using our services at any time, and cancellation and refunds work as described above. We may pause or end a project, or refuse a request, if you break these terms, do not pay, ask for something unlawful or unethical, or treat our team badly. Where we end a project for a reason that is not your fault, we will refund the part of your payment that does not cover the work already done.',
      'Sections that need to continue after the project ends (such as ownership, confidentiality and liability) will continue.',
    ],
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    blocks: [
      'These terms are governed by the laws of the Federal Republic of Nigeria.',
      'If there is a problem, please contact us first at femoderalab@gmail.com. Most issues can be solved by talking. If we cannot reach an agreement, either of us may take the matter to the courts of competent jurisdiction in Nigeria.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    blocks: [
      'We may update these terms from time to time. The “Last updated” date at the top shows when. New terms apply to new projects and to your use of the website after the change. A project already in progress stays under the terms that were in place when it started, unless we both agree otherwise.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      'Fera Digital Solutions, Nigeria.',
      { list: [{ lead: 'Email:', text: 'femoderalab@gmail.com' }, { lead: 'Phone / WhatsApp:', text: '+234 810 610 8753' }] },
    ],
  },
]

export default function TermsOfService() {
  return (
    <LegalLayout
      label="Legal"
      title="Terms of Service"
      updated={UPDATED}
      intro="These terms explain how working with Fera Digital Solutions works: what we offer, what we expect, how payment, revisions and refunds work, and who owns the finished work. We have kept them short and clear."
      sections={sections}
      other={{ label: 'Privacy Policy', hash: 'privacy' }}
    />
  )
}
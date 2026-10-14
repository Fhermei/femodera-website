import LegalLayout from './LegalLayout'

// Change this date whenever you edit the policy
const UPDATED = 'October 14, 2026'

const sections = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    blocks: [
      'Fera Digital Solutions (“Fera”, “we”, “us”) is a research and technology lab based in Nigeria. We provide academic research and writing support, data collection and analysis, and software and web development for students, researchers, businesses and institutions.',
      'For the information described in this policy, we are the data controller. That means we decide why and how your information is used, and we are responsible for looking after it.',
    ],
  },
  {
    id: 'what-we-collect',
    title: 'Information we collect',
    blocks: [
      'We only collect what we need to talk to you and do the work you ask for. This includes:',
      {
        list: [
          {
            lead: 'Contact details.',
            text: 'Your name, email address and phone number, when you fill in our Get Started or Contact form, or message us on WhatsApp, email or social media. Your phone number is optional on our forms.',
          },
          {
            lead: 'Your messages.',
            text: 'What you tell us about your project, such as your topic, goals, deadlines and budget.',
          },
          {
            lead: 'Project materials.',
            text: 'Files and information you send so we can do the work, for example research proposals, chapters, questionnaires, datasets, source code, designs or website content.',
          },
          {
            lead: 'Communication records.',
            text: 'Our emails, WhatsApp chats and calls with you about your project, including agreements and payment confirmations.',
          },
          {
            lead: 'Technical data.',
            text: 'Basic information your browser sends automatically, such as device type, browser, approximate location from your IP address and the pages you visit. Our hosting provider collects this to keep the site secure and running.',
          },
        ],
      },
      {
        note: 'This website does not take payments or store card details. We do not ask for sensitive personal data (such as health, religious or biometric data) unless your project truly needs it, and only after we have agreed it with you.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    blocks: [
      {
        list: [
          'To reply to your enquiries and prepare quotes and project plans.',
          'To carry out your project and deliver the finished work.',
          'To keep you updated on progress, timelines, revisions and delivery.',
          'To handle agreements, payments and records of our work together.',
          'To protect our website and prevent spam or abuse.',
          'To improve our services and this website.',
          'To meet our legal obligations.',
        ],
      },
      'We do not use your information to make automated decisions about you, and we do not sell it.',
    ],
  },
  {
    id: 'legal-basis',
    title: 'Our lawful reasons',
    blocks: [
      'Under the Nigeria Data Protection Act 2023, we need a lawful reason to use your information. We rely on:',
      {
        list: [
          { lead: 'Your consent,', text: 'when you send us a form or message and ask us to contact you. You can withdraw it at any time.' },
          { lead: 'Contract,', text: 'when we need your information to start or carry out a project you asked for.' },
          { lead: 'Legitimate interests,', text: 'such as keeping our site secure and keeping records of our work, where this does not override your rights.' },
          { lead: 'Legal obligation,', text: 'where the law requires us to keep or share information.' },
        ],
      },
    ],
  },
  {
    id: 'other-peoples-data',
    title: 'Data about other people',
    blocks: [
      'Some projects involve information about other people, for example survey responses, interview records or customer data in a system we are building.',
      {
        list: [
          'You are responsible for having permission to share that information with us, and for explaining to those people how it will be used.',
          'Please remove names and other identifying details before sending data, wherever you can. We are happy to advise on how.',
          'We use this data only to do your project, we keep it confidential, and we handle it on your instructions.',
        ],
      },
    ],
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    blocks: [
      'We do not sell or rent your personal information. We share it only where needed:',
      {
        list: [
          { lead: 'Service providers.', text: 'Tools that help us run the business: Formspree (to receive the messages you send through our website forms), Gmail and WhatsApp (to communicate with you), and our website hosting provider. They may only use your information to provide their service to us.' },
          { lead: 'Collaborators.', text: 'On larger projects we may work with trusted specialists. They are bound to keep your information confidential, and we only share what they need.' },
          { lead: 'Legal and safety.', text: 'Where the law requires it, or to protect our rights, our clients or others from fraud or harm.' },
          { lead: 'Business changes.', text: 'If Fera is ever sold or restructured, your information may move to the new owner, who must respect this policy.' },
        ],
      },
    ],
  },
  {
    id: 'transfers',
    title: 'Transfers outside Nigeria',
    blocks: [
      'Some of the tools above store information on servers outside Nigeria, for example in the United States or Europe. When this happens, we choose providers with recognised security practices and take reasonable steps to make sure your information is protected to a similar standard.',
    ],
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    blocks: [
      {
        list: [
          { lead: 'Enquiries that do not become projects:', text: 'up to 12 months, then deleted.' },
          { lead: 'Project files and records:', text: 'for up to 12 months after the project is completed, so we can support you with follow-up questions and revisions. After that we delete or anonymise them.' },
          { lead: 'Financial and legal records:', text: 'for as long as the law requires.' },
        ],
      },
      'You can ask us to delete your information earlier at any time (see “Your rights”).',
    ],
  },
  {
    id: 'security',
    title: 'Keeping your information safe',
    blocks: [
      'We use sensible technical and organisational measures to protect your information, such as password-protected accounts, limited access to project files and secure connections (HTTPS) on our website.',
      'No system is completely secure, so we cannot promise absolute security. If a breach affecting your information ever happens, we will tell you and the authorities where the law requires.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    blocks: [
      'The Nigeria Data Protection Act gives you rights over your information. You can ask us to:',
      {
        list: [
          'Tell you what information we hold about you and give you a copy.',
          'Correct information that is wrong or out of date.',
          'Delete your information, where we have no legal reason to keep it.',
          'Stop or limit how we use it, or object to a particular use.',
          'Give you your information in a common, portable format.',
          'Stop contacting you, by withdrawing your consent.',
        ],
      },
      'To use any of these rights, email us at femoderalab@gmail.com. We will reply within a reasonable time, and we may need to confirm who you are first.',
      'If you are not happy with how we handle your information, you also have the right to complain to the Nigeria Data Protection Commission (NDPC).',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    blocks: [
      'Our website does not use advertising cookies. Your browser and our hosting provider may use small files or logs that are needed to deliver the site and keep it secure. You can block or delete cookies in your browser settings, and the website will still work.',
      'If we add analytics or other tools in future, we will update this section.',
    ],
  },
  {
    id: 'links',
    title: 'Links to other sites',
    blocks: [
      'Our website links to our pages on TikTok, Instagram, Facebook, X and WhatsApp, and to other sites. Once you leave our website, those services have their own privacy practices, and we are not responsible for them.',
    ],
  },
  {
    id: 'children',
    title: 'Young people',
    blocks: [
      'Our services are meant for people aged 18 and over. If you are under 18, please ask a parent or guardian to contact us for you. If we learn that we have collected information from someone under 18 without a parent or guardian’s permission, we will delete it.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      'We may update this policy from time to time. When we do, we will change the “Last updated” date at the top of this page. If the changes are important, we will also tell you by email or on our website.',
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

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      label="Legal"
      title="Privacy Policy"
      updated={UPDATED}
      intro="This policy explains what personal information we collect when you visit our website, request a project or talk to us, how we use it, and the choices you have. We have kept the language plain, so you can see exactly what happens to your information."
      sections={sections}
      other={{ label: 'Terms of Service', hash: 'terms' }}
    />
  )
}
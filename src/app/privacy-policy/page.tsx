import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zirocraft",
  description:
    "Learn how Zirocraft handles information when you visit our website or contact us.",
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Zirocraft ("we", "our", or "us") respects your privacy and is committed to handling personal information responsibly.',
      "This Privacy Policy explains how information may be collected, used, and handled when you visit our website or communicate with us through the contact channels provided on this website.",
    ],
  },
  {
    title: "2. Information We May Receive",
    paragraphs: [
      "Our website primarily provides information about Zirocraft and its products. We do not currently provide public user accounts or a website-based registration system.",
      "If you contact us by email, we may receive information you choose to include in your message, such as your name, email address, organization, and the contents of your inquiry.",
      "Our hosting or infrastructure providers may process limited technical information required to deliver and maintain the website, depending on the services and configurations in use.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "Information received through direct communication may be used to respond to inquiries, discuss business opportunities, provide requested information, and maintain relevant correspondence.",
      "Technical information processed by our infrastructure providers may be used to operate, secure, and troubleshoot the website.",
      "We do not claim to use personal information for advertising profiling or automated decision-making through this website.",
    ],
  },
  {
    title: "4. Cookies and Similar Technologies",
    paragraphs: [
      "This website may use cookies or similar technologies if required by its hosting, infrastructure, or future website functionality.",
      "The use of optional analytics, advertising, or tracking technologies will depend on whether those services are implemented. This policy should be updated if such technologies are introduced.",
    ],
  },
  {
    title: "5. Information Sharing",
    paragraphs: [
      "We do not sell personal information received through direct communication.",
      "Information may be processed by service providers involved in operating our website or email communications, where necessary for their services. We may also disclose information when required by applicable law or to protect our legitimate rights and security.",
    ],
  },
  {
    title: "6. Data Retention and Security",
    paragraphs: [
      "We retain correspondence and related information only for as long as reasonably necessary for its intended purpose, legitimate business needs, or applicable legal requirements.",
      "We take reasonable steps to protect information under our control. However, no method of electronic transmission or storage can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "7. External Links",
    paragraphs: [
      "Our website may contain links to third-party websites or services. Those websites operate independently and have their own privacy policies and practices.",
      "We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their policies before providing personal information.",
    ],
  },
  {
    title: "8. Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law, you may have rights regarding your personal information, including requesting access, correction, deletion, or information about how it is handled.",
      "To submit a privacy-related request, please contact us using the email address provided below. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "This website is intended for general business and informational purposes. It is not designed to knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy when our website, services, or legal obligations change. Any updated version will be published on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              Legal Information
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              Your privacy matters to us. This policy explains how information
              is handled when you interact with the Zirocraft website.
            </p>

            <p className="mt-6 text-sm text-muted">
              Effective date: November 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
          <article className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                11. Contact Us
              </h2>

              <p className="mt-5 text-base leading-8 text-muted">
                If you have questions or requests regarding this Privacy Policy,
                you can contact Zirocraft at:
              </p>

              <a
                href="mailto:zirocraftid@gmail.com"
                className="mt-4 inline-block font-medium text-accent transition-colors hover:text-foreground"
              >
                zirocraftid@gmail.com
              </a>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-border bg-surface p-7">
            <h2 className="text-lg font-semibold text-foreground">
              Privacy Questions?
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              For questions or requests concerning your personal information,
              contact our team directly.
            </p>

            <a
              href="mailto:zirocraftid@gmail.com"
              className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              Contact Zirocraft
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}

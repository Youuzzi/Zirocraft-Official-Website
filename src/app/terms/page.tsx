import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zirocraft",
  description:
    "Read the terms and conditions for accessing and using the Zirocraft website.",
};

const sections = [
  {
    title: "1. Acceptance of These Terms",
    paragraphs: [
      'Welcome to Zirocraft. These Terms of Service ("Terms") govern your access to and use of the Zirocraft website.',
      "By accessing or using this website, you acknowledge that you have read and understood these Terms. If you do not agree with them, please discontinue using the website.",
    ],
  },
  {
    title: "2. About Zirocraft",
    paragraphs: [
      "Zirocraft is a technology company focused on building practical technology solutions for growing businesses.",
      "This website provides general information about Zirocraft, its products, and its business activities. Product descriptions and materials are provided for informational purposes and may change as development progresses.",
    ],
  },
  {
    title: "3. Website Use",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a manner that does not interfere with its operation or negatively affect other visitors.",
      "You must not attempt to gain unauthorized access to the website, its infrastructure, or any systems connected to it.",
      "You must not introduce malicious code, disrupt website functionality, or use this website in a way that violates applicable laws or regulations.",
    ],
  },
  {
    title: "4. Product Information",
    paragraphs: [
      "Information about ZiroPOS and other Zirocraft products may describe current development, intended capabilities, product direction, or planned improvements.",
      "Unless explicitly stated otherwise, information on this website should not be interpreted as a guarantee that a particular feature, service, release date, or product capability is currently available.",
      "Product specifications, availability, and descriptions may be updated as products evolve.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, the content on this website, including text, branding, logos, graphics, design elements, and other materials, belongs to Zirocraft or is used with appropriate permission.",
      "You may access and view website content for personal or informational purposes. You must not reproduce, distribute, modify, or commercially exploit website materials without prior authorization, except where permitted by applicable law.",
    ],
  },
  {
    title: "6. Third-Party Links",
    paragraphs: [
      "This website may contain links to third-party websites or services for convenience or additional information.",
      "Zirocraft does not control and is not responsible for the content, availability, policies, or practices of third-party websites. Accessing those websites is at your own discretion.",
    ],
  },
  {
    title: "7. Disclaimer",
    paragraphs: [
      "This website and its content are provided on an informational basis and are made available as presented.",
      "To the extent permitted by applicable law, Zirocraft does not guarantee that the website will always be available, uninterrupted, error-free, or free from harmful components.",
      "Nothing on this website constitutes a binding commercial offer unless expressly stated in a separate written agreement.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Zirocraft will not be liable for indirect, incidental, or consequential losses arising from the use of, or inability to use, this informational website.",
      "Nothing in these Terms excludes or limits liability where such exclusion or limitation is not permitted by applicable law.",
    ],
  },
  {
    title: "9. Privacy",
    paragraphs: [
      "Your use of this website is also subject to our Privacy Policy, which explains how information may be handled when you visit the website or contact us.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      "We may revise these Terms when our website, products, or business operations change.",
      "Updated Terms will be published on this page with a revised effective date. Your continued use of the website after changes are published constitutes acceptance of the updated Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "11. Governing Law",
    paragraphs: [
      "These Terms are subject to applicable laws and regulations. Any legal matters relating to these Terms will be handled in accordance with applicable law.",
    ],
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              These terms outline the conditions for accessing and using the
              Zirocraft website.
            </p>

            <p className="mt-6 text-sm text-muted">
              Effective date: November 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
                12. Contact Us
              </h2>

              <p className="mt-5 text-base leading-8 text-muted">
                If you have questions about these Terms, please contact
                Zirocraft through the following email address:
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
              Need Clarification?
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              If you have questions about the terms governing this website, feel
              free to contact our team.
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

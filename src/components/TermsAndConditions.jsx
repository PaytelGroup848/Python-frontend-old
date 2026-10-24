import React from "react";
import { useState } from "react";
import "./LegalPages.css";
import {
  ShieldCheck,
  Scale,
  Mail,
  Globe,
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Menu,
  X,
  FileText,
  ChevronRight,
  LockKeyhole,
  Headphones,
  Server,
} from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p>
        We, Us, Our refer to Cloude Data. You, User, Customer refer to any
        individual or legal entity using our services. Services refer to
        all products and solutions offered by Cloude Data. This Agreement
        does not create any third-party rights.
      </p>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    content: (
      <p>
        We, Us, Our = Cloude Data; You, User, Customer = individual or
        entity using services; Services = all products and solutions.
        This Agreement does not create any third-party rights.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    content: (
      <p>
        Cloude Data reserves the right to modify these Terms at any time.
        Updated terms become effective immediately once posted on the
        website. Continued use of the website or services after updates
        indicates acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Authority",
    content: (
      <>
        <p>By using our services, you confirm that:</p>
        <ul>
          <li>You are at least 18 years of age.</li>
          <li>You are legally capable of entering binding contracts.</li>
          <li>You are not restricted under Indian or international law.</li>
          <li>
            If acting on behalf of an organization, you have the legal
            authority to bind that organization to these Terms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sanctions",
    title: "Sanctions Compliance",
    content: (
      <p>
        You represent that you are not subject to sanctions imposed by
        India, the United States, the European Union, the United Nations,
        or other governing authorities. Cloude Data reserves the right to
        suspend or terminate services immediately if sanctions violations
        are suspected.
      </p>
    ),
  },
  {
    id: "account-security",
    title: "Account Registration & Security",
    content: (
      <>
        <p>
          To access certain services, you must create an account. You agree
          to provide accurate and complete information, maintain
          confidentiality of login credentials, and notify us immediately
          of unauthorized access.
        </p>
        <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
          <LockKeyhole className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
          <p className="text-sm text-emerald-900">
            You are solely responsible for all activities that occur under
            your account.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "data-transfer",
    title: "International Data Transfer",
    content: (
      <p>
        By accessing our website or services, you consent to the transfer,
        storage, and processing of data across international borders,
        including servers located outside your country.
      </p>
    ),
  },
  {
    id: "account-sharing",
    title: "Account Sharing & Access Permissions",
    content: (
      <p>
        Users may grant limited access to trusted individuals. However,
        the account holder remains fully responsible for all actions
        taken through the account, and Cloude Data is not responsible for
        disputes between account holders and authorized users.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Service Availability",
    content: (
      <p>
        Cloude Data aims to provide services 24/7. However, service
        availability may be affected by scheduled maintenance, technical
        failures, or events beyond our control. We do not guarantee
        uninterrupted service and are not liable for downtime.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    content: (
      <>
        <p>You agree not to use Cloude Data services for:</p>
        <ul>
          <li>Illegal activities</li>
          <li>Child exploitation</li>
          <li>Terrorism</li>
          <li>Spam</li>
          <li>Malware distribution</li>
          <li>Cryptocurrency mining without permission</li>
          <li>Intellectual property violations</li>
          <li>False claims</li>
          <li>Activities threatening national security</li>
        </ul>
        <p>
          Violations may result in immediate suspension or termination.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: (
      <p>
        All content, software, trademarks, designs, and materials on the
        website are owned or licensed by Cloude Data and protected under
        intellectual property laws. You may not copy, reproduce, modify,
        or distribute any materials without written permission.
      </p>
    ),
  },
  {
    id: "user-content",
    title: "User Content",
    content: (
      <p>
        You retain ownership of the content you host using our services.
        However, by uploading content, you grant Cloude Data a limited
        license to host and process the content solely for service
        delivery. You are responsible for ensuring that your content does
        not violate third-party rights.
      </p>
    ),
  },
  {
    id: "monitoring",
    title: "Monitoring & Termination",
    content: (
      <p>
        Cloude Data reserves the right to monitor hosted content, remove
        prohibited materials, and suspend or terminate accounts without
        prior notice. Repeated violations may result in permanent service
        termination.
      </p>
    ),
  },
  {
    id: "spam",
    title: "No Spam Policy",
    content: (
      <p>
        Sending spam, bulk messages, or unsolicited communications using
        Cloude Data services is strictly prohibited. Violations will
        result in immediate service suspension or termination.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites. Cloude
        Data is not responsible for their content, policies, or
        practices. Use third-party websites at your own risk.
      </p>
    ),
  },
  {
    id: "ai-tools",
    title: "AI & Automated Tools",
    content: (
      <p>
        Cloude Data may provide AI-based tools and automation features.
        Users are responsible for reviewing AI-generated outputs before
        using them. Sensitive or confidential data should not be
        uploaded to AI tools.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    content: (
      <p>
        All services are provided "as is" and "as available" without
        warranties of any kind. Cloude Data does not guarantee
        uninterrupted service or accuracy of information.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, Cloude Data will not be
        liable for loss of data, business interruption, loss of profits,
        or indirect damages. Total liability shall not exceed the amount
        paid by the user in the previous 12 months or ₹100,000,
        whichever is lower.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold Cloude Data harmless against
        claims arising from your use of services, violation of this
        Agreement, or infringement of third-party rights.
      </p>
    ),
  },
  {
    id: "discontinued",
    title: "Discontinued Services",
    content: (
      <p>
        Cloude Data may discontinue services at any time. Where possible,
        customers will receive advance notice and may be provided with
        migration or refund options depending on the situation.
      </p>
    ),
  },
  {
    id: "fees",
    title: "Fees, Payments & Renewals",
    content: (
      <p>
        All prices exclude applicable taxes. Services may automatically
        renew unless disabled. Refunds are governed by the Refund Policy.
        Non-payment may result in suspension or termination.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Jurisdiction",
    content: (
      <p>
        These Terms are governed by the laws of India. All disputes shall
        be subject to the exclusive jurisdiction of the courts in
        New Delhi.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <div className="space-y-3">
        <p className="flex items-start gap-3">
          <Mail size={19} className="mt-1 shrink-0 text-emerald-700" />
          <a
            href="mailto:info@patwatoli.com"
            className="font-medium text-emerald-700 hover:underline"
          >
            info@patwatoli.com
          </a>
        </p>
        <p className="flex items-start gap-3">
          <MapPin size={19} className="mt-1 shrink-0 text-emerald-700" />
          Okhla Industrial Estate, Phase 3,
          New Delhi – 110020, India
        </p>
      </div>
    ),
  },
];

const serviceTerms = [
  {
    title: "Scope of Services",
    text: "Secure cloud-hosted access to Accounting ERP solutions including storage and management of client accounting data on dedicated cloud servers.",
  },
  {
    title: "Data Responsibility & Security",
    text: "Cloude Data maintains uptime and data protection. In case of cyber-attack, the most recent verified backup will be restored. Liability is limited to restoration up to the latest available backup.",
  },
  {
    title: "Client Conduct & Liability",
    text: "Clients must use services responsibly and lawfully. Abusive, unlawful, or inappropriate conduct may result in service suspension or termination.",
  },
  {
    title: "Data Access & Client Control",
    text: "Cloude Data does not access, modify, or control client data stored in the assigned cloud environment. Clients retain full responsibility for managing, copying, editing, and deleting their data.",
  },
  {
    title: "Malicious File Policy",
    text: "Uploading malicious or harmful files is strictly prohibited. If such actions cause damage or service interruption, the client will be fully liable for losses and associated recovery costs.",
  },
  {
    title: "Backup Policy",
    text: "Client data is backed up regularly (typically daily). In case of data loss, restoration will occur within 6–24 hours from the latest available backup.",
  },
  {
    title: "Server Maintenance & Downtime",
    text: "Emergency maintenance may occur when required for system stability. Where possible, at least 1 hour prior notice will be provided.",
  },
  {
    title: "Support Availability",
    text: "Support is available Monday–Saturday, 10:00 AM – 7:30 PM IST. All support requests must be submitted through the official support portal or support email.",
  },
  {
    title: "No Refund Policy",
    text: "All payments made to Patwatoli are non-refundable, including cases of cancellation, dissatisfaction, or downtime caused by third-party or client-side issues.",
  },
  {
    title: "Fees & Payment",
    text: "Clients must pay the service fees as specified in their billing invoice, plan, and subscription period.",
  },
  {
    title: "Term, Renewal & Termination",
    text: "Services automatically renew unless either party provides 30 days written notice. Upon termination, clients will have 2–3 days to export their data.",
  },
  {
    title: "Governing Law & Jurisdiction",
    text: "These service-specific terms are governed by the laws of India, and disputes fall under the courts of New Delhi.",
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigation = [
    ...sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
    {
      id: "service-specific",
      title: "Service-Specific Terms",
    },
  ];

  return (
    <div className="legal-page legal-terms min-h-screen bg-[#f7faf9] font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 shadow-md shadow-emerald-700/15">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>

            <div>
              <p className="text-xl font-bold tracking-tight text-slate-900">
                Patwatoli
              </p>
              
            </div>
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600">
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-100">
            <Scale size={15} />
            Legal Agreement
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/90">
            Please read this agreement carefully, as it contains
            important information regarding your legal rights
            and remedies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-emerald-100">
            <span className="flex items-center gap-2">
              <CalendarDays size={17} />
              Effective: July 11, 2026
            </span>

            <a
              href="mailto:info@patwatoli.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <Mail size={17} />
              info@patwatoli.com
            </a>

           
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Navigation Sidebar */}
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex w-full items-center justify-between px-5 py-5 lg:cursor-default"
              >
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <FileText size={18} className="text-emerald-700" />
                  On This Page
                </span>

                {mobileMenuOpen ? (
                  <X size={20} className="lg:hidden" />
                ) : (
                  <Menu size={20} className="lg:hidden" />
                )}
              </button>

              <nav
                className={`max-h-[65vh] overflow-y-auto border-t border-slate-100 px-3 py-3 ${
                  mobileMenuOpen ? "block" : "hidden lg:block"
                }`}
              >
                {navigation.map((section, index) => (
                  <button
                    type="button"
                    key={section.id}
                    onClick={() => goToSection(section.id)}
                    className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-all ${
                      activeSection === section.id
                        ? "bg-emerald-50 font-semibold text-emerald-800"
                        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-700"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        activeSection === section.id
                          ? "text-emerald-700"
                          : "text-slate-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1">{section.title}</span>

                    {activeSection === section.id && (
                      <ChevronRight size={15} />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-5 rounded-2xl bg-emerald-800 p-5 text-white">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Headphones size={20} />
              </div>

              <h3 className="font-semibold">Need clarification?</h3>

              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Have questions about our Terms of Service?
                Contact our team.
              </p>

              <a
                href="mailto:info@patwatoli.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
              >
                Contact Support <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>

          {/* Legal Document */}
          <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-5 sm:flex-row sm:items-start sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Scale size={23} />
                </div>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                    Service Agreement
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    Cloude Data
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    This agreement outlines the conditions governing
                    access to and use of Cloude Data services, including
                    Patwatoli Accounting ERP on Cloud.
                  </p>

                  <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-emerald-700"
                    />
                    Okhla Industrial Estate, Phase 3,
                    New Delhi – 110020, India
                  </p>
                </div>
              </div>
            </div>

            {/* Main 23 Sections */}
            <div className="divide-y divide-slate-100 px-6 sm:px-8 lg:px-10">
              {sections.map((section, index) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-28 py-9 sm:py-11"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-5 text-[15px] leading-8 text-slate-600 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_li]:pl-1 [&_li]:marker:text-emerald-600">
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Section 24 */}
              <section
                id="service-specific"
                className="scroll-mt-28 py-9 sm:py-11"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-800">
                    24
                  </span>

                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      Service-Specific Terms
                    </h2>
                    <p className="mt-1 text-sm text-emerald-700">
                      Patwatoli Accounting ERP on Cloud
                    </p>
                  </div>
                </div>

                <div className="mb-7 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                  <Server
                    size={21}
                    className="mt-0.5 shrink-0 text-emerald-700"
                  />
                  <p className="text-sm leading-7 text-emerald-900">
                    The following terms specifically govern the
                    Patwatoli Accounting ERP on Cloud service.
                  </p>
                </div>

                <div className="space-y-6">
                  {serviceTerms.map((term, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 p-5 transition hover:border-emerald-100 hover:bg-emerald-50/40"
                    >
                      <h3 className="mb-3 flex items-start gap-3 text-base font-bold text-slate-900">
                        <span className="shrink-0 text-emerald-700">
                          24.{index + 1}
                        </span>
                        {term.title}
                      </h3>

                      <p className="text-[15px] leading-8 text-slate-600">
                        {term.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Contact Panel */}
            <div className="border-t border-slate-100 bg-slate-50/80 p-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 p-6 text-white sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Mail size={23} />
                </div>

                <h2 className="text-2xl font-bold">
                  Questions? Contact Us
                </h2>

                <p className="mt-3 text-sm leading-7 text-emerald-50">
                  If you have any questions regarding these Terms
                  of Service, please reach out to us.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@patwatoli.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                  >
                    <Mail size={16} />
                    info@patwatoli.com
                  </a>

              
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Last updated: July 11, 2026
              </p>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <ShieldCheck size={19} className="text-emerald-700" />
            <span className="font-semibold text-slate-800">
              Patwatoli
            </span>
          </div>

          <p>© 2026 Patwatoli. All rights reserved.</p>

        </div>
      </footer>
    </div>
  );
}

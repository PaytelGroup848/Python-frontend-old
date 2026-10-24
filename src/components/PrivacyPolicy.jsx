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
} from "lucide-react";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          This Universal Terms of Service Agreement ("Agreement") is
          entered into between Patwatoli and you ("User") and becomes
          effective on the date you access our website or electronically
          accept these terms.
        </p>
        <p>Unless stated otherwise, the contracting entity is:</p>
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
          <p className="font-semibold text-slate-900">
            Paytel Terminal Pvt. Ltd.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Registered Address: Okhla Industrial Estate, Phase 3,
            New Delhi – 110020, India
          </p>
        </div>
        <p>This Agreement governs your use of:</p>
        <ul>
          <li>The Patwatoli website ("Site")</li>
          <li>All products and services provided by Patwatoli ("Services")</li>
        </ul>
        <p>
          Your use of the Site or Services confirms that you have read and
          understood this Agreement, agree to comply with all applicable
          policies, and are using our Services for commercial or
          professional purposes. Patwatoli reserves the right to update or
          modify these terms at any time; continued use constitutes
          acceptance.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility & Authority",
    content: (
      <>
        <p>To use Patwatoli Services, you confirm that:</p>
        <ul>
          <li>You are at least 18 years of age</li>
          <li>You are legally capable of entering into binding agreements</li>
          <li>
            You are not prohibited under applicable laws of India or
            other jurisdictions
          </li>
        </ul>
        <p>
          If you accept this Agreement on behalf of a business or legal
          entity, you confirm that you have full authority to bind that
          entity to these terms. You remain responsible for all activities
          conducted through your account.
        </p>
      </>
    ),
  },
  {
    id: "sanctions",
    title: "Sanctions & Compliance",
    content: (
      <>
        <p>
          You represent and warrant that you are not located in, resident
          of, or operating from a sanctioned country, nor affiliated with
          any sanctioned individual or entity. You will not use Patwatoli
          Services for or on behalf of any sanctioned party.
        </p>
        <p>
          Patwatoli reserves the right to conduct sanctions screening,
          request verification information, and suspend or terminate
          Services immediately if sanctions violations are detected. You
          agree to indemnify Patwatoli against any losses arising from
          non-compliance.
        </p>
      </>
    ),
  },
  {
    id: "registration",
    title: "Account Registration & Security",
    content: (
      <>
        <p>
          To access certain Services, you must create a Patwatoli account.
          You agree to provide accurate and complete account information,
          keep login credentials secure, and update information promptly.
        </p>
        <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
          <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
          <p className="text-sm text-emerald-900">
            <strong>Security recommendation:</strong> Change your password
            at least once every six (6) months.
          </p>
        </div>
        <p>
          Patwatoli is not responsible for losses resulting from
          unauthorised access caused by your failure to secure your
          credentials.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Account Access & Sharing",
    content: (
      <>
        <p>
          Patwatoli allows controlled account access to trusted third
          parties. By granting access, you acknowledge that access is
          provided at your own risk, authorised users may view limited
          personal and billing information, and certain critical actions
          remain restricted.
        </p>
        <p>
          You assume full legal and financial responsibility for actions
          taken by authorised users. Patwatoli is not responsible for
          disputes between account holders and authorised third parties.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International Data Transfers",
    content: (
      <p>
        If you access Patwatoli Services from outside the country where
        our servers are located, your data may be transferred across
        international borders. By using our Services, you consent to such
        transfers in compliance with applicable data protection laws.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Service Availability",
    content: (
      <>
        <p>
          Patwatoli aims to provide services 24/7, using commercially
          reasonable efforts. However, you acknowledge that services may
          occasionally be unavailable due to scheduled maintenance,
          system upgrades, network failures, cybersecurity incidents, or
          events beyond our reasonable control.
        </p>
        <p>
          Patwatoli does not guarantee uninterrupted availability and
          shall not be liable for downtime beyond its reasonable control.
        </p>
      </>
    ),
  },
  {
    id: "beta",
    title: "Pre-Release & Beta Services",
    content: (
      <p>
        From time to time, Patwatoli may offer beta services or limited
        preview features. These services are provided "as-is" and may be
        modified or discontinued at any time.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
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

  return (
    <div className="legal-page legal-privacy min-h-screen bg-[#f7faf9] font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
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
            Legal Document
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy & Terms
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/90">
            Please read this agreement carefully, as it contains important
            information regarding your legal rights and remedies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-emerald-100">
            <span className="flex items-center gap-2">
              <CalendarDays size={17} />
              Effective: July 11, 2026
            </span>
          
           
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex w-full items-center justify-between px-5 py-5 lg:cursor-default"
              >
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                  <FileText size={18} className="text-emerald-700" />
                  On This Page
                </div>
                {mobileMenuOpen ? (
                  <X size={20} className="lg:hidden" />
                ) : (
                  <Menu size={20} className="lg:hidden" />
                )}
              </button>

              <nav
                className={`border-t border-slate-100 px-3 py-3 ${
                  mobileMenuOpen ? "block" : "hidden lg:block"
                }`}
              >
                {sections.map((section, index) => (
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
                <Mail size={20} />
              </div>
              <h3 className="font-semibold">Need clarification?</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                Our support team is available to assist with questions
                about these terms.
              </p>
              
            </div>
          </aside>

          {/* Document */}
          <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Contracting entity */}
            <div className="border-b border-slate-100 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-5 sm:flex-row sm:items-start sm:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Scale size={23} />
                </div>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                    Contracting Entity
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">
                    Paytel Terminal Pvt. Ltd.
                  </h2>
                  <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-600">
                    <MapPin
                      size={17}
                      className="mt-1 shrink-0 text-emerald-700"
                    />
                    Registered Address: Okhla Industrial Estate, Phase 3,
                    New Delhi – 110020, India
                  </p>
                </div>
              </div>
            </div>

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
            </div>

            {/* Contact section */}
            <div className="border-t border-slate-100 bg-slate-50/80 p-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 p-6 text-white sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Mail size={23} />
                </div>
                <h2 className="text-2xl font-bold">
                  Contact Information
                </h2>
                <p className="mt-3 text-sm leading-7 text-emerald-50">
                  For questions regarding these Terms of Service,
                  please contact:
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                
                
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

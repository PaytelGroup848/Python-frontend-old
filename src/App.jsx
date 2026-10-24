import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import CapabilityStrip from './components/CapabilityStrip.jsx';
import ModelShowcase from './components/ModelShowcase.jsx';
import UseCases from './components/UseCases.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
import TermsAndConditions from './components/TermsAndConditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();

  if (path === '/termsandcondition' || path === '/termsandconditions') {
    return <TermsAndConditions />;
  }

  if (path === '/privacypolicy') {
    return <PrivacyPolicy />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <ModelShowcase />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

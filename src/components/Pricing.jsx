import React, { useState } from 'react';

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
<section className="pricing section" id="pricing" aria-labelledby="pricingTitle">
<div className="pricing-heading">
<div className="eyebrow">SCALE YOUR INTELLIGENCE</div>
<h2 id="pricingTitle">More possibilities.<br />
<span>A plan to match.</span>
</h2>
<p>Start exploring for free. Step up your token allowance<br />and access as your ambitions grow.</p>
<div className="billing-toggle" role="group" aria-label="Billing frequency">
<button aria-pressed={!annual} onClick={() => setAnnual(false)}>Monthly</button>
<button aria-pressed={annual} onClick={() => setAnnual(true)}>Annually <span>Save 17%</span>
</button>
</div>
<p className="billing-caption" id="billingCaption">{annual ? 'Annual billing. Save approximately 17% compared with 12 monthly payments.' : 'Monthly billing. Choose the plan that fits your work.'}</p>
</div>
<div className="pricing-grid">
<article className="price-card">
<div className="plan-symbol">✧</div>
<h3>Free Tier</h3>
<p className="plan-description">A starting point for everyday exploration.</p>
<div className="price-line">
<strong>Free</strong>
<span>/ forever</span>
</div>
<p className="annual-detail">No subscription payment.</p>
<div className="token-allowance">
<b>10 million</b> tokens per month</div>
<a className="plan-button" href="https://patwatoliai.com/pricing">Get started free <span>↗</span>
</a>
<div className="included">INCLUDED FEATURES</div>
<ul>
<li>10,000,000 monthly tokens</li>
<li>Access to base AI models</li>
<li>Standard response latency</li>
<li>Community support</li>
</ul>
</article>
<article className="price-card pro-card">
<div className="plan-badge">FOR YOUR NEXT LEVEL</div>
<div className="plan-symbol">♛</div>
<h3>Pro Tier Plan</h3>
<p className="plan-description">Professional access with tax invoice support.</p>
<div className="price-line">
<strong id="proPrice">{annual ? '₹7,990' : '₹799'}</strong>
<span className="paid-period">{annual ? "/ year" : "/ month"}</span>
</div>
<p className="annual-detail" id="proDetail">{annual ? 'Billed ₹7,990 annually. Save ₹1,598 per year.' : 'Billed ₹799 monthly.'}</p>
<div className="token-allowance">
<b>50 million</b> tokens per month</div>
<a className="plan-button" href="https://patwatoliai.com/pricing">Choose Pro <span>↗</span>
</a>
<div className="included">INCLUDED FEATURES</div>
<ul>
<li>50,000,000 monthly tokens</li>
<li>Access to Claude 3.5, GPT-4o &amp; frontier models</li>
<li>Priority generation &amp; zero queue waiting</li>
<li>Developer API keys &amp; agent tool calling</li>
<li>Priority 24/7 technical support</li>
</ul>
</article>
<article className="price-card enterprise-card">
<div className="plan-symbol">◈</div>
<h3>Enterprise Tier Plan</h3>
<p className="plan-description">High-capacity access with priority RAG compute.</p>
<div className="price-line">
<strong id="enterprisePrice">{annual ? '₹24,990' : '₹2,499'}</strong>
<span className="paid-period">{annual ? "/ year" : "/ month"}</span>
</div>
<p className="annual-detail" id="enterpriseDetail">{annual ? 'Billed ₹24,990 annually. Save ₹4,998 per year.' : 'Billed ₹2,499 monthly.'}</p>
<div className="token-allowance">
<b>250 million</b> tokens per month</div>
<a className="plan-button" href="https://patwatoliai.com/pricing">Choose Enterprise <span>↗</span>
</a>
<div className="included">INCLUDED FEATURES</div>
<ul>
<li>250,000,000 monthly tokens</li>
<li>Custom fine-tuned models &amp; dedicated capacity</li>
<li>Highest concurrency &amp; rate limits</li>
<li>Custom knowledge corpora &amp; pipeline integration</li>
<li>Dedicated SLA &amp; enterprise compliance</li>
</ul>
</article>
</div>
<div className="pricing-foot">
<span>✓ Checkout via Razorpay</span>
<span>UPI · Credit/debit cards · NetBanking</span>
</div>
<p className="pricing-note">Plan selection and payment are completed inside the Patwatoli AI platform. Token allowances are monthly for both billing options.</p>
</section>
  );
}

import React from 'react';

export default function FAQ() {
  
  return (
<section className="faq section" id="faq">
<div>
<div className="eyebrow">A FEW GOOD QUESTIONS</div>
<h2>Curious?<br />
<span>You're in good company.</span>
</h2>
</div>
<div className="questions">
<details open>
<summary>What is Patwatoli AI?<span>＋</span>
</summary>
<p>Patwatoli AI is a multi-model AI platform featuring General, LawGPT, Code Architect, Med Assist, and more. Choose a specialist for your topic, alongside AI conversations, PDF analysis, and voice processing.</p>
</details>
<details>
<summary>How do I get started?<span>＋</span>
</summary>
<p>Select “Try Patwatoli” to open the platform. Sign up or log in there, then start a conversation.</p>
</details>
<details>
<summary>How should I use specialist AI models?<span>＋</span>
</summary>
<p>Use specialist models to explore and understand topics. LawGPT does not replace a qualified legal professional, and Med Assist is for health information, not diagnosis or treatment. Review generated code and verify important AI responses.</p>
</details>
<details>
<summary>Where can I find account and pricing details?<span>＋</span>
</summary>
<p>Compare the Free, Pro, and Enterprise plans in our <a href="#pricing">pricing section</a>, then open the platform to select a plan and complete payment. For specific questions, visit our <a href="https://patwatoliai.com/contact">contact page</a>.</p>
</details>
</div>
</section>
  );
}

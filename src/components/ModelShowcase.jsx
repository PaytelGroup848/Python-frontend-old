import React, { useState } from 'react';
import { models } from '../data.js';
import LineBreaks from './LineBreaks.jsx';

export default function ModelShowcase() {
  const [selected, setSelected] = useState(0);
  const model = models[selected];
  return (
<section className="platform section" id="platform">
<div className="section-heading">
<div>
<div className="eyebrow">A CONSTELLATION OF INTELLIGENCE</div>
<h2>The right mind.<br />
<span>For what’s on yours.</span>
</h2>
</div>
<p>Go beyond a single AI conversation.<br />Explore specialized models for everyday ideas,<br />legal topics, code, health knowledge, and more.</p>
</div>
<div className="models-grid">
<button className={`model-card ${selected === 0 ? "active" : ""}`} aria-pressed={selected === 0} onClick={() => setSelected(0)}>
<span className="model-icon">✧</span>
<small>EVERYDAY EXPLORATION</small>
<h3>General</h3>
<p>Explore ideas, ask questions, write, and work through your everyday tasks.</p>
<span className="model-action">Explore General <b>↗</b>
</span>
</button>
<button className={`model-card ${selected === 1 ? "active" : ""}`} aria-pressed={selected === 1} onClick={() => setSelected(1)}>
<span className="model-icon">⚖</span>
<small>LEGAL EXPLORATION</small>
<h3>LawGPT</h3>
<p>Explore legal concepts, structure questions, and approach legal topics with more context.</p>
<span className="model-action">Explore LawGPT <b>↗</b>
</span>
</button>
<button className={`model-card ${selected === 2 ? "active" : ""}`} aria-pressed={selected === 2} onClick={() => setSelected(2)}>
<span className="model-icon code-icon">&lt;/&gt;</span>
<small>DEVELOPER INTELLIGENCE</small>
<h3>Code Architect</h3>
<p>Think through code, explore technical approaches, and plan your next build.</p>
<span className="model-action">Explore Code Architect <b>↗</b>
</span>
</button>
<button className={`model-card ${selected === 3 ? "active" : ""}`} aria-pressed={selected === 3} onClick={() => setSelected(3)}>
<span className="model-icon">＋</span>
<small>HEALTH EXPLORATION</small>
<h3>Med Assist</h3>
<p>Explore health terminology and prepare informed questions for a healthcare professional.</p>
<span className="model-action">Explore Med Assist <b>↗</b>
</span>
</button>
</div>
<div className="model-console">
<div className="console-bar">
<span>
<i>
</i> MODEL SPOTLIGHT</span>
<span>ILLUSTRATIVE EXAMPLE</span>
</div>
<div className="console-body">
<div>
<span className="console-kicker" id="modelKicker">{model[0]}</span>
<h3 id="modelHeading">
<LineBreaks text={model[1]} />
</h3>
<p id="modelDescription">{model[2]}</p>
<a className="button" href="https://patwatoliai.com/chat" id="modelCta">Open Patwatoli AI ↗</a>
</div>
<div className="console-sample">
<div className="sample-prompt" id="modelPrompt">{model[3]}</div>
<div className="sample-response">
<span>✳</span>
<div>
<b id="modelReplyTitle">{model[4]}</b>
<p id="modelReply">{model[5]}</p>
</div>
</div>
<span className="model-note" id="modelNote">{model[6]}</span>
</div>
</div>
</div>
<div className="more-models">
<span>✳</span>
<div>
<b>There’s more intelligence to explore.</b>
<p>Discover more models inside Patwatoli AI.</p>
</div>
<a href="https://patwatoliai.com/chat">Explore the platform ↗</a>
</div>
</section>
  );
}

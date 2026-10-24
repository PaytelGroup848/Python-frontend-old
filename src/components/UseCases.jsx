import React, { useState } from 'react';
import { examples } from '../data.js';
import LineBreaks from './LineBreaks.jsx';

export default function UseCases() {
  const [selected, setSelected] = useState(0);
  const [copyStatus, setCopyStatus] = useState('Copy prompt ⧉');
  const example = examples[selected];
  function selectExample(index) { setSelected(index); setCopyStatus('Copy prompt ⧉'); }
  async function copyPrompt() {
    try { await navigator.clipboard.writeText(example[2]); setCopyStatus('Copied ✓'); }
    catch { setCopyStatus('Select the prompt above to copy'); }
  }
  return (
<section className="possibilities section" id="possibilities">
<div className="eyebrow">A STARTING POINT FOR ANYTHING</div>
<h2>What’s on your mind?</h2>
<p>Different questions. Different expertise. Find a starting point for your next conversation.</p>
<div className="tabs" role="tablist" aria-label="Example use cases">
<button role="tab" aria-selected={selected === 0} onClick={() => selectExample(0)}>✧ Create & write</button>
<button role="tab" aria-selected={selected === 1} onClick={() => selectExample(1)}>◈ Learn & explore</button>
<button role="tab" aria-selected={selected === 2} onClick={() => selectExample(2)}>▤ Work with PDFs</button>
<button role="tab" aria-selected={selected === 3} onClick={() => selectExample(3)}>↗ Plan your day</button>
</div>
<div className="example-panel">
<div>
<span className="sample-label">A LITTLE INSPIRATION</span>
<h3 id="useTitle">
<LineBreaks text={example[0]} />
</h3>
<p id="useText">{example[1]}</p>
<a id="useLink" className="textlink" href="https://patwatoliai.com/chat">Make it your own <span>↗</span>
</a>
</div>
<div className="prompt-card">
<span>TRY A PROMPT LIKE THIS</span>
<blockquote id="samplePrompt">“{example[2]}”</blockquote>
<button id="copyPrompt" onClick={copyPrompt}>{copyStatus}</button>
</div>
</div>
</section>
  );
}
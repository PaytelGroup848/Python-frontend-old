import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<header>
<a href="#" aria-label="Patwatoli AI home">
<img className="logo" src="./assets/Patwatoli-Logo-with-AI.png" alt="Patwatoli" style={{ width: '300px', height: '300px', marginLeft: '-10%' }} />
</a>
<nav id="nav" className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(false)}>
<a href="#platform">AI models</a>
<a href="#possibilities">Use cases</a>
<a href="#pricing">Pricing</a>
<a href="#how">How it works</a>
<a href="#faq">FAQs</a>
</nav>
<div className="account">
<a className="login" href="https://patwatoliai.com/chat?auth=login">Log in</a>
<a className="button small"href="https://patwatoliai.com/chat">Try Patwatoli <span>↗</span>
</a>
</div>
<button className="menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
</header>
  );
}

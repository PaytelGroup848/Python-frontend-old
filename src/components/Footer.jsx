import React from "react";
export default function Footer() {
  
  return (
<footer>
<div>
<img className="logo" src="./assets/logo.png" alt="Patwatoli" />
<p>Many models. One platform.<br />Intelligence for what comes next.</p>
</div>
<div className="footer-links">
<div>
<b>Explore</b>
<a href="#platform">Platform</a>
<a href="#possibilities">Use cases</a>
<a href="#pricing">Pricing</a>
<a href="https://patwatoliai.com/chat">Open app ↗</a>
</div>
<div>
<b>The details</b>
<a href="/privacypolicy">Privacy policy</a>
<a href="/termsandcondition">Terms and conditions</a>
</div>
</div>
<div className="footer-bottom">
<span>© 2026 Patwatoli. All rights reserved.</span>
<span>Built for a world of possibilities. ✳</span>
</div>
</footer>
  );
}

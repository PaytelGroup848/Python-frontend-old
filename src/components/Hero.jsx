import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="dot"></span> THE MULTI-MODEL AI PLATFORM
        </div>
        <h1>
          One platform.
          <br />
          Many minds.
          <br />
          <em>Limitless potential.</em>
        </h1>
        <p>
          Your everyday questions. Your most specialized work.
          <br />
          Meet General, LawGPT, Code Architect, Med Assist
          <br className="desktop" /> and more — together in Patwatoli AI.
        </p>
        <div className="actions">
          <a className="button" href="https://patwatoliai.com/chat">
            Start exploring <span>↗</span>
          </a>
          <a className="textlink" href="#platform">
            <span className="play">▶</span> See what’s possible
          </a>
        </div>
        <div className="hero-note">
          <span>✳</span> Purpose-built intelligence. One connected experience.
        </div>
      </div>

      <div>
        <span className="made-in-india">
          Made In India
        </span>
        <img
          src="../assets/Patwatoli-Dashboard-Image-2.png"
          style={{ width: "100%", height: "32rem" }}
          alt="Patwatoli AI"
        />
      </div>
    </section>
  );
}

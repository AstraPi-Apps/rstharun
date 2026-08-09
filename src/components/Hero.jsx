import React from 'react'

export default function Hero() {
  return <>
    <section className="hero">
      <div className="reveal">
        <div className="eyebrow">// Software engineer · Bengaluru / Chennai</div>
        <h1 className="hero-title">Building<br />systems for<br /><span>scale.</span></h1>
        <p className="hero-copy">I’m Tharun R S. I design and ship dependable backend services, distributed platforms, and tools that make engineers faster.</p>
        <div className="hero-actions"><a className="btn btn-secondary" href="/resume.pdf" download>Get resume ↓</a></div>
      </div>
      <div className="orbital" aria-label="Rotating technology system visual">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
        <div className="core"><div><b>TRS</b><small>SYS / 01</small></div></div><span className="orbit-label">ENGINEERING SYSTEMS</span>
      </div>
    </section>
    <section className="metrics reveal" aria-label="Career highlights"><div className="metric"><span className="metric-number">1+</span><span>years of professional experience</span></div><div className="metric"><span className="metric-number">09.33</span><span>CGPA · CEG</span></div></section>
  </>
}

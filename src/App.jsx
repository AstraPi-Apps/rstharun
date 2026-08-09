import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import About from './components/About'
import Resume from './components/Resume'
import Footer from './components/Footer'

function Nav() {
  return <nav className="nav"><div className="nav-inner">
    <a className="brand" href="#top"><span className="brand-mark">T</span>THARUN.RS</a>
    <div className="nav-links"><a href="#about">Profile</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#resume">Contact</a></div>
  </div></nav>
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return <div className="site-shell" id="top"><Nav /><main className="page"><Hero /><About /><Projects /><Experience /><Education /><Resume /></main><Footer /></div>
}

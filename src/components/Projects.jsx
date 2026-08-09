import React, { useState } from 'react'

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'
const projects = [
  {
    code: '01 / PLATFORM', title: 'Ministerium', desc: 'CI/CD tool designed to build and deploy to single node linux machines',
    details: 'A self-hosted CI/CD tool designed to run on single node linux machines. Currently running on a Raspberry Pi 5. Ministerium is used to deploy this portfolio page, turning git updates into a lightweight, repeatable deployment workflow.',
    tags: ['Rust', 'GitHub', 'Cloudflare'], icons: [{ label: 'Rust', path: 'rust/rust-original.svg' }, { label: 'GitHub', path: 'github/github-original.svg' }, { label: 'Cloudflare', path: 'cloudflare/cloudflare-original.svg' }], url: 'https://github.com/tharun-rs/ministerium', glow: '#355d00'
  },
  {
    code: '02 / MOBILE+WEB', title: 'Chennai Hoopers', desc: 'A work-in-progress academy management platform with Android and web applications, backed by AWS infrastructure. Built for a Hula Hoop academy.',
    details: 'A single operational system for an academy: Android and web interfaces are paired with cloud infrastructure to keep day-to-day management simple as the academy grows.',
    tags: ['Kotlin', 'AWS', 'Android', 'React'], icons: [{ label: 'Kotlin', path: 'kotlin/kotlin-original.svg' }, { label: 'AWS', path: 'amazonwebservices/amazonwebservices-plain-wordmark.svg' }, { label: 'Android', path: 'android/android-original.svg' }, { label: 'React', path: 'react/react-original.svg' }], url: 'https://d8hdjyf0a203v.cloudfront.net/', glow: '#123f3b'
  },
  {
    code: '03 / RESEARCH', title: 'Medical Sharing', desc: 'A published research project for secure medical-record sharing using a blockchain architecture.',
    details: 'A research-led system for secure health-record exchange. The work combines distributed storage and blockchain concepts, and has been published as an IEEE paper.',
    tags: ['Hyperledger', 'IPFS', 'Kubernetes'], icons: [{ label: 'Hyperledger', url: 'https://avatars.githubusercontent.com/u/7657900' }, { label: 'IPFS', url: 'https://cdn.simpleicons.org/ipfs/65C2CB' }, { label: 'Kubernetes', path: 'kubernetes/kubernetes-plain.svg' }], url: 'https://ieeexplore.ieee.org/abstract/document/11393035', glow: '#303561'
  }
]

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped(value => !value)
  return <article className={`project ${flipped ? 'is-flipped' : ''}`} style={{ '--glow': project.glow }}>
    <div className="project-card">
      <div className="project-face project-front">
        <span className="project-code">{project.code}</span>
        <a className="project-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>↗</a>
        <div>
          <div className="project-tech-icons">{project.icons.map(icon => <img className="tech-icon" src={icon.url || `${iconBase}${icon.path}`} alt={icon.label} title={icon.label} key={icon.label} />)}</div>
          <h3>{project.title}</h3><p>{project.desc}</p>
          <div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          {project.title === 'Medical Sharing' && <span className="publication">IEEE PAPER PUBLISHED ↗</span>}
        </div>
        <button className="flip-control" type="button" onClick={toggle} aria-pressed={flipped}>Project details <span>↻</span></button>
      </div>
      <div className="project-face project-back">
        <span className="project-code">{project.code} / NOTES</span>
        <button className="project-arrow flip-back" type="button" onClick={toggle} aria-label={`Return to ${project.title} overview`}>↻</button>
        <div>
          <div className="eyebrow">Behind the build</div>
          <h3>{project.title}</h3><p>{project.details}</p>
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.title === 'Medical Sharing' ? 'Read the IEEE paper' : 'Open project'} <span>↗</span></a>
        </div>
      </div>
    </div>
  </article>
}

export default function Projects() { return <section className="section" id="projects"><div className="section-heading reveal"><div><div className="eyebrow">Selected output</div><h2 className="section-title">Projects with<br />a point of view.</h2></div><span className="section-index">[ 01 — 03 ]</span></div><div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.title} />)}</div></section> }

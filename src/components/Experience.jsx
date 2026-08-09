import React from 'react'
const experiences = [
  { date: 'AUG 2025 — NOW', company: 'Walmart Global Tech', role: 'Software Engineer II', duration: '1Y+', desc: 'Building Spring Boot services, data migration paths, and Cassandra/Kafka-backed systems.' },
  { date: 'JAN 2025 — JUN 2025', company: 'Walmart Global Tech', role: 'Graduate Intern', duration: '6M', desc: 'Worked across the Kubernetes platform, Go concurrency, and operational React dashboards.' },
  { date: 'JUN 2024 — AUG 2024', company: 'Arcesium', role: 'SDE Intern', duration: '2M', desc: 'Contributed frontend and backend components to an ETL tool with thorough JUnit coverage.' }
]
export default function Experience() { return <section className="section" id="experience"><div className="section-heading reveal"><div><div className="eyebrow">Operating history</div><h2 className="section-title">Experience</h2></div><span className="section-index">// 02</span></div><div className="experience-list">{experiences.map(item => <article className="experience reveal" key={item.date}><span className="experience-date">{item.date}</span><div><h3>{item.company}</h3><p>{item.desc}</p></div><div className="experience-meta"><span className="role">{item.role}</span><span className="duration">{item.duration}</span></div></article>)}</div></section> }

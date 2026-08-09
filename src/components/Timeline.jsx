import React, { useEffect, useRef } from 'react'

const events = [
  {date: '2021 - 2025', title: "B.E. Computer Science and Engineering, CEG", type: 'education', details: 'CGPA 9.33'},
  {date: 'May 2023 - May 2024', title: 'Research Intern', type: 'research', details: 'Transfer learning and adversarial robustness under Dr. Mary Anita Rajam V.'},
  {date: 'Jun 2024 - Aug 2024', title: 'SDE Intern — Arcesium', type: 'work', details: 'Contributed to frontend and backend components of an ETL tool.'},
  {date: 'Jan 2025 - Jun 2025', title: 'Grad Intern — Walmart Global Tech', type: 'work', details: 'Kubernetes platform, goroutines, React dashboards.'},
  {date: 'Aug 2025 - present', title: 'Software Engineer II — Walmart Global Tech', type: 'work', details: 'Spring Boot services, Cassandra, Kafka, data migration.'}
]

export default function Timeline(){
  const ref = useRef()

  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('in-view')
      })
    }, {threshold: 0.15})
    Array.from(ref.current.querySelectorAll('.tl-item')).forEach(el=> obs.observe(el))
    return ()=> obs.disconnect()
  },[])

  return (
    <section className="py-16" ref={ref}>
      <h2 className="text-3xl font-semibold mb-6">Timeline</h2>
      <div className="relative">
        <div className="tl-line absolute left-6 top-0 bottom-0 hidden md:block" />
        <div className="space-y-6 md:pl-16">
          {events.map((ev, i)=> (
            <div key={i} className="tl-item opacity-0 transform translate-y-6 transition duration-700 ease-out md:flex md:items-start">
              <div className="md:w-36">
                <div className="text-sm font-medium text-purple-300">{ev.date}</div>
              </div>
              <div className="flex-1 bg-white/3 p-4 rounded-lg border border-white/6 hover:scale-[1.01] transition-transform">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{ev.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mt-2">{ev.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

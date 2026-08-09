import React from 'react'

const projects = [
  {title: 'Academy Management App', tech: 'Kotlin • AWS • Android', desc: 'Student management app with Lambda + DynamoDB backend.', url: null},
  {title: 'Blockchain Medical Sharing', tech: 'Hyperledger • IPFS', desc: 'Fabric network, IPFS nodes and edge logic.', url: null},
  {title: 'Walmart Platform', tech: 'Spring • Cassandra • Kafka', desc: 'Services, data migration and Kafka pipelines.', url: null},
  {title: 'ETL Tool', tech: 'Node • React', desc: 'Frontend and backend components for ETL workflows.', url: null},
  {title: 'Research: Adversarial Robustness', tech: 'Python • ML', desc: 'Transfer learning and adversarial training research.', url: null},
  {title: 'Ministerium', tech: 'Node • Ministerium', desc: 'Ministerium project (CI/webhook tooling).', url: 'https://github.com/tharun-rs/ministerium'},
  {title: 'Chenna-Hoopers (WIP)', tech: 'AWS • Android', desc: 'Private company project with Android app and AWS stack (WIP).', url: 'https://d8hdjyf0a203v.cloudfront.net/'}
]

export default function WorkGrid(){
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Work & Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        <div className="md:col-span-2 bg-white/3 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow">
          <h3 className="text-xl font-bold mb-2">{projects[0].title}</h3>
          <p className="text-sm text-gray-300">{projects[0].desc}</p>
          <p className="mt-4 text-xs text-purple-300">{projects[0].tech}</p>
        </div>

        <div className="bg-white/2 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow">
          <h3 className="text-xl font-bold mb-2">{projects[1].title}</h3>
          <p className="text-sm text-gray-300">{projects[1].desc}</p>
          <p className="mt-4 text-xs text-purple-300">{projects[1].tech}</p>
        </div>

        <div className="bg-white/2 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow md:col-span-1 md:row-span-2">
          <h3 className="text-xl font-bold mb-2">{projects[2].title}</h3>
          <p className="text-sm text-gray-300">{projects[2].desc}</p>
          <p className="mt-4 text-xs text-purple-300">{projects[2].tech}</p>
        </div>

        <div className="bg-white/3 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow">
          <h3 className="text-xl font-bold mb-2">{projects[3].title}</h3>
          <p className="text-sm text-gray-300">{projects[3].desc}</p>
          <p className="mt-4 text-xs text-purple-300">{projects[3].tech}</p>
        </div>

        <div className="bg-white/2 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow">
          <h3 className="text-xl font-bold mb-2">{projects[4].title}</h3>
          <p className="text-sm text-gray-300">{projects[4].desc}</p>
          <p className="mt-4 text-xs text-purple-300">{projects[4].tech}</p>
        </div>

        {projects.slice(5).map((p,idx)=> (
          <div key={idx} className="bg-gradient-to-br from-zinc-900/40 to-purple-950/30 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:shadow-neon transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer" className="text-sm text-purple-300 hover:underline">View</a>
              ) : null}
            </div>
            <p className="text-sm text-gray-300">{p.desc}</p>
            <p className="mt-4 text-xs text-purple-300">{p.tech}</p>
          </div>
        ))}
      </div>

      <style>{`.hover\\:shadow-neon:hover{box-shadow:0 8px 30px rgba(124,58,237,0.18),0 2px 6px rgba(99,102,241,0.08);}`}</style>
    </section>
  )
}

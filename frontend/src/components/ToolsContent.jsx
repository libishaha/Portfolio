import React from 'react'

const TOOLS = [
  { name: 'Python', icon: '🐍', desc: 'Primary' },
  { name: 'FastAPI', icon: '⚡', desc: 'Backend' },
  { name: 'React', icon: '⚛', desc: 'Frontend' },
  { name: 'MySQL', icon: '🐬', desc: 'Database' },
  { name: 'MongoDB', icon: '🍃', desc: 'NoSQL' },
  { name: 'SQLAlchemy', icon: '🔗', desc: 'ORM' },
  { name: 'Git', icon: '🌿', desc: 'Version Ctrl' },
  { name: 'VS Code', icon: '💻', desc: 'Editor' },
  { name: 'Docker', icon: '🐳', desc: 'Containers' },
  { name: 'Redis', icon: '🔴', desc: 'Cache' },
  { name: 'Celery', icon: '🌱', desc: 'Tasks' },
  { name: 'Pydantic', icon: '✅', desc: 'Validation' },
]

export default function ToolsContent() {
  return (
    <div className="p-6">
      <div className="mb-4 px-3 py-2 border-2 border-black bg-white font-mono text-sm flex items-center gap-2">
        <span className="text-gray-500">📁</span>
        <span>C:\LIBISHA\tools</span>
        <span className="blink ml-1">█</span>
      </div>

      <div className="mb-5 border-2 border-black p-3 bg-gray-50">
        <p className="font-mono text-[10px] text-gray-700">
          &gt; Displaying installed packages... <span className="text-black font-bold">{TOOLS.length}</span> items found.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {TOOLS.map(tool => (
          <div key={tool.name} className="tool-icon-item group">
            <span className="text-3xl leading-none select-none">{tool.icon}</span>
            <span className="text-[7px] font-bold text-center leading-tight">{tool.name}</span>
            <span className="text-[6px] text-gray-400 group-hover:text-gray-300 text-center">{tool.desc}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-black pt-4">
        <h3 className="text-[9px] mb-3" style={{ fontFamily: "'Press Start 2P', cursive" }}>
          SKILL MATRIX
        </h3>
        {[
          { skill: 'Python / FastAPI', level: 92 },
          { skill: 'Database Design', level: 85 },
          { skill: 'Machine Learning', level: 78 },
          { skill: 'React / Frontend', level: 70 },
          { skill: 'DevOps / Cloud', level: 65 },
        ].map(({ skill, level }) => (
          <div key={skill} className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-[10px]">{skill}</span>
              <span className="font-mono text-[10px]">{level}%</span>
            </div>
            <div className="h-4 border-2 border-black bg-white">
              <div
                className="h-full bg-black transition-all"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

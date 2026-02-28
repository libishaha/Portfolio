import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Fallback projects for when backend is not connected
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: 'AI Chat System',
    description: 'A production-ready conversational AI backend using FastAPI, LangChain, and OpenAI. Supports context management, streaming responses, and multi-user sessions.',
    image_url: null,
    github_link: 'https://github.com/libisha',
    live_link: null,
  },
  {
    id: 2,
    title: 'Predictive Analytics API',
    description: 'REST API for serving ML models with real-time inference, batch processing, model versioning, and A/B testing capabilities built on FastAPI and SQLAlchemy.',
    image_url: null,
    github_link: 'https://github.com/libisha',
    live_link: null,
  },
  {
    id: 3,
    title: 'Data Pipeline Orchestrator',
    description: 'Automated ETL pipeline with scheduling, monitoring, and alerting. Processes millions of records daily using Python, Celery, Redis, and MySQL.',
    image_url: null,
    github_link: 'https://github.com/libisha',
    live_link: null,
  },
]

function ProjectCard({ project }) {
  return (
    <div className="pixel-card flex flex-col">
      {/* Image Preview */}
      <div className="border-b-3 border-b-2 border-black bg-gray-100 h-36 flex items-center justify-center overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        ) : (
          <div className="text-center">
            <div className="text-4xl mb-2">💻</div>
            <p className="text-[8px] font-mono text-gray-400">[ NO PREVIEW ]</p>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[10px] mb-2 font-bold" style={{ fontFamily: "'Press Start 2P', cursive", lineHeight: 1.6 }}>
          {project.title}
        </h3>
        <p className="text-xs font-mono text-gray-700 flex-1 leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn text-[8px]"
            >
              &gt; GitHub
            </a>
          )}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn text-[8px]"
            >
              &gt; Live
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function WorksContent() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/projects`)
        setProjects(res.data.length > 0 ? res.data : FALLBACK_PROJECTS)
      } catch (err) {
        console.warn('Backend not connected, using fallback projects')
        setProjects(FALLBACK_PROJECTS)
        setError('Using offline data — backend not connected')
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="p-6">
      <div className="mb-4 px-3 py-2 border-2 border-black bg-white font-mono text-sm flex items-center gap-2">
        <span className="text-gray-500">📁</span>
        <span>C:\LIBISHA\works</span>
        <span className="blink ml-1">█</span>
      </div>

      {error && (
        <div className="mb-4 px-3 py-2 border-2 border-black bg-yellow-50 font-mono text-[9px] text-yellow-800">
          ⚠ {error}
        </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center py-16 gap-4">
          <div className="text-2xl blink">⏳</div>
          <p className="font-mono text-sm text-gray-500">Loading projects...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}

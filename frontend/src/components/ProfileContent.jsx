import React from 'react'

export default function ProfileContent() {
  return (
    <div className="p-6">
      {/* Path display */}
      <div className="mb-4 px-3 py-2 border-2 border-black bg-white font-mono text-sm flex items-center gap-2">
        <span className="text-gray-500">📁</span>
        <span>C:\LIBISHA\profile</span>
        <span className="blink ml-1">█</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="pixel-card w-40 h-40 mx-auto md:mx-0 flex items-center justify-center bg-gray-100 overflow-hidden">
            {/* Placeholder pixel avatar */}
            <svg viewBox="0 0 64 64" width="140" height="140" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
              {/* Pixel art avatar */}
              <rect x="20" y="4" width="24" height="4" fill="#000"/>
              <rect x="16" y="8" width="32" height="4" fill="#000"/>
              <rect x="16" y="12" width="4" height="16" fill="#000"/>
              <rect x="44" y="12" width="4" height="16" fill="#000"/>
              <rect x="20" y="12" width="24" height="16" fill="#fff"/>
              {/* eyes */}
              <rect x="24" y="20" width="4" height="4" fill="#000"/>
              <rect x="36" y="20" width="4" height="4" fill="#000"/>
              {/* smile */}
              <rect x="24" y="28" width="4" height="2" fill="#000"/>
              <rect x="28" y="30" width="8" height="2" fill="#000"/>
              <rect x="36" y="28" width="4" height="2" fill="#000"/>
              {/* neck */}
              <rect x="28" y="28" width="8" height="4" fill="#fff"/>
              <rect x="24" y="32" width="16" height="4" fill="#000"/>
              {/* body */}
              <rect x="16" y="36" width="32" height="20" fill="#000"/>
              <rect x="20" y="36" width="24" height="20" fill="#fff"/>
              {/* collar */}
              <rect x="28" y="36" width="8" height="4" fill="#000"/>
              {/* arms */}
              <rect x="8" y="36" width="8" height="16" fill="#000"/>
              <rect x="48" y="36" width="8" height="16" fill="#000"/>
              {/* laptop hint */}
              <rect x="20" y="44" width="24" height="12" fill="#333"/>
              <rect x="22" y="46" width="20" height="8" fill="#666"/>
            </svg>
          </div>
          <p className="text-center text-[9px] font-mono mt-2 text-gray-500">libisha.jpg</p>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-1" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px', lineHeight: '1.6' }}>
            Libisha Sherani
          </h2>
          <div className="text-[10px] font-mono text-gray-600 mb-4 flex items-center gap-2">
            <span className="blink text-black">▶</span>
            Backend &amp; AI Developer
          </div>

          <div className="space-y-3 text-sm font-mono leading-relaxed border-l-4 border-black pl-4">
            <p>
              Hello! I'm a <strong>Backend &amp; AI Developer</strong> passionate about building 
              scalable systems and intelligent applications that solve real-world problems.
            </p>
            <p>
              I specialise in <strong>Python, FastAPI, and machine learning pipelines</strong> — 
              bridging the gap between raw data and production-ready AI systems.
            </p>
            <p>
              When I'm not writing code, I'm exploring new algorithms, contributing to open source, 
              or designing systems that are both elegant and efficient.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              { label: 'Focus', value: 'Backend & AI' },
              { label: 'Stack', value: 'Python, FastAPI' },
              { label: 'Database', value: 'MySQL, MongoDB' },
              { label: 'Status', value: 'Open to work' },
            ].map(({ label, value }) => (
              <div key={label} className="border-2 border-black p-2 bg-gray-50">
                <p className="text-[8px] text-gray-500 font-mono">{label}</p>
                <p className="text-[10px] font-mono font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

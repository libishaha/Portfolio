import React from 'react'
import { useSound } from '../hooks/useSound'

// Pixel close icon
function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="2" height="2" fill="white"/>
      <rect x="2" y="2" width="2" height="2" fill="white"/>
      <rect x="4" y="4" width="2" height="2" fill="white"/>
      <rect x="6" y="6" width="2" height="2" fill="white"/>
      <rect x="8" y="4" width="2" height="2" fill="white"/>
      <rect x="10" y="2" width="2" height="2" fill="white"/>
      <rect x="12" y="0" width="2" height="2" fill="white"/>
      <rect x="8" y="8" width="2" height="2" fill="white"/>
      <rect x="10" y="10" width="2" height="2" fill="white"/>
      <rect x="12" y="12" width="2" height="2" fill="white"/>
      <rect x="4" y="8" width="2" height="2" fill="white"/>
      <rect x="2" y="10" width="2" height="2" fill="white"/>
      <rect x="0" y="12" width="2" height="2" fill="white"/>
    </svg>
  )
}

export default function Window({ title, onClose, children, width = 'max-w-2xl', maxHeight = 'max-h-[80vh]' }) {
  const { playSound } = useSound()

  const handleClose = () => {
    playSound('close')
    onClose()
  }

  return (
    <div className="overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div
        className={`window-open bg-white border-4 border-black shadow-[8px_8px_0px_#000] w-full ${width} flex flex-col`}
        style={{ maxHeight: '90vh' }}
      >
        {/* Title Bar */}
        <div className="window-titlebar flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-white opacity-70">▶</span>
            <span className="truncate">{title}</span>
          </div>
          <div className="flex items-center gap-1">
            {/* Minimize / Maximize decorative buttons */}
            <div className="w-4 h-4 bg-gray-500 border border-gray-300 flex items-center justify-center" title="minimize">
              <span className="text-white text-[8px]">_</span>
            </div>
            <div className="w-4 h-4 bg-gray-500 border border-gray-300 flex items-center justify-center" title="maximize">
              <span className="text-white text-[8px]">□</span>
            </div>
            <button
              onClick={handleClose}
              className="w-5 h-5 bg-black border border-gray-400 flex items-center justify-center hover:bg-red-700 transition-colors"
              title="close"
              aria-label="Close window"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex-shrink-0 border-b-2 border-black bg-white px-3 py-1 flex gap-4">
          {['File', 'Edit', 'View', 'Help'].map(item => (
            <span
              key={item}
              className="text-[9px] font-mono text-black hover:bg-black hover:text-white px-1 py-0.5"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className={`flex-1 overflow-y-auto overflow-x-hidden ${maxHeight}`}>
          {children}
        </div>

        {/* Status bar */}
        <div className="flex-shrink-0 border-t-2 border-black bg-gray-100 px-3 py-1">
          <span className="text-[8px] text-gray-600" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Ready
          </span>
        </div>
      </div>
    </div>
  )
}

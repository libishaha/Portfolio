import React, { useState, useEffect } from 'react'
import { useSound } from './hooks/useSound'
import Window from './components/Window'
import DesktopIcon from './components/DesktopIcon'
import ProfileContent from './components/ProfileContent'
import WorksContent from './components/WorksContent'
import ToolsContent from './components/ToolsContent'
import ResumeContent from './components/ResumeContent'
import ContactContent from './components/ContactContent'

// Pixel SVG icons for dock
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="0"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>
  )
}

// Pixel art folder SVG
function FolderIcon() {
  return (
    <svg viewBox="0 0 32 28" width="42" height="36" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
      <rect x="0" y="6" width="32" height="22" fill="#000"/>
      <rect x="2" y="8" width="28" height="18" fill="#fff"/>
      <rect x="0" y="4" width="12" height="4" fill="#000"/>
      <rect x="2" y="6" width="10" height="2" fill="#fff"/>
      <rect x="4" y="10" width="24" height="14" fill="#f0f0f0"/>
    </svg>
  )
}
function ProfileIcon() {
  return (
    <svg viewBox="0 0 32 32" width="42" height="42" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
      <rect x="10" y="2" width="12" height="12" fill="#000"/>
      <rect x="12" y="4" width="8" height="8" fill="#fff"/>
      <rect x="14" y="6" width="2" height="2" fill="#000"/>
      <rect x="18" y="6" width="2" height="2" fill="#000"/>
      <rect x="14" y="10" width="6" height="2" fill="#000"/>
      <rect x="4" y="18" width="24" height="12" fill="#000"/>
      <rect x="6" y="20" width="20" height="8" fill="#fff"/>
      <rect x="14" y="20" width="4" height="8" fill="#000"/>
    </svg>
  )
}

const WINDOWS = {
  profile: { title: 'C:\\LIBISHA\\profile', component: ProfileContent, width: 'max-w-2xl' },
  works: { title: 'C:\\LIBISHA\\works', component: WorksContent, width: 'max-w-5xl' },
  tools: { title: 'C:\\LIBISHA\\tools', component: ToolsContent, width: 'max-w-3xl' },
  resume: { title: 'C:\\LIBISHA\\resume', component: ResumeContent, width: 'max-w-3xl' },
  contact: { title: 'C:\\LIBISHA\\contact', component: ContactContent, width: 'max-w-xl' },
}

export default function App() {
  const [openWindow, setOpenWindow] = useState(null)
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const { playSound } = useSound()

  const FULL_TEXT = "Hello, I'm Libisha Sherani"
  const SUB_TEXT = 'Backend & AI Developer'

  // Typing effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < FULL_TEXT.length) {
        setTypedText(FULL_TEXT.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  const openWindowFn = (key) => {
    playSound('open')
    setOpenWindow(key)
  }

  const closeWindow = () => {
    setOpenWindow(null)
  }

  const ActiveWindow = openWindow ? WINDOWS[openWindow] : null

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col select-none relative overflow-hidden">

      {/* Desktop grid background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main desktop area */}
      <div className="flex flex-1 relative z-10">

        {/* Left sidebar - desktop icons */}
        <div className="flex flex-col gap-4 p-4 pt-8 min-w-[90px]">
          <DesktopIcon icon={<ProfileIcon />} label="Profile" onClick={() => openWindowFn('profile')} />
          <DesktopIcon icon={<FolderIcon />} label="Works" onClick={() => openWindowFn('works')} />
          <DesktopIcon icon={<FolderIcon />} label="Tools" onClick={() => openWindowFn('tools')} />
          <DesktopIcon icon={<FolderIcon />} label="Resume" onClick={() => openWindowFn('resume')} />
          <DesktopIcon icon={<FolderIcon />} label="Contact" onClick={() => openWindowFn('contact')} />
        </div>

        {/* Center hero area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          {/* Main title card */}
          <div className="pixel-border bg-white p-6 md:p-10 text-center max-w-lg w-full relative">
            {/* Title bar decoration */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-black" />

            <div className="mt-2">
              <div
                className="text-base md:text-xl leading-loose mb-1"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: 'clamp(10px, 2vw, 18px)' }}
              >
                {typedText}
                {typedText.length < FULL_TEXT.length && <span className="blink">█</span>}
              </div>
              {typedText === FULL_TEXT && (
                <div className="mt-3">
                  <div
                    className="text-gray-600 border-l-4 border-black pl-3 text-left inline-block"
                    style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(9px, 1.5vw, 13px)' }}
                  >
                    &gt; {SUB_TEXT}
                    <span className="blink ml-1">_</span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { key: 'profile', label: '[ ABOUT ]' },
                { key: 'works', label: '[ WORKS ]' },
                { key: 'contact', label: '[ CONTACT ]' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  className="pixel-btn text-[8px] justify-center"
                  onClick={() => openWindowFn(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Decorative pixel art below hero */}
          <div className="mt-8 font-mono text-[10px] text-gray-400 text-center">
            <div>▼ ▼ ▼</div>
            <div className="mt-1">Click the folders to explore</div>
          </div>
        </div>

        {/* Right side - decorative pixel status icons */}
        <div className="hidden md:flex flex-col gap-3 p-4 pt-8 min-w-[90px] items-end">
          {['Today', 'MyPC', 'Clock', 'Wifi', 'Battery'].map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-1 w-16">
              <div className="w-10 h-10 border-2 border-black bg-white flex items-center justify-center text-lg shadow-[2px_2px_0_#000]">
                {['☀', '🖥', '🕐', '📶', '🔋'][i]}
              </div>
              <span className="text-[7px] font-mono text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Taskbar / Dock at bottom */}
      <div className="relative z-10 border-t-4 border-black bg-white px-4 py-2 flex items-center justify-between">
        {/* Start button */}
        <div className="flex items-center gap-3">
          <button
            className="pixel-btn text-[8px] flex items-center gap-2"
            onClick={() => openWindowFn('profile')}
          >
            ▶ START
          </button>

          {/* Active window indicator */}
          {openWindow && (
            <div className="hidden sm:flex border-2 border-black px-3 py-1 bg-gray-100 text-[9px] font-mono items-center gap-2 shadow-[2px_2px_0_#000]">
              <span className="blink text-black">▶</span>
              {WINDOWS[openWindow]?.title}
            </div>
          )}
        </div>

        {/* Social dock */}
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/libisha-sherani"
            target="_blank"
            rel="noopener noreferrer"
            className="dock-btn"
            title="LinkedIn"
            onClick={() => playSound('click')}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/libisha"
            target="_blank"
            rel="noopener noreferrer"
            className="dock-btn"
            title="GitHub"
            onClick={() => playSound('click')}
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:libisha@example.com"
            className="dock-btn"
            title="Email"
            onClick={() => playSound('click')}
          >
            <EmailIcon />
          </a>
        </div>

        {/* Clock */}
        <div className="hidden sm:flex items-center gap-2 border-l-2 border-black pl-3">
          <Clock />
        </div>
      </div>

      {/* Active window overlay */}
      {ActiveWindow && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          <Window
            title={ActiveWindow.title}
            onClose={closeWindow}
            width={ActiveWindow.width}
          >
            <ActiveWindow.component />
          </Window>
        </div>
      )}
    </div>
  )
}

function Clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <span className="font-mono text-[10px] text-black tabular-nums">
      {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
    </span>
  )
}

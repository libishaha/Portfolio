import React from 'react'
import { useSound } from '../hooks/useSound'

export default function DesktopIcon({ icon, label, onClick }) {
  const { playSound } = useSound()

  const handleClick = () => {
    playSound('click')
    onClick()
  }

  return (
    <button
      className="desktop-icon group clickable"
      onClick={handleClick}
      aria-label={`Open ${label}`}
    >
      <div className="text-3xl leading-none select-none">{icon}</div>
      <span className="text-center leading-tight">{label}</span>
    </button>
  )
}

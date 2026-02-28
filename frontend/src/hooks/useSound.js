// useSound.js — generates retro click sounds using Web Audio API
import { useCallback } from 'react'

export function useSound() {
  const playSound = useCallback((type = 'click') => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (!AudioContext) return
      const ctx = new AudioContext()

      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)

      if (type === 'click') {
        oscillator.type = 'square'
        oscillator.frequency.setValueAtTime(440, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.08)
        gainNode.gain.setValueAtTime(0.15, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.1)
      } else if (type === 'open') {
        oscillator.type = 'square'
        oscillator.frequency.setValueAtTime(300, ctx.currentTime)
        oscillator.frequency.setValueAtTime(500, ctx.currentTime + 0.05)
        oscillator.frequency.setValueAtTime(700, ctx.currentTime + 0.1)
        gainNode.gain.setValueAtTime(0.12, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.15)
      } else if (type === 'close') {
        oscillator.type = 'square'
        oscillator.frequency.setValueAtTime(600, ctx.currentTime)
        oscillator.frequency.setValueAtTime(400, ctx.currentTime + 0.05)
        oscillator.frequency.setValueAtTime(200, ctx.currentTime + 0.1)
        gainNode.gain.setValueAtTime(0.12, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.15)
      }
    } catch (e) {
      // Silently fail if audio not supported
    }
  }, [])

  return { playSound }
}

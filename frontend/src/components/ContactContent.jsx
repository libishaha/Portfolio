import React, { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post(`${API_BASE}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="p-6">
      <div className="mb-4 px-3 py-2 border-2 border-black bg-white font-mono text-sm flex items-center gap-2">
        <span className="text-gray-500">📁</span>
        <span>C:\LIBISHA\contact</span>
        <span className="blink ml-1">█</span>
      </div>

      <div className="mb-5 border-2 border-black p-3 bg-gray-50">
        <p className="font-mono text-[10px] text-gray-700">
          &gt; Send a message. I'll respond within 24 hours.
        </p>
      </div>

      {status === 'success' ? (
        <div className="border-2 border-black p-6 bg-white text-center">
          <div className="text-4xl mb-3">✅</div>
          <p className="text-[10px] font-bold mb-2" style={{ fontFamily: "'Press Start 2P', cursive" }}>
            MESSAGE SENT!
          </p>
          <p className="font-mono text-sm text-gray-600">I'll get back to you soon.</p>
          <button
            className="pixel-btn mt-4"
            onClick={() => setStatus(null)}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label className="block text-[9px] font-mono mb-1 text-gray-700">NAME</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="pixel-input"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label className="block text-[9px] font-mono mb-1 text-gray-700">EMAIL</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="pixel-input"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-[9px] font-mono mb-1 text-gray-700">MESSAGE</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="pixel-input resize-none"
              placeholder="What's on your mind..."
            />
          </div>

          {status === 'error' && (
            <div className="border-2 border-black bg-red-50 p-3 text-[9px] font-mono text-red-700">
              ✗ Failed to send message. Please try again or email directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="pixel-btn"
          >
            {status === 'sending' ? '⏳ Sending...' : '▶ Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}

import React from 'react'

// Replace this with your actual resume PDF URL
const RESUME_PDF_URL = '/resume.pdf'

export default function ResumeContent() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = RESUME_PDF_URL
    link.download = 'Libisha_Sherani_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-6 flex flex-col h-full">
      <div className="mb-4 px-3 py-2 border-2 border-black bg-white font-mono text-sm flex items-center gap-2">
        <span className="text-gray-500">📁</span>
        <span>C:\LIBISHA\resume</span>
        <span className="blink ml-1">█</span>
      </div>

      <div className="flex gap-3 mb-4">
        <button className="pixel-btn" onClick={handleDownload}>
          ⬇ Download PDF
        </button>
        <a
          href={RESUME_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn"
        >
          ↗ Open in Tab
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 border-3 border-2 border-black bg-gray-100 min-h-[400px]">
        <iframe
          src={RESUME_PDF_URL}
          title="Resume"
          className="w-full h-full min-h-[500px]"
          style={{ border: 'none' }}
        />
      </div>

      <p className="mt-2 text-[9px] font-mono text-gray-500 text-center">
        If the PDF doesn't load, use the Download button above.
      </p>
    </div>
  )
}

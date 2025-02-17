import { useState } from 'react'

export const NavigationAside = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="4xl:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open menu</span>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* FR Button - Now with left margin */}
      <a
        href="/fr"
        className="px-4 py-2 ml-4 text-sm font-semibold text-white bg-gray-900 rounded-lg shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        FR
      </a>
      
    </div>
  )
} 
import { useState } from 'react'
import { NavigationLogo } from './NavigationLogo'
import { NavigationMenu } from './NavigationMenu'
import { NavigationMobile } from './NavigationMobile'

const menuItems = [
  { label: 'Features', href: '/features' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3 transition-opacity duration-500 bg-white opacity-100 idc-header ui-max-w-child-7xl md:px-8 md:py-5">
    {/* <header className="fixed inset-x-0 top-0 z-50 bg-slate-600"> */}
      
      <nav className="" aria-label="Main navigation">
      {/* <nav className="px-6 mx-auto max-w-7xl lg:px-8" aria-label="Main navigation"> */}
        
        <div className="flex items-center justify-between">
        {/* <div className="flex items-center justify-between h-16"> */}
          
          <NavigationLogo />

          {/* Desktop Navigation */}
          <div className="hidden 4xl:flex 4xl:gap-x-8">
            <NavigationMenu items={menuItems} />
          </div>

          {/* FR Button and Mobile Menu Button */}
          <div className="flex items-center">
            
            {/* Mobile menu button - Now first */}
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
        </div>
      </nav>

      {/* Mobile menu */}
      <NavigationMobile isOpen={isOpen} onClose={() => setIsOpen(false)} items={menuItems} />
    </header>
  )
} 
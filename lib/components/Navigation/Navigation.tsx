import React, { useState } from 'react'
import { NavigationProps } from './types'
import { NavigationLogo } from './NavigationLogo'
import { NavigationMenu } from './NavigationMenu'
import { NavigationMobile } from './NavigationMobile'

const menuItems = [
  { label: 'Features', href: '/features' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
]

export const Navigation = ({ children }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <NavigationLogo src="/logo.svg" alt="Company Logo" />

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
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>

            {/* FR Button - Now with left margin */}
            <a
              href="/fr"
              className="ml-4 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
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
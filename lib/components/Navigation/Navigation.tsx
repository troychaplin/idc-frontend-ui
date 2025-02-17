import { useState, useEffect, useCallback } from 'react'
import { NavigationLogo } from './NavigationLogo'
import { NavigationMenu } from './NavigationMenu'
import { NavigationMobile } from './NavigationMobile'
import { NavigationAside } from './NavigationAside'

const menuItems = [
  { id: 1, label: 'Services', href: '#' },
  { id: 2, label: 'Process', href: '#' },
  { id: 3, label: 'Documents', href: '#' },
  { id: 4, label: 'Embassies', href: '#' },
  { id: 5, label: 'Resources', href: '#' },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header 
      className={`sticky top-0 z-50 w-full px-6 py-3 bg-white idc-header ui-max-w-child-6xl md:px-8 md:py-5 
        transform transition-all duration-300 ease-in-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
    >
      <nav className="" aria-label="Main navigation">        
        <div className="flex items-center justify-between">
          <NavigationLogo />
          <NavigationMenu items={menuItems} />
          <NavigationAside />
        </div>
      </nav>
      <NavigationMobile isOpen={isOpen} onClose={() => setIsOpen(false)} items={menuItems} />
    </header>
  )
}

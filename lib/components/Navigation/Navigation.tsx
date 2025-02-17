import { useState } from 'react'
import { NavigationLogo } from './NavigationLogo'
import { NavigationMenu } from './NavigationMenu'
import { NavigationMobile } from './NavigationMobile'
import { NavigationAside } from './NavigationAside'

const menuItems = [
  { label: 'Services', href: '#' },
  { label: 'Process', href: '#' },
  { label: 'Documents', href: '#' },
  { label: 'Embassies', href: '#' },
  { label: 'Resources', href: '#' },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3 transition-opacity duration-500 bg-white opacity-100 idc-header ui-max-w-child-6xl md:px-8 md:py-5">
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

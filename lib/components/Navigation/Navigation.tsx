import { useState, useEffect, useCallback } from 'react'
import { NavigationMobile } from './NavigationMobile'
import { NavigationDesktop } from './NavigationDesktop'
import { NavigationLogo } from './NavigationLogo'
import { NavigationMenu } from './NavigationMenu'
import { NavigationAside } from './NavigationAside'
import { NavigationContext } from './context'

interface NavigationProps {
  children?: React.ReactNode
}

const NavigationContainer = ({ children }: NavigationProps) => {
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
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      <header 
        className={`sticky top-0 z-[50] w-full px-6 py-3 md:px-8 md:py-5 h-[62px] 4xl:h-[90px] bg-white idc-header ui-max-w-child-6xl
          transform transition-all duration-300 ease-in-out ${
            visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
      >
        {children}
      </header>
    </NavigationContext.Provider>
  )
}

NavigationContainer.displayName = 'Navigation'

export const Navigation = Object.assign(NavigationContainer, {
  Desktop: NavigationDesktop,
  Mobile: NavigationMobile,
  Logo: NavigationLogo,
  Menu: NavigationMenu,
  Aside: NavigationAside,
})

export type { NavigationProps }
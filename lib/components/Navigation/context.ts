import { createContext, useContext } from 'react'

interface NavigationContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  siteUrl: string
}

const defaultContext: NavigationContextType = {
  isOpen: false,
  setIsOpen: () => {},
  siteUrl: '/'
}

export const NavigationContext = createContext<NavigationContextType>(defaultContext)

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  return context
} 
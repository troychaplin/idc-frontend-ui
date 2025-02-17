export interface NavigationLogoProps {
  src: string
  alt: string
}

export interface NavigationMenuProps {
  items: {
    id: number
    label: string
    href: string
  }[]
}

export interface NavigationMobileProps {
  isOpen: boolean
  onClose: () => void
  items: {
    id: number
    label: string
    href: string
  }[]
} 
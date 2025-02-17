export interface NavigationProps {
  children?: React.ReactNode
}

export interface NavigationLogoProps {
  src: string
  alt: string
}

export interface NavigationMenuProps {
  items: {
    label: string
    href: string
  }[]
}

export interface NavigationMobileProps {
  isOpen: boolean
  onClose: () => void
  items: {
    label: string
    href: string
  }[]
} 
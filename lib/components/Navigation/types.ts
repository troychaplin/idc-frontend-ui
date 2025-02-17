export interface NavigationLogoProps {
  siteUrl: string
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

export interface NavigationAsideProps {
  isOpen: boolean
  onToggle: () => void
} 
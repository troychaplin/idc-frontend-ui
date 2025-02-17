export interface NavigationDesktopProps {
  children?: React.ReactNode
}

export const NavigationDesktop = ({ children }: NavigationDesktopProps) => {
  return (
    <nav className="relative" aria-label="Main navigation">        
      <div className="flex items-center justify-between">
        {children}
      </div>
    </nav>
  )
}

NavigationDesktop.displayName = 'Navigation.Desktop'
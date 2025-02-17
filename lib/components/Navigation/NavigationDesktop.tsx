export interface NavigationDesktopProps {
  children?: React.ReactNode
}

export const NavigationDesktop = ({ children }: NavigationDesktopProps) => {
  return (
    <nav className="relative px-6 py-3 md:px-8 md:py-5 h-[62px] 4xl:h-[90px]" aria-label="Main navigation">        
      <div className="flex items-center justify-between">
        {children}
      </div>
    </nav>
  )
}

NavigationDesktop.displayName = 'Navigation.Desktop'
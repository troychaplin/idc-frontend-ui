import { NavigationLogoProps } from './types'

export const NavigationLogo = ({ src, alt }: NavigationLogoProps) => {
  return (
    <a href="/" className="flex items-center">
      <img className="w-auto h-8" src={src} alt={alt} />
    </a>
  )
} 
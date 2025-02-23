import { iconNames } from '../../utils/iconList'

export interface CardIconProps {
  iconName: string
  iconPath?: string // Optional custom path to icons directory
}

export const CardIcon = ({ iconName, iconPath }: CardIconProps) => {
  // Default path as fallback
  const defaultIconPath = '/assets/icons'
  
  const getIconPath = (name: string): string => {
    const iconFileName = iconNames[name as keyof typeof iconNames] || name
    
    // If custom iconPath is provided, use it directly without window.location.origin
    if (iconPath) {
      return `${iconPath}/${iconFileName}.svg`
    }
    
    // Otherwise use default path with origin
    return `${window.location.origin}${defaultIconPath}/${iconFileName}.svg`
  }

  // Convert rgb(40 98 161) to filter
  const blueIconStyle = {
    filter: 'invert(36%) sepia(64%) saturate(638%) hue-rotate(182deg) brightness(92%) contrast(87%)'
  }

  return (
    <figure className="w-12 h-12 mb-4 md:mb-6">
      <img 
        src={getIconPath(iconName)}
        alt={`Icon representing ${iconName.replace(/-/g, ' ')}`}
        className="w-full h-full"
        style={blueIconStyle}
      />
    </figure>
  )
}

CardIcon.displayName = 'Card.Icon'

import { Icon } from '../Icon/Icon'

export interface CardIconProps {
  iconName: string
}

export const CardIcon = ({ iconName }: CardIconProps) => {
  return (
    <figure className="mb-4 md:mb-6">
      <Icon 
        name={iconName}
        size="lg"
        color="rgb(40 98 161)"
        align="left"
      />
    </figure>
  )
}

CardIcon.displayName = 'Card.Icon'

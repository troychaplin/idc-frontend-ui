import { uiMaxWidth, uiRoundedCorners, uiDropShadow } from '../../utils/propClasses'

type MaxWidthKeys = keyof typeof uiMaxWidth
type RoundedKeys = keyof typeof uiRoundedCorners
type ShadowKeys = keyof typeof uiDropShadow

export interface CardProps {
  children?: React.ReactNode
  maxWidth?: MaxWidthKeys
  rounded?: RoundedKeys
  shadow?: ShadowKeys
  borderWidth?: number
  borderColor?: string
}

export const Card = ({ children, maxWidth, rounded, shadow, borderWidth, borderColor }: CardProps) => {
  const cardWidth = maxWidth ? uiMaxWidth[maxWidth] : ''
  const cardRounded = rounded ? uiRoundedCorners[rounded] : ''
  const cardShadow = shadow ? uiDropShadow[shadow] : ''

  // Inline style object to handle border color
  const style = {
    borderWidth: borderWidth ? borderWidth : '',
    borderColor: borderWidth && borderColor ? borderColor : 'transparent',
  }

  return (
    <div className={`ui-card bg-white ${cardWidth} ${cardRounded} ${cardShadow}`} style={style}>
      {children}
    </div>
  )
}

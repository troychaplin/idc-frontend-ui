import { idcBlueBg } from '../../utils/colorClasses'

type BgColorKeys = keyof typeof idcBlueBg

export interface ButtonProps {
  color?: 'blue' | 'orange'
  colorStrength?: BgColorKeys
  textColor?: 'light' | 'dark'
  label: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  isOutline?: boolean
  onClick?: () => void
}

export const Button = ({
  color = 'blue',
  colorStrength = 500,
  textColor = 'light',
  label,
  type = 'button',
  size = 'md',
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyles = isOutline
    ? `idc-button--outline border-idc-${color}-${String(colorStrength)}`
    : `idc-button--solid bg-idc-${color}-${String(colorStrength)}`

  const textStyles = textColor === 'light' ? 'text-white' : 'text-black'

  return (
    <button
      type={type}
      className={['idc-button', `idc-button--${size}`, buttonStyles, textStyles].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

export interface ButtonProps {
  color?: string
  textColor?: string
  label: string
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  isOutline?: boolean
  onClick?: () => void
}

export const Button = ({
  color = '#3678B9',
  textColor = '#ffffff',
  label,
  type = 'button',
  size = 'md',
  isOutline = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = isOutline ? 'idc-button--outline' : 'idc-button--solid'

  // Inline style object to handle both background and text color
  const style = {
    color: textColor,
    backgroundColor: isOutline ? 'transparent' : color,
    borderColor: isOutline ? color : 'transparent',
  }

  return (
    <button
      type={type}
      className={['idc-button', `idc-button--${size}`, buttonStyle].join(' ')}
      style={style}
      {...props}
    >
      {label}
    </button>
  )
}

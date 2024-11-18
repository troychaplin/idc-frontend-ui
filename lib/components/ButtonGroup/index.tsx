export interface ButtonGroupProps {
  children?: React.ReactNode
  isCenter?: boolean
}

export const ButtonGroup = ({ children, isCenter = false }: ButtonGroupProps) => {
  const centerButtons = isCenter ? 'justify-center' : 'justify-start'

  return <div className={`ui-buttongroup flex ${centerButtons} gap-4`}>{children}</div>
}

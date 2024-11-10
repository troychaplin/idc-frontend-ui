import { uiGridColumns } from '../../utils/tailwindProps'

type GridColumnsKeys = keyof typeof uiGridColumns

export interface CardGroupProps {
  children?: React.ReactNode
  cols?: GridColumnsKeys
  gap?: number
}

export const CardGroup = ({ children, cols = 3, gap = 20 }: CardGroupProps) => {
  // Inline style object to handle grid gap
  const style = {
    gridGap: gap ? gap : '',
  }

  return (
    <div className={`ui-cardgroup grid ${uiGridColumns[cols]}`} style={style}>
      {children}
    </div>
  )
}

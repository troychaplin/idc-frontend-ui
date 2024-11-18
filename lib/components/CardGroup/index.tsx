import { uiGridColumns } from '../../utils/propClasses'

type GridColumnsKeys = keyof typeof uiGridColumns

export interface CardGroupProps {
  children?: React.ReactNode
  cols?: GridColumnsKeys
}

export const CardGroup = ({ children, cols = 3 }: CardGroupProps) => {
  return <div className={`ui-cardgroup grid ${uiGridColumns[cols]} gap-6`}>{children}</div>
}

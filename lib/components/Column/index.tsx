import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses'
import { ColumnContent } from './content'

type MaxWidthKeys = keyof typeof uiMaxWidth
type ColumnKeys = keyof typeof uiGridColumns

export interface ColumnProps {
  children?: React.ReactNode
  maxWidth?: MaxWidthKeys
  cols?: ColumnKeys
  gap?: number
}

export const ColumnContainer = ({ children, maxWidth = '5xl', cols = 2, gap = 25 }: ColumnProps) => {
  const style = {
    gridGap: gap ? gap : '',
  }

  return (
    <div
      className={`ui-column ui-no-max-width ${uiMaxWidth[maxWidth]} mx-auto grid ${uiGridColumns[cols]}`}
      style={style}
    >
      {children}
    </div>
  )
}

export const Column = Object.assign(ColumnContainer, {
  Content: ColumnContent,
})

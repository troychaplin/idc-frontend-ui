import React from 'react'
import { uiMaxWidth } from '../../utils/tailwindProps'

type MaxWidthKeys = keyof typeof uiMaxWidth

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  maxWidth?: MaxWidthKeys
}

export const Section = ({ children, as = 'section', maxWidth = '5xl' }: SectionProps) => {
  const SectionComponent = as
  const maxWidthChildren = maxWidth ? `ui-max-width-${maxWidth}` : ''

  return <SectionComponent className={`ui-main ${maxWidthChildren}`}>{children}</SectionComponent>
}

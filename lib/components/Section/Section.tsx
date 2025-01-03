import React from 'react'
import { uiMaxWidth, uiBgTypes } from '../../utils/propClasses'

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth
type BgTypeKeys = keyof typeof uiBgTypes

export interface SectionProps {
  children?: React.ReactNode
  maxWidth?: MaxWidthKeys
  bgType?: BgTypeKeys
}

export const Section = ({ children, maxWidth = '5xl', bgType = 'white' }: SectionProps) => {
  return (
    <section className={`ui-section ui-section--${bgType} ${uiBgTypes[bgType]} w-screen ml-offset-center`}>
      <div className={`ui-max-w-child-${maxWidth} px-0 md:px-8 ui-prose-first-last`}>{children}</div>
    </section>
  )
}

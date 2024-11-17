import React from 'react'
import { uiMaxWidth } from '../../utils/propClasses'

type MaxWidthKeys = keyof typeof uiMaxWidth

export interface SectionProps {
  children?: React.ReactNode
  as?: 'section' | 'div'
  maxWidth?: MaxWidthKeys
  notConstrained?: boolean
  isBlue?: boolean
}

export const Section = ({ children, as = 'section', maxWidth = '5xl', notConstrained, isBlue }: SectionProps) => {
  const SectionComponent = as
  const maxWidthClass = notConstrained ? `ui-max-w-child-${maxWidth}` : `ui-max-w-${maxWidth}`
  const mainWrapperClass = notConstrained
    ? `ui-section ui-layout w-screen ml-offset-center px-6 md:px-8`
    : `ui-section ui-layout box-border relative w-full ${maxWidthClass}`
  const hasBlueBg = isBlue ? 'bg-idc-blue-100 py-10' : ''

  return (
    <SectionComponent className={`${mainWrapperClass} ${hasBlueBg}`}>
      {notConstrained ? <div className={maxWidthClass}>{children}</div> : <>{children}</>}
    </SectionComponent>
  )
}

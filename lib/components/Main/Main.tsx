import React from 'react'
import { uiMaxWidth } from '../../utils/propClasses'

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth

export interface MainProps {
  children: React.ReactNode
  maxWidth?: MaxWidthKeys
  noProse?: boolean
}

export const Main = ({ children, noProse, maxWidth = '4xl' }: MainProps) => {
  const proseClass = noProse ? '' : 'prose md:prose-lg max-w-none'

  return (
    <main className={`ui-main flex justify-center font-open ${proseClass}`}>
      <section className={`ui-section ui-section--primary ui-max-w-${maxWidth} box-border relative w-full`}>
        {children}
      </section>
    </main>
  )
}

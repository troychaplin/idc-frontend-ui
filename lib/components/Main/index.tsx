import React from 'react'

export interface MainProps {
  children: React.ReactNode
  noProse?: boolean
}

export const Main = ({ children, noProse }: MainProps) => {
  const proseClass = noProse ? '' : 'prose md:prose-lg max-w-none'

  return <main className={`ui-main flex justify-center font-open ${proseClass}`}>{children}</main>
}

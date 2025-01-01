import React from 'react'

export interface NavigationProps {
  children: React.ReactNode
}

export const Navigation = ({ children }: NavigationProps) => {
  return (
    <div className="items-center flex-none hidden md:flex">
      <ul className="flex gap-3 text-[15px] text-black">{children}</ul>
    </div>
  )
}

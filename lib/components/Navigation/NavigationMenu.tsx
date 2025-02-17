import React from 'react'
import { NavigationMenuProps } from './types'

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
  return (
    <>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </>
  )
} 
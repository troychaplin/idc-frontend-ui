import React from 'react'
import { NavigationLogoProps } from './types'

export const NavigationLogo = ({ src, alt }: NavigationLogoProps) => {
  return (
    <a href="/" className="flex items-center">
      <img className="h-8 w-auto" src={src} alt={alt} />
    </a>
  )
} 
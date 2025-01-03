import React from 'react'
import { HeroContent } from './HeroContent'
import { HeroMedia } from './HeroMedia'
import { uiGridColumns } from '../../utils/propClasses'

export interface HeroProps {
  children?: React.ReactNode
  cols?: 1 | 2 | '60/40'
}

export const HeroContainer = ({ children, cols = 1 }: HeroProps) => {
  return <div className={`grid ${uiGridColumns[cols]} gap-6`}>{children}</div>
}

export const Hero = Object.assign(HeroContainer, {
  Content: HeroContent,
  Media: HeroMedia,
})

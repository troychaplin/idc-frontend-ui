import React, { useEffect, useState } from 'react'
import { iconNames } from '../../utils/iconList'

export interface CardFigureProps {
  children?: React.ReactNode
  iconName?: string
}

export const CardFigure = ({ children, iconName }: CardFigureProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const type = iconName ? 'svg' : 'img'

  // Map display names to file names
  const getIconFileName = (name: string): string => {
    // First try exact match from iconNames
    const exactMatch = iconNames[name as keyof typeof iconNames]
    if (exactMatch) return exactMatch
    
    // If no exact match, try to find a close match
    const normalizedName = name.toLowerCase().replace(/[-_\s]/g, '-')
    const values = Object.values(iconNames)
    return values.find(v => v.includes(normalizedName)) || name
  }

  useEffect(() => {
    if (iconName) {
      const fileName = getIconFileName(iconName)
      const fetchSVG = async () => {
        try {
          const baseUrl = window.location.origin
          const response = await fetch(`${baseUrl}/assets/icons/${fileName}.svg`)
          if (response.ok) {
            const svgText = await response.text()
            setSvgContent(svgText)
          } else {
            console.error(`Error fetching SVG: ${response.statusText}`)
          }
        } catch (error) {
          console.error('Error fetching SVG:', error)
        }
      }
      fetchSVG()
    }
  }, [iconName])

  return (
    <figure className={`idc-card-figure-${type} mb-4 md:mb-6`}>
      {svgContent ? (
        <span dangerouslySetInnerHTML={{ __html: svgContent }} />
      ) : (
        children || <div>No icon available</div>
      )}
    </figure>
  )
}

CardFigure.displayName = 'Card.Figure'

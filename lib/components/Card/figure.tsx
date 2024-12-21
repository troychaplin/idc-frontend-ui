import React, { useEffect, useState } from 'react'
import { iconNames } from '../../utils/iconList'

type IconNamesKeys = keyof typeof iconNames

export interface CardFigureProps {
  children?: React.ReactNode
  iconName?: IconNamesKeys
}

export const CardFigure = ({ children, iconName }: CardFigureProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const type = iconName ? 'svg' : 'image'

  useEffect(() => {
    if (iconName && iconNames[iconName]) {
      const fetchSVG = async () => {
        try {
          const response = await fetch(`/assets/icons/${iconNames[iconName]}.svg`)
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
